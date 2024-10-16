const container = document.querySelector(".container")
let gridSquare
let gridRow

function getGridNumber() {
    let setGridNumber = prompt('How many squares should the grid sides be? Enter a number less than 100');
    if (setGridNumber > 100) {
        checkGridNumber()
    }
    console.log(setGridNumber);
    console.dir(setGridNumber);
    return setGridNumber;
}

function checkGridNumber(){
    do {
        setGridNumber = prompt(`You entered either a word or a number higher than 100. You entered ${setGridNumber}. Please try again. Enter a number less than 100 to set the number of squares per side`);

    } while (setGridNumber > 100);
}

/* Select a random Hex Color */
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

let gridNumber = getGridNumber();

for (let i = 0; i < gridNumber; i++) {        //Loop to create Grid Rows and attach to Container. Number of Grid rows determined by user provided grid number
    gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    gridRow.setAttribute("style", "display: flex; flex: 1; flex-flow: wrap;")
    container.appendChild(gridRow);
    for (let i = 0; i < gridNumber; i++) {     //Nested loop to create grid squares and attach group of grid squares to each grid Row. 
        gridSquare = document.createElement("div");    //Number of grid squares per row also determined by user provided grid number.
        gridSquare.classList.add("gridSquare", `square-${i + 1}`, 'gridSquare:hover');
        gridSquare.addEventListener("mouseover", e => {
        console.log(e);       
        console.log(e.target);
        console.dir(e)
        console.dir(e.type)
        console.dir(e.target)
        console.dir(e.timeStamp)
        console.dir(e)
        e.target.style.backgroundColor = getRandomHexColor();
            })
    gridRow.appendChild(gridSquare);
    }; 
};


// do { 
//     gridSquare = document.createElement("div");
//     gridSquare.classList.add("gridSquare", `square-${i + 1}`, 'gridSquare:hover');
//         gridSquare.addEventListener("mouseover", e => {
//         // e.target.classList.toggle('mousedInto')
//         console.log(e);
//         console.log(e.target);
//         console.dir(e)
//         console.dir(e.type)
//         console.dir(e.target)
//         console.dir(e.timeStamp)
//         console.dir(e)
//         e.target.style.backgroundColor = getRandomHexColor();
//     })
//     container.appendChild(gridSquare);
//     i++;
// } while (i < gridNumber);

console.dir(gridSquare)

function createGridRows(){
    let gridNumber = getGridNumber();
    for (i = 0; i < gridNumber; i++) {
        gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        container.appendChild(gridRow);
    }
}

function createSquaresInRows(){
    let gridRows = document.querySelectorAll(gridRow)
    for (row of gridRows) {
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
        e.target.style.backgroundColor = getRandomHexColor();
    })
    gridRow.appendChild(gridSquare)
    // container.appendChild(gridSquare);
    i++;
    } while (i < gridNumber);
};
};
