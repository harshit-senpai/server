const doctormodel = require('../../Database/Schema/Bookdoctor')

const bookdoctor = async (req, res) => {
    let data = await doctormodel(req.body);
    data=await data.save();
    if (data) {
        res.send({ code: 200, message: "booked", data: data })
    }
    else {
        res.send({ code: 500, message: "err" })
    }
}

module.exports = bookdoctor;

