function drawGrid(gridSize) {
  let gridContainer = $('#gridContainer');
  for(let i = 0; i < gridSize*gridSize; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover',drawSquare);
    gridContainer.append(square);
  }
}

function clearGrid() {
  let gridContainer = document.querySelector('#gridContainer');
  gridContainer.innerHTML = '';
}

function drawSquare(e) {
  if(e.target) {
    if(e.target.classList.contains('drawn')) {
      e.target.classList.remove('drawn');
    }
    else {
      e.target.classList.add('drawn');
    }
  }
}

function promptGridSize() {
  let gridSize = 0;
  do{
    gridSize = parseInt(window.prompt('Please enter the number of squares per side of grid:'), 10);
    if(gridSize) {
      clearGrid();
      drawGrid(gridSize);
    }
    }while(isNaN(gridSize) || gridSize > 100 || gridSize < 1);
}

document.addEventListener('DOMContentLoaded', (event) => {
  drawGrid(16);
  document.querySelector('#drawGridButton').addEventListener('click',promptGridSize);
  });

