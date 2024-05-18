const express = require('express')

// const crypto = require('crypto-js')

const db = require('../db')

const router = express.Router()
router.post('/signup',(req,res) =>{
    const {firstName, lastName, email, password, adddress, phone} = req.body

    // const encrptPassword = crypto.SHA512(password)

    const statement = `insert into user (firstName, lastName, email, password, address, phone) values (
        '${firstName}','${lastName}','${email}','${password}','${adddress}','${phone}'
    )`

    db.connection.query(statement, (err,data) =>{
        console.log(data);
        res.send(data)
    })
})

router.post('/login',(req,res) =>{
    const {email,password} = req.body

    const statement = `select id , firstName, lastName, address, phone from user where email = '${email}' and password ='${password}'`

    db.connection.query(statement,(err,data) =>{
        if (data.length == 0){
            console.log(`User doesn't exists.`);
        }else{
            console.log(`User found`);
            console.log(data);
        }
        res.send(data)

    })

})

module.exports = router