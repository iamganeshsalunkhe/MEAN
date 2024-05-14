// Import Express
const express = require('express')


// instantiate express application

const app = express()


// For Home URl '/'

app.get('/',(req,res) =>{
    res.end('This is GET /')
})

app.post('/',(req,res) =>{
    res.end('This is post /')
})
app.put('/',(req,res)=>{
    res.end("This is Put /")
})
app.patch("/", (req, res) => {
  res.end("This is Patch /");
});
app.delete("/", (req, res) => {
  res.end("This is delete /");
});


 //  For "/product" URL

app.get('/product',(req,res) =>{
  res.end('This is product get /')
})

app.put("/product", (req, res) => {
  res.end("This is product put /");
});

app.patch("/product", (req, res) => {
  res.end("This is product patch /");
});

app.post("/product", (req, res) => {
  res.end("This is product post /");
});

app.delete("/product", (req, res) => {
  res.end("This is product delete /");
});

app.listen(3000,'localhost', ()=>{
    console.log(`Application running`);
})
