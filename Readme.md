## NodeJS

### Introduction

#### What is NodeJS?

- Node.js is a javasvript runtime and it helps to run javascript in any server or machine(outside the browser)
- It uses V8 engine that is created by Google for running javascript which compile javascript code into machine code

*Funny Fact: V8 engine is written in C++*

#### Installation

- `nodejs.org` for downloading nodejs
- Can check whether node is installed or not by using below command
    $ node -v  // or
    $ node --version

- We can also open node shell with command `$ node`

#### JavaScript on the Server

- A client from browser requests to server of particular web page or through it's IP address
- Server gets the Request and it does some processing if required and send Response as HTML, CSS and JS (not mandatory for all the files to be send in response)
- And server uses nodejs for compiling server side code (like Authentication, Business logic, Validations, Database, etc.,)

> Note: NodeJS is not limited to the Server! Node.js is a JavaScript Runtime, you can use it for more than just server-side code like Utility Scripts, Build Tools, ...

NodeJs Role in Web Development

- **`Run Server`**: Create Server and Listen to Incoming Requests
- **`Business Logic`**: Handle Requests, Validate inputs, Connects to Database
- **`Response`**: Return Response (Rendered HTMl, JSON, ...)

> Alternatives for NodeJS are PHP, Python, Rubby, ASP.NET etc.,

2 ways of executing javascript
  1. The REPL(basically it's a node shell execution)
      - Great PlayGround
      - Execute code as you write it
  2. Using Files (by creating jd files and executing those files for applications)
      - Used for real applications
      - Predictable sequence of steps
