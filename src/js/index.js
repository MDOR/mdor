import './polyfill/array-from';
import './polyfill/classlist';
import 'promise-polyfill/src/polyfill';
import Typed from 'typed.js';
import { debouncer } from './utils';
import '../style/index.scss';

const intro = document.querySelector('.intro');
const skills = document.querySelector('.skills');

const typedConfig = {
  typeSpeed: 100,
  backSpeed: 40,
  loop: false,
  showCursor: false
};

function setWindowSize() {
  intro.style.height = `${Number(window.innerHeight || 0)}px`;
}

window.addEventListener('DOMContentLoaded', setWindowSize);
window.addEventListener('resize', debouncer(setWindowSize));

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
    strings: ['', 'Marco Antonio Domínguez Rueda'],
    onBegin() {
      intro.classList.add('intro-before-ready');
    },
    onComplete() {
      authorTitle();
    }
  });
}

setTimeout(authorName, 50);
const fragment = document.createDocumentFragment();
[
  'angular.svg',
  'bitbucket.svg',
  'autoprefixer.svg',
  'git.svg',
  'eslint.svg',
  'html-5.svg',
  'node.svg',
  'redux-saga.svg',
  'bootstrap.svg',
  'github.svg',
  'imagemin.svg',
  'postcss.svg',
  'redux.svg',
  'css-3.svg',
  'gitlab.svg',
  'immutable.svg',
  'pug.svg',
  'typescript.svg',
  'docker.svg',
  'graphql.svg',
  'javascript.svg',
  'react-router.svg',
  'express.svg',
  'nodemon.svg',
  'grunt.svg',
  'jquery.svg',
  'react.svg',
  'browserify.svg',
  'prettier.svg',
  'puppeteer.svg',
  'foundation.svg',
  'gulp.svg',
  'mysql.svg',
  'sass.svg',
  'less.svg',
  'jest.svg',
  'babel.svg',
  'yarn.svg',
  'npm.svg',
  'bower.svg',
  'webpack.svg',
  'storybook.svg',
  'reactivex.svg'
].forEach(skill => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  const alt = skill
    .replace('.svg', '')
    .split('-')
    .map(st => st.charAt(0).toUpperCase() + st.slice(1))
    .join(' ');
  img.src = `img/technology/${skill}`;
  img.className = 'responsive-img';
  img.setAttribute('role', 'presentation');
  img.setAttribute('title', alt);
  img.loading = 'lazy';
  li.appendChild(img);
  fragment.appendChild(li);
});

skills.appendChild(fragment);

document.querySelector('.footer-date').innerText = new Date().getFullYear();

/* header handlers */
const header = document.querySelector('header');

const getScroll = () => {
  const doc = document.documentElement;
  return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
};

function headerScrollEvent() {
  const top = getScroll();

  if (top > 0) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}

window.addEventListener('DOMContentLoaded', headerScrollEvent);
document.addEventListener('scroll', debouncer(headerScrollEvent));

let hidden;
let visibilityChange;

if (typeof document.hidden !== 'undefined') {
  hidden = 'hidden';
  visibilityChange = 'visibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
  hidden = 'msHidden';
  visibilityChange = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden';
  visibilityChange = 'webkitvisibilitychange';
}

if (hidden) {
  const { documentElement } = document;
  const offlineContainer = document.querySelector('.presentation-offine');

  document.addEventListener(visibilityChange, function visibilityHandler() {
    if (document[hidden]) {
      documentElement.style.overflow = 'hidden';
      offlineContainer.style.visibility = 'visible';
      return;
    }

    setTimeout(() => {
      documentElement.style.overflow = 'auto';
      offlineContainer.style.visibility = 'hidden';
    }, 1500);
  });
}
