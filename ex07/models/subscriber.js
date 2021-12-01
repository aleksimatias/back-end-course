const mongoose = require("mongoose"),
    subscriberSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        zipCode: {
            type: Number,
            min: [10, 'ZIP Code is too short'],
            max: 99999
        },
        vip: {
            type: Boolean
        }
    });

subscriberSchema.methods.getInfo = function() {
    return `Name: ${this.name} Email: ${this.email} ZipCode: ${this.zipCode}`;
};

subscriberSchema.methods.findLocalSubscribers = function() {
    return this.model("Subscriber")
    .find({ zipCode: this.zipCode })
    .exec();
};

module.exports = mongoose.model("Subscriber", subscriberSchema);