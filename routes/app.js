const express=require("express");
const router=express.Router();

const User=require("../models/models");

router.get('/users',async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({
            succes:false,
            message:err.message,
        })
    }
})

router.post('/users',async(req,res)=>{
    try{
        const {name,age}=req.body;
        const Newuser=new User({name,age});
        await Newuser.save();
        res.send({
            success:true,
            user:Newuser
        })
    }
    catch(err){
        res.status(500).json({
            succes:false,
            message:err.message,
        })
    }
})

router.put("/users/:id",async(req,res)=>{
    const {id}=req.params;
    const {name,age}=req.body;
    try{
        const updatedUser=await User.findByIdAndUpdate(id,{name,age});
        if(!updatedUser){
            res.send({
                message:"User not Found",
            })
        }
        res.status(200).json({
            success:true,
            user:updatedUser
        })
    }
    catch(err){
        res.status(500).json({
            succes:false,
            message:err.message,
        })
    }
})

module.exports=router;