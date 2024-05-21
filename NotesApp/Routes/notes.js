const express = require("express");

const db = require('../db');

const utils = require('../utils');

const router = express.Router();

router.post('/:userId',(req,res) =>{
    const {userId} = req.params
    const {title,content} = req.body

    const statement = `insert into notes (title,content, userId) values ('${title}', '${content}','${userId}')`

    db.connection.query(statement,(err,data) =>{
        res.send(utils.createResult(err,data))
    })

})

router.get('/:userId',(req,res) =>{
     const {userId} = req.params

     const statement = `select * from notes where userId = '${userId}'`

     db.connection.query(statement, (err,data) =>{
        res.send(utils.createResult(err,data))
     })
})

router.put('/:noteId',(req,res) =>{
    const {noteId} = req.params

    const {title,content} = req.body
    
    const statement = `update notes set title = '${title}', content = '${content}' where id = ${noteId}`

    db.connection.query(statement,(err,data)=>{
        res.send(utils.createResult(err,data))
    })
})


router.delete('/single/:noteId',(req,res) =>{
    const {noteId} = req.params

    const statement = `delete from notes  where id = ${noteId}` 

    db.connection.query(statement,(err,data) =>{
        res.send(utils.createResult(err,data))
    })
})

router.delete("/all/:userId", (req, res) => {
  const { userId } = req.params;

  const statement = `delete from notes  where userId = ${userId}`;

  db.connection.query(statement, (err, data) => {
    res.send(utils.createResult(err, data));
  });
});



module.exports = router;
