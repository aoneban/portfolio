export default function switcher() {
    const switcher = document.getElementById('switcher');
    switcher.addEventListener('click', () => {
      const ex = document.querySelectorAll('.expir');
      ex.forEach((elem) => {
        if (!elem.classList.contains('hidden')) {
          elem.classList.add('hidden');
          elem.classList.remove('new-class');
          document.querySelector('.exps').classList.remove('col');
          document.querySelector('.edcn').classList.add('col');
          document.querySelector('.edcn').classList.remove('col2');
        } else {
          elem.classList.remove('hidden');
          elem.classList.add('new-class');
          document.querySelector('.exps').classList.add('col');
          document.querySelector('.edcn').classList.remove('col');
        }
      });
    });
  }