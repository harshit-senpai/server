const bookdoctormodel = require('../../Database/Schema/Bookdoctor')

const getsingle = async (req, res) => {
    let data = await bookdoctormodel.findOne({ _id: req.params.id })
    if (data) {
        res.send(data)
    }
}

module.exports = getsingle;