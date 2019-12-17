// il tuo nome e cognome
var nomeUtente = prompt('il tuo nome?');
console.log(nomeUtente);
var cognomeUtente = prompt('il tuo cognome?');
console.log(cognomeUtente);
// colore preferito
var colorePreferito = prompt('il tuo colore preferito?');
console.log(colorePreferito);
document.getElementById('nome-utente').innerHTML ='Nome:' + nomeUtente;
document.getElementById('cognome-utente').innerHTML ='Cognome:' + cognomeUtente;
document.getElementById('colore-preferito').innerHTML ='Colore Preferito:' + colorePreferito;
