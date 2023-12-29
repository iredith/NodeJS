const mongodb = require('mongodb');
const { getDB } = require("../util/database");

const ObjectID = mongodb.ObjectId;

class User {
  constructor(username, email, cart, id) {
    this.email = email;
    this.name = username;
    this.cart = cart;
    this.id = id;
  }

  save() {
    const db = getDB();
    return db.collection('users')
      .insertOne(this);
  }

  addToCart(product) {
    const cartProduct = this.cart.items.findIndex(cp => {
      return cp._id.equals(product._id);
    });
    const db = getDB();
    return db.collection('users').updateOne({
      _id: new mongodb.ObjectId(this.id)
    },{
      $addToSet: {
        'cart.items': product,
        'cart.totalQuantity': 1
      }
    })
  }

  static findById(userId) {
    const db = getDB();
    return db.collection('users').findOne({ _id: new ObjectID(userId) })
    .then((user) => {
      console.log('===> USER', user);
      if (!user) {
        throw new Error(`User ${userId} not found`);
      }
      return user;
    });;
  }
}

module.exports = User;
