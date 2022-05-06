//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

// 1. creo una funzione per la realizzazione dei numeri random
function randomNumber(min,max){
    return Math.floor((Math.random() * (max-min)) +min);
}

// 2. creo una funzione per stabilire se è pari o dispari
function evenOdd(numero){
    if ( numero % 2 === 0) {
        return true;
    } else if ( numero % 2 === 1) {
        return false;
    }
}

// 3. creo costante per richiesta all'utente (tramite prompt) scelta pari o dispari. 
const chooseEveneOdd = prompt("Scegli PARI o DISPARI")
console.log(chooseEveneOdd);

// 4. creo costante per richiesta all'utente (tramite prompt) scelta numero da 1 a 5.
const chooseNumber = Number(prompt("Inserisci un numero da 1 a 5"));
console.log(chooseNumber);

// 5. creo un array che contenga i numeri per la generazione random del sistema.
const number = randomNumber[1,2,3,4,5];
console.log(number)

// 6. creo variabile per realizzare la somma dei due numeri inseriti
let sum = number + chooseNumber;
