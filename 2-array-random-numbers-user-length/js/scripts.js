/* 

    2 - Voglio generare un array, di lunghezza definita dall'utente, di numeri casuali

*/

const arrLength = parseInt(prompt('Quanti elementi deve avere l\'array?'));
const numbers = [];
for (let i = 0; i < arrLength; i++) {
    const rndNumber = getRndInteger(1, 100);

    numbers.push(rndNumber);
}

console.log('numbers', numbers, numbers.length, typeof numbers);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}