const jwt=require("jsonwebtoken");
require("dotenv").config()

exports.auth=(req,res,next)=>{
    try {
        const token =req.body.token;

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token Missing"
            });
        }

        try{
            const decode= jwt.verify(token, process.env.JWT_SECRETS);

            req.user=decode;
        } catch(error){
            return res.status(401).json({
                success:false,
                message:"Token is Invalid"
            });
        }
        next();
    } catch (error) {
        // console.log(error);
        return res.status(401).json({
            success:false,
            message:"Something went wrong"
        });
    }
}



exports.isStudent=(req,res,next)=>{
    try {
        if(req.user.role!='Student'){
            return res.status(401).json({
                success:false,
                message:"This is protected route only for students"
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified"
        });
    }
}

exports.isAdmin=(req,res,next)=>{
    try {
        if(req.user.role!='Admin'){
            return res.status(401).json({
                success:false,
                message:"Protected route only for Admin"
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"User role cannot be verifed"
        });
    }
}