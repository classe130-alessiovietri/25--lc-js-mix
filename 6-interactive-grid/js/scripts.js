/* 

    6 - Voglio generare una griglia di elementi, il cui numero è deciso dall'utente. Cliccando sulla singola cella,
        cambierà il colore di sfondo e verrà stampato il numero contenuto nella cella in console

*/

const cells = parseInt(prompt('Inserisci un numero:'));
console.log('cells', cells, typeof cells);

const gridContainer = document.getElementById('grid-container');

for (let i = 0; i < cells; i++) {
    const newCell = document.createElement('div');
    newCell.innerHTML = (i + 1);

    newCell.addEventListener('click', function () {
        /*
            Nel contesto dell'addEventListener, abbiamo a disposizione, all'interno della function che mi gestisce l'evento,
            una variabile speciale che è this

            this contiene il riferimento all'elemento che ha subito l'evento
        */
        console.log('this', this, typeof this);

        if (!this.classList.contains('gaetano')) {
            console.log(this.innerText);
        }

        this.classList.toggle('gaetano');
    });

    gridContainer.append(newCell);
}