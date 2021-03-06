/*
**Palindroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// Chiedo parola all'utente
const userWord = prompt("Inserisci una parola");
let result = false;

console.log("La parola inserita è: ", userWord);

let userWordReversed = wordReverser(userWord);

if (userWordReversed === userWord) {
    result = true;
}

console.log("Verifica se la parola inserita è palindroma... ", result);

// Funzione per check palindroma
// Descrizione: la funzione inverte l'ordine delle lettere della parola inserita, cosi da poter controllare se la parola resta la stessa, ergo se è palindroma
function wordReverser(word){
    return word.split("").reverse().join("");
}