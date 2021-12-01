const { appendFile } = require('fs');
const http = require('http');
const httpStatus = require('http-status-codes');

const port = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);

    let body = [];

    req.on('data', (data) => {
        body.push(data);
    });

    req.on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(`The length of the requested body contents is ${body.length}`);
    });

    res.writeHead(httpStatus.OK, {
        'Content-Type': "text/html"
    });
    let responseMessage = 
        "<h1>This is a successful header!</h1>";

    res.end(responseMessage);
});

server.listen(port);



