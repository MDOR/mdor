export const debouncer = (fn, time = 30) => {
  if (typeof fn !== 'function')
    throw new TypeError('The first argument should be a function');

  let timeout;

  return function debouncedFn(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      fn(...args);
    }, time);
  };
};
