export default function manageToBurgerMenu() {
  launchBurgerMenu();
  closeBurgerMenu();
}

function launchBurgerMenu() {
  const burger = document.querySelector('.burger-clone');
  burger.addEventListener('click', () => {
    openOrCloseBurgerWindow('100vh', 'add');
  });
}

function closeBurgerMenu() {
  const close = document.querySelector('.closebtn');
  close.addEventListener('click', () => {
    openOrCloseBurgerWindow(0, 'remove');
  });
}

export function openOrCloseBurgerWindow(item, item2) {
  const burg = document.querySelector('.shadow-modal');
  const burgOne = document.querySelector('.first-modal');
  const modal = document.querySelector('.modal');

  modal.style.height = item;
  burg.style.height = item;
  burgOne.style.height = item;

  if (item2 === 'add') {
    document.body.classList.add('no-scroll');
  } else if (item2 === 'remove') {
    document.body.classList.remove('no-scroll');
  }
}

export function choseBurgerLink() {
  const items = document.querySelectorAll('.burger-link');
  items.forEach((el) => {
    el.addEventListener('click', () => {
      openOrCloseBurgerWindow(0, 'remove');
    });
  });
}
