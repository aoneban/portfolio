export default function typingText() {
  const textArray = [
    'web\u00A0developer',
    'UI\u00A0designer',
    'freelancer',
    'digital\u00A0marketter',
  ];

  const typedText = document.querySelector('.typed-text');

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  function runAdditionalFunction() {
    const cursor = document.querySelector('.typed-cursor');
    cursor.classList.add('flicker');
  }

  async function typeText(text) {
    let ind = 0;

    while (ind <= text.length) {
      const cursor = document.querySelector('.typed-cursor');
      cursor.classList.remove('flicker');
      typedText.innerHTML = text.substr(0, ind);
      ind += 1;
      await wait(120);
    }

    runAdditionalFunction();
    await wait(1500);

    while (ind >= 0) {
      typedText.innerHTML = text.substr(0, ind);
      ind -= 1;
      await wait(70);
    }
  }

  async function loopThroughTexts() {
    for (let i = 0; i < textArray.length; i++) {
      await typeText(textArray[i]);
    }

    loopThroughTexts();
  }

  loopThroughTexts();
}
