const doctormodel = require('../../Database/Schema/Doctor')

const getall = async (req, res) => {
    let data = await doctormodel.find()
    if (data) {
        res.send(data)
    }
}

module.exports = getall;