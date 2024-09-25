export default function customOptions() {
    const customSelect = document.querySelector('.custom-select');
    const trigger = document.querySelector('.select-trigger');
  
    trigger.addEventListener('click', () => {
      customSelect.classList.toggle('open');
    });
  
    document.querySelectorAll('.option').forEach((option) => {
      option.addEventListener('click', (e) => {
        trigger.textContent = e.target.textContent;
        customSelect.classList.remove('open');
      });
    });
  }