const http = require("http");

const server = http.createServer((re, res) => {
    console.log("Supraja");
})

server.listen(4000)