const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const Product = require('./models/product');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const User = require('./models/user');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findByPk(2)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch(err => {
      console.error('=========> Error', err);
    });
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { contraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User); // optional
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });
// Product.belongsToMany(Order, { through: OrderItem });

sequelize
  .sync()
  // .sync({ alter: true })
  // .sync({ force: true })
  .then(() => {
    return User.findByPk(2);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: 'Edith', email: 'hello@edith.com' });
    }
    return user;
  })
  .then((user) => {
    if (user.getCart()) {
      user.createCart();
    }
  })
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.error('=====> Error in creating DB!!!!!!', err);
  });

