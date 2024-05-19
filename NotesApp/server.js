const express = require('express')

const bodyParser = require('body-parser')

// get routes

const userRouter = require('./Routes/user')

const noteRouter = require('./Routes/notes')


const app = express()

app.use(bodyParser.json())

app.use('/user',userRouter)

app.use('/note',noteRouter)




app.listen(3000,'localhost',()=>{
    console.log(`Server stated on port 3000`);
})