const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const loginRoutes = require('./routes/login');
const msgRoutes = require('./routes/message');

app.use(bodyParser.urlencoded({ encoded: false }));

app.use(loginRoutes);
app.use(msgRoutes);

app.listen(4000);
