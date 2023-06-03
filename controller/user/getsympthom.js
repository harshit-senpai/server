const symptomsmodel = require('../../Database/Schema/Sympthons')

const getsympthon = async (req, res) => {
    let data = await symptomsmodel.find({
        "$or": [
            { Name: { $regex: req.params.key } },
        ]
    })
    res.send(data)
}

module.exports = getsympthon;