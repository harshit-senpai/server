const mongoose = require('mongoose')

const Wasteschema = new mongoose.Schema({
    name: String,
    lat: String,
    lon: String,
    image: String
})

const wastemodel = mongoose.model('wastes', Wasteschema)

module.exports = wastemodel;