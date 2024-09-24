export default function showContact() {
    const text = "Contact\u00A0Me";
    const textContainer = document.getElementById('contact');
    const arr = text.split('');
  
    arr.forEach((char, index) => {
      const span = document.createElement('span');
      span.classList.add('letter');
      span.textContent = char;
      textContainer.appendChild(span);
   
      span.style.animationDelay = `${index * 0.03}s`;
    });
  }