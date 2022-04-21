/*
**Palindroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// Chiedo parola all'utente
let userWord = prompt("Inserisci una parola");
let result = false;

console.log(userWord);
palindrometro(userWord);

if (palindrometro(userWord) === userWord) {
    result = true;
}

console.log("Verifica se la parola inserita è palindroma: ", result);

// Funzione per check palindroma
function palindrometro(word){
    return word.split("").reverse().join("");
}