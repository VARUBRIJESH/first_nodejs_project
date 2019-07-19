const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/git-project', { useNewUrlParser: true });
console.log('connected to mongodb.......');

module.exports = mongoose;  