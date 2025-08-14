const express=require("express");

const router=express.Router();

const {createTodo}=require("../controller/createTodo");

router.get("/createTodo",(req,res)=>{
    res.send("Got here!");
})
router.post("/createTodo",createTodo);

module.exports=router;