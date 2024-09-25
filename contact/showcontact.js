export default function showContact(item, idname) {
    const text = item;
    const textContainer = document.getElementById(idname);
    const arr = text.split('');
  
    arr.forEach((char, index) => {
      const span = document.createElement('span');
      span.classList.add('letter');
      span.textContent = char;
      textContainer.appendChild(span);
   
      span.style.animationDelay = `${index * 0.03}s`;
    });
  }