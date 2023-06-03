
const usermodel = require('../../Database/Schema/user')

const login = async (req, res) => {
    let email = await usermodel.findOne({ email: req.body.email })
    if (email) {
        let data = await usermodel.findOne({ password: req.body.password })
        if (data) {
            res.send({ code: 200, message: "login", data: data })
        }
        else {
            res.send({ code: 500, message: "err" })
        }
    }
    else {
        res.send({ code: 500, meeage: "not found" })
    }

}


module.exports = login;
