// NPM modulue
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//Creating the app
const app = express();
const PORT = process.env.PORT || 8080;

// Use static 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.static(path.join(__dirname, './app/public')));


// ROutes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);






//start the server and listen
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});