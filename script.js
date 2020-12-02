const container = document.querySelector('.container');
const colorBackground = document.querySelector('.color-background');
const blackBackground = document.querySelector('.black-background');
const grayBackground = document.querySelector('.gray-background');
const resetBoard = document.querySelector('.reset-board');
const form = document.querySelector('form');
const buttons = document.querySelectorAll('button');
const cellsNumber = document.querySelector('.current-num-of-cells');
const warningMessage = document.querySelector('.warning-message');
const range = document.querySelector('.range');

// current color
// FUNCTIONS ********
// // render table

const createCells = (numberOfCells) => {
  container.style.setProperty('--rows', numberOfCells);
  container.style.setProperty('--columns', numberOfCells);
  let cells = numberOfCells * numberOfCells;
  for(let i = 0; i < cells; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    container.append(cell);
  }
  
  cellsNumber.textContent = `${numberOfCells} x ${numberOfCells}`;
}

// create default grid
createCells(30);



// color functions
const blackColor = () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach( cell => {
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = `rgb(0,0,0)`;
      cell.style.opacity = "1";
    });
  });
}

const randomColor = () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach( cell => {
    cell.addEventListener('mouseover', (e) => {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      cell.style.backgroundColor = `rgb(${r},${g},${b})`;

      cell.style.opacity = "1";
    });
  });
}

//call for  default color 
blackColor();


const grayColor = () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach( cell => {
    let gradient = 0;
    cell.addEventListener('mouseover', (e) => {
      function opacity () {
        gradient += 0.1;
        return gradient;
      }
      cell.style.backgroundColor = `rgba(0,0,0,${opacity()})`;
    });
  });
}


// reset board
const resetCells = () => {
  container.innerHTML = '';
  blackColor();
}


// LISTENERS **************
// reset btn
resetBoard.addEventListener('click', () => {
  resetCells();
  createCells(30);
  blackColor();
  removeActiveClass();
  range.value = 30;
  blackBackground.classList.add('active');
});

// remove active class
const removeActiveClass = () => {
  buttons.forEach( btn => {
    btn.classList.remove('active');
  });
}


// // COLOR BTN LISTENERS *********************

// random background
colorBackground.addEventListener('click', (e) => {
  randomColor();
  removeActiveClass();
  e.target.classList.add('active');
});


// black background
blackBackground.addEventListener('click', (e) => {
  blackColor();
  removeActiveClass();
  e.target.classList.add('active');
});


// gradient background
grayBackground.addEventListener('click', (e) => {
  grayColor();
  removeActiveClass();
  e.target.classList.add('active');
});


range.addEventListener('change', (e) => {
  resetCells();
  createCells(e.target.value);
  blackColor();
});






