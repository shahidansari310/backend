const express=require("express");
const router=express.Router();

router.get('/',(req,res)=>{
    // res.sendFile('D:/Node/dummy.html');
    // res.send("Birds Home page");
    res.json({X:1,Y:2,Z:3});
})

router.get('/about',(req,res)=>{
    res.send("Got an about");
})

router.post('/about',(req,res)=>{
    res.send("Got post about");
})

router.delete('/about',(req,res)=>{
    res.send("Got delete about");
})
router.put('/about',(req,res)=>{
    res.send("Got put about");
})

module.exports=router;