/* 

    3 - Voglio generare un array, di lunghezza definita dall'utente, di numeri casuali compresi
        in un intervallo definito dall'utente. Il tutto, con un solo prompt

*/

const arrLength = parseInt(prompt('Inserisci un numero:'));
const numbers = [];
for (let i = 0; i < arrLength; i++) {
    const rndNumber = getRndInteger(1, arrLength);

    numbers.push(rndNumber);
}

console.log('numbers', numbers, numbers.length, typeof numbers);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}