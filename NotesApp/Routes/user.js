const express = require('express')

const db  = require('../db')

const uuid = require('uuid')

const utils = require('../utils')

const crypto = require('crypto-js')

const mailer = require('../mailer')

const router = express.Router()

router.post('/signup',(req,res) =>{
    const {name, email, phone, address, password} = req.body
    const encrptedPassword = crypto.SHA256(password)

    const activationToken = uuid.v1()

    // create uuid for user activation 

    const statement = `insert into user(name, phone, address, email, password,activationToken) values ('${name}', '${phone}','${address}','${email}','${encrptedPassword}','${activationToken}')`
    db.connection.query(statement,(err,data) =>{

        const body = `<h1>Welcome to Notes App </h1>
    <div>
        Please activate your account
        <div>
        <a href = "http://localhost:3000/user/activate/${activationToken}" > Activate my Account </a>
        </div>
    </div>`
       mailer.sendEmail(email,body,(err,data) =>{

           const result = utils.createResult(err,data)
           res.send(result)
       })   
    })
})


router.post('/signin',(req,res) =>{
    const {email,password} = req.body
    
    const encrptedPassword = crypto.SHA256(password)
    
    const statement = `select  id, name, phone, address, active from user where email = '${email}' and password = '${encrptedPassword}' `
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
                // check the user if active or not 
                if (user['active'] ==0){
                    result['status'] = 'error'
                    result['data'] = 'Your account is not active. Please activate your account by using link which is sent on your registered email.'
                }else{
                    result['status'] = 'success'
                    result['data'] = data
                }
            }
        }
        res.send(result)
    })

})

router.get('/activate/:token',(req,res) =>{
    const {token} = req.params

    const statement = `update user set active = 1 where activationToken = '${token}'`
    db.connection.query(statement,(err,data) =>{
        let body = ''
        if (err){
            body = `
            <h1>Error occured while activating your account </h1>
            <h5> ${err} </h5>`
        }else{
            body =
            `<h1> Congratulation !! Your account activation Successful.</h1>
            <h5> Please logIn to continue`
        }
        res.send(body)
    })
})


module.exports = router