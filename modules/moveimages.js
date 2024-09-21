export default function movedImages() {
    const hoverBlocks = document.querySelectorAll('.content__center-center__cases');
  
    hoverBlocks.forEach((elem) => {
      const imageFollow = elem.querySelector('.image-follow');
    
      elem.addEventListener('mouseenter', () => {
        imageFollow.style.opacity = '1';
      });
    
      elem.addEventListener('mouseleave', () => {
        imageFollow.style.opacity = '0';
      });
    
      elem.addEventListener('mousemove', (e) => {
        const rect = elem.getBoundingClientRect(); 
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        imageFollow.style.left = `${x}px`;
        imageFollow.style.top = `${y}px`;
      });
    });
  }