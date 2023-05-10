const http = require("http");
const bodyParser=require("body-parser")

const express=require("express")

const app = express()

app.use(bodyParser.urlencoded({encoded:false}))

app.use("/add-product",(req, res, next) => {
    console.log("In the middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>')
})
app.use("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/")
});

app.use("/",(req, res, next) => {
    console.log("In the another middleware");
    res.send("<h1>hello to node js</h1>")
})

app.listen(4000)