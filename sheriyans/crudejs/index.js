const express=require('express');
const app=express();
const path=require("path");
const PORT=3000;
const userModel=require("./models/user");

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render("index");
})

app.get('/read',async (req,res)=>{
    let allusers=await userModel.find();
    res.render("read",{user:allusers});
})

app.post('/create',async (req,res)=>{
    let {name,email,image}=req.body;
    let user =await userModel.create({
        name,
        email,
        image
    });

    // res.send(user);
    res.redirect("/read");
})

app.get('/delete/:id',async (req,res)=>{
    // let {name,email,image}=req.body;
    let user =await userModel.findOneAndDelete({_id:req.params.id})

    // res.send(user);
    res.redirect("/read");
})

app.get('/edit/:id',async (req,res)=>{
    let user=await userModel.findOne({_id:req.params.id});
    res.render("edit",{user});
    
})

app.post('/update/:id',async (req,res)=>{
    let {name,email,image}=req.body;
    let user=await userModel.findOneAndUpdate({_id:req.params.id},{name,email,image},{new:true});
    // res.render("edit",{user});
    res.redirect("/read");
    
})

app.listen(PORT,()=>{
    console.log(`App running on port :${PORT}`);
})
