const mongoose = require('mongoose');
const countries = require('../models/countries.js');
const states = require('../models/states.js');
const cities = require('../models/cities.js');
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
    getCountries: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const country = await countries.find({})
                console.log('countiry...', country);
                resolve(country);
            } catch (err) {
                console.error(err);
                reject(err);
            }
        })
    },
    getStatesCountryWise: (countryId) => {
        return new Promise(async (resolve, reject) => {
            try {
                const state = await states.find({
                    "country": ObjectId(countryId)
                })
                console.log('states..', state);
                resolve(state);
            } catch (err) {
                console.error(err);
                reject(err);
            }
        })
    },
    getCitiesStateWise: (stateId) => {
        return new Promise(async (resolve, reject) => {
            try {
                const city = await cities.find({
                    "state": ObjectId(stateId)
                })
                console.log('city..', city);
                resolve(city);
            } catch (err) {
                console.error(err);
                reject(err);
            }
        })
    }
}