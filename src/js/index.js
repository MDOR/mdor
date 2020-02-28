import './polyfill/array-from';
import './polyfill/classlist';
import 'promise-polyfill/src/polyfill';
import Typed from 'typed.js';
import '../style/index.scss';

const intro = document.querySelector('.intro');

const typedConfig = {
  typeSpeed: 100,
  backSpeed: 40,
  loop: false,
  showCursor: false
};

function authorTitle() {
  // eslint-disable-next-line no-new
  new Typed('.author-title > .title', {
    ...typedConfig,
    strings: ['', 'A Software Engineer'],
    onComplete() {
      intro.classList.add('intro-ready');
      [].map
        .call(document.querySelectorAll('.intro-paragraph'), el => el)
        .forEach(el => {
          /* eslint-disable  no-param-reassign */
          el.style.opacity = 0;
          el.style.transition = ' 0.5s opacity ease';
          el.style.opacity = 1;
          /* eslint-enable  no-param-reassign */
        });
    }
  });
}

function authorName() {
  // eslint-disable-next-line no-new
  new Typed('.author-name > .name', {
    ...typedConfig,
    strings: ['', 'Marco Domínguez'],
    onBegin() {
      intro.classList.add('intro-before-ready');
    },
    onComplete() {
      authorTitle();
    }
  });
}

setTimeout(authorName, 10);
