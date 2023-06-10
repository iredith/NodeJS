const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    active_add_product: true,
    productCSS: true,
    formsCSS: true,
  });
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    active_shop: true,
    productCSS: true,
  });
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
};

exports.products = products;
