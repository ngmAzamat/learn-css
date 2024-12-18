function onClick() {
  let position = document.getElementById("position");
  let button = document.getElementById("button");
  let inputTop = document.getElementById("top");
  let inputLeft = document.getElementById("left");
  let inputRight = document.getElementById("right");
  let unitOfMeasurement = document.getElementById("select");
  let inputBottom = document.getElementById("bottom");
  let block = document.getElementById("block");
  block.style.position = position.value;
  block.style.top = inputTop.value + unitOfMeasurement.value;
  block.style.left = inputLeft.value + unitOfMeasurement.value;
  block.style.right = inputRight.value + unitOfMeasurement.value;
  block.style.bottom = inputBottom.value + unitOfMeasurement.value;
}

function onClick2() {
  let position = document.getElementById("position2");
  let button2 = document.getElementById("button2");
  let block2 = document.getElementById("box");
  let inputTop2 = document.getElementById("top2");
  let inputLeft2 = document.getElementById("left2");
  let inputRight2 = document.getElementById("right2");
  let inputBottom2 = document.getElementById("bottom2");
  let unitOfMeasurement2 = document.getElementById("select2");
  block2.style.position = position.value;
  block2.style.top = inputTop2.value + unitOfMeasurement2.value;
  block2.style.left = inputLeft2.value + unitOfMeasurement2.value;
  block2.style.right = inputRight2.value + unitOfMeasurement2.value;
  block2.style.bottom = inputBottom2.value + unitOfMeasurement2.value;
}

function openDialog(event) {
  event.preventDefault();

  document.getElementById("1").showModal();
}

function closeDialog(event) {
  event.preventDefault();
  document.getElementById("1").close();
}

function openDialog2(event) {
  event.preventDefault();

  document.getElementById("2").showModal();
}
function closeDialog2(event) {
  event.preventDefault();
  document.getElementById("2").close();
}
