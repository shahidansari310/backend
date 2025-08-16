const Todo=require("../models/Todo");

exports.getTodo=async(req,res)=>{
    try {
        const data= await Todo.find({});
        res.status(200).json({
            success:true,
            data:data,
            message:"All entry fetched"
        })
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Error occured"
        })
    }
}

exports.getTodoby=async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await Todo.findById({_id: id});
        
        if(!data){
            res.status(404).json({
                success:false,
                message:"Data not found"
            })
        }

        res.status(200).json({
            success:true,
            data:data,
            message:"Data found"
        })
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Error occured"
        })
    }
}