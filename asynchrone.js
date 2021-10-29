const fichier = require('fs');

console.log("bonjour");

fichier.readFile("montexte.txt", function(error, texte) {
    console.log("le texte:" + texte);
});






console.log("aurevoir");