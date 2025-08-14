const express=require("express");
const app=express();

require("dotenv").config();

const port =process.env.PORT;

app.use(express.json());

const todoRoutes=require("./routes/todos");

app.use("/api/v1",todoRoutes);

app.listen(port,()=>{
    console.log(`App running on port : ${port}`);
})

const dbconnect=require("./config/database");
dbconnect();

app.get("/",(req,res)=>{
    res.send("Hello homepage!");
})