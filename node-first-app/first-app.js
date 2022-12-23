// logging to cmd prompt from console
console.log('Hello, Welcome to NodeJS Factory');

const fs = require('fs');
fs.writeFileSync('first-app.txt', 'File system sending Message');
