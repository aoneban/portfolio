export default function currentPage() {
    const currentPage = window.location.pathname;
  
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  }