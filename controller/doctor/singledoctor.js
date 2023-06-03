const doctormodel=require('../../Database/Schema/Doctor')

const singledoctor = async (req, res) => {
    let data = await doctormodel.findOne({_id:req.params.id})
    if (data) {
        res.send(data)
    }
}

module.exports= singledoctor;