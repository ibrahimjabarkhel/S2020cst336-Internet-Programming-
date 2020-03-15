/* To use EJS
    1. Every ejs file has an extension .ejs
    2. NODEJS looks into a folder views to render a page
    3. Tell NodeJS to use ejs as page rendering engine

*/

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static("css"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("home");
});

var friendsList = ["Alice", "Clark", "Bellamy", "Octavia"];


app.get("/friends", function(req, res) {
    res.render("friends", {friends : friendsList});
});

app.post("/addfriend", function(req, res){
    var newfriend = req.body.newfriend;
    friendsList.push(newfriend);
    res.redirect("/friends");
});


app.get("*", function(req, res){
    res.render("error");
});

app.listen(process.env.PORT, function() {
    console.log("Server is Running!");
});