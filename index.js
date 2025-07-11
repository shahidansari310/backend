const express=require("express");
const app=express();
const port =3000;

// app.get('/',(req,res)=>{
//     res.send('Hello World');
// })

app.get('/',(req,res)=>{
    res.sendFile('D:/Node/dummy.html');
})

app.get('/about',(req,res)=>{
    res.send("Got an about");
})


app.post('/about',(req,res)=>{
    res.send("Got post about");
})

app.delete('/about',(req,res)=>{
    res.send("Got delete about");
})
app.put('/about',(req,res)=>{
    res.send("Got put about");
})


app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})
