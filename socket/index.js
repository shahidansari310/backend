//creating a module
const http=require("http");
const express=require("express")
const path=require("path");

//install socket.io
//importing Server from socket.io
const {Server} =require('socket.io');
const app=express();

//creating a server
const server=http.createServer(app);
const PORT=3000;
//io -> Input Output
const io=new Server(server);

//Socket io
io.on('connection',(socket)=>{
    socket.on("User-message",(m)=>{
        io.emit("mess",m);
    })
});


app.use(express.static(path.resolve("./public")));

app.get("/",(req,res)=>{
    return res.sendFile("\public\index.html");
})

server.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`);
})