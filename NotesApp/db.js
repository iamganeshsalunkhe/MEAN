const mySQL = require('mysql2')

const pool = mySQL.createPool({
    host:'localhost',
    user:'root',
    password:'Ganesh@1498',
    database:'notesapp',
    port:3306,
    connectionLimit:10,
    waitForConnection:true,
    queueLimit:0
})

module.exports = {
    connection : pool
}