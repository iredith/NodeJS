const http = require('http');

const express = require('express');
const bodyParser = require('body-parser'); // For req body parser

const app = express();

app.use(bodyParser.urlencoded({extended: false})); // Have to run for parse req body

// this also can be added as one of the middleware
// app.use((req, res, next) => {
//   console.log('In the middleware!');
//   next(); // used to run next middleware
// });

app.use("/add-product", (req, res, next) => {
  console.log("In another middleware!");
  res.send('<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>');
});

app.post("/product", (req, res, next) => {
  console.log(req.body.title);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  console.log("In the middleware!");
  res.send('<h1>Hello From Express!</h1>');
});

app.listen(3000);

// to create server from http using express app still works
// const server = http.createServer(app);

// server.listen(3000);