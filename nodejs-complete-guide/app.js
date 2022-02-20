const http = require('http');
const routes = require('./routes');

// given port value 3000 to liten for server
const PORT = 3000

// listener function that keep checks on request and response on server
// also we can use anonymous function in createServer itself.
// function rqListener(req, res) {}

// listener function is executed anonymously and cresteServer returns server where we can execute multiple
// functionalities.
const server = http.createServer(routes);

// gives cmd to server to listen to certain port by default 80
server.listen(PORT);