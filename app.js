/*const bodyParser = require("body-parser");
const express = require("express");
const path=require("path")

const app = express();

app.use(bodyParser.urlencoded({ encoded: false }));
app.use(express.static(path.join(__dirname,"public")))

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactRoutes = require("./routes/contact");

const errorController=require("./controllers/404")

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes)

app.use("/success",(req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "success.html"));
});

app.use(errorController.get404Page);

app.listen(4000); */


const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(4000);
