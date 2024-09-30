export default function iBring() {
  const text = "I Bring Your Website With\u00A0Vision To Life";
  const textContainer = document.querySelector('.motto');
  const arr = text.split('');

  arr.forEach((char, index) => {
    const span = document.createElement('span');
    span.classList.add('letter');

    if (char === '\u00A0') {
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
