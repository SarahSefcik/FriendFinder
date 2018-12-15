// Dependencies
var path = require("path");

// Routes
// ==============================================

// Basic route that sends user to the first page
module.exports = function (app) {
  
// HTML GET REQUESTS
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});



};


