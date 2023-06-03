const bookambulancemodel = require('../../Database/Schema/Bookambulance')

const getpatient = async (req, res) => {
    let data = await bookambulancemodel.find({ Hospitalid: req.params.id })
    if (data) {
        res.send(data)
    }
}

module.exports = getpatient;