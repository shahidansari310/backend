const Product=require("../model/product")

const getProducts=async(req,res)=>{
    try {
        const allPro=await Product.find();

        if(!allPro || allPro.length===0){
            res.json({
                message:"Thier is no product",
            })
        }
        res.status(200).json({
            success:true,
            products:allPro
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}

module.exports = {getProducts};