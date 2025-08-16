const Todo=require("../models/Todo");

exports.deleteTodo=async(req,res)=>{
    try {
        const {id}=req.params;
    
        await Todo.findByIdAndDelete(id);
    
        res.status(200).json({
            success:true,
            message:"Entry Deleted successfully"
        })
    
    
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })
    }
}