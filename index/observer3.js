import aboutMe from "./aboutme";

export default   function interObserver() {
    const hiddenBlocks = document.querySelectorAll('.hidden-block3');
    const options = {
      threshold: 0.2,
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          aboutMe();
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    hiddenBlocks.forEach(block => {
      observer.observe(block);
    });
  }