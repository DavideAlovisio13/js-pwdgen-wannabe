// alert() 

// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito

// nome
// cognome
// colore preferito
//collegamento a #container
//inserimento valori (nomecognomecolorepreferito)

let userFirstName = prompt("Come ti chiami?");
let userLastName = prompt("Qual è il tuo cognome?");
let userColor = prompt("...e il tuo colore preferito?");
console.log(userFirstName)
console.log(userLastName)
console.log(userColor)
document.getElementById('container').innerHTML = `${userFirstName}${userLastName}${userColor}`