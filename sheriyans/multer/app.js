const express=require('express');
const multer = require('multer');
const app=express();
const crypto=require("crypto");
const PORT=3000;
const path=require("path");

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads')
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, (err,bytes)=>{
        const fn=bytes.toString('hex')+ path.extname(file.originalname);
        cb(null,fn)
    })
  }
})
const upload=multer({storage:storage});

app.get('/',(req,res)=>{
    res.render('test');
})

app.post('/upload',upload.single('image'),(req,res)=>{
    console.log(req.file);
})


app.listen(PORT,()=>{
    console.log(`App running on port :${PORT}`);
})
