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

function addDivs(amount) {
    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.style.border = 'medium solid black';
        // div.textContent = 'DIV';
        container.appendChild(div);
    }
}
addDivs(256);

body.appendChild(container);

// function createBox(row, column) {
//     for (let i = 0; i < column; i++) {
//         for (let j = 0; j < row; j++) {
//             const object = document.createElement('div');
//             object.classList.add('object');

//             object.style.border = 'medium solid black';
//             object.style.width = '100px';
//             object.style.height = '100px';

//             container.appendChild(object);
//         }
//     }
// }

// createBox(2, 2);

// function turnBlue() {
//     this.style.backgroundColor = 'blue';
// }

// const boxNodeList = document.querySelectorAll('.object');
// boxNodeList.forEach(item => {
//     item.addEventListener('mouseover', turnBlue)
// });