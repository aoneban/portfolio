export default function scrollControl() {
  const circle = document.getElementById('progress');
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  }

  function calculateScrollPercentage() {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    return (scrollPosition / documentHeight) * 100;
  }

  function scrollControl() {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    const progressWrap = document.querySelector('.progress__wrap');
    if (scrollPosition > 10) {
      progressWrap.classList.add('visible');
    } else {
      progressWrap.classList.remove('visible');
    }
  }

  function goToUp() {
    const up = document.querySelector('.progress__wrap');
    up.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  function myNameFunc() {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    const parent = document.querySelector('.pin-spacer');
    const parentRect = parent.getBoundingClientRect();

    if (parentRect.top === 0) {
    } else {
      if (scrollPosition > 3000) {
        let newCoor = scrollPosition - 3000;
        parent.style.position = 'fixed';
        parent.style.top = (scrollPosition - newCoor * 2.5) / 10 + 500 + 'px';
      } else {
        parent.style.position = 'fixed';
        parent.style.top = 700 + scrollPosition / 30 + 'px';
      }
    }
  }

  window.addEventListener('scroll', () => {
    goToUp();
    scrollControl();
    myNameFunc();
    const scrollPercent = calculateScrollPercentage();
    setProgress(scrollPercent);
  });
}
