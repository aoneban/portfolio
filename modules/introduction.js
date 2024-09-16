export default function myIntroduction() {
  const text = "Hi I'm Ashot,Frontend Developer";
  const textContainer = document.querySelector('.representation');
  const arr = text.split('');

  arr.forEach((char, index) => {
    const span = document.createElement('span');
    span.classList.add('letter');

    if (char === ',') {
      span.textContent = char;
      textContainer.appendChild(span);
      const br = document.createElement('br');
      textContainer.appendChild(br);
    } else {
      span.textContent = char === ' ' ? '\u00A0' : char;
      textContainer.appendChild(span);
    }

    span.style.animationDelay = `${index * 0.03}s`;
  });
}
