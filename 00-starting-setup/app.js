const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

// handle bars view engine define
app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' }));
app.set('view engine', 'hbs');

// to set templating engine for pug and can set with in-built set function for view engine
// app.set('view engine', 'pug');

const adminData = require("./routes/admin");
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found'
    });
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
