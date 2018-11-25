// Load Data
var friendData = require("../data/friends");


// Routing
module.exports = function (app) {


  // API Get Requests
  // Displays all friends
  app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });


  // API Post Request
  // Create New Friends - takes in JSON input
  app.post("/api/friendss", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    var newfriend = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newfriend);

    friends.push(newfriend);

    res.json(newfriend);
  });
};