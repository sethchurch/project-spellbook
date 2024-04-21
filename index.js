/* eslint-disable no-console */
import 'dotenv/config';
import * as fs from 'fs';
import chalk from 'chalk';
import closeWithGrace from 'close-with-grace';
import sourceMapSupport from 'source-map-support';

sourceMapSupport.install({
  retrieveSourceMap(source) {
    // get source file without the `file://` prefix or `?t=...` suffix
    const match = source.match(/^file:\/\/(.*)\?t=[.\d]+$/);
    if (match) {
      return {
        url: source,
        map: fs.readFileSync(`${match[1]}.map`, 'utf8'),
      };
    }
    return null;
  },
});

closeWithGrace(async ({ err }) => {
  if (err) {
    console.error(chalk.red(err));
    console.error(chalk.red(err.stack));
    process.exit(1);
  }
});

// TODO add mocks with e2e tests

// if (process.env.MOCKS === 'true') {
//   await import('./tests/mocks/index.js');
// }

if (process.env.NODE_ENV === 'production') {
  await import('./server-build/index.js');
} else {
  await import('./server/index.js');
}
