const nodemailer = require('nodemailer')

const bookverification = async (req, res) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "easypeasy11746@gmail.com",
            pass: "eyqunwdhrpkbzvwg"
        }
    })
    const mailOptions = {
        from: "easypeasy11746@gmail.com",
        to: "dosti1166@gmail.com",
        subject: "Your otp is",
        html: '<h1>Hello!</h1><p>This is an HTML email.</p>'
    }
    transport.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(info)
        }
    })

}



module.exports = bookverification;




