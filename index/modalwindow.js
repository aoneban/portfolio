export default function openNav() {
  const burger = document.querySelector('.burger-menu');
  burger.addEventListener('click', showModalWindow);
  closeNav();
}

function closeNav() {
  const close = document.querySelector('.closebtn-one');
  close.addEventListener('click', hideModalWindow);
}

function showModalWindow() {
  document.getElementById('myNav').style.display = 'block';
  document.body.classList.add('no-scroll');
  setTimeout(() => {
    document.querySelector('.overlay').classList.add('active');
    document.querySelector('.bar1').classList.add('forbar');
    document.querySelector('.bar2').classList.add('forbar2');
  }, 10);
}

function hideModalWindow() {
  document.getElementById('myNav').style.display = 'none';
  document.body.classList.remove('no-scroll');
  document.querySelector('.overlay').classList.remove('active');
  document.querySelector('.bar1').classList.remove('forbar');
  document.querySelector('.bar2').classList.remove('forbar2');
}
