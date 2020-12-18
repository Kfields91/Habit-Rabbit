var express = require("express");
var router = express.Router();

var habit = require("../models/habit.js");
var habitEvent = require("../models/habitEvent.js");


router.get("/members", function (req, res) {
    res.render("index");
});


module.exports = router;
