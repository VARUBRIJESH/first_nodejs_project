const express = require('express');
const router = express.Router();
const geoController = require('../controllers/geo.js');

router.get('/getcountries', (req, res) => {
    geoController.getCountries()
        .then((result) => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        });
});

router.post('/getstates-countrywise/:id', (req, res) => {
    geoController.getStatesCountryWise(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        });
});

router.post('/getcities-statewise/:id', (req, res) => {
    geoController.getCitiesStateWise(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        });
});
module.exports = router;