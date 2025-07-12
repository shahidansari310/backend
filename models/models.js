const {Schema,model}=require("mongoose");

const MySchema=new Schema({
    name:{
        type:String,
        required:true,
        maxlength:50,
    },
    age:{
        type:Number,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
})

const Usermodel=model("User",MySchema);

module.exports=Usermodel;