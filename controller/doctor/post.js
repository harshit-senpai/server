const doctormodel = require('../../Database/Schema/Doctor')

const Posthos = async (req, res) => {
    let data = await doctormodel.updateOne(
        { _id: req.body.id },
        {
            $set: req.body
        }
    )
    if (data) {
        res.send(data)
    }
}

module.exports = Posthos;