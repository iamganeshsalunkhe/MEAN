const mySQL = require('mysql')

function openConnection(){
    const connection = mySQL.createConnection({
        host:'localhost',
        user:'root',
        password:'Ganesh@1498',
        database:'mystore',
        port:3306
    })

    return connection
}

module.exports = {
    connection:openConnection
}