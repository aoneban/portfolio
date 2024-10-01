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

powerLoader();
window.onscroll = function () {
  scrollFunction();
};

document.addEventListener('DOMContentLoaded', () => {
  emailDancing('hello@exgrid', '.jump-email-first');
  emailDancing('info.com', '.jump-email-second');
  currentPage();
  openNav();
  showContact('About\u00A0Me', 'contact');
  scrollControl();
  launchCursorMoving('.cursor', -16, -16, 0.2);
  launchCursorMoving('.circle', -16, -16, 0.1);
  switcher();
  iBring();
  typingText();
  fillBar()
});

