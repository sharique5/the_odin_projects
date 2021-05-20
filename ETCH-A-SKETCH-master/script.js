let container = document.getElementById('container');
let gridButton = document.getElementById('grid-selector');
let resetButton = document.getElementById('reset');
let eraseButton = document.getElementById('erase');

let createDivs = (rows, columns) => {
    container.innerHTML = " ";
    let amountOfDivs = rows*columns; 
    for (let i = 0 ; i < amountOfDivs ; i++) {
        let div = document.createElement('div');
        div.className = "box";
        container.appendChild(div);
    }
    gridTemplate(rows, columns);
    randomColor();
}

// Changes the grid template according to the createDivs input.
let gridTemplate = (rows, columns) => {
    container.style.cssText = 'grid-template-rows: repeat(' + rows +  ', 1fr);';
    container.style.cssText = 'grid-template-columns: repeat('+ columns +', 1fr);';
}

// Invokes createDivs according to user prompt when the grid selector button is clicked.
let changeGrid = () => {
    let rows = window.prompt('Enter the new number of rows.');
    while (isNaN(parseInt(rows))) {
        rows = window.prompt('Incorrect!! Enter the new number of rows.');
    }
    let columns = window.prompt('Enter the new number of columns.');
    while (isNaN(parseInt(columns))) {
        columns = window.prompt('Incorrect!! Enter the new number of columns.');
    }
    createDivs (rows, columns);
}

// Resets the grid establishing all the box to white and returning to black boxes.
let resetGrid = () => {
    let boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.cssText = 'background-color: rgb(255, 255, 255);';
    }
    randomColor();
}


// Erases the color changing it to white.
let eraseBox = () => {
    let boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].onmouseover = function(e) {
            this.style['background-color'] = 'rgb(255, 255, 255)';
        }  
    }
}

//Define a random color to the boxes.
let randomColor = () => {
    let boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].onmouseover = function(e) {
            let color = '#'+Math.floor(Math.random()*16777215).toString(16);
            this.style['background-color'] = color;
        }  
    }
}

// createDivs(8,8);
changeGrid();
gridButton.addEventListener('click', changeGrid);
resetButton.addEventListener('click', resetGrid);
eraseButton.addEventListener('click', eraseBox);
