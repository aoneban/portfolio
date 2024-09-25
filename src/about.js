import '../style.css';
import powerLoader from '../about/loader.js';
import scrollFunction from '../about/scrollheader.js';
import emailDancing from '../about/emaildance.js';
import currentPage from '../about/currentpage.js';
import openNav from '../about/modalwindow.js';
import showContact from '../about/showcontact.js';

powerLoader();
window.onscroll = function () {
  scrollFunction();
};

document.addEventListener('DOMContentLoaded', () => {
  emailDancing('hello@exgrid', '.jump-email-first');
  emailDancing('info.com', '.jump-email-second');
  currentPage();
  openNav();
  showContact("About\u00A0Me", 'contact')
});