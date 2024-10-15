const container = document.querySelector(".container")
let gridSquare
let setGridNumber

function getGridNumber() {
    setGridNumber = prompt('How many squares should the grid sides be? Enter a number less than 100');
    console.log(setGridNumber);
    console.dir(setGridNumber);
    return gridArea = setGridNumber * setGridNumber;
}

const colors = ["red", "green", "blue", "yellow", "teal", "black", "orange", "purple", "goldenrod", "maroon", "aquamarine", "brown", 
"indigo", "violet"];

function getColor() {
    randomColorChoice = Math.floor(Math.random() * colors.length - 1);
    console.log(colors[randomColorChoice]);
    return colors[randomColorChoice];
};

let gridNumber = getGridNumber();

let i = 0;
do { 
    gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare", `square-${i + 1}`, 'gridSquare:hover');
    gridSquare.addEventListener("mouseover", e => {
        // e.target.classList.toggle('mousedInto')
        console.log(e);
        console.log(e.target);
        console.dir(e)
        console.dir(e.type)
        console.dir(e.target)
        console.dir(e.timeStamp)
        console.dir(e)
        e.target.style.backgroundColor = getColor();
    })
    container.appendChild(gridSquare);
    i++;
} while (i < gridNumber);

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

