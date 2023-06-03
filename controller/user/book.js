const nodemailer = require('nodemailer')

const bookemail = async (req, res) => {
    let Email = req.body.email;
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "easypeasy11746@gmail.com",
            pass: "eyqunwdhrpkbzvwg"
        }
    })
    const mailOptions = {
        from: "easypeasy11746@gmail.com",
        to: Email,
        subject: "Booking sucess",
        text: `Hello sir your booking is sucessfully completed`
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


module.exports = bookemail
;




