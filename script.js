let color = "black";
let radius = 50;

// малюватиме, лише якщо натискати на мишку (спрацьовує лише з натиснутою кнопкою)
let isPainting = false;

function setWidth(value) {
  if (isNumeric(value)) {
    canvas1.width = value;
  }
}

function setHeight(value) {
  if (isNumeric(value)) {
    canvas1.height = value;
  }
}

function startPaint() {
  isPainting = true;
}

function doPaint(x, y) {
  if (isPainting) {
    let paintcanvas = document.getElementById("canvas1");
    let context = paintcanvas.getContext("2d");

    context.beginPath();
    // малюйте коло з радіусом 2*PI навколо заданої точки
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
  }
}

function endPaint() {
  isPainting = false;
}

function changeColor(newColor) {
  color = newColor;
}

function clearCanvas() {
  let clearcanvasdelete = document.getElementById("canvas1");
  let context1 = clearcanvasdelete.getContext("2d");
  context1.clearRect(0, 0, canvas1.width, canvas1.height);
}

function resizeBrush(newSize) {
  radius = newSize;
  document.getElementById("sizeOutput").value = newSize;
}

// перевірте, щоб value було числовим значенням
function isNumeric(value) {
  // стандартна функція JavaScript, аби визначити, чи рядок можна перетворити рядок на число
  return !isNaN(value);
}
