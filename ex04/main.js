const express = require('express');
const vegetableController = require('./controllers/vegetableController');

const port = 3000;
const app = express();

app.use((req, res, next) => {
    console.log(`A request was made to the URL ${req.url}`);
    next();
});

app.get("/vegetables/:vegetable", vegetableController.displayVegetableName);

app.listen(port, () => {
    console.log(`Our express web server has started in port ${port}.`)
});