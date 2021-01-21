const fs = require('fs');

fs.writeFileSync('hello.txt','hello from node.js'); // file write to our Hard Drive


const http = require('http'); //this is the in node for import the code node module.

// function rqListener(req, res){

// }

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.emit; // deregister the from event loop process.
    res.setHeader('Content-Type','text/html') // set the header to response
    res.write('<html>'); // write allows us to write some data to the response.
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node JS server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000); // keeps on listening incoming request from the server.



// Path Module
var path = require('path');
var filename = path.basename('/Users/Refsnes/demo_path.js'); // base is use to return for last path of filename
console.log(filename);

//OS Module
var os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());

//File System module
var fs = require('fs');

fs.readFile('hello.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});

//Event Module
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');

//Http Module
//create a server object:
http.createServer(function (req, res) {
  res.write('Hello from node js!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080


//below is middle ware example
const express = require('express');

const app = express();

//use allow us to add middleware functions
app.use((req, res, next) => {
  console.log('In the middleware');
  next(); //next allow us to travel to execute the another middleware

});

app.use((req, res, next) => {
  console.log('In the another middleware');

});

const server = http.createServer(app);
server.listen(3000);
//------------------End of middleware----------------------//


