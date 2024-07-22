/* 

    6 - Voglio generare una griglia di elementi, il cui numero è deciso dall'utente. Cliccando sulla singola cella,
        cambierà il colore di sfondo e verrà stampato il numero contenuto nella cella in console

*/

console.log('FUORI:', this);

funzioneACaso();

const cells = parseInt(prompt('Inserisci un numero:'));
console.log('cells', cells, typeof cells);

const gridContainer = document.getElementById('grid-container');

for (let i = 0; i < cells; i++) {
    const newCell = document.createElement('div');
    newCell.innerHTML = (i + 1);

    // newCell.addEventListener('click', handleClickOnCell);           // Uso la funzione che si chiama handleClickOnCell
    // newCell.addEventListener('click', handleClickOnCell());         // ERRORE: questo esegue la funzione durante l'aggiunta dell event listener

    // newCell.addEventListener('click', function () {
    //     /*
    //         Nel contesto dell'addEventListener, abbiamo a disposizione, all'interno della function che mi gestisce l'evento,
    //         una variabile speciale che è this
    
    //         this contiene il riferimento all'elemento che ha subito l'evento
    //     */
    //     console.log('this', this, typeof this);
    
    //     if (!this.classList.contains('gaetano')) {
    //         console.log(this.innerText);
    //     }
    
    //     this.classList.toggle('gaetano');
    // });

    newCell.addEventListener('click', () => {
        /*
            Nel contesto dell'addEventListener, abbiamo a disposizione, all'interno della function che mi gestisce l'evento,
            una variabile speciale che è this
    
            this contiene il riferimento all'elemento che ha subito l'evento
        */
        console.log('this', this, typeof this); // Non funziona come con la function ()

        if (!newCell.classList.contains('gaetano')) {
            console.log(newCell.innerText);
        }
    
        newCell.classList.toggle('gaetano');
    });

    gridContainer.append(newCell);
}



function funzioneACaso() {
    console.log(this);
}

function handleClickOnCell() {
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
}

const miaFunz = (name) => {
    console.log('Ciao ' + name + '!');

    3 * 4; // Questo NON è un return
};

const miaAltraFunz = () => /* return */ 3 * 4; // Questo è un return (implicito) -> quindi, restituisce 12

miaFunz('Alessandro');
console.log(miaAltraFunz());