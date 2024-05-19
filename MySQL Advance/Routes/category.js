const express = require('express')

const db = require('../db')

const utils = require('../utils')

const router = express.Router()



router.get('/',(req,res) =>{
    const statement = `select id, title, description from category `
    
    db.connection.query(statement, (err,data) =>{
        // create a result using status and data/error keys 

        const result = utils.createResult(err,data)
        res.send(result) 
    })
})

router.post('/',(req,res) =>{
    
    const {title,description} = req.body

    const statement = `insert into category (title, description) values ('${title}','${description}')`

    db.connection.query(statement,(err,data) =>{
        const result = utils.createResult(err,data)
        res.send(data)
    })
})

module.exports = router

