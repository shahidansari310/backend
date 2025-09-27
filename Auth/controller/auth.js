const bcrypt=require("bcrypt")
const user=require("../model/usermodel")

exports.signup=async (req,res)=>{
    try {
        const {name,email,password,role}=req.body;
        const existing= await user.findOne({email});

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
        const  User=await user.create({
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