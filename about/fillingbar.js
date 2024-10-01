export default function fillBar() {
    const fillingWidth = document.querySelectorAll('.skill-bar-percent');
  
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
    async function fillWidth(bar) {
      const percent = Number(bar.getAttribute('data-percent'));
      const elem = bar
        .closest('.skill-bar-single')
        .querySelector('.percent-value');
  
      let ind = 0;
  
      while (ind <= percent) {
        bar.style.width = ind + '%';
        elem.textContent = ind + '%';
        ind += 1;
        await wait(20);
      }
    }
  
    function loopThroughBar() {
      fillingWidth.forEach(fillWidth);
    }
    loopThroughBar()
  }
  