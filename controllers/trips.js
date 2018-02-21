var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require("../models");
var request = require('request');
var isLoggedIn = require("../middleware/isLoggedIn");

// render trips page for specific users
router.get("/", isLoggedIn, function(req, res) {
    db.users.findOne({
    	where: {id: req.user.id},
    	include: [db.modes]
    }).then(function(alltrips){
    	res.render("trips", {user: alltrips});
    });
});

//add trips to db for specific user
router.post("/", isLoggedIn, function(req, res) {
	db.modes.create({
            userId: req.user.id,
            mode: req.body.mode,
            distance: req.body.distance,
            carbon: req.body.carbon,
            date: req.body.date
    }).then(function(newTrip){
            res.redirect("/trips")
    }).catch(function(err){
		console.log("error error!", err);
        res.status(500).send("An error occurred!");
	});
});

//delete route

router.delete("/:id", function(req, res){
    db.modes.destroy({
        where: {id: req.params.id}
    }).then(function(deleted){
        console.log("delete=", deleted);
        res.send("success");
    });
})

module.exports = router;
