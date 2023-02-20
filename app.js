//jshint rsversion:6
require('dotenv').config();
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");
const ProductModel = require("./model/model");

//database connection 
connectDB();
// const newProduct = new ProductModel({
//   name: "mi",
//   price: "49",
//   featured: false,
//   rating: 4.0
// })
// newProduct.save();
// ProductModel.deleteMany({},function(err){
//   if(!err){
//     console.log("deleted all")
//   }
// });
// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// get method
app.get("/", (req, res) => {
  res.send("<h1>Hello rest-api</h1>");
});


// middleware or to set router
app.use("/api/products",products_routes);

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Rest-api app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();


