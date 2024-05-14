// import http package

const http = require('node:http');

// console.log(http.METHODS);
// console.log(http.STATUS_CODES);


// Create a Server
// Will run continuously in the background

const server = http.createServer((req,res)=>{
    console.log(`Request is Received!`);


    // send the response to cilent
    res.end()
})

// Start the server or listen on 3000 port

// 1-1024 : Reserved Ports
// We can use 
// 1025-65534 in between
// MySQL : 3306
// MongoDB : 27017  

server.listen(3000,'0.0.0.0',()=>{
    console.log(`Server Started`);
})
