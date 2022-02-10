const container = document.getElementById('container');


const createRow = function(rowLength){
    for(let i = 0; i < rowLength; i++){
        const div = document.createElement('div');
        div.classList.add('gridBlock');
        div.textContent = '\u00a0';
        container.appendChild(div);
    }
}

const createGrid = function(size){
    createRow(size);
}