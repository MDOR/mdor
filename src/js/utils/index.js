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

export const scrollTo = (dest, duration = 300, cb) => {
  const start = window.pageYOffset;
  const startTime = new Date().getTime();
  const isCallbackAFuction = typeof cb === 'function';

  const documentHeight = getDocumentHeight();
  const windowHeight = getWindowHeight();
  const destinationOffset = typeof dest === 'number' ? dest : dest.offsetTop;
  const destinationOffsetToScroll =
    documentHeight - destinationOffset < windowHeight
      ? documentHeight - windowHeight
      : destinationOffset;
  const destinationOffsetToScrollRounded = Math.round(
    destinationOffsetToScroll
  );

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScrollRounded);
    return isCallbackAFuction && cb();
  }

  let animationFrame;
  function cancelScroll() {
    cancelAnimationFrame(animationFrame);
  }

  function scroll() {
    const now = new Date().getTime();
    const time = Math.min(1, (now - startTime) / duration);
    window.scroll(
      0,
      Math.ceil(time * (destinationOffsetToScrollRounded - start) + start)
    );

    if (window.pageYOffset === destinationOffsetToScrollRounded) {
      window.removeEventListener('resize', cancelScroll);
      return isCallbackAFuction && cb();
    }

    animationFrame = requestAnimationFrame(scroll);
  }

  scroll();
  window.addEventListener('resize', cancelScroll);
};
