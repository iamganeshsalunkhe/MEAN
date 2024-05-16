const express = require("express");
const bodyParser = require("body-parser");
// Import all routes

const routeProducts = require("./Routes/product");

const app = express();

// for request body

app.use(bodyParser.json());

// Add router to the application server
app.use(routeProducts);

app.listen(3000, "localhost", () => {
  console.log(`Server Started`);
});
