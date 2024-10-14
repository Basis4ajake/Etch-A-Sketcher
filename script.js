const container = document.querySelector(".container")
let gridSquare
let i = 0;
do { 
    gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare", `square-${i + 1}`, 'gridSquare:hover');
    gridSquare.addEventListener("mouseover", e => {
        e.target.classList.toggle('mousedInto')
        console.log(e);
    })
    container.appendChild(gridSquare);
    i++;
} while (i < 256);

const gridSquares = document.querySelectorAll(".gridsSquare")
gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener("mouseover", e => {
        e.target.classList.toggle('mousedInto');
        console.log(e);
    })
});

// addEventListener("mouseover", e => {
//     e.target.classList.toggle('mousedInto');
//     console.log(e)
// });

