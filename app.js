const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    if (req.url == "/") {
       fs.writeFile('demo.txt','Hi, I am soaib', function(error){
        if (error) {
            res.writeHead(200,{"content-type":"text/html"})
            res.write('file write failed');
            res.end();
        }else{
            res.writeHead(200,{"content-type":"text/html"})
            res.write('file write successfully');
            res.end();
        }
       })
    }
});

server.listen(8080);
console.log("Success");