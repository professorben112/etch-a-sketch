function drawGrid(gridSize) {
  let gridContainer = document.querySelector('#gridContainer');
  let squareSize = gridContainer.clientWidth / gridSize;
  for(let i = 0; i < gridSize*gridSize; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.addEventListener('mouseover',drawSquare);
    gridContainer.append(square);
  }
}

function reset() {
  /*$('.square').removeClass('drawn');*/
  let square = $('.square');
  square.removeAttr('color-hex');
  square.removeAttr('shade');
  square.css('backgroundColor', '');
}

function clearGrid() {
  let gridContainer = document.querySelector('#gridContainer');
  gridContainer.innerHTML = '';
}

function drawSquare(e) {
  let backgroundColor = '';
  if(e.target) {
    /*if(e.target.classList.contains('drawn')) {*/
      /*e.target.classList.remove('drawn');*/
    if(e.target.hasAttribute('color-hex')) {
      if(parseInt(e.target.getAttribute('shade'))<100) {
        e.target.style.backgroundColor = shadeColor(e.target.getAttribute('color-hex'),-(parseInt(e.target.getAttribute('shade'))+10));
        e.target.setAttribute('shade',(parseInt(e.target.getAttribute('shade'))+10));
      }
    }
    else {
      /*e.target.classList.add('drawn');*/
      backgroundColor = RGBtoHex(getRandomInt(255),getRandomInt(255),getRandomInt(255));
      e.target.setAttribute('color-hex',backgroundColor);
      e.target.setAttribute('shade',0);
      e.target.style.backgroundColor = `${backgroundColor}`;
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

function shadeColor(color, percent) {
/*credit to https://stackoverflow.com/a/13532993 */
  var R = parseInt(color.substring(1,3),16);
  var G = parseInt(color.substring(3,5),16);
  var B = parseInt(color.substring(5,7),16);

  R = parseInt(R * (100 + percent) / 100);
  G = parseInt(G * (100 + percent) / 100);
  B = parseInt(B * (100 + percent) / 100);

  R = (R<255)?R:255;  
  G = (G<255)?G:255;  
  B = (B<255)?B:255;  

  R = Math.round(R)
  G = Math.round(G)
  B = Math.round(B)

  var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
  var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
  var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

  return "#"+RR+GG+BB;
}

function colorToHex(color) {
  /*credit to https://sabe.io/blog/javascript-rgb-hex */
  const hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function RGBtoHex(red, green, blue) {
  /*credit to https://sabe.io/blog/javascript-rgb-hex */
  return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
}

function getRandomInt(max) {
  /*credit to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
  return Math.floor(Math.random() * max);
}

document.addEventListener('DOMContentLoaded', (event) => {
  drawGrid(4);
  document.querySelector('#drawGridButton').addEventListener('click',promptGridSize);
  document.querySelector('#resetGridButton').addEventListener('click',reset);
  });

