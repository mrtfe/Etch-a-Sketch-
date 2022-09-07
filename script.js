const BOX_CONTAINER = document.querySelector(".sketch-box__container");
const CLEAT_BTN = document.querySelector(".clear-btn");

function createGrid() {
  for (i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("one-box");
    BOX_CONTAINER.appendChild(square);
    square.style.border = "1px solid black";
    square.style.width = "20px";
    square.style.height = "20px";
    square.style.backgroundColor = "white";
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "grey";
    });
  }
}
createGrid();

function clearDeck() {
  BOX_CONTAINER.innerHTML = "";
  for (i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("one-box");
    BOX_CONTAINER.appendChild(square);
    square.style.border = "1px solid black";
    square.style.width = "20px";
    square.style.height = "20px";
    square.style.backgroundColor = "white";
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "grey";
    });
  }
}

CLEAT_BTN.addEventListener("click", clearDeck);
