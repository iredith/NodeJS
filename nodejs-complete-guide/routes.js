const fs = require('fs');

const requestHandler = (req, res) => {
  // console.log(req.url, req.method, req.headers); // logging req properties

  // response starts
  
  const url = req.url;
  const method = req.method;
  
  res.setHeader('Content-Type', 'text/html');

  if (url === '/') { // condition if url path is '/'
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write(' \
    <body> \
      <form action="/message" method="post"> \
        <input type="text" name="message" /> \
        <button type="submit">Send</button> \
      </form> \
    </body>'
    );
    res.write('</html>');
  } else if (url === '/message' && method === 'POST') {
    const data = [];
    req.on('data', (chunk) => {
      data.push(chunk);
    })
    req.on('end', () => {
      const parsedData = Buffer.concat(data).toString();
      const message = parsedData.split('=')[1];
      fs.writeFileSync('message.txt', message);
    })
    res.statusCode = 302; // set redirect status code
    res.setHeader('Location', '/'); // set redirect location
  } else {
    res.write('<html>');
    res.write('<head><title>My First Node Response</title></head>');
    res.write('<body><h1>Hello from my NodeJs server!!</h1></body>');
    res.write('</html>');
  }
  
  res.end(); // when we are done writing response we have to call this function anything after this wont work.
  // response ends

  // process.exit() // for exiting process
};

module.exports = requestHandler;