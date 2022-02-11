let gridSize = 16;

const createRow = function(size){
    const container = document.getElementById('container');
    container.style.setProperty('--boxSize', gridSize);

    for(let i = 0; i < size; i++){
        const gridItem = document.createElement('griditem');
        gridItem.classList.add('gridBlock');
        gridItem.textContent = '\u00a0';
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



// Create reset button function
const reset = function(newSize){

};


createGrid(gridSize);