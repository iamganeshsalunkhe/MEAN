const mySQl = require('mysql2')

// create a connection pool 

const pool = mySQl.createConnection({
    host:'localhost',
    user:'root',
    password:'Ganesh@1498',
    port:3306,
    database:'mystore',
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})


module.exports = {
    connection :pool
}