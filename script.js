const container = document.querySelector('.container');
const colorBackground = document.querySelector('.color-background');
const blackBackground = document.querySelector('.black-background');
const grayBackground = document.querySelector('.gray-background');
const resetBoard = document.querySelector('.reset-board');
const form = document.querySelector('form');

// current color
let backgroundColor = 'black';


// FUNCTIONS ********

// render table
const createCells = (numberOfCells) => {
  container.style.setProperty('--rows', numberOfCells);
  container.style.setProperty('--columns', numberOfCells);
  let cells = numberOfCells * numberOfCells;
  for(let i = 0; i < cells; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    container.appendChild(cell);
  }
}

// color functions
const randomColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  let backgroundColor = `rbg(${r}${b}${g})`;
  return backgroundColor;
}


const blackColor = () => {
  let blackBackground = `rbg(0,0,0)`;
  return blackBackground;
}

const grayColor = () => {
  let alpha = 1;
  let grayBackgrooundColor = `rgba(0,0,0,0.${alpha})`;
  return grayBackgrooundColor;
}


// change background of cells
container.addEventListener('mouseover', (e) => {
  if(e.target.classList.contains('cell')){
    switch(backgroundColor) {
      case 'black':
        e.target.style.backgroundColor = blackColor();
        break;
      case 'gray':
        e.target.style.backgroundColor = grayColor();
        break;
      case 'random':
        e.target.style.backgroundColor = grayColor(); 
        break;  
    }
  }
});

// reset board
const reset = () => {
  let cells = container.children;
  let cellsArray = [].slice.call(cells);
  cellsArray.forEach(cell => {
    cell.style.backgroundColor = 'transparent';
  });
}



// LISTENERS **************



