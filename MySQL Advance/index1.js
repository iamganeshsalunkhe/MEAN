const express = require('express')

const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

// routers 
const userRouter = require('./Routes/user')

const categoryRouter = require('./Routes/category')

app.use('/user',userRouter)

app.use('/category',categoryRouter)


app.get('/',(req,res) =>{
    res.send('<h1>Welcome to my web page </h1>')
})


app.listen(4000,'localhost',()=>{
    console.log(`Server started on 4000`);
})
