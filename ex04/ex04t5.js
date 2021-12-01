const express = require('express');

const port = 3000;
const app = express();

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
});

app.listen(port, () => {
    console.log(`Our express web server has started in port ${port}.`)
});