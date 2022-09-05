console.log("script is loaded");

const BOX = document.querySelector(".sketch-box__container");
const square = document.querySelectorAll(".one-grid");

function createGrid() {
  for (i = 0; i < 256; i++) {
    const square = document.createElement("div");
    BOX.appendChild(square);
    square.style.border = "1px solid black";
    square.style.width = "20px";
    square.style.height = "20px";
    square.style.backgroundColor = "white";
    square.classList.add = "one-grid";
  }
}

createGrid();

console.log(square);

// square.addEventListener("mouseover", (e) => {
//   square.style.backgroundColor = "grey";
// });
