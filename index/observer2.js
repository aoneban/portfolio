export default   function interObserver2() {
    const hiddenBlocks = document.querySelectorAll('.hidden-block2');

    const options = {
      threshold: 0.2,
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('hidden__case1')) {
                entry.target.classList.add('offset');
            } else if (entry.target.classList.contains('hidden__case2')) {
                entry.target.classList.add('offset2');
            }
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    hiddenBlocks.forEach(block => {
      observer.observe(block);
    });
  }