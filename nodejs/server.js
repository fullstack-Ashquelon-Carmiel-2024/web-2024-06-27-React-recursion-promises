// http - HyperTextTransferProtocol - בין דפדפן לשרת אינטרנט
// tcp - בין מחשב לבסיס נתונים
// ftp - FileTransferProtocol - העלאת קבצים לשרת כלשהו

const http = require('http');

const port = 3050;

// req - request - הבקשה של הדפדפן
// res - response - התגובה של השרת

// HTTP codes: 200 - OK, 404 - File Not Found, 500 - Server Error
const server = http.createServer((req, res) => {

    console.log(req.url)
    // ROUTER
    switch (req.url) {
        case '/':
        case '/home':
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(`<h1>Hunny, I am HOME</h1>`)
            break;
        case '/about':
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(`<h1>We're the best company in the market</h1>`)
            break;
        case '/contacts':
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(`<h1>Our Phone is 555-5555</h1>`)
            break;
        default:
            res.writeHead(404,{'Content-Type':'text/html'})
            res.end(`<h1 style="color:red;font-family:Arial;">NOT FOUND</h1>`)
    }

        
    

});

// '127.0.0.1','localhost'

server.listen(port,'127.0.0.1',() => {
    console.log(`Listening on port ${port}`)
})

// to request something from the browser, type
// in the address line:
//  localhost:3050
// or
//  127.0.0.1:3050
