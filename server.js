const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const georouter = require('./routes/geo.js');
require('./helper/mongodb.js');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/geographical-data', georouter);

app.listen(3000, () => {
    console.log('server started at port 3000');
});