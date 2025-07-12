const express=require("express");
const router=express.Router();
const {getProducts}=require("../controller/productcontroller");


router.get("/products", getProducts);

module.exports= router;