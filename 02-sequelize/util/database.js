const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node-complete',
    'root',
    '336699',
    { 
        dialect: 'mysql',
        host: 'localhost'
    });

module.exports = sequelize;