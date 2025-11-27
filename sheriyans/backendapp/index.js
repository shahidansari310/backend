const express=require("express");
const app=express();

app.use((req,res,next)=>{
    console.log("middleware chala");
    next();
})

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/profile",(req,res,next)=>{
    // res.send("Hello I am Shahid !");
    return next(new Error("Something went wrong"));
}); 

app.use((err,req,res,next)=>{
    console.error(err.message);
    res.status(500).send('Something broke');
})

app.listen(3000);