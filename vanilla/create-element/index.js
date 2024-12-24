function onClick(event) {
  event.preventDefault();
  const block = document.createElement("div");
  block.id = "block";
  let zIndex = document.getElementById("z-index");
  let backgroundcolor = document.getElementById("backgroundcolor");
  let color = document.getElementById("color");
  console.log(color.value);
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
  block.style.backgroundColor = backgroundcolor.value;
  block.style.color = color.value;
  block.style.zIndex = zIndex.value;
  block.style.color = document.body.append(block);
  block.setAttribute("contenteditable", "true");
}

function openDialog1(event) {
  event.preventDefault();

  document.getElementById("1").showModal();
}

function closeDialog1(event) {
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
function openDialog3(event) {
  event.preventDefault();

  document.getElementById("3").showModal();
}

function closeDialog3(event) {
  event.preventDefault();
  document.getElementById("3").close();
}
function openDialog4(event) {
  event.preventDefault();

  document.getElementById("4").showModal();
}

function closeDialog4(event) {
  event.preventDefault();
  document.getElementById("4").close();
}
function openDialog5(event) {
  event.preventDefault();

  document.getElementById("5").showModal();
}

function closeDialog5(event) {
  event.preventDefault();
  document.getElementById("5").close();
}

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key === "1") {
    openDialog(event);
  }
});
