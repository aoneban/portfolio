export default function emailDancing(elem1, elem2) {
  const text = elem1;
  const textContainer = document.querySelector(elem2);
  const arr = text.split('');

  arr.forEach((char, index) => {
    const span = document.createElement('span');
    span.classList.add('bouncing-letter');

    span.textContent = char;
    textContainer.appendChild(span);

    span.style.animationDelay = `${index * 0.05}s`;
  });
}
