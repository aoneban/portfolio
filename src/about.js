import '../style.css';
import powerLoader from '../about/loader.js';
import scrollFunction from '../about/scrollheader.js';
import emailDancing from '../about/emaildance.js';
import currentPage from '../about/currentpage.js';
import openNav from '../about/modalwindow.js';
import showContact from '../about/showcontact.js';
import scrollControl from '../about/controlscrolling.js';
import launchCursorMoving from '../about/cursormoving.js';

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
});

const switcher = document.getElementById('switcher');
switcher.addEventListener('click', () => {
  const ex = document.querySelectorAll('.expir');
  ex.forEach((elem) => {
    if (!elem.classList.contains('hidden')) {
      elem.classList.add('hidden');
      elem.classList.remove('newclass');
      document.querySelector('.exps').classList.remove('col');
      document.querySelector('.edcn').classList.add('col');
      document.querySelector('.edcn').classList.remove('col2');
    } else {
      elem.classList.remove('hidden');
      elem.classList.add('newclass');
      document.querySelector('.exps').classList.add('col');
      document.querySelector('.edcn').classList.remove('col');
    }
  });
});
