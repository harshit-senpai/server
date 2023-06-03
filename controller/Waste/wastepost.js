const wastemodel = require('../../Database/Schema/Waste')
const postwaste = async (req, res) => {
    let data = await wastemodel(req.body)
    data = await data.save()
    res.send(data)
}

module.exports = postwaste;