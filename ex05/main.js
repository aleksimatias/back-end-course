const express = require('express');
const layouts = require('express-ejs-layouts');

const homeController = require('./controllers/homeController');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(layouts);

app.get('/', homeController.respondWithName);

/* app.get('/', (req, res) => {
    res.render('index', { name: 'Aleksi Männistö'});
}); */

app.listen(app.get('port'), 
() => { 
    console.log(`Server is running on port ${app.get('port')}`)
    }
);