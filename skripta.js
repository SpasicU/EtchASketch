//Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
const button = document.getElementById("velicina");
const div = document.getElementsByTagName("div")[0];

function gridSize(){
  let size;
  let text;
  let p = prompt("Please the size:", "64");
  if (p == null || p == "" || p > 100) {
    text = "Your input was empty or too large, please try again.";
    document.getElementById("text").innerHTML = text;
  } else {
    size = p;
    //return size;
  }
  removeGrid(container);
  defaultGrid(size);
  
}

// had to add event delegation so it works wihout the need for page refresh
div.addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON') {
    gridSize();
  }
})


//Creates a grid 
function defaultGrid(size) {
    makeRows(size);
    makeColumns(size);
}

//removing all childrens from container, which means removing gridRows and thus removing the grid itself
function removeGrid(parent){
  while (parent.firstChild) {
    parent.removeChild(container.firstChild);
  }
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

// Used event delegation to target children of the grid
container.addEventListener('mouseover', function (e) {
  // Add the "active" class to only divs with a "cell" class
  if (e.target.matches('.cell')) {
    e.target.classList.add('active');
  }
});
