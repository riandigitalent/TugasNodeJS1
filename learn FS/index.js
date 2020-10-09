const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    fs.readFile('index.html', function(err, data) { //ambil nama data
        res.writeHead(200, { 'Content-Type': 'text/html' })
        if (err) {
            console.error(err)
            res.write(' error pada server')
            res.end()
            return
        }

        // kirim response
        res.write(data)
        res.end()
    })
}).listen(4442)

console.log('voba 4442')