const bookambulancemodel = require('../../Database/Schema/Bookambulance')

const Bookambulance = async (req, res) => {
    let data = await bookambulancemodel(req.body);
    data = await data.save();
    if (data) {
        res.send({ code: 200, message: "booked", data: data })
    }
    else {
        res.send({ code: 500, message: "err" })
    }
}

module.exports = Bookambulance;
