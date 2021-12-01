const http = require("http");
const httpStatus = require("http-status-codes"); 
const evaluator = require('./evaluator')
const setEvaluationScale = require('./main')

const port = 3000; 
const app = http.createServer((request, response) => { 
    let studentGrade = evaluator.getGrade(81);
    response.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    }); 
    let responseMessage = `<h1>The grade of the student is: ${studentGrade} </h1>`;
    response.write(responseMessage); 
    response.end();
    console.log(responseMessage);
});

app.listen(port);



