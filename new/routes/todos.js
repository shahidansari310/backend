const express=require("express");

const router=express.Router();

const {createTodo}=require("../controller/createTodo");
const {updateTodo}=require("../controller/updateTodo");
const {deleteTodo}=require("../controller/deleteTodo");
const {getTodo,getTodoby}=require("../controller/getTodo");

router.get("/createTodo",(req,res)=>{
    res.send("Got here!");
    
})

router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoby);
router.post("/createTodo",createTodo);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports=router;