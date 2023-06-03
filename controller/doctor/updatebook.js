const bookdoctoremodel=require('../../Database/Schema/Bookdoctor')

const Updatedoctorbook=async(req,res)=>{
    let data=await bookdoctoremodel.updateOne(
        {_id:req.body.id},
        {
            $set:req.body
        }
    )
    res.send(data)
}

module.exports=Updatedoctorbook