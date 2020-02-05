var express = require("express");
var compression = require('compression');
require('dotenv').config();

var PORT = process.env.PORT || 8080;

var app = express();
app.use(compression());

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes")(app);

var db = require("./models");

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
   
    console.log("Server listening on: http://localhost:" + PORT);
  });
})