const bookambulancemodel=require('../../Database/Schema/Bookambulance')

const getambu=async(req,res)=>{
    let data=await bookambulancemodel.findOne({_id:req.params.id})
    if(data){
        res.send(data)
    }
}

module.exports=getambu;