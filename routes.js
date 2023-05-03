const fs = require("fs");

const handleEvent = (req, res) => {

    const url = req.url;
    const method = req.method;

   if (url === "/") {
     fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
       if (err) {
         console.log(err);
       }
       res.write("<html>");
       res.write("<head><title>Enter meassage</title></head>");
       res.write(`<body>${data}</body>`);
       res.write(
         "<form action='/message' method='POST'><input type='text' name='message'><button type='submit'>SEND</button></form>"
       );
       res.write("</html>");
       return res.end();
     });
   }
   if (url === "/message" && method === "POST") {
     const body = [];
     req.on("data", (chunk) => {
       body.push(chunk);
     });

     return req.on("end", () => {
       const parsedBody = Buffer.concat(body).toString();
       const message = parsedBody.split("=")[1];
       fs.writeFile("message.txt", message, (err) => {
         res.statusCode = 302;
         res.setHeader("Location", "/");
         return res.end();
       });
     });
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
}

module.exports = handleEvent;


