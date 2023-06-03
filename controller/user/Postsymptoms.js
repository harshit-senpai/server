const symptomsmodel=require('../../Database/Schema/Sympthons')

const postsymphtom=async(req,res)=>{
    let data=await symptomsmodel(req.body);
    data=await data.save();
    if(data){
        res.send(data)
    }
}

module.exports=postsymphtom;