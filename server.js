var http = require('http');

var server = http.createServer(function(req, res) {
    res.end("Sugeng rawuh ing nodejs")
})
var port = 9000
server.listen(port)

console.log("server urip ing port " + port)