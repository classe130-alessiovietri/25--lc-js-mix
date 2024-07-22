/* 

    5 - Voglio generare una griglia di elementi, il cui numero è deciso dall'utente

*/

const cells = parseInt(prompt('Inserisci un numero:'));
console.log('cells', cells, typeof cells);

const gridContainer = document.getElementById('grid-container');

for (let i = 0; i < cells; i++) {
    const newCell = document.createElement('div');
    newCell.innerHTML = (i + 1);

    gridContainer.append(newCell);
}