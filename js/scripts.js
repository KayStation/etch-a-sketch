let gridSize = 16;

const createRow = function(size){
    const container = document.getElementById('container');
    container.style.setProperty('--boxSize', size);


    for(let i = 0; i < size; i++){
        const gridItem = document.createElement('griditem');
        gridItem.classList.add('gridBlock');
        container.appendChild(gridItem);
    };

}


const addMouseoverToBlock = function(){
    gridBlock = document.getElementsByClassName('gridBlock');
    for(i in gridBlock){
        gridBlock[i].addEventListener('mouseover', function(){
            this.classList.add('hovered');
            // This generates an error saying that the AddEventListener is not a function.
            // This is because this script runs prior to being able to access the 
            // gridBlock items.
            // Maybe figure out a way to fix this, but error doesn't cause real issues.
        });
    };
}


const createGrid = function(size){
    for(let i = 0; i < size; i++){
        createRow(size);
    };

    addMouseoverToBlock();
};



const btn = document.getElementById('resetButton');
btn.addEventListener('click', function reset(){
    let newGridSize = prompt('Please enter a new box size. (Max 100)', '16');
    while(newGridSize == null || newGridSize > 100){
        newGridSize = prompt('Please choose a valid size. (Max 100)');
    };

    document.getElementById("container").remove();

    const container = document.createElement('div');
    container.id = 'container'
    document.body.appendChild(container);

    createGrid(newGridSize);
});


createGrid(gridSize);