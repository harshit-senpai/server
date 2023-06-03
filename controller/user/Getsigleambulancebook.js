const bookambulancemodel = require('../../Database/Schema/Bookambulance')

const singlebookambulance = async (req, res) => {
    let data = await bookambulancemodel.find({ PatientId: req.params.id })
    if (data) {
        res.send({ code: 200, messsage: "found", data: data })
    }
    else {
        res.send({ code: 500, message: "error" })
    }
}

module.exports = singlebookambulance;