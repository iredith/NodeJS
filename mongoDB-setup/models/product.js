const mongodb = require('mongodb');
const { getDB } = require('../util/database');

class Product {
  constructor(title, price, description, imageUrl, id, userId) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id ? new mongodb.ObjectId(id) : null;
    this.userId = userId
  }

  save() {
    const db = getDB();
    let dbOp;
    if (this._id) {
      dbOp = db.collection('products')
      .updateOne(
        {
          _id: this._id
        },
        {
          $set: this
        }
      );
    } else {
      dbOp = db.collection('products').insertOne(this);
    }
    return dbOp
      .then((result) => {
        console.log(result);
      }).catch((err) => {
        console.error('=====>', err);
      });;
  }

  static fetchAll() {
    const db = getDB();
    return db.collection('products').find().toArray()
      .then(products => {
        return products;
      })
      .catch(err => {
        console.error('===> ', err);
      });
  }

  static findById(prodId) {
    const db = getDB();
    return db.collection('products')
    .findOne({ _id: new mongodb.ObjectId(prodId) })
    // .next()
    .then((product) => {
      console.log('===> ', product);
      if (!product) {
        throw new Error(`Product ${prodId} not found`);
      }
      return product;
    });
  }

  static deleteById(propId) {
    const db = getDB();
    return db.collection('products')
      .deleteOne({_id : new mongodb.ObjectId(propId)})
      .then(() => console.log('DELETED!'))
      .catch(err => console.error(err));
  }
}

// const Product = sequelize.define('product', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   title: Sequelize.STRING,
//   price: {
//     type: Sequelize.DOUBLE,
//     allowNull: false
//   },
//   imageUrl: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

module.exports = Product;
