const container = document.querySelector(".container")
let gridSquare
let setGridNumber

function getGridNumber() {
    setGridNumber = prompt('How many squares should the grid sides be? Enter a number less than 100');
    console.log(setGridNumber);
    console.dir(setGridNumber);
    return setGridNumber;
}

const colors = ["red", "green", "blue", "yellow", "teal", "black", "orange", "purple", "goldenrod", "maroon", "aquamarine", "brown", 
"indigo", "violet"];

const hexColorCharacters = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function getHexCharacters(){
    let randomChoice = Math.floor(Math.random() * (hexColorCharacters.length - 1));
    return hexColorCharacters[randomChoice]
}

function getRandomHexColor(){
    let hexDigitOne = getHexCharacters();
    let hexDigitTwo = getHexCharacters();
    let hexDigitThree = getHexCharacters();
    let hexDigitFour = getHexCharacters();
    let hexDigitFive = getHexCharacters();
    let hexDigitSix = getHexCharacters();
    return randomHexColor = "#" + hexDigitOne +  hexDigitTwo + hexDigitThree + hexDigitFour + hexDigitFive + hexDigitSix + "";
}

function getColor() {
    let randomColorChoice = Math.floor(Math.random() * (colors.length - 1));
    console.log(colors[randomColorChoice]);
    return colors[randomColorChoice];
};

let gridNumber = getGridNumber();
let i = 0;
do { 
    gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");

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
        e.target.style.backgroundColor = getRandomHexColor();
    })
    container.appendChild(gridSquare);
    i++;
} while (i < gridNumber);

console.dir(gridSquare)


