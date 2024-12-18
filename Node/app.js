// Here we create a node.js server and connect to it.

const http = require('http');

// function rqListener(req, res){

// }
const server = http.createServer((req, res) =>{
    console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello I am Himanshu Pradhan');
    res.end();

});
server.listen(4000)