function onClick(event) {
  event.preventDefault();
  const height = document.getElementById("height");
  const width = document.getElementById("width");
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
  block.style.width = width.value + unitOfMeasurement.value;
  block.style.height = height.value + unitOfMeasurement.value;
  block.style.color = document.body.append(block);
  block.setAttribute("contenteditable", "true");
  closeDialog1(event);
}
function onClick2(event) {
  event.preventDefault();
  const height = document.getElementById("height2");
  const width = document.getElementById("width2");
  const block = document.createElement("div");
  block.id = "block";
  let zIndex = document.getElementById("z-index2");
  let backgroundcolor = document.getElementById("backgroundcolor2");
  let color = document.getElementById("color2");
  console.log(color.value);
  let position = document.getElementById("position2");
  let inputTop = document.getElementById("top2");
  let inputLeft = document.getElementById("left2");
  let inputRight = document.getElementById("right2");
  let unitOfMeasurement = document.getElementById("select2");
  let inputBottom = document.getElementById("bottom2");
  block.style.position = position.value;
  block.style.top = inputTop.value + unitOfMeasurement.value;
  block.style.left = inputLeft.value + unitOfMeasurement.value;
  block.style.right = inputRight.value + unitOfMeasurement.value;
  block.style.bottom = inputBottom.value + unitOfMeasurement.value;
  block.style.backgroundColor = backgroundcolor.value;
  block.style.color = color.value;
  block.style.zIndex = zIndex.value;
  block.style.width = width.value + unitOfMeasurement.value;
  block.style.height = height.value + unitOfMeasurement.value;
  block.style.color = document.body.append(block);
  block.setAttribute("contenteditable", "true");
  closeDialog2(event);
}
function onClick3(event) {
  event.preventDefault();
  const height = document.getElementById("height3");
  const width = document.getElementById("width3");
  const block = document.createElement("div");
  block.id = "block";
  let zIndex = document.getElementById("z-index3");
  let backgroundcolor = document.getElementById("backgroundcolor3");
  let color = document.getElementById("color3");
  console.log(color.value);
  let position = document.getElementById("position3");
  let inputTop = document.getElementById("top3");
  let inputLeft = document.getElementById("left3");
  let inputRight = document.getElementById("right3");
  let unitOfMeasurement = document.getElementById("select3");
  let inputBottom = document.getElementById("bottom3");
  block.style.position = position.value;
  block.style.top = inputTop.value + unitOfMeasurement.value;
  block.style.left = inputLeft.value + unitOfMeasurement.value;
  block.style.right = inputRight.value + unitOfMeasurement.value;
  block.style.bottom = inputBottom.value + unitOfMeasurement.value;
  block.style.backgroundColor = backgroundcolor.value;
  block.style.color = color.value;
  block.style.zIndex = zIndex.value;
  block.style.width = width.value + unitOfMeasurement.value;
  block.style.height = height.value + unitOfMeasurement.value;
  block.style.color = document.body.append(block);
  block.setAttribute("contenteditable", "true");
  closeDialog3(event);
}
function onClick4(event) {
  event.preventDefault();
  const height = document.getElementById("height4");
  const width = document.getElementById("width4");
  const block = document.createElement("div");
  block.id = "block";
  let zIndex = document.getElementById("z-index4");
  let backgroundcolor = document.getElementById("backgroundcolor4");
  let color = document.getElementById("color4");
  console.log(color.value);
  let position = document.getElementById("position4");
  let inputTop = document.getElementById("top4");
  let inputLeft = document.getElementById("left4");
  let inputRight = document.getElementById("right4");
  let unitOfMeasurement = document.getElementById("select4");
  let inputBottom = document.getElementById("bottom4");
  block.style.position = position.value;
  block.style.top = inputTop.value + unitOfMeasurement.value;
  block.style.left = inputLeft.value + unitOfMeasurement.value;
  block.style.right = inputRight.value + unitOfMeasurement.value;
  block.style.bottom = inputBottom.value + unitOfMeasurement.value;
  block.style.backgroundColor = backgroundcolor.value;
  block.style.color = color.value;
  block.style.zIndex = zIndex.value;
  block.style.width = width.value + unitOfMeasurement.value;
  block.style.height = height.value + unitOfMeasurement.value;
  block.style.color = document.body.append(block);
  block.setAttribute("contenteditable", "true");
  closeDialog4(event);
}
function onClick5(event) {
  event.preventDefault();
  const height = document.getElementById("height5");
  const width = document.getElementById("width5");
  const block = document.createElement("div");
  block.id = "block";
  let zIndex = document.getElementById("z-index5");
  let backgroundcolor = document.getElementById("backgroundcolor5");
  let color = document.getElementById("color5");
  console.log(color.value);
  let position = document.getElementById("position5");
  let inputTop = document.getElementById("top5");
  let inputLeft = document.getElementById("left5");
  let inputRight = document.getElementById("right5");
  let unitOfMeasurement = document.getElementById("select5");
  let inputBottom = document.getElementById("bottom5");
  block.style.position = position.value;
  block.style.top = inputTop.value + unitOfMeasurement.value;
  block.style.left = inputLeft.value + unitOfMeasurement.value;
  block.style.right = inputRight.value + unitOfMeasurement.value;
  block.style.bottom = inputBottom.value + unitOfMeasurement.value;
  block.style.backgroundColor = backgroundcolor.value;
  block.style.color = color.value;
  block.style.zIndex = zIndex.value;
  block.style.width = width.value + unitOfMeasurement.value;
  block.style.height = height.value + unitOfMeasurement.value;
  block.style.color = document.body.append(block);
  block.setAttribute("contenteditable", "true");
  closeDialog5(event);
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
    openDialog1(event);
  }
});
