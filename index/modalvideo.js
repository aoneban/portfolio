export function modalVideo() {
    const modal = document.getElementById('myModal');
    const btn = document.getElementById('y-tube');
    const span = document.getElementsByClassName('close-3')[0];
    const iframe = document.getElementById('videoIframe');
    const content = document.querySelector('.modal-content-3');
    
    btn.onclick = function () {
      modal.style.display = 'block';
      document.body.classList.add('hidden__case');
    };
    span.onclick = function () {
      play();
    };
    window.onclick = function (event) {
      if (event.target == modal || event.target == content) {
        play();
      }
    };
    
    function play() {
      document.body.classList.remove('hidden__case');
      modal.style.display = 'none';
      iframe.src = '';
      iframe.src = 'https://www.youtube.com/embed/m9CMx-Bis-w';
    }
  }