const mongoose = require('mongoose')

const bookambulanceschema = new mongoose.Schema({
    Patientid: String,
    Patientname: String,
    Patientnumber: String,
    problem:String,
    PatientEmail: String,
    price: String,
    images: Array,
    Hospitalid: String,
    Hospitalname: String,
    Hostpitalnumber:String,
    status:String,
    patientlat:String,
    patientlog:String,
    lat:String,
    lon:String
})

const bookambulancemodel = mongoose.model('ambulancebook', bookambulanceschema);
module.exports = bookambulancemodel;