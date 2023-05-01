const http = require("http");

const server = http.createServer((req, res) => {
    const url=req.url
    if (url === "/") {
        res.write("<h1>Welcome to my node js project</h1>");
        return res.end();
    }
     if (url === "/home") {
       res.write("<h1>Welcome home page</h1>");
       return res.end();
     }
     if (url === "/about") {
       res.write("<h1>Welcome to About us page</h1>");
       return res.end();
     }
     if (url === "/node") {
       res.write("<h1>Welcome to my node js project</h1>");
       return res.end();
     }
   
})

server.listen(4000)