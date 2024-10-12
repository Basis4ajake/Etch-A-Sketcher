const container = document.querySelector(".container")
let gridSquare
let i = 0;
do { 
    gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare", `square-${i + 1}`, 'gridSquare:hover');
    container.appendChild(gridSquare);
    i++;
} while (i < 256);

gridSquare.addEventListener("onhover", () => {
    gridSquare.setAttribute("style", "background-color: green;");
    console.log(gridSquare.classList)
});

console.log(gridSquare)