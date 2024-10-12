export default function getSizeOfTheWindow() {
  let windowOuterWidth = window.innerWidth;
  if (windowOuterWidth < 1280) {
    document.querySelector('.content__center-left').style.display = 'none';
    document.querySelector('.mobile__block').style.display = 'block';
  } else {
    document.querySelector('.content__center-left').style.display = 'block';
    document.querySelector('.mobile__block').style.display = 'none';
  }
  if (windowOuterWidth <= 480) {
    document.querySelector('.img__gallery-wrapper').style.display = 'none';
  } else {
    document.querySelector('.img__gallery-wrapper').style.display = 'block';
  }
}
