

const createRow = function(rowLength){
    const container = document.getElementById('container');
    const hr = document.createElement('hr');

    for(let i = 0; i < rowLength; i++){
        const div = document.createElement('div');
        div.classList.add('gridBlock');
        div.textContent = '\u00a0';
        container.appendChild(div);
    };
    
    container.appendChild(hr);
}

const createGrid = function(size){
    for(let i = 0; i < size; i++){
        createRow(size);
    };
};

createGrid(15);