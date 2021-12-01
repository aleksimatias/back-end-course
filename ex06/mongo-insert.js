const MongoDB = require("mongodb").MongoClient,
    dbURL = "mongodb://localhost:27017",
    dbName = "recipe_db";

MongoDB.connect(dbURL, (error, client) => {
    if (error) throw error;

    let db = client.db(dbName);
    db.collection("contacts")
        .insert({
            name: "Mongo Mango",
            email: "m@ngo.com"
        }, (error, db) => {
            if (error) throw error;
            console.log(db);
        });
});