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

// Creates a grid out of createRow, and runs hover events to all gridItems.
const createGrid = function(size){
    for(let i = 0; i < size; i++){
        createRow(size);
    };

    addMouseoverToBlock();
};


// This is the reset button.
const btn = document.getElementById('resetButton');
btn.addEventListener('click', function reset(){
    let newGridSize = prompt('Please enter a new box size. (Max 60)', '16');
    while(newGridSize == null || newGridSize > 60){
        newGridSize = prompt('Please choose a valid size. (Max 100)');
    };

    // Remove original container, and then create a new one.
    document.getElementById("container").remove();

    const container = document.createElement('div');
    container.id = 'container'
    document.body.appendChild(container);

    createGrid(newGridSize);
});


// Runs the default page.
createGrid(gridSize);