const express = require('express')

const bodyParser = require('body-parser')

const jwt = require('jsonwebtoken')

const config = require('./config')

// get routes

const userRouter = require('./Routes/user')

const noteRouter = require('./Routes/notes')
const router = require('./Routes/notes')
const utils = require('./utils')


// middleware to check if the request has received with a valid and verified token
function authorizerUser(req,res,next){
    // token will not be available for signin and signup urls
    if (
        (req.url == '/user/signin') ||
        (req.url == '/user/signup') ||
        (req.url.startsWith('/user/activate/')))
        {
            next()
        }
        else{
        const token = req.header['token']
        if (!token){
            // token is missing
            res.status(401)
            res.send(utils.createResult('token is missing'))
        } else {
            // token is sent in header
            try{
                // verify the token and get id
                const data = jwt.verify(token, config.secret)
                // add the user id in the request object
                // so that we can share this in all the API's
                req.userId = data.id
                // go the next function 
                next()
            }
            catch (error) {
                res.status(401)
                res.send(utils.createResult('Unauthorize Access'))
        }
    }
}
}

const app = express()

app.use(bodyParser.json())

app.use(authorizerUser)

app.use('/user',userRouter)

app.use('/note',noteRouter)


app.listen(3000,'localhost',()=>{
    console.log(`Server stated on port 3000`);
})