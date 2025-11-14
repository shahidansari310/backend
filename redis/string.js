const {client}=require("./client")

async function init() {
    await client.set("msg:1",'Hello from Shahid')
    const result=await client.get('msg:1');
    
    console.log(result); 
}
init();
setTimeout(() => {
    process.exit();
}, 1000);