const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  res.render('shop', {
    prods: adminData.products,
    pageTitle: 'Shop',
    path: '/',
  });
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
