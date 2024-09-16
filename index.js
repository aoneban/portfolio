import './style.css';
import powerLoader from './modules/loader.js';
import scrollFunction from './modules/scrollheader.js';
import caseStudy from './modules/casestudy.js';
import interObserver from './modules/observer.js';
import interObserver2 from './modules/observer2.js';
import myIntroduction from './modules/introduction.js';
import animationToRightSidebar from './modules/animationsidebar.js';
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
  animationToRightSidebar();
  interObserver();
  interObserver2();
});
