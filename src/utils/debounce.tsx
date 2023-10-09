const debounce = (fn: Function, delay: number) => {
  let timeoutID: any = null;
  return function timeout(...args: any[]) {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export { debounce };
