import '../style.css';
import powerLoader from '../contact/loader.js';
import scrollFunction from '../contact/scrollheader.js';
import emailDancing from '../contact/emaildance.js';
import currentPage from '../contact/currentpage.js';
import showContact from '../contact/showcontact.js';
import showBlocksContact from '../contact/blockofcontacts.js';
import customOptions from '../contact/customoptions.js';
import initMap from '../contact/googlemap.js';
import interObserver from '../contact/observer.js';

powerLoader();
window.onscroll = function () {
  scrollFunction();
};

document.addEventListener('DOMContentLoaded', () => {
  emailDancing('hello@exgrid', '.jump-email-first');
  emailDancing('info.com', '.jump-email-second');
  currentPage();
  showContact("Contact\u00A0Me", 'contact');
  showBlocksContact();
  initMap();
  customOptions();
  interObserver()
});

