import '../style.css';
import powerLoader from '../contact/loader.js';
import scrollFunction from '../contact/scrollheader.js';
import emailDancing from '../contact/emaildance.js';
import currentPage from '../contact/currentpage.js';
import showContact from '../contact/showcontact.js';
import showBlocksContact from '../contact/blockofcontacts.js';

powerLoader();
window.onscroll = function () {
  scrollFunction();
};

document.addEventListener('DOMContentLoaded', () => {
  emailDancing('hello@exgrid', '.jump-email-first');
  emailDancing('info.com', '.jump-email-second');
  currentPage();
  showContact();
  showBlocksContact();
  initMap();
});

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 52.4064, lng: 16.9252 },
    zoom: 12,
  });
}
