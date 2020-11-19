const container = document.querySelector('.container');
const colorBackground = document.querySelector('.color-background');
const blackBackground = document.querySelector('.black-background');
const grayBackground = document.querySelector('.gray-background');
const resetBoard = document.querySelector('.reset-board');
const form = document.querySelector('form');
const buttons = document.querySelectorAll('button');
const cellsNumber = document.querySelector('.current-num-of-cells');
const warningMessage = document.querySelector('.warning-message');

// current color
let backgroundColor = 'black';


// FUNCTIONS ********

// render table
const createCells = (numberOfCells) => {
  let opacity = 1;
  container.style.setProperty('--rows', numberOfCells);
  container.style.setProperty('--columns', numberOfCells);
  let cells = numberOfCells * numberOfCells;
  for(let i = 0; i < cells; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    cell.style.setProperty('opacity', opacity);
    container.appendChild(cell);
  }
  
  cellsNumber.textContent = numberOfCells;
}

// color functions
const randomColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  let backgroundColor = `rgb(${r},${b},${g})`;
  return backgroundColor;
}


const blackColor = () => {
  let blackBackground = `rgb(0,0,0)`;
  return blackBackground;
}

const grayColor = (el) => {
  let opacity = 4;
  let grayBackgrooundColor = `rgba(0,0,0,0.${opacity})`;
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
        e.target.style.backgroundColor = randomColor(); 
        break;  
    }
  }
});

// reset board
const resetCells = () => {
  let cells = container.children;
  let cellsArray = [].slice.call(cells);
  cellsArray.forEach(cell => {
    cell.style.backgroundColor = 'transparent';
  });
}


// LISTENERS **************
// reset btn
resetBoard.addEventListener('click', () => {
  resetCells();
  removeActiveClass();
  backgroundColor = 'black';
  blackBackground.classList.add('active');
});

const removeActiveClass = () => {
  buttons.forEach( btn => {
    btn.classList.remove('active');
  });
}

// color btn listeners
colorBackground.addEventListener('click', (e) => {
  backgroundColor = 'random';

  removeActiveClass();
  e.target.classList.add('active');
});

blackBackground.addEventListener('click', (e) => {
  backgroundColor = 'black';
  removeActiveClass();
  e.target.classList.add('active');
});

grayBackground.addEventListener('click', (e) => {
  backgroundColor = 'gray';
  removeActiveClass();
  e.target.classList.add('active');
});


form.addEventListener('submit', (e) => {
  e.preventDefault();
  resetCells();

  let cells = form[0].value;
  form.reset();
  if(cells > 3 && cells <= 100) {
    createCells(cells);
    warningMessage.textContent = '';
  } else {
    warningMessage.textContent = 'Please enter number between 4 and 100!';
  }
});

createCells(16);
