const conv = require('./conversation');
const { produit } = require('./calcul');

conv.direBonjour();

console.log(conv.auteur);
conv.auteur = "coucou";
console.log(conv.auteur);

conv.direAurevoir();