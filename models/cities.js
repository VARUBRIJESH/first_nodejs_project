const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const City = new Schema({
    id: Number,
    name: String,
    stateId: Number,
    state: {
        type: Schema.Types.ObjectId,
        ref: 'State'
    }
}, {
        timestamps: true
    });
module.exports = mongoose.model('City', City);