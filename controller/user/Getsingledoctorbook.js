const bookdoctormodel = require('../../Database/Schema/Bookambulance')

const singlebookdoctor = async (req, res) => {
    let data = await bookdoctormodel.find({ PatientId: req.params.id })
    if (data) {
        res.send({ code: 200, messsage: "found", data: data })
    }
    else {
        res.send({ code: 500, message: "error" })
    }
}

module.exports = singlebookdoctor;