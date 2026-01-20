const http = require('http');

http.createServer((request,Response) => {
    Response.write("premiere requete http avec nodes JS")
    Response.end()
}).listen(8080);