const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const Country = new Schema({
    shortName: String,
    name: String,
    stdCode: Number,
    id: Number
}, {
        timestamps: false
    });
module.exports = mongoose.model('Country', Country);