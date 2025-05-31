const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('welcome to our homepage');
    }
    else if(req.url === '/about') {
        res.end('here is our short history');
    }
    else {
        res.end('<a href="/"> home </a>');
    }
});

server.listen(5000);