const bodyParser = require("body-parser");
const express = require("express");
const path=require("path")

const app = express();

app.use(bodyParser.urlencoded({ encoded: false }));
app.use(express.static(path.join(__dirname,"public")))

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactRoutes = require("./routes/contact");

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes)

app.use("/success",(req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "success.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,"views","status404.html"));
});

app.listen(4000);
