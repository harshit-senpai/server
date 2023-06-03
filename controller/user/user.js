const usermodel = require('../../Database/Schema/user')


const user = async (req, res) => {
    let user = await usermodel.findOne({ email: req.body.email })
    if (user) {
        res.send({ code: 500, message: "user already resistered" })
    }
    else {
        let data = new usermodel(req.body);
        data = await data.save();
        if (data) {
            res.send({ code: 200, message: "saved", data: data })
        }
        else {
            res.send({ code: 500, message: "error" })
        }
    }

}


module.exports = user;
