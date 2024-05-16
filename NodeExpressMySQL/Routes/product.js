// import express
const express = require("express");

// import mysql js driver
const mySQL = require("mysql");

const router = express.Router;

router.get("/product", (req, res) => {
  // step1: open the database connection
  const connection = mySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "Ganesh@1498",
    database: "mystore",
    port: 3306,
  });

  // step2 :create Query
  const statement = "select id ,title, description, price from product";

  // step3:execute the query
  connection.query(statement, (err, data) => {
    // step4:process the data
    if (err) {
      // if error occures
      console.log(`Error:${err}`);
    } else {
      // no error
      console.log(data);
    }
    // step5:close the connection
    connection.end();
    res.send(data);
  });
});

module.exports = router;
