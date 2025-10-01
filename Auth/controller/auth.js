const bcrypt=require("bcrypt")
const User=require("../model/usermodel")
const jwt=require("jsonwebtoken");
require("dotenv").config()

exports.signup=async (req,res)=>{
    try {
        const {name,email,password,role}=req.body;
        const existing= await User.findOne({email});

        if(existing){
            return res.status(400).json({
            success:false,
            message:"User already exists"
            });
        }

        let hashpassword;
        try{
            hashpassword=await bcrypt.hash(password,10)
        }
        catch(err){
            return res.status(500).json({
                success:false,
                message:"Error in hashing Password"
            })
        }


        //create entry for User
        const  newUser=await User.create({
            name,email,password:hashpassword,role
        })
        
        return res.status(200).json({
            success:true,
            message:"User created successfully"
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message:"User cannot be registered",
        })
    }
}


exports.login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            res.status(400).json({
                success:false,
                message:"Enter email and password carefully"
            });
        }

        let user=await User.findOne({email});
        if(!user){
            res.status(401).json({
                success:false,
                message:"User not found first signup please"
            })
        }

        const payload={
            email:user.email,
            id:user._id,
            role:user.role
        };

        if(await bcrypt.compare(password,user.password)){
            //token creation
            let token=jwt.sign(payload,
                        process.env.JWT_SECRETS,
                        {
                            expiresIn:"2h"
                        });
            //Added a new field token and remove passsword or marked password as undefined in user object not from the database
            user=user.toObject();
            user.token=token;
            user.password=undefined;

            const options={
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true,
            }

            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"User logged in successfully"
            })
        }
        else{
            res.status(403).json({
                success:false,
                message:"Password incorrect"
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Login failure"
        })
    }
}