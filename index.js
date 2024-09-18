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
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

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
  emailDancing("hello@exgrid",'.jump-email-first');
  emailDancing("info.com", '.jump-email-second')
});

function emailDancing(elem1, elem2) {
  const text = elem1;
  const textContainer = document.querySelector(elem2);
  const arr = text.split('');
  
  arr.forEach((char, index) => {
    const span = document.createElement('span');
    span.classList.add('bouncing-letter');

    span.textContent = char
    textContainer.appendChild(span);
    
    span.style.animationDelay = `${index * 0.05}s`;
  });
}
