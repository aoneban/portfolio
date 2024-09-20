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

  window.addEventListener('scroll', () => {
    scrollControl();
    const scrollPercent = calculateScrollPercentage();
    setProgress(scrollPercent);
  });
}
