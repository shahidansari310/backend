const mongoose=require("mongoose");
const dotenv=require('dotenv');

dotenv.config();

const connectDb=async()=>{
    try {
        const con=await mongoose.connect(process. env.MONGODB_URL,{
            useNewUrlParser:true,
        });
        console.log("MongoDb connected")
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports=connectDb;