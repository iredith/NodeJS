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

