const express=require('express');
const app=express();
const PORT=3000;
const path=require('path');
const fs=require('fs');
const { log } = require('console');

//parsers
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs'); //to render ejs pages that is like html pages

app.get('/',(req,res)=>{
    fs.readdir(`./files`, function(err,file){
        res.render('index',{files:file});
    })
})

// app.get('/profile/:user',(req,res)=>{
//     // req.params.user
//     res.send(`Hello for the ${req.params.user} user!`);
// })

app.post('/create',(req,res)=>{
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,(err)=>{
        res.redirect('/');
    })
})

app.get("/files/:filename",(req,res)=>{
    fs.readFile(`./files/${req.params.filename}`,"utf-8",(err,data)=>{
        res.render('show',{filename:req.params.filename, filedata:data});
    })
})

// app.get('/profile/:user/:age',(req,res)=>{
//     res.send(req.params);
// })

app.listen(PORT,()=>{
    console.log(`App running on port :${PORT}`);
})
