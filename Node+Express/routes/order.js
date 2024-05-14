const express = require('express')

// get router

const router = express.Router()


router.get('/order',(req,res) =>{
    res.end(`This is Order get `)
})
router.put('/order',(req,res) =>{
    res.end(`This is Order put `)
})
router.patch("/order", (req, res) => {
  res.end(`This is Order patch `);
});
router.post("/order", (req, res) => {
  res.end(`This is Order post `);
});
router.delete("/order", (req, res) => {
  res.end(`This is Order delete `);
});


module.exports = router