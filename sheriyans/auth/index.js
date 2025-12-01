const express=require('express');
const app=express();
const PORT=3000;
const bcrypt=require("bcrypt");

app.get('/',(req,res)=>{
    // bcrypt.genSalt(10, (err,salt)=>{
    //     bcrypt.hash("Shahid",salt,(err,hash)=>{
    //         console.log(hash);
    //     });
    // });

    bcrypt.compare("Shahid","$2b$10$n0c/fzROxtcsdlEaa/dsjOg2NDX6xiJSpgmYrHifqD7c.61aKILa.",(err,result)=>{
        console.log(result);
    })
})

app.listen(PORT,()=>{
    console.log(`App running on port :${PORT}`);
})
