const express=require('express');
const app=express();
const PORT=3000;
const path=require('path');

//parsers
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs'); //to render ejs pages that is like html pages

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/profile/:user',(req,res)=>{
    // req.params.user
    res.send(`Hello for the ${req.params.user} user!`);
})

app.get('/profile/:user/:age',(req,res)=>{
    res.send(req.params);
})

app.listen(PORT,()=>{
    console.log(`App running on port :${PORT}`);
})
