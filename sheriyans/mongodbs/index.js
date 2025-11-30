const express=require('express');
const app=express();
const userModel=require("./db/db");
const PORT=3000;
 
app.get('/',(req,res)=>{
    res.send('Home Page!');
})

app.get('/create',async (req,res)=>{
    let createduser=await userModel.create({
        name:"Shahid",
        email:"shahid@123",
        username:"Shahid"
    })

    res.send(createduser);
})

app.get('/update',async (req,res)=>{
    let updateuser=await userModel.findOneAndUpdate({username:"Shahid"},{name:"shahid Anasri"},{new:true});

    res.send(updateuser);
})

app.get('/read',async (req,res)=>{
    let updateuser=await userModel.find();
    res.send(updateuser);
})

app.get('/delete',async (req,res)=>{
    let user=await userModel.findOneAndDelete({username:"Shahid"});
    res.send(user);
})

app.listen(PORT,()=>{
    console.log(`App running on port :${PORT}`);
})

