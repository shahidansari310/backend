const express=require("express");
const router=express.Router();

const auth=function(req,res,next){
    console.log("I am inside Auth");

    req.user={userId:1,role:"student"};
    if(req.user){
        next();
    }
    else{
        res.json({
            success:false,
            message:"Not valid User"
        })
    }
}

const student=function(req,res,next){
    console.log("I am student");
    if(req.user.role=="student"){
        next();
    }
    else{
        res.json({
            success:false,
            message:"Access denied,Not a student!"
        })
    }
}

const admin=function(req,res,next){
    console.log("I am Admin");
    if(req.user.role=="admin"){
        next();
    }
    else{
        res.json({
            success:false,
            message:"Access Denied , trying to login in admin page"
        })
    }
}
router.get('/student',auth,student,(req,res)=>{
    console.log("I am inside student route");
    res.send("Student");
})

router.get('/admin',auth,admin,(req,res)=>{
    console.log("I am inside admin route");
    res.send("Admin");
})

module.exports=router;
