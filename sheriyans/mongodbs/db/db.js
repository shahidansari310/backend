const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydb");


const userSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String,
})

module.exports = mongoose.model("user",userSchema);

// module.exports=connectdb;