const express = require('express');
const layouts = require('express-ejs-layouts');

const homeController = require('./controllers/hctrl');
const errorController = require('./controllers/errorController')

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(layouts);
app.use('./public', express.static('public'));
app.use(errorController.respondNoResource);
app.use(errorController.respondMegaError);

app.get('/name/:myName', homeController.respondWithName);

app.listen(app.get('port'), 
() => { 
    console.log(`Server is running on port ${app.get('port')}`)
    }
);