const express=require("express")
const app=express() 
const path = require("path"); 
const PORT=4000
const birds=require("./routes/birds")

app.use(express.json())

app.use("/v1",birds);

app.get("/",(req,res)=>{
    // res.send("Hello World");
    res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})