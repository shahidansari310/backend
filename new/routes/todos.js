const express=require("express");

const router=express.Router();

const {createTodo}=require("../controller/createTodo");
const {updateTodo}=require("../controller/updateTodo");
const {getTodo,getTodoby}=require("../controller/getTodo");

router.get("/createTodo",(req,res)=>{
    res.send("Got here!");
    
})

router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoby);
router.post("/createTodo",createTodo);
router.put("/updateTodo/:id",updateTodo);

module.exports=router;