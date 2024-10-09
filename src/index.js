import '../style.css';
import powerLoader from '../index/loader.js';
import scrollFunction from '../index/scrollheader.js';
import caseStudy from '../index/casestudy.js';
import interObserver from '../index/observer.js';
import interObserver2 from '../index/observer2.js';
import interObserver3 from '../index/observer3.js';
import myIntroduction from '../index/introduction.js';
import animationToRightSidebar from '../index/animationsidebar.js';
import observerFirstGallery from '../index/firstgallery.js';
import observerSecondGallery from '../index/secondgallery.js';
import emailDancing from '../index/emaildance.js';
import scrollControl from '../index/controlscrolling.js';
import openNav from '../index/modalwindow.js';
import movedImages from '../index/moveimages.js';
import launchCursorMoving from '../index/cursormoving.js';
import currentPage from '../index/currentpage.js';
import currentYear from '../index/currentyear.js';
import getSizeOfTheWindow from '../index/windowsize.js';

powerLoader();
window.onscroll = function () {
  scrollFunction();
};

window.addEventListener('resize', getSizeOfTheWindow);

document.addEventListener('DOMContentLoaded', () => {
  getSizeOfTheWindow();
  caseStudy();
  myIntroduction();
  animationToRightSidebar();
  interObserver();
  interObserver2();
  interObserver3();
  observerFirstGallery();
  observerSecondGallery();
  emailDancing('prosperity.devops', '.jump-email-first');
  emailDancing('@gmail.com', '.jump-email-second');
  scrollControl();
  openNav();
  movedImages();
  launchCursorMoving('.cursor', -16, -16, 0.2);
  launchCursorMoving('.circle', -16, -16, 0.1);
  currentPage();
  currentYear();
});
