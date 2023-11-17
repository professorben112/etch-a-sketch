function drawGrid(numSquares) {
  let gridContainer = $('#gridContainer');
  for(let i = 0; i < numSquares; i++) {
    gridContainer.append("<div class='square'></div>");
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  drawGrid(16);
  });