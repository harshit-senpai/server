const Razorpay = require('razorpay');
const KEY_ID = 'rzp_test_MtraH0q566XjUb';
const KEY_SECRET = 'W7kdpNZq9scZ30kTfNA3szfD';


const Refund = async (req, res) => {
    const paymentId = req.body.payment;
    const razorpay = new Razorpay({
        key_id: KEY_ID,
        key_secret: KEY_SECRET,
    })
    razorpay.payments.refund(paymentId, {
        amount: req.body.price,
    }, (err, refund) => {
        if (err) {
            res.send(err);
        } else {
            res.send(refund);
        }
    });

}

module.exports = Refund;