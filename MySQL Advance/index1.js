const express = require('express')

const bodyParser = require('body-parser')
const app = express()

// routers 
const userRouter = require('./Routes/user')

app.use(bodyParser.json())

app.use('/user',userRouter)


app.get('/',(req,res) =>{
    res.send('<h1>Welcome to my web page </h1>')
})


app.listen(4000,'localhost',()=>{
    console.log(`Server started on 4000`);
})
