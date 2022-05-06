//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

// 1. creo una funzione per la realizzazione dei numeri random
function randomNumber(min,max){
    return Math.floor((Math.random() * (max-min)) +min);
}

// 2. creo una funzione per stabilire se la somma dei 2 numeri è pari o dispari
function evenOdd(numero){
    if ( numero % 2 === 0) {
        return true;
    } else if ( numero % 2 === 1) {
        return false;
    }
}