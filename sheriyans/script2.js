const http=require("https");

const server=http.createServer((req,res)=>{
    res.end("Hello I am Shahid");
})

server.listen(3000);