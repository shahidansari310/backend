const express=require('express');
const app=express();
const PORT=3000;
const userModel=require("./model/user");
const postModel=require("./model/post");

app.get('/',(req,res)=>{
    res.send('Home Page!');
})

app.get("/create", async (req,res)=>{
    let user= await userModel.create({
       username:"shahid",
       age:25,
       email:"shahidansari@gmail.com"
    });
    res.send(user);
})

app.get("/post/create", async (req,res)=>{
    let post=await postModel.create({
        postdata:"Hello Sb log kaise ho",
        user:"692e083a22edf3ca8b76bd5e"
    })

    let user=await userModel.findOne({_id:"692e083a22edf3ca8b76bd5e"});

    user.posts.push(post._id);
    await user.save();

    res.send({post ,user});
})

app.listen(PORT,()=>{
    console.log(`App running on port :${PORT}`);
})
