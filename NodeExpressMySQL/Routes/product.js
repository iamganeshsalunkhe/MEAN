// import express
const express = require('express')

// import mysql
const MySQL = require('mysql2')

const router = express.Router()

router.get('/product',(req,res) =>{
    // step1:connection to Database
    const connection = MySQL.createConnection({
        host:'localhost',
        user:'root',
        password:'Ganesh@1498',
        database:'mystore',
        port:3306
    })

    // step2:create a query statement
    const statement = 'select id, title,description,price from product'
    
    // step3:execute a query
    connection.query(statement,(err,data)=>{
        // step 4: Process the data
        if (err){    
            // if error occures
            console.log(`Error:${err}`);
        }else {
            // if no error occures
            console.log(`data:${data}`);
        }
        // step 5: end the connection
        connection.end()
        
        res.send(data)
    })

})

router.post('/product',(req,res) =>{
    // get input from user(cilent)
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    
    // create connection

    const connection = MySQL.createConnection({
        host:'localhost',
        user:'root',
        password:'Ganesh@1498',
        database:'mystore',
        port:3306
    })
    // prepare a query statement

    const statement = `insert into product (title,description,price) values ('${title}','${description}','${price}' )`

    // excuate the statement

    connection.query(statement,(err,data) =>{
        // process the data
        if (err){
            console.log(`Error:${err}`);
        } else{
            console.log(data);
        }
        // end the connection 
        connection.end()

        res.send(data)
    })
})



module.exports = router