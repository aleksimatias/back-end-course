const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    {useNewUrlParser: true}
);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
const subscribersController = require("./controllers/subscribersController");
const Subscriber = require("./models/subscriber");
const express = require('express');
const app = express();

db.once("open", () => {
    console.log("Succesfully connected to MongoDB using Mongoose!");
});

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.get("/", (req, res, next) => {
    res.render("front")
});

app.get("/subscribers", subscribersController.index,
    subscribersController.indexView);

app.listen(app.get('port'), 
() => { 
    console.log(`Server is running on port ${app.get('port')}`)
    }
);