// importing 

const express = require('express')

// Routers
const userRouter = require('./routes/user')
const orderRouter = require('./routes/order')
const productRouter = require('./routes/product')

// create an express instance
const app = express()

// add the router
app.use(userRouter)
app.use(orderRouter)
app.use(productRouter)


// listening
app.listen(3000,'localhost',(req,res) => {
    console.log(`Server Started On port 3000`);
})