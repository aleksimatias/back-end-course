const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    {useNewUrlParser: true}
);
const db = mongoose.connection;
const Recipe = require("./models/recipe.js");

db.once("open", () => {
    console.log("Connected to Recipes!");
});

var recipe1 = new Recipe({
    name: "Hernekeitto",
    cookTime: 30,
    vegan: true
});

recipe1.save((error, savedDocument) => {
    if (error) console.log(error);
    console.log(savedDocument);
});


/* var myQuery = Subscriber.findOne({
    name: "Männistö Aleksi"
    });
myQuery.exec((error, data) => {
    if (data) console.log(data.name);
}); */