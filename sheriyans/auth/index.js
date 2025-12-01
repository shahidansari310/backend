const cookieParser = require('cookie-parser');
const express=require('express');
const app=express();
const PORT=3000;

const jwt=require("jsonwebtoken");
// const bcrypt=require("bcrypt");

app.use(cookieParser());

app.get('/',(req,res)=>{
    // bcrypt.genSalt(10, (err,salt)=>{
    //     bcrypt.hash("Shahid",salt,(err,hash)=>{
    //         console.log(hash);
    //     });
    // });

    // bcrypt.compare("Shahid","$2b$10$n0c/fzROxtcsdlEaa/dsjOg2NDX6xiJSpgmYrHifqD7c.61aKILa.",(err,result)=>{
    //     console.log(result);
    // })

    let token=jwt.sign({email:"shahid@gmail.com"},"secret");
    res.cookie("token",token);
    console.log(token);
    res.send("done");

})


app.get("/read",(req,res)=>{
    let data=jwt.verify(req.cookies.token,"secret");
    console.log(data);
})
app.listen(PORT,()=>{
    console.log(`App running on port :${PORT}`);
})
