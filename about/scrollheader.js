export default function scrollFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      document.getElementById('header').classList.add('hidden');
      document.getElementById('header').style.top = '-100px';
      setTimeout(() => {
        document.getElementById('header').classList.remove('hidden');
        document.getElementById('header').classList.add('change-header');
      }, 0);
    } else {
      document.getElementById('header').classList.remove('change-header');
    }
  }