/* 

    4 - Voglio generare un array, di lunghezza definita dall'utente, di numeri casuali TUTTI DIVERSI compresi
        in un intervallo definito dall'utente. Il tutto, con un solo prompt

*/

const arrLength = parseInt(prompt('Inserisci un numero:'));
const numbers = [];
// for (let i = 0; i < arrLength; i++) {
//     const rndNumber = getRndInteger(1, arrLength);

//     console.log(rndNumber);

//     if (!numbers.includes(rndNumber)) {
//         numbers.push(rndNumber);
//     }
// }

// let i = 0;
// while (i < arrLength) {
//     const rndNumber = getRndInteger(1, arrLength);

//     console.log(rndNumber);

//     if (!numbers.includes(rndNumber)) {
//         numbers.push(rndNumber);
//         i++;
//     }
// }

for (let i = 0; i < arrLength; i++) {
    // let rndNumber = getRndInteger(1, arrLength);
    // console.log(rndNumber);
    
    // while (numbers.includes(rndNumber)) {
    //     rndNumber = getRndInteger(1, arrLength);
    //     console.log(rndNumber);
    // }

    let rndNumber;
    do {
        rndNumber = getRndInteger(1, arrLength);
        console.log(rndNumber);
    } while (numbers.includes(rndNumber));

    numbers.push(rndNumber);
}

console.log('numbers', numbers, numbers.length, typeof numbers);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}