export default function aboutMe() {
  const text = [
    "Hi i'm Ashot,",
    'an experienced',
    'Frontend Developer',
    'focused on innovation',
    'and reliability',
    'based in Poznań.',
  ];
  const textContainer = document.querySelector('.about-me');
  textContainer.textContent = '';
  const arr = text.map((item) => item);

  arr.forEach((str, ind) => {
    const p = document.createElement('p');
    str.split('').forEach((elem, index) => {
      const span = document.createElement('span');
      if (elem === ' ') {
        span.textContent = '\u00A0';
      } else {
        span.textContent = elem;
      }
      span.classList.add(`letter`);
      span.classList.add(`wx-${ind + 1}`);
      p.append(span);
      span.style.animationDelay = `${index * 0.05}s`;
    });
    textContainer.append(p);
  });
}
