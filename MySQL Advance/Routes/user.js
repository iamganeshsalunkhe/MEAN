const express = require('express')

const db = require('../db')

const router = express.Router()

router.post('/signup',(req,res) =>{
    // const firstName = req.body.firstName
    // const lastName = req.body.lastName
    // const email = req.body.email
    // const password = req.body.password
    // const address = req.body.password
    // const phone = req.body.phone

    // turn all the keys from request.body into constants

    const {firstName,lastName,email,password,address,phone} = req.body

    const statement = `insert into user (firstName, lastName, email,password, address, phone) values ('${firstName}', '${lastName}','${email}','${password}','${address}','${phone}')`


    db.connection.query(statement,(err,data) =>{
        res.send(data)
    })

})

router.post('/login',(req,res) =>{

})

module.exports = router