const express = require("express");
const path = require('path');

const rootDir = path.dirname(require.main.filename);

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("In the middleware!");
  res.status(200).sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
