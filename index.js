/*
const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World !");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
*/
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/' (req,res) => req.send(process.env));
app.listen (port, () => console.log('server is running on port' + port));
