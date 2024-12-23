function onClick() {
  const block = document.createElement("div");
  block.id = "block";
  let zIndex = document.getElementById("z-index");
  let color = document.getElementById("color");
  let position = document.getElementById("position");
  let inputTop = document.getElementById("top");
  let inputLeft = document.getElementById("left");
  let inputRight = document.getElementById("right");
  let unitOfMeasurement = document.getElementById("select");
  let inputBottom = document.getElementById("bottom");
  block.style.position = position.value;
  block.style.top = inputTop.value + unitOfMeasurement.value;
  block.style.left = inputLeft.value + unitOfMeasurement.value;
  block.style.right = inputRight.value + unitOfMeasurement.value;
  block.style.bottom = inputBottom.value + unitOfMeasurement.value;
  block.style.backgroundColor = color.value;
  block.style.zIndex = zIndex.value;
  document.body.append(block);
}

function openDialog(event) {
  event.preventDefault();

  document.getElementById("1").showModal();
}

function closeDialog(event) {
  event.preventDefault();
  document.getElementById("1").close();
}
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key === "1") {
    openDialog(event);
  }
});
