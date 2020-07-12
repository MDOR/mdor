import './polyfill/array-from';
import './polyfill/classlist';
import 'promise-polyfill/src/polyfill';
import Typed from 'typed.js';
import { debouncer, scrollTo } from './utils';
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
    strings: ['', 'Software Engineer'],
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
      document.body.className = '';
    }
  });
}

function authorName() {
  // eslint-disable-next-line no-new
  new Typed('.author-name > .name', {
    ...typedConfig,
    strings: ['', 'Marco Antonio Domínguez'],
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
  'angular',
  'bitbucket',
  'autoprefixer',
  'git',
  'eslint',
  'html-5',
  'node',
  'redux-saga',
  'bootstrap',
  'github',
  'imagemin',
  'postcss',
  'redux',
  'css-3',
  'gitlab',
  'immutable',
  'pug',
  'typescript',
  'docker',
  'graphql',
  'javascript',
  'react-router',
  'express',
  'nodemon',
  'grunt',
  'jquery',
  'react',
  'browserify',
  'prettier',
  'puppeteer',
  'foundation',
  'gulp',
  'mysql',
  'sass',
  'less',
  'jest',
  'babel',
  'yarn',
  'npm',
  'bower',
  'webpack',
  'storybook',
  'reactivex'
].forEach(skill => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  const alt = skill
    .split('-')
    .map(st => st.charAt(0).toUpperCase() + st.slice(1))
    .join(' ');
  img.src = `img/technology/${skill}.svg`;
  img.className = 'responsive-img';
  img.setAttribute('role', 'presentation');
  img.setAttribute('title', alt);
  img.loading = 'lazy';
  li.setAttribute('data-title', alt);
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

[...document.querySelectorAll('.nav a')].forEach(e => {
  e.addEventListener('click', event => {
    event.preventDefault();
    const destId = event.target.getAttribute('data-id');
    scrollTo(document.querySelector(destId));
  });
});
