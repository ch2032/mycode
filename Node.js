// This will return undefined as expression has no value
console.log('test');

var http = require("http");


// This code creates a server and shows you how to write a response to it
//create a server object:
http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello Web World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

// SYNCHRONOUS EXAMPLE
var result = database.query("SELECT * FROM bigtable");
console.log("db operation is done");
console.log("Hello World");
