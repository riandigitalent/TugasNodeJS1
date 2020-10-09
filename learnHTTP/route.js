const http = require('http')
const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    switch (req.url) {
        case '/tentang':
            res.write('<h1>Ini adalah halaman Tentang</h1>')
            break
        case '/produk':
            res.write('<h1>Ini adalah halaman produk</h1>')
            break
        case '/kontak':
            res.write('<h1>Ini adalah halaman Kontak</h1>')
            break
        default:
            res.write('<h1>404 halaman tidak ada</h1>')
    }
    res.end()
})

server.listen(1234)
console.log('server run in port 1234')