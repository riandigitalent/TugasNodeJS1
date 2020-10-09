const http = require('http')
const url = require('url')

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    const query = url.parse(req.url, true).query
    const respone = 'kata kunci: ' + query.keyword
    res.write(respone)
    res.end()
}).listen(8000)

console.log('server jalan di port 8000')