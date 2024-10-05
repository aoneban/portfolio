export default function currentYear() {
    const date = new Date();
    const current = document.querySelector('.current-year');
    current.textContent = date.getFullYear();
  }