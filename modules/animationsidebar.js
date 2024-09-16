export default function animationToRightSidebar() {
  const sidebar = document.querySelectorAll('.banner-sidebar');
  sidebar.forEach((elem) => {
    elem.classList.add('offset3');
  });
}
