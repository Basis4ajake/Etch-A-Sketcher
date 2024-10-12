const container = document.querySelector(".container")
let i = 0;
do { 
    const gridSquare = document.createElement("div");
    gridSquare.classList.toggle("gridSquare");
    container.appendChild(gridSquare);
    i++;
} while (i < 16);
