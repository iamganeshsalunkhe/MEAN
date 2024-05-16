const express = require('express')

const app = express()

// Middleware function
function logrequest(req,res,next){
    console.log(`This is log request`);
    
    // call next function
    next()
}

function logrequest2(req,res,next){
    console.log(`This is logrequest 2`);
    next()
}
function logrequest3 (req,res,next){
    console.log(`This is logrequest 3`);
    next()
}

// Using middleware function
app.use(logrequest)
app.use(logrequest2)
app.use(logrequest3)

app.get('/',(req,res)=>{    
    console.log(`Hello my friend`);
    res.end(`This is Home GET`)
})

app.post('/',(req,res)=>{
    
    console.log(`Hello my friend`);
    res.end(`This is Home POST`)
})

app.listen(3000,'localhost',()=>{
    console.log(`Server Started`);
})