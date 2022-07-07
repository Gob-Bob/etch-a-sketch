const body = document.querySelector('body');
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';

const container = document.createElement('div');
container.classList.add('container');
container.style.border = 'medium solid black'
container.style.display = 'grid';

function turnBlue() {
    this.style.backgroundColor = 'blue';
}

function addDivs(amount) {
    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.style.border = 'medium solid black';
        div.addEventListener('mouseover', turnBlue);
        container.appendChild(div);
    }
}

function gridSize(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 40px)`;
    container.style.gridTemplateRows = `repeat(${size}, 40px)`;
    addDivs(size * size);
    body.appendChild(container);
}

function removeBoxes() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.remove();
    });
}

function promptGridSize() {
    removeBoxes();
    let userInput = prompt("Please enter grid size (100 max):");
    while (userInput > 100) {
        userInput = prompt("Please enter grid size (100 max):");
    }
    gridSize(userInput);
}

const button = document.createElement('button');
button.textContent = 'Change Grid Size';
button.style.maxWidth = '150px';
button.style.margin = '5px';
button.addEventListener('click', promptGridSize);
body.appendChild(button);