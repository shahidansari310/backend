const express=require("express");
// const mongoose=require("mongoose");
const app= express();
const connectDb=require("./db");
const port =3000;
const users=require("./routes/app")

app.use(express.json());
connectDb();

app.use("/api",users)

app.get('/',(req,res)=>{
    console.log("I am inside route handler");
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`LIstening on port ${port}`);
})