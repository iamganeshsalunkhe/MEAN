const express = require('express')

const DB = require('../DB')

const router = express.Router()


// Get
router.get('/product',(req,res) =>{
    const connection = DB.connection()
    const statement = `select id , price, title, description from product`

    connection.query(statement,(err,data)=>{
        if (err){
            console.log(`Error:${err}`);
        }else{
            console.log(data);
        }
        connection.end()

        res.send(data)
    })
})

// POST
router.post("/product/", (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    
    const connection = DB.connection();
    const statement = `insert into product (title, description, price) values ('${title}','${description}','${price}')`;

    connection.query(statement, (err, data) => {
    if (err) {
      console.log(`Error:${err}`);
    } else {
      console.log(data);
    }
    connection.end();

    res.send(data);
  });
});

// PUT
router.put("/product/:id", (req, res) => {
    const id = req.params.id
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    
    const connection = DB.connection();
    const statement = `update product set title = '${title}',price = '${price}',description = '${description}' where id = ${id}`
    connection.query(statement, (err, data) => {
    if (err) {
      console.log(`Error:${err}`);
    } else {
      console.log(data);
    }
    connection.end();

    res.send(data);
  });
});

// Delete
router.delete("/product/:id", (req, res) => {
    const id = req.params.id
    const connection = DB.connection();
    const statement = `delete from product where id = ${id}`;

    connection.query(statement, (err, data) => {
    if (err) {
      console.log(`Error:${err}`);
    } else {
      console.log(data);
    }
    connection.end();

    res.send(data);
  });
});

module.exports = router
