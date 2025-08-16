const express=require("express");

const router=express.Router();

const {createTodo}=require("../controller/createTodo");
const {getTodo,getTodoby}=require("../controller/getTodo");

router.get("/createTodo",(req,res)=>{
    res.send("Got here!");
    
})

router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoby);
router.post("/createTodo",createTodo);

module.exports=router;