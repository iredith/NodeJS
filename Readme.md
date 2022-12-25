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

### Basics

#### How web works

- When user/client enters into website for example `http://my-page.com`.
- Then **Domain Lookup** check for IP address assigned for that URL entered.
- Then request will be sent to that IP address (server) which is sent from entering the URL by user/client.
- Server contains our code and it does the required process based on the request.
- After the processing the server sends the data as Response to user/client.

There are some to follow that we can send response or request, those are calles **`Protocols`**.

`HTTP`: *Hyper Text Transfer Protocol* - A Protocol for Transferring Sata which is understand by Browser and Server
`HTTPS`: *Hyper Text Transfer Protocol Secure* - A Protocol for Transferring Sata which is understand by Browser and Server with Data Encryption (during Transformission).

#### Create a Node Server

- There are few modules, which are added gloablly along with node, can be used for creating server

Some of the core modules are:

1. `http`: Helps with launching a server and sending requests
2. `https`: Launch SSL encoded server
3. `fs`
4. `path`
5. `os`

- For creating a server, initially we import core module called `http` which contains createServer function with returns server.
- We have to call listen function from the server for any requests
- Inside createServer, it takes function which process the request from user/client.

#### NodeJs Lifecycle & Event Loop

`$ node server.js` --> Start Script --> Parse Code, Resgister Variables & Functions --> enters into Event Loop

- **Event Loop** keeps on running as long as there are event listeners registered

> process.exit() can be used to exit from process and stop the server.

- Data for the request details exits in request which we use in first parameter of function in createServer

- We use second parameter to send response.

In Request:
- URL endpoint contains in request.url and method in request.method
- Data will come to node server in the form of chunks until it is fully parsed.
- We can use Buffer concept contruct to allow to build data

#### Single Thread, Event Loop & Blocking Code

- Incoming requests are sent to our code which is running on single threaded JavaScript, whic start event loop when we run start our code to execution and heavy works are sent to worker pool (which works on different thread) and triggers callback in event loop.

![Node.js - Looking Behind the Scenes](/images/node_flow.png "Node.js - Looking Behind the Scenes")

The process of Event Loops is that it loops into callbacks that to process in a priority manner

1. `Timer`: Execute setTimeOut, setInterval Callbacks
2. `Pending Callbacks`: Execute I/O-related Callbacks that were deferred
    - `I/O`? Input & Output Disk & Network Operations (~ Blocking Operations)
3. `Poll Phase`: Retrieve new I/O events, execute their callbacks.
    - if it contains timer callbacks it jumps to Timer Execution
    - Or defer Execution if it exists
4. `Check`: Execute setImmediate() callbacks
5. `Close Callbacks`: Execute all 'close' event callbacks
6. if we don't have any events left and exits from process then we exits from server *process.exit* which is maintained with refs by adding count or it waits on listening for other request.

![Event Loop](/images/event_loop.png "Event Loop priority order for handling callbacks")

