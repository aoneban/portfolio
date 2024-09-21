import './style.css';
import powerLoader from './modules/loader.js';
import scrollFunction from './modules/scrollheader.js';
import caseStudy from './modules/casestudy.js';
import interObserver from './modules/observer.js';
import interObserver2 from './modules/observer2.js';
import interObserver3 from './modules/observer3.js';
import myIntroduction from './modules/introduction.js';
import animationToRightSidebar from './modules/animationsidebar.js';
import observerFirstGallery from './modules/firstgallery.js';
import observerSecondGallery from './modules/secondgallery.js';
import emailDancing from './modules/emaildance.js';
import scrollControl from './modules/controlscrolling.js';
import openNav from './modules/modalwindow.js';
import movedImages from './modules/moveimages.js';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';

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
  interObserver3();
  observerFirstGallery();
  observerSecondGallery();
  emailDancing('hello@exgrid', '.jump-email-first');
  emailDancing('info.com', '.jump-email-second');
  scrollControl();
  openNav();
  movedImages();
});
