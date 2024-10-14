export default function aboutMe() {
    const text = "Hi i'm Ashot,\u00A0Webflow Designer I\u00A0work as the\u00A0Creative Director\u00A0at Pe Creative Studio\u00A0in Poznan.";
    const textContainer = document.querySelector('.about-me');
    const arr = text.split('');
  
    arr.forEach((char, index) => {
      const span = document.createElement('span');
      span.classList.add('letter');
      if (index < 12) {
        span.classList.add('wx-1')
      } else if (index > 12 && index < 30) {
        span.classList.add('wx-2')
      } else if (index > 30 && index < 44) {
        span.classList.add('wx-3')
      } else if (index > 44 && index < 62) {
        span.classList.add('wx-4')
      } else if (index > 62 && index < 84) {
        span.classList.add('wx-5')
      } else if (index > 83) {
        span.classList.add('wx-6')
      }
  
      if (char === '\u00A0') {
        span.textContent = char;
        textContainer.appendChild(span);
        const br = document.createElement('br');
        textContainer.appendChild(br);
      } else {
        span.textContent = char === ' ' ? '\u00A0' : char;
        textContainer.appendChild(span);
      }
  
      span.style.animationDelay = `${index * 0.05}s`;
    });
  }
  