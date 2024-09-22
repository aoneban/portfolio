import '../style.css';
import powerLoader from '../about/loader.js';
import scrollFunction from '../about/scrollheader.js';
import emailDancing from '../about/emaildance.js';

powerLoader();
window.onscroll = function () {
  scrollFunction();
};

document.addEventListener('DOMContentLoaded', () => {
  emailDancing('hello@exgrid', '.jump-email-first');
  emailDancing('info.com', '.jump-email-second');
});