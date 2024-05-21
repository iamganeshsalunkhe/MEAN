const mySQL = require('mysql2')

const pool = mySQL.createPool({
    host:'localhost',
    user:'root',
    password:'Ganesh@1498',
    database:'notesapp',
    port:3306,
    waitForConnection:true,
    connectionLimit:10,
    queueLimit:0
})

module.exports = {
    connection : pool
}