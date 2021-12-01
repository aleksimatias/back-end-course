const mongoose = require("mongoose"),
    recipeSchema = mongoose.Schema({
        name: String,
        cookTime: Number,
        vegan: Boolean
    });

module.exports = mongoose.model("Recipe", recipeSchema);