export default function currentPage() {
    const currentPage = window.location.pathname;
    console.log(currentPage);
  
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  }