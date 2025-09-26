const express=require("express")
const app=express() 
const path = require("path"); 
const birds=require("./routes/birds")
require("dotenv").config();
const PORT=process.env.PORT || 3000

app.use(express.json())

require("./config/database").connectdb()

app.use("/v1",birds);

app.get("/",(req,res)=>{
    // res.send("Hello World");
    res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})