function generateColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const color = `rgb(${r}, ${g}, ${b})`;

  document.body.style.background = color;
  document.body.innerHTML = `<h2>${color}</h2>`;
}

setInterval(() => {
  generateColor();
}, 2000);
