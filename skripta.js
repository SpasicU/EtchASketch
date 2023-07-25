//Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");


defaultGrid();
//Creates a default grid sized 16x16 
function defaultGrid() {
    makeRows(64);
    makeColumns(64);
}

//Takes (rows, columns) input and makes a grid

function makeRows(rowNum) {
    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

//Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};
// const grid = document.querySelector('.grid');
// let gridValue = document.querySelector('.grid-size');
// let gridSize = 32;
// let squareSize = 8;

// createGrid(squareSize);

// // Create Squared Divs
// function createDiv(size) {
//   const div = document.createElement('div');
//   div.classList.add('box');
//   div.style.width = `${size}px`;
//   div.style.height = `${size}px`;

//   return div;
// }

// // Creat The Grid and append it to grid
// function createGrid(gridSize) {
//   for (let i = 0; i < gridSize; i++) {
//     for (let j = 0; j < gridSize; j++) {
//       grid.appendChild(createDiv(grid.clientWidth / gridSize));
//     }
//   }
// }








