const mongoose = require("mongoose"),
    subscriberSchema = mongoose.Schema({
        name: {
            type: String,       // Must be string  
            required: true      // Must be entered
        },
        email: {
            type: String,       // Must be string
            required: true,     // Must be entered
            unique: true,       // Must not exist
            lowercase: true     // Must be lowercase
        },
        zipCode: {
            type: Number,       // Must be a number
            // If under 10, Error is presented:
            min: [10, 'ZIP Code is too short'],
            max: 99999  // Maximum value. No error presented
        },
        vip: {
            type: Boolean   // True or false
        },
        courses: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }]
    });

// .this refers to the object it belongs to
// in a method .this refers to the owner (subscriber)
subscriberSchema.methods.getInfo = function() {
    return `Name: ${this.name} Email: ${this.email} Zip Code: ${this.zipCode}`;
};

subscriberSchema.methods.findLocalSubscribers = function() {
    return this.model("Subscriber")
    .find({ zipCode: this.zipCode })
    .exec();
};

module.exports = mongoose.model("Subscriber", subscriberSchema);