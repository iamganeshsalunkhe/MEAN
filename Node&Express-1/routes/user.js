const express = require('express')

// get router
const router = express.Router()

router.get('/user',(req,res)=>{
    res.end(`this is GET USER!`)
})
router.put("/user", (req, res) => {
  res.end(`This is Order put `);
});
router.patch("/user",  (req, res) => {
  res.end(`This is Order patch `);
});
router.post("/user",  (req, res) => {
  res.end(`This is Order post `);
});
router.delete("/user",  (req, res) => {
  res.end(`This is Order delete `);
});

module.exports = router