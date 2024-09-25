export default function launchCursorMoving(clsname, coor1, coor2, speedmove) {
    
  const cursor = document.querySelector(clsname);

  let mouseX = 0,
    mouseY = 0;
  let cursorX = 0,
    cursorY = 0;

  let speed = speedmove;

  function followMouse() {
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;

    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

    requestAnimationFrame(followMouse);
  }

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX - coor1;
    mouseY = e.clientY - coor2;
  });

  requestAnimationFrame(followMouse);
}
