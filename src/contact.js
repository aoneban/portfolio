import '../style.css';
import powerLoader from '../contact/loader.js';
import scrollFunction from '../contact/scrollheader.js';
import emailDancing from '../contact/emaildance.js';

powerLoader();
window.onscroll = function () {
  scrollFunction();
};

document.addEventListener('DOMContentLoaded', () => {
    emailDancing('hello@exgrid', '.jump-email-first');
    emailDancing('info.com', '.jump-email-second');
  });