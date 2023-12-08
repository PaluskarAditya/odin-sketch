const generateRgb = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}

let mousePressed = false;

const handleMouseDown = (event) => {
  mousePressed = true;
  event.target.style.background = generateRgb();
}

const handleMouseOver = (event) => {
  if (mousePressed) {
    event.target.style.background = generateRgb();
  }
}

for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.add('box');
  div.addEventListener('mousedown', handleMouseDown);
  div.addEventListener('mouseover', handleMouseOver);
  document.getElementById('grid').append(div);
}

const handleGridChange = () => {
  const len = prompt('Enter value');

  if (len > 64) {
    alert('Max value is 64');
  } else {
    const gridContainer = document.getElementById('grid');
    gridContainer.innerHTML = "";
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${len}, 1fr);`);

    const boxes = len * len;
    for (let i = 0; i < boxes; i++) {
      const div = document.createElement('div');
      div.classList.add('box');
      div.addEventListener('mousedown', handleMouseDown);
      div.addEventListener('mouseover', handleMouseOver);
      gridContainer.append(div);
    }
  }
}

document.addEventListener('mouseup', () => {
  mousePressed = false;
});
