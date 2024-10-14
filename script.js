const container = document.querySelector(".container")
let gridSquare
let i = 0;
do { 
    gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare", `square-${i + 1}`, 'gridSquare:hover');
    gridSquare.addEventListener("mouseover", e => {
        // e.target.classList.toggle('mousedInto')
        console.log(e);
        console.log(e.target);
        e.target.style.backgroundColor = 'red';
    })
    container.appendChild(gridSquare);
    i++;
} while (i < 256);

console.dir(gridSquare)

const gridSquares = document.querySelectorAll(".gridsSquare")
console.log(Array.isArray(gridSquares))
const squareArray = [...gridSquares]
console.log(Array.isArray(squareArray))

// squareArray.forEach((gridSquare) => {
//         gridSquare.addEventListener("mouseover", e => {
//         e.target.classList.toggle('mousedInto');
//         console.log(e);
//     })
// });

// addEventListener("mouseover", e => {
//     e.target.classList.toggle('mousedInto');
//     console.log(e)
// });

