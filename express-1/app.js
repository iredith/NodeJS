// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser'); // For req body parser
const path = require('path');

const app = express();

// importing routes from other files
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false})); // Have to run for parse req body
app.use(express.static(path.join(__dirname, 'public')));

// adding to curent app
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// this also can be added as one of the middleware
// app.use((req, res, next) => {
//   console.log('In the middleware!');
//   next(); // used to run next middleware
// });

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);

// to create server from http using express app still works
// const server = http.createServer(app);

// server.listen(3000);