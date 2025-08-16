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