const express=require("express");

const router=express.Router();

const {createTodo}=require("../controller/createTodo");
const {getTodo}=require("../controller/getTodo");

router.get("/createTodo",(req,res)=>{
    res.send("Got here!");
    
})

router.get("/getTodo",getTodo);
router.post("/createTodo",createTodo);

module.exports=router;