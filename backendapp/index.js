const express=require("express");
const app=express();
const port =3000;

app.use(express.json()); //inbuilt middleware

//Custom middleware
//logging middleware

const logging=function(req,res,next){
    console.log("Logging IN");
    next();
}
app.use(logging);

const auth=function(req,res,next){
    console.log("Auth");
    next();
}
app.use(auth);

const valid=function(req,res,next){
    console.log("Valid");
    next();
}
app.use(valid);

app.get('/',(req,res)=>{
    console.log(req.body);
    res.send("Shahid");
})


app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
})