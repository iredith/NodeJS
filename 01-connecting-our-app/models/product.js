const db = require('../util/database');
const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    db.execute(
      'INSERT INTO products (title, description, imageUrl, price) values (?, ?, ?, ?)',
      [this.title, this.description, this.imageUrl, this.price]
    );
  }

  static deleteById(id) {
    db.execute(
      'DELETE FROM products WHERE products.id = ?;',
      [id]
    )
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
  }
};
