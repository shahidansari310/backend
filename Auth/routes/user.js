const express=require("express")
const router=express.Router()

const {auth,isStudent,isAdmin}=require("../middleware/auth");
const {login,signup}=require("../controller/auth")  

router.post("/login",login);

router.post("/signup",signup);

router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"test route"
    })
});

router.get("/student",auth,isStudent,(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Student route accessed successfully"
    })
});


router.get("/admin",auth,isAdmin,(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Admin route accessed successfully"
    })
});


module.exports=router;