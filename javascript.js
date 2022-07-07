const body = document.querySelector('body');
const container = document.createElement('div');

body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignContent = 'center';

container.classList.add('container');
container.style.border = 'medium solid black'
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(16, 40px)';
container.style.gridTemplateRows = 'repeat(16, 40px)';

function turnBlue() {
    this.style.backgroundColor = 'blue';
}

function addDivs(amount) {
    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.style.border = 'medium solid black';
        div.addEventListener('mouseover', turnBlue);
        container.appendChild(div);
    }
}
addDivs(256);

body.appendChild(container);