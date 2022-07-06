const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container)

const object = document.createElement('div');
object.classList.add('object');

object.style.border = 'medium solid black';
object.style.width = '100px';
object.style.height = '100px';

function turnBlue() {
    object.style.backgroundColor = 'blue';
}

object.addEventListener('mouseover', turnBlue);

container.appendChild(object);

