const express = require('express')

// get router

const router = express.Router()

router.get("/product", (req, res) => {
  res.end(`This is Product get `);
});
router.put("/product", (req, res) => {
  res.end(`This is Product put `);
});
router.patch("/product", (req, res) => {
  res.end(`This is Product patch `);
});
router.post("/product", (req, res) => {
  res.end(`This is Product post `);
});
router.delete("/product", (req, res) => {
  res.end(`This is Product delete `);
});


module.exports= router