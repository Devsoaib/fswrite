const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    if (req.url == "/") {
        fs.rename('demo.txt', 'soaib.txt', function(error){
            if (error) {
                res.writeHead(200, {"content-type":"text/html"});
                res.write('File rename failed')
            }else{
                res.writeHead(200, {"content-type":"text/html"});
                res.write('File rename success')
            }
        })
    }
});

server.listen(3030);
console.log("Success");