export default function interObserver4() {
    const text = "Education And Experience";
    const hiddenBlocks = document.querySelectorAll('.hidden-block5');
    const arr = text.split('');
    const options = {
      threshold: 0.2,
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          arr.forEach((char, index) => {
            entry.target.classList.remove('hidden-block')
            const span = document.createElement('span');
            span.classList.add('letter');
        
            if (char === ',') {
              span.textContent = char;
              entry.target.appendChild(span);
              const br = document.createElement('br');
              entry.target.appendChild(br);
            } else {
              span.textContent = char === ' ' ? '\u00A0' : char;
              entry.target.appendChild(span);
            }
        
            span.style.animationDelay = `${index * 0.03}s`;
          });
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    hiddenBlocks.forEach(block => {
      observer.observe(block);
    });
  }
  