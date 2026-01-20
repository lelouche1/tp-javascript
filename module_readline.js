const readline = require('readline');

    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    });


    rl.question('entrer quelque chose : ', (data) => {
        console.log("vous avez tapé : "+data)
        rl.close();
    } 
)
