const express=require("express");
const app=express();
const port =3000;
const productroute=require("./routes/productrout");
const mongo=require("./config/db");

mongo();

app.get("/",(req,res)=>{
  res.send("Hello World");  
})

app.use("/api",productroute);

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})