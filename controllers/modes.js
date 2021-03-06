var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require("../models");
var request = require('request');
var mapApi = process.env.MAPS_API;


router.post("/", function(req,res){
	var originCity = req.body.cityStart
	var originReg = req.body.regStart
	var originAdd = req.body.addStart
	var endAdd = req.body.addEnd
	var endCity = req.body.cityEnd
	var endReg = req.body.regEnd
	var mode = req.body.mode;
	var date = req.body.date;
	if(mode === "Bus" || mode === "Transit Rail"){
		var newMode = "transit";
	}
	else if(mode === "Motorcycle" || mode === "Car" || mode === "Light-Duty Truck"){
		var newMode = "driving";
	}
	else if(mode === "Bicycle"){
		var newMode = "bicycling";
	}
	else if(mode === "Walking"){
		var newMode = "walking";
	}
	var mapData = "https://maps.googleapis.com/maps/api/distancematrix/json?origins="+ originAdd + "+" + originCity + "+" + originReg +"&destinations="+ endAdd + "+" + endCity + "+" + endReg + "&mode="+ newMode +"&language=en-En&key="+ mapApi;
	request(mapData, function(error, response, body){
		var mapOutput = JSON.parse(body);
		console.log("status######", mapOutput.rows[0].elements[0].status);
		res.render("modes", {map: mapOutput, modecurrent: mode, date: date})
	});	
});

module.exports = router;

// https://maps.googleapis.com/maps/api/distancematrix/json?origins=6530+11th+AveNW+Seattle+Wa&destinations=8201+OldDominionDr+McLean+Va&mode=bicycling&language=en-EN&key=AIzaSyBTxGyokc1nxACSX-NCzBPdTWBBUlhpl2Q


