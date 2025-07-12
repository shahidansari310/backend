const mongoose =require("mongoose");
const dotenv=require("dotenv");


dotenv.config();

const connectmongo=async()=>{
    try{
        const conn=await mongoose.connect("mongodb+srv://shahidansaribhodu:MigN9D9eB1zDpxOa@clusterone.nhldbso.mongodb.net/ecommerceDb",{
            useNewUrlParser:true,
        });
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
} 

module.exports = connectmongo;