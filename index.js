require("dotenv").config();
var express = require('express');
var request = require('request');
var session = require("express-session");
var flash = require("connect-flash");
var isLoggedIn = require("./middleware/isLoggedIn")
var passport = require("./config/passportConfig");
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var app = express();


//set up middleware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false }));
app.use(ejsLayouts);
app.use(session({
	secret: process.env.SESSION_SECRET, //secret defined in .env file
	resave: false,
	saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.alerts = req.flash();
	next();
});

app.use(express.static(__dirname + "/public/"));

app.get("/", function(req, res) {
		res.render("homepage")
	});
app.get("/profile", isLoggedIn, function(req, res){
	res.render("profile");
})

//controllers
app.use("/modes", require("./controllers/modes"));
app.use("/auth", require("./controllers/auth"));




var server = app.listen(process.env.PORT || 3000);
