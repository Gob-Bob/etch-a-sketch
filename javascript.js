const body = document.querySelector('body');

function createGridBlock(amount) {
    for (let i = 0; i < amount; i++) {
        const gridBlock = document.createElement('div');
        gridBlock.textContent = '[ ]';
        body.appendChild(gridBlock);
    }
}

createGridBlock(16);