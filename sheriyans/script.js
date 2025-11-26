const fs=require("fs");


// Writing into file
fs.writeFile("hey.txt","hello My Name is Shahid",(e)=>{
    if(e) console.log(e.message);
    else console.log("Done");
})

//Appending into file
fs.appendFile("hey.txt"," Welcome to the 2nd line",(e)=>{
    if(e) console.log(e.message);
    else console.log("Done");
})

//Rename file
fs.rename("hey.txt","hello.txt",(e)=>{
    if(e) console.log(e.message);
    else console.log("Done");
})

//Copy file
fs.copyFile("hello.txt","copy.txt",(e)=>{
    if(e) console.log(e.message);
    else console.log("Done");
})

//Deleting file
fs.unlink("copy.txt",(e)=>{
    if(e) console.log(e.message);
    else console.log("Done");
});