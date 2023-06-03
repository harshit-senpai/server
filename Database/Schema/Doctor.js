const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name: String,
    number: String,
    email: String,
    password: String,
    speclist: String,
    hosname: String,
    ambprice: String,
    docprice: String,
    ambdesc: String,
    docdesc: String,
    ambimages: String,
    docimages: String,
    status: String
})

const doctormodel = mongoose.model('doctor', doctorSchema);
module.exports = doctormodel;