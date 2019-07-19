const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const State = new Schema({
    name: String,
    countryId: Number,
    id: Number,
    country: {
        type: Schema.Types.ObjectId,
        ref: 'Country'
    }
}, {
        timestamps: true
    });
module.exports = mongoose.model('State', State);