const express=require("express");
const app=express();
const port =3000;
const route=require("./routes/route")

// app.use(express.json()); //inbuilt middleware

// //Custom middleware
// //logging middleware

// const logging=function(req,res,next){
//     console.log("Logging IN");
//     next();
// }
// app.use(logging);

// const auth=function(req,res,next){
//     console.log("Auth");
//     res.send("Chalo sidha ghr");
//     // next();
// }
// app.use(auth);

// const valid=function(req,res,next){
//     console.log("Valid");
//     next();
// }
// app.use(valid);

app.use("/api",route);

app.get('/',(req,res)=>{
    console.log(req.body);
    res.send("Shahid");
})


app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
})