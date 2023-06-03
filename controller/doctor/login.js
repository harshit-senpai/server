const doctormodel =require('../../Database/Schema/Doctor')

const login = async (req, res) => {
    let email = await doctormodel.findOne({ email: req.body.email })
    if (email) {
        let data = await doctormodel.findOne({ password: req.body.password })
        if (data) {
            res.send({ code: 200, message: "login", data: data })
        }
        else {
            res.send({ code: 500, message: "err" })
        }
    }
}

module.exports = login;