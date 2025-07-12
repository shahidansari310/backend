const {Schema,model}=require("mongoose");
const Product=new Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    cateogory:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

const productmodel=model("Product",Product);

module.exports=productmodel;