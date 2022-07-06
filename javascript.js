const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container)



function createBox(boxNum) {
    for (let i = 0; i < boxNum; i++) {
        const object = document.createElement('div');
        object.classList.add('object');

        object.style.border = 'medium solid black';
        object.style.width = '100px';
        object.style.height = '100px';

        container.appendChild(object);
    }
}

createBox(16);

function turnBlue() {
    this.style.backgroundColor = 'blue';
}

const boxNodeList = document.querySelectorAll('.object');
boxNodeList.forEach(item => {
    item.addEventListener('mouseover', turnBlue)
});