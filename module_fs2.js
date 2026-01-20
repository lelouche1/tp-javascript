const readline = require ('readline');
const fs = require ('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Texte à écrire dans un fichier : ',(data)=>{
  fs.writeFile('saisie.txt',data,'utf-8', (err) =>{
    if(err){
      console.log("Erreur écriture fichier "+err);
    }
  });
  rl.close();
});
