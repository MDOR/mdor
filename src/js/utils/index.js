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

const documentBody = document.body;
const { documentElement } = document;

const getDocumentHeight = () =>
  Math.max(
    documentBody.scrollHeight,
    documentBody.offsetHeight,
    documentElement.clientHeight,
    documentElement.scrollHeight,
    documentElement.offsetHeight
  );

const getWindowHeight = () =>
  window.innerHeight ||
  documentElement.clientHeight ||
  document.getElementsByTagName('body')[0].clientHeight;

export const scrollTo = dest => {
  const documentHeight = getDocumentHeight();
  const windowHeight = getWindowHeight();
  const destinationOffset = typeof dest === 'number' ? dest : dest.offsetTop;
  const destinationOffsetToScroll =
    documentHeight - destinationOffset < windowHeight
      ? documentHeight - windowHeight
      : destinationOffset;

  try {
    window.scroll({
      top: destinationOffsetToScroll,
      behavior: 'smooth'
    });
  } catch (e) {
    window.scroll(0, destinationOffsetToScroll);
  }
};
