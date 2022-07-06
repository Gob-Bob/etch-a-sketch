const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');

body.appendChild(container)

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

function func() {  
   grid.setAttribute("style", "background-color:blue;")
}

const gridNode = document.querySelectorAll('grid-item');
gridNode.forEach((grid) => {
    grid.addEventListener('mouseover', func(), false);
    }
);