import './polyfill/array-from';
import './polyfill/classlist';
import 'promise-polyfill/src/polyfill';
import Typed from 'typed.js';
import { debouncer, scrollTo } from './utils';
import '../style/index.scss';

const intro = document.querySelector('.intro');
const skills = document.querySelector('.skills');

const typedConfig = {
  typeSpeed: 50,
  backSpeed: 40,
  loop: false,
  showCursor: false
};

function setWindowSize() {
  intro.style.height = `${Number(window.innerHeight || 0)}px`;
}

window.addEventListener('DOMContentLoaded', setWindowSize);
window.addEventListener('resize', debouncer(setWindowSize));

function description() {
  // eslint-disable-next-line no-new
  new Typed('.intro-paragraph', {
    ...typedConfig,
    typeSpeed: 40,
    strings: [
      "I'm from Aguascalientes, Mexico! now based on New York. Most of my experience is related to code websites and applications, using &#160;<b>JavaScript</b>.<br /><br/> I love to code&#160; <b>high-performance</b>&#160; solutions, using best practices and cutting edge technology."
    ],
    onComplete() {
      document.body.className = '';
    }
  });
}

function authorTitle() {
  // eslint-disable-next-line no-new
  new Typed('.author-title > .title', {
    ...typedConfig,
    strings: ['', 'Software Engineer'],
    onComplete() {
      description();
      intro.classList.add('intro-ready');
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
  ['angular', 'Angular'],
  ['bitbucket', 'Bitbucket'],
  ['autoprefixer', 'Autoprefixer'],
  ['git', 'GIT'],
  ['eslint', 'eslint'],
  ['html-5', 'HTML 5'],
  ['node', 'Node JS'],
  ['redux-saga', 'Redux Saga'],
  ['bootstrap', 'Bootstrap'],
  ['github', 'Github'],
  ['imagemin', 'imagemin'],
  ['postcss', 'PostCSS'],
  ['redux', 'Redux'],
  ['css-3', 'CSS 3'],
  ['gitlab', 'Gitlab'],
  ['immutable', 'Immutable JS'],
  ['pug', 'Pug'],
  ['typescript', 'TypeScript'],
  ['docker', 'Docker'],
  ['graphql', 'GraphQL'],
  ['javascript', 'JavaScript'],
  ['react-router', 'React Router'],
  ['express', 'Express JS'],
  ['nodemon', 'Nodemon'],
  ['grunt', 'Grunt'],
  ['jquery', 'jQuery'],
  ['react', 'React'],
  ['nextjs', 'Next JS'],
  ['browserify', 'Browserify'],
  ['prettier', 'Prettier'],
  ['puppeteer', 'Puppeter'],
  ['foundation', 'Foundation'],
  ['gulp', 'Gulp'],
  ['mysql', 'MySQL'],
  ['sass', 'SASS/SCSS'],
  ['less', 'LESS'],
  ['jest', 'Jest'],
  ['babel', 'Babel JS'],
  ['yarn', 'Yarn'],
  ['npm', 'NPM'],
  ['bower', 'Bower'],
  ['webpack', 'Webpack'],
  ['storybook', 'Storybook'],
  ['reactivex', 'RxJS']
].forEach(function ([skill, name]) {
  const li = document.createElement('li');
  const img = document.createElement('img');

  img.src = `img/technology/${skill}.svg`;
  img.className = 'responsive-img';
  img.setAttribute('role', 'presentation');
  img.setAttribute('title', name);
  img.setAttribute('loading', 'lazy');
  li.setAttribute('data-title', name);
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
  header.classList[top > 0 ? 'add' : 'remove']('scroll');
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
