import '../style.css';
import powerLoader from '../about/loader.js';
import scrollFunction from '../about/scrollheader.js';
import emailDancing from '../about/emaildance.js';
import currentPage from '../about/currentpage.js';
import openNav from '../about/modalwindow.js';
import showContact from '../about/showcontact.js';
import scrollControl from '../about/controlscrolling.js';
import launchCursorMoving from '../about/cursormoving.js';
import switcher from '../about/switcher.js';
import iBring from '../about/ibring.js';
import typingText from '../about/typingtext.js';
import fillBar from '../about/fillingbar.js';
import interObserver4 from '../about/observer4.js';
import interObserver5 from '../about/observer5.js';
import currentYear from '../about/currentyear.js';
import getSizeOfTheWindow from '../about/windowsize.js';
import manageToBurgerMenu from '../about/manageBurger.js';
import { openOrCloseBurgerWindow, choseBurgerLink } from '../about/manageBurger.js';

powerLoader();
window.onscroll = function () {
  scrollFunction();
};
window.addEventListener('resize', getSizeOfTheWindow);
window.addEventListener('resize', function () {
  openOrCloseBurgerWindow(0, 'remove');
});
window.addEventListener('click', function (event) {
  const current = event.target;
  if (current.classList.contains('shadow-modal')) {
    openOrCloseBurgerWindow(0, 'remove');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  emailDancing('prosperity.devops', '.jump-email-first');
  emailDancing('@gmail.com', '.jump-email-second');
  currentPage();
  openNav();
  showContact('About\u00A0Me', 'contact');
  scrollControl();
  launchCursorMoving('.cursor', -16, -16, 0.2);
  launchCursorMoving('.circle', -16, -16, 0.1);
  switcher();
  iBring();
  typingText();
  fillBar();
  interObserver4();
  interObserver5();
  currentPage();
  currentYear();
  manageToBurgerMenu();
  choseBurgerLink();
});
