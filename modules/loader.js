export default function powerLoader() {
    window.addEventListener('load', function () {
      setTimeout(function () {
        var preloader = document.querySelector('.loader');
        preloader.style.display = 'none';
    
        document.getElementById('header').style.display = 'block';
        document.getElementById('main').style.display = 'block';
        document.getElementById('footer').style.display = 'block';
      }, 1000); 
    });
  }