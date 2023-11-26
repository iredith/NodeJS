const db = require('../util/database');

function createProductsTable() {
  // to create products table
  db.execute("CREATE TABLE `node-complete`.`product` ( \
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `title` VARCHAR(255) NOT NULL, \
    `price` DOUBLE NOT NULL, \
    `description` TEXT NOT NULL, \
    `imageUrl` VARCHAR(255) NOT NULL, \
    PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE); \
  ")
    .then(
      res => console.log('====> res', res),
      err => console.error('===> err', err)
    )
    .finally(() => db.end());
}

function deleteProductTable() {
  // to delete tables
  db.execute("DROP TABLE `node-complete`.`product`;")
    .then(
      res => console.log('====> res', res),
      err => console.error('===> err', err)
    )
    .finally(() => db.end());
}

deleteProductTable();
