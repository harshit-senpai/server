const moongoose = require('mongoose')

const symptoms = new moongoose.Schema({

    ID: String,
    Name: String


})
const symptomsmodel = moongoose.model('sympotoms', symptoms);
module.exports = symptomsmodel;