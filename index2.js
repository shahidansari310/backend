const express=require("express");
const app=express();
const port =3000;

const item=require("./Router/item");

app.use('/',item)

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})