const fs = require('fs');

const requestHandler = (req, res) => {
  // fetching the url for route based response
  const url = req.url;
  const method = req.method;

  // if url is '/' we send a form as response to enter some message and post to '/message'
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message' /><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end(); // add return to stop process for current request
  }

  // for '/message' route
  if (url === "/message" && method === "POST") {
    // variable of body which store chunks of data
    const body = [];

    // event listener on data incoming as chunk (Async)
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    // event listener on data stream end and parsing data (Async)
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });

    // writing some text to message.txt file
    // fs.writeFileSync('message.txt', 'DUMMY');

    // redirecting to '/' route
    // res.statusCode = 302;
    // res.setHeader('Location', '/');
    // other way for redirect is
    res.writeHead(302, {
      Location: "/",
    });

    return res.end();
  }

  // if url is not urls we are checking for routes then this code executes
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler; // default exports format

// export as object which inside it contains request handler
// module.exports = {
//   handler: requestHandler
// };

// also another way to export function or variables etc.,
// module.exports.handler = requestHandler;