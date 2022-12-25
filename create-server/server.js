const http = require('http');

function rqListener(req, res) {
  console.log('===> NodeJS', req);
}

const server = http.createServer(rqListener);

server.listen(3000);