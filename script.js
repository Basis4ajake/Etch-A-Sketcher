const container = document.querySelector(".container");
const gridSizeInput = document.querySelector("#gridSize");
const gridSizeValue = document.querySelector("#gridSizeValue");
const newGridButton = document.querySelector("#newGrid");
const clearGridButton = document.querySelector("#clearGrid");

const hexDigits = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function getRandomHexColor() {
  return `#${Array.from({ length: 6 }, () => hexDigits[Math.floor(Math.random() * hexDigits.length)]).join("")}`;
}

function createGrid(gridNumber = Number(gridSizeInput.value)) {
  if (!gridNumber || gridNumber < 1) {
    gridNumber = 16;
  }
  gridNumber = Math.min(Math.max(gridNumber, 8), 64);

  deleteGrid();
  container.style.gridTemplateColumns = `repeat(${gridNumber}, minmax(0, 1fr))`;

  for (let index = 0; index < gridNumber * gridNumber; index += 1) {
    const gridSquare = document.createElement("div");
    gridSquare.className = "gridSquare";
    gridSquare.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = getRandomHexColor();
    });
    container.appendChild(gridSquare);
  }
}

function deleteGrid() {
  container.innerHTML = "";
}

function clearGrid() {
  container.querySelectorAll(".gridSquare").forEach((square) => {
    square.style.backgroundColor = "";
  });
}

function refreshGridValue() {
  gridSizeValue.textContent = gridSizeInput.value;
}

gridSizeInput.addEventListener("input", refreshGridValue);
newGridButton.addEventListener("click", () => createGrid(Number(gridSizeInput.value)));
clearGridButton.addEventListener("click", clearGrid);

refreshGridValue();
createGrid();
