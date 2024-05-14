// import 
const http = require('node:http')

const server = http.createServer((req,res) => {
    console.log(`Request Received!!`);


    // send the response
    res.setHeader('content-type','application/json')

    res.end('{"name":"Person1","age":24,"address":"Mumbai"}')

})

server.listen(3000, 'localhost', () => {
    console.log(`Server Started on 3000 port!`);
})

