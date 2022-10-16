What is NodeJs?
  - It is a JavaScript Runtime on the server and user V8 engine created by GOOGLE for compile to machine code and written in C++.
  - [images: images/modejs_internal_flow.png]

Install NodeJs
  - Install nodeJs from nodejs.org and we can download from there following installing process.
  - To check version or exist of node {{ $ node --version }} or {{ $ node -v }}.
  - {{ $ node }} will let us to interactive mode for node.

Code Editor (suggest)
  - download by search /* vs code */ or [code.visualstudio.com]

Run in NodeJs
  - we can run js file by command {{ $ node <file-name> }}.

JavaScript on the Browser
  - Initially client request for information from browser through website and the request will send to server
  - From server there will be multiple factors which will take actions like user authentication, input validation, databases, etc
  - And client receives response as 3 files HTML, CSS, and JS to client browser and browser displays accordingly.
  - [images: images/JavaScript-on-server.png]
  - NodeJs is also used in not only servers but also like in react, or running our own JS scripts.
  - [images: images/no-limit]
  - [images: images/role-in-web]

JavaScript Basics
  - Weakly Typed Language
    - No explicit type assignment
    - Data types can be switched dynamically
  - Object-Oriented Language
    - Data can be organized in logical objects
    - Primitive and reference types
  - Versatile Language
    - Runs in browser & directly on a PC/ server
    - Can perform a broad vareity of tasks

How Web Works
  - User/Client enters page domain address which sends requests for what user wants to see.
  - The request is first sent to domain lookup for IP address match and send request to server that locates in IP address
  - The server fetches all the requested and related data as requests from user/client for response in HTML, CSS and JS files
  - Using those files browser helps to display the response from the server.
  - For requests or response it should follow some rules which can be like HTTP or HTTPS.
  - HTTP(HyperText Transfer Protocol): A protocol for Transferring data which is understood by browser and server.
  - HTTPS(HyperText Transfer Protocol Secure): HTTP + Data Encryption (during transmisson)

Core Modules
  - http: Launch server, send request
  - https: Launch a SSL server
  - fs: file system related module
  - path: path related module
  - os: Operating system related module

Creating a node server
  - http and https are modules that can be used for creating a server
  - all the details for creating a server is in /** nodejs-complete-guide/app.js */ in branch /** the-basics */

Node.Js Program LifeCycle
  - when we run node application file for creating a server it starts executing script
  - Then it starts parsing code, registering variables and functions
  - Later it enters to event loop which keeps on running as log=ng as there are event listeners registered.
  - The event loop exits when app exits or listeners were stop listening with process.exit()

Sending Response
  - We can console log response as we do for request
  - We can set headers using response.setHeader('/** key */', '/** value */') e.g.: res.setHeader('Content-Type', 'text/html')
  - we can send html content using res.write property

Parsing Request Bodies
  - Stream: stream is request data sent in chunks which means in parts until it fully parsed.
  - we can use data on data event listeners by on methods where we all chunks of data
  - After all the chunks are fully parsed we can use end event and convert the data from Buffer to string and work on it.

NodeJs behind the scenes
  - Our javascript runs in single threaded
  - When our code starts event also starts and handle callbacks too
  - Modules like 'fs' having heavy works sends to Worker Pool to do the heavy lifting which works on other threads.
  - Worker pool triggers appropiate callbacks to event loop
  - Event loop initially checks for timer callbacks like setTimeout, setInterval callbacks,
  - then checks for Pending callbacks like I/O-related (Disk and network operations {~Blocking Operations}) callbacks that were deferred
  - Then enters into Poll phase which are new I/O events and their callbacks etc.,
  - Then check callbacks like setImmediate callbacks
  - Finally calls the close callbacksand executes those and closes of process is exited else wait for other events
  
Summary:
  - How the Web Works
    1. Client ==> Request ==> Server ==> Response ==> Client
  
  - Program Lifecycle & Event Loop
    1. Node.js runs non-blocking JS code and uses an event-driven code ("Event Loop") for running your logic.
    2. A node program exits as soon as there is no more work to do.
    3. NOTE: The createServer() event never finishes by default.

  - Asynchronous Code
    1. JS code is non-blocking
    2. Use callbacks and events ==> Order Changes!

  - Requests & Responses
    1. Parse request data in chunks (Streams & Buffers)
    2. Avoid "double responses".

  - Node.js & Core Modules
    1. Node.js ships with multiple core modules (http, fs, path, ...)
    2. Core modules can be imported into anyfile to be used there.
    3. Import via require('module')

  - The Node Module System
    1. Import via require('./path-to-file') for custom files or require('module') for core & third-party modules
    2. Export via module.exports or just exports (for multiple exports)

