const bookambulancemodel = require('../../Database/Schema/Bookambulance');

const Allambulcebook = async (req, res) => {
    let booklist = await bookambulancemodel.find({ Patientid: req.params.id });
    if (booklist) {
        res.send(booklist)
    }
}

module.exports = Allambulcebook;