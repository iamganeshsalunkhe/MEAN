//importing

const http = require('node:http');

const server = http.createServer((req,res) => {
    console.log(`Received a request!!!`);
    
    // GET THE REQ PARAMS
    console.log(`url:${req.url}`);
    console.log(`method:${req.method}`);
    console.log(`------------------------------------`);

    res.end()
})

server.listen(3000,'localhost',() =>{
    console.log(`Hello`);
})