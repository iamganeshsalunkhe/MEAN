const express = require('express')

// use body-parser
const bodyParser = require('body-parser')

const routerProduct = require('./index2')

const app = express()

// used to get the input parameters sent through request body
app.use(bodyParser.json())

// add the routes to the application

app.use(routerProduct)

app.listen(3000,'localhost',()=>{
    console.log(`Server Started on port 3000`);
})