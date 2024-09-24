export default function showBlocksContact() {
    const hiddenBlocks = document.querySelectorAll('.hidden-block');
      const options = {
        threshold: 0.2,
      };
    
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appearance');
            entry.target.style.animationDelay = `${index * 0.2}s`
            observer.unobserve(entry.target);
          }
        });
      }, options);
    
      hiddenBlocks.forEach(block => {
        observer.observe(block);
      });
  }