const bookambulancemodel=require('../../Database/Schema/Bookambulance')

const updateambu=async(req,res)=>{
    let data=await bookambulancemodel.updateOne(
        {_id:req.body.id},
        {
            $set:req.body
        }
    )
    res.send(data)
}

module.exports=updateambu;