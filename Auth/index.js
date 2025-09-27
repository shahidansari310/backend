const express=require("express")
const app=express() 
const user=require("./routes/user")
const birds=require("./routes/birds")
const path = require("path"); 
require("dotenv").config();
const PORT=process.env.PORT || 3000

app.use(express.json())

require("./config/database").connectdb()

app.use("/auth",user)
app.use("/v1",birds);

app.get("/",(req,res)=>{
    // res.send("Hello World");
    res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})