const Subscriber = require("../models/subscriber");

module.exports = {
    index: (req, res, next) => {
        Subscriber.find({})
        .then(subscribers => {
            res.locals.subscribers = subscribers;
            next();
        })
        .catch(error => {
            console.error(`Error fetching subscribers: ${error.message}`);
            next();
        });
    },
    indexView: (req, res) => {
        res.render("subscribers/index");
    }
};