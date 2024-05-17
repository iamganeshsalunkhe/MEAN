// Importing express
const express = require('express')

const bodyParser = require('body-parser')

// Import router
const routerProduct = require('./Routes/product')

const app = express()

// for request body
app.use(bodyParser.json())

// add router to application server
app.use(routerProduct)

app.listen(3000,'localhost',() =>{
    console.log(`Server Started on 3000`);
})