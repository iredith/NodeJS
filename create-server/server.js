const http = require('http');

const routes = require('./routes');

function rqListener(req, res) {
  // logs URL, method of request and headers
  console.log(req.url, req.method, req.headers);

  // process.exit(); // for quitting process and exit the server

  // Response
  // setting header of content type
  res.setHeader('Content-Type', 'text/html');

  // write data in write()
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');

  // end of writing in response
  res.end();
}

// handling with route based request handling
const server = http.createServer(routes);

server.listen(3000);