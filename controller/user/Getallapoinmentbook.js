const bookdoctormodel = require('../../Database/Schema/Bookdoctor');

const Alldoctorbook = async (req, res) => {
    let booklist = await bookdoctormodel.find({ PatientId: req.params.id });
    res.send(booklist)
}

module.exports = Alldoctorbook;