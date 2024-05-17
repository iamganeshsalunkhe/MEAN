const express = require('express')

const bodyParser = require('body-parser')

const routerProduct =require('../02_New method/Routes/product')

const app = express()

app.use(bodyParser.json())

app.use(routerProduct)




app.listen(4000,'localhost',()=>{
    console.log(`Server started on 4000`);
})
