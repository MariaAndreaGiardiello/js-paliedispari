//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

// 1. creo una funzione per genrare il controllo della parola
function wordReverse(str){
    for ( let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
}

// 2. chiedo all'utente di inserire una parola
const word = prompt("Inserisci una parola!");

// 3. creo una costante per la parola invertita
let reversedWord = "";
console.log(reversedWord)

// 4. Creo ciclo if per verificare se la parola inserita, se invertita, risulta uguale (palindroma)
if ( word === reversedWord) {
    alert("La parola inserita risulta palindroma!!");
} else {
    alert("La parola inserita non risulta palindroma!!");
}

