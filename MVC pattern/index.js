const express=require("express");
const app=express();
const port =3000;
const mongo=require("./config/db");

mongo();


app.get("/",(req,res)=>{
    
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})