const doctormodel = require('../../Database/Schema/Doctor')


const docuser = async (req, res) => {
    let user = await doctormodel.findOne({ email: req.body.email })
    if (user) {
        res.send({ code: 500, message: "user already resistered" })
    }
    else {
        let data = new doctormodel(req.body);
        data = await data.save();
        if (data) {
            res.send({ code: 200, message: "saved", data: data })
        }
        else {
            res.send({ code: 500, message: "error" })
        }
    }

}



module.exports = docuser;
