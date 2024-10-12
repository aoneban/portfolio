import '../style.css';
import powerLoader from '../contact/loader.js';
import scrollFunction from '../contact/scrollheader.js';
import emailDancing from '../contact/emaildance.js';
import showContact from '../contact/showcontact.js';
import showBlocksContact from '../contact/blockofcontacts.js';
import customOptions from '../contact/customoptions.js';
import initMap from '../contact/googlemap.js';
import interObserver from '../contact/observer.js';
import openNav from '../contact/modalwindow.js';
import scrollControl from '../contact/controlscrolling.js';
import launchCursorMoving from '../contact/cursormoving.js';
import mailService from '../contact/mailservice.js';
import currentPage from '../contact/currentpage.js';
import currentYear from '../contact/currentyear.js';
import getSizeOfTheWindow from '../contact/windowsize.js';
import manageToBurgerMenu from '../contact/manageBurger.js';
import { openOrCloseBurgerWindow, choseBurgerLink } from '../contact/manageBurger.js';

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
  showContact("Contact\u00A0Me", 'contact');
  launchCursorMoving('.cursor', -16, -16, 0.2);
  launchCursorMoving('.circle', -16, -16, 0.1);
  showBlocksContact();
  initMap();
  customOptions();
  interObserver()
  openNav();
  scrollControl();
  mailService();
  currentPage();
  currentYear();
  manageToBurgerMenu();
  choseBurgerLink();
});


