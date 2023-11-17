function drawGrid(numSquares) {
  let gridContainer = $('#gridContainer');
  for(let i = 0; i < numSquares*numSquares; i++) {
    gridContainer.append("<div class='square' style></div>");
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  drawGrid(16);
  });