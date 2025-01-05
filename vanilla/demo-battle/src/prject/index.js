document.addEventListener("DOMContentLoaded", () => {
  let selected = null;
  let isDragging = false;
  const Army = document.querySelectorAll(".army");

  Army.forEach((element) => {
    element.onclick = (e) => {
      e.stopPropagation();
      selected = element;
      isDragging = true;
    };
  });

  document.addEventListener("mousedown", () => {
    if (selected !== null) {
      selected = null;
      isDragging = false;
    }
  });

  document.addEventListener("mousemove", (e) => {
    if (selected !== null && isDragging) {
      const x = e.clientX;
      6;
      const y = e.clientY; // Corrected to clientY for vertical movement
      selected.style.position = "absolute"; // Ensure the element is positioned absolutely
      selected.style.top = `${y}px`; // Corrected to move based on vertical position
      selected.style.left = `${x}px`; // Corrected to move based on horizontal position
    }
  });
});
