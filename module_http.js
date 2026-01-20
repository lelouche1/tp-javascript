const http = require('http');
const { parse } = require('querystring');
http.createServer((request, response) => {

  if (request.method === 'POST') {
    let body = '';

    request.on('data', (chunk) => {
      body += chunk.toString();
    });

    request.on('end', () => {
      let data = parse(body);
      console.log("Données reçues de l'URL :", request.url);
      console.log('Données du formulaire :', data);

      response.write('Données reçues ' + JSON.stringify(data));
      response.end();
    });

  } else {
    response.write('Reponse HTTP par défaut');
    response.end();
  }

}).listen(8080);
