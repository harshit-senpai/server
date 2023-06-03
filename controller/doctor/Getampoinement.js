const bookdoctoremodel = require('../../Database/Schema/Bookdoctor')

const getapoinment = async (req, res) => {
    let data = await bookdoctoremodel.find({ HospitalId: req.params.id })
    if (data) {
        res.send(data)
    }
}

module.exports = getapoinment;