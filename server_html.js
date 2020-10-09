var http = require('http')
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('hallo <b>penduduk Boemi</b>')
    res.end();
}).listen(9001)

console.log("server urip ing port 9001")