/* eslint-disable no-case-declarations */
export const fuzzyParseJSON = <TObject extends object = {}>(text: string): TObject | undefined => {
  const startBrace = text.indexOf('{');
  if (startBrace >= 0) {
    // Find substring
    const objText = text.substring(startBrace);
    const nesting = ['}'];
    let cleaned = '{';
    let inString = false;
    for (let i = 1; i < objText.length && nesting.length > 0; i++) {
      let ch = objText[i];
      if (inString) {
        cleaned += ch;
        if (ch === '\\') {
          // Skip escape char
          i++;
          if (i < objText.length) {
            cleaned += objText[i];
          } else {
            // Malformed
            return undefined;
          }
        } else if (ch === '"') {
          inString = false;
        }
      } else {
        switch (ch) {
          case '"':
            inString = true;
            break;
          case '{':
            nesting.push('}');
            break;
          case '[':
            nesting.push(']');
            break;
          case '}':
            const closeObject = nesting.pop();
            if (closeObject !== '}') {
              // Malformed
              return undefined;
            }
            break;
          case ']':
            const closeArray = nesting.pop();
            if (closeArray !== ']') {
              // Malformed
              return undefined;
            }
            break;
          case '<':
            // The model sometimes fails to wrap <some template> with double quotes
            ch = `"<`;
            break;
          case '>':
            // Catch the tail end of a template param
            ch = `>"`;
            break;
          default:
            // Ignore other chars
            break;
        }

        cleaned += ch;
      }
    }

    // Is the object incomplete?
    if (nesting.length > 0) {
      // Lets close it and try to parse anyway
      cleaned += nesting.reverse().join('');
    }

    // Parse cleaned up object
    try {
      const obj = JSON.parse(cleaned) as TObject;
      return Object.keys(obj).length > 0 ? obj : undefined;
    } catch (err) {
      return undefined;
    }
  } else {
    return undefined;
  }
};
