const wastemodel = require('../../Database/Schema/Waste')

const getwaste = async (req, res) => {
    let data = await wastemodel.find()
    if (data) {
        res.send(data)
    }
}

module.exports = getwaste;