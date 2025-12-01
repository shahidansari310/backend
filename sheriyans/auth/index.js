const express = require('express');
const app = express();
const PORT = 3000;
const path = require("path");
const userModel = require("./models/user");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // res.send('Home Page!');
    res.render('index');
})

app.post("/create",(req, res) => {
    let { username, email, password, age } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let craetedUser = await userModel.create({
                username,
                email,
                password:hash,
                age,
            })
            let token=jwt.sign({email},"shahid");
            res.cookie("token",token);
            res.send(craetedUser);
        })
    })

})

app.get("/login",(req,res)=>{
    res.render('login');
})

app.post("/login",async (req,res)=>{
    let user=await userModel.findOne({email:req.body.email});
    if(!user){
        return res.send("Something went wrong!");
    }
    bcrypt.compare(req.body.password,user.password,(err,result)=>{
        if(result){
            let token=jwt.sign({email:user.email},"shahid");
            res.cookie("token",token);

            res.send("YES you can login");
        }
        else res.send("You can't login!");
    })
})

app.get("/logout",(req,res)=>{
    res.cookie("token","");
    res.redirect("/");
})

app.listen(PORT, () => {
    console.log(`App running on port :${PORT}`);
})
