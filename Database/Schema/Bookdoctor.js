const mongoose = require('mongoose')

const bookdoctorschema = new mongoose.Schema({
    PatientId: String,
    Patinetname: String,
    Patientnumber: String,
    PatientEmail: String,
    price: String,
    videoid: String,
    HospitalId: String,
    docname: String,
    Hostpitalnumber: String,
    Problem: String,
    deasease: String,
    medicine: String,
    test: String,
    des: String,
    status: String
})

const bookdoctormodel = mongoose.model('doctorbook', bookdoctorschema);
module.exports = bookdoctormodel;