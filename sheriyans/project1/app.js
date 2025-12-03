const cookieParser = require('cookie-parser');
const express=require('express');
const app=express();
const userModel=require("./models/user");
const postModel=require("./models/post");
const path=require("path");
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken');
const PORT=3000;
 
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/profile',isLoggerIn,(req,res)=>{
    console.log(req.user);
    res.render('login');
})

app.post("/register",async (req,res)=>{
    let {username,name,age,email,password}=req.body;

    let user= await userModel.findOne({email});

    if(user) return res.status(500).send("User with this email already exist");

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async (err,hash)=>{
            let createuser=await userModel.create({
                username,
                name,
                age,
                email,
                password:hash
            });

            let token=jwt.sign({email:email,userid:createuser._id},"akanksha");
            res.cookie("token",token);

            res.send("Registered User");
        })
    })
})

app.get("/login",(req,res)=>{
    res.render("login");
})

app.post("/login",async (req,res)=>{
    let {username,name,age,email,password}=req.body;

    let user= await userModel.findOne({email});

    if(!user) return res.status(500).send("Something went wrong");

    bcrypt.compare(password,user.password,(err,result)=>{
        if(result) {
            let token=jwt.sign({email:email,userid:user._id},"akanksha");
            res.cookie("token",token);
            res.status(200).send("you can login");
        }
        else res.redirect("/login");
    })

})

app.get("/logout",(req,res)=>{
    res.cookie("token","");
    res.redirect("/");
})

function isLoggerIn(req,res,next){
    if(req.cookies.token==="") res.send("You must login!");
    else{
        let data=jwt.verify(req.cookies.token,"akanksha");
        req.user=data;
        next();
    }
}

app.listen(PORT,()=>{
    console.log(`App running on port :${PORT}`);
})
