export default function interObserver5() {
    const hiddenBlocks = document.querySelectorAll('.hidden-block');
    const options = {
      threshold: 0.2,
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    hiddenBlocks.forEach(block => {
      observer.observe(block);
    });
  }