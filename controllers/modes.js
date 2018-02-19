var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require("../models");
var request = require('request');
var mapApi = process.env.MAPS_API;


router.post("/", function(req,res){
	var origin = req.body.start;
	var endpoint = req.body.end;
	var mode = req.body.mode;
	if(mode === "bus" || mode === "transitrail"){
		var newMode = "transit";
	}
	else if(mode === "motorcylce"){
		var newMode = "driving";
	}
	else if(mode === "bicycling" || mode === "walking" || mode === "driving"){
		var newMode = mode
	}
	console.log('moooode', mode);
	var mapData = "https://maps.googleapis.com/maps/api/distancematrix/json?origins="+ origin +"&destinations="+ endpoint +"&mode="+ newMode +"&language=en-En&key="+ mapApi;
	request(mapData, function(error, response, body){
		var mapOutput = JSON.parse(body);
		console.log("mapppp my outpuuuut", mapOutput)
		res.render("modes", {map: mapOutput, modecurrent: mode})
	});	
});

module.exports = router;

// https://maps.googleapis.com/maps/api/distancematrix/json?origins=6530+11th+AveNW+Seattle+Wa&destinations=8201+OldDominionDr+McLean+Va&mode=bicycling&language=en-EN&key=AIzaSyBTxGyokc1nxACSX-NCzBPdTWBBUlhpl2Q


