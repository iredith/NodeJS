const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// handle bars package import
// const expressHbs = require('express-handlebars');

const app = express();

// handle bars view engine define
// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' }));
// app.set('view engine', 'hbs');

// to set templating engine for pug and can set with in-built set function for view engine
// app.set('view engine', 'pug');

// set view engine to ejs
app.set('view engine', 'ejs');
// this to know for express from where the templates can be rendered. default: views
app.set('views', 'views'); 

const adminData = require("./routes/admin");
const shopRoutes = require('./routes/shop');
const { get404 } = require('./controllers/error');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use(get404);

app.listen(3000);
