import './style.css';
import powerLoader from './modules/loader.js';
import scrollFunction from './modules/scrollheader.js';
import caseStudy from './modules/casestudy.js';
import myIntroduction from './modules/introduction.js';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

powerLoader();
window.onscroll = function () {
  scrollFunction();
};

document.addEventListener('DOMContentLoaded', () => {
  caseStudy();
  myIntroduction();
});
