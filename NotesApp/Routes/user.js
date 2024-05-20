const express = require('express')

const db  = require('../db')

const utils = require('../utils')

const crypto = require('crypto-js')

const router = express.Router()

router.post('/signup',(req,res) =>{
    const {name, email, phone, address, password} = req.body
    const encrptedPassword = crypto.SHA256(password)


    const statement = `insert into user(name, phone, address, email, password) values ('${name}', '${phone}','${address}','${email}','${encrptedPassword}')`
    db.connection.query(statement,(err,data) =>{
        const result = utils.createResult(err,data)
        res.send(result)
    })
})


router.post('/signin',(req,res) =>{
    const {email,password} = req.body
    
    const encrptedPassword = crypto.SHA256(password)
    
    const statement = `select  id, name, phone, address from user where email = '${email}' and password = '${encrptedPassword}' `
    db.connection.query(statement,(err,data) =>{
        const result = {}
        if (err){
            result['status'] = 'error'
            result['error'] = err
        } else{
            if (data.length == 0){
                result['status'] = 'error'
                result['error'] = 'user not found'
            }else{
                const user = data[0]
                result['status'] = 'success'
                result['data'] = data
            }
        }
        res.send(result)
    })

})



module.exports = router