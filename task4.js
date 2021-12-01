const http = require("http");
const httpStatus = require("http-status-codes"); // Requires the module "http-status-codes"

const port = 3000; // Runs this application on port 3000
const app = http.createServer((request, response) => { // Creates a web server object
    console.log("Received an incoming request!");
    response.writeHead(httpStatus.OK, { // Writes the header of the response (OK)
        "Content-Type": "text/html"
    }); 
    let responseMessage = "<h1>Hello, Universe!</h1>";
    response.write(responseMessage); // Webpage writes (displays) the variable created above
    response.end(); // Stops the webpage from displaying anything else
    console.log(`Sent a response : ${responseMessage}`);
});

app.listen(port); // Listens for connections on the given path (Port 3000)