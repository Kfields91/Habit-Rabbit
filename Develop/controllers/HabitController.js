var express = require("express");
var router = express.Router();

var habit = require("../models/habit.js");
var habitEvent = require("../models/habitEvent.js");

router.get("/", function (req, res) {
    habit.all(function (data) {
        var hbsObject = {
            habit: data
            //habit needs to be named in line with what is in the views folder
            //nest in habitsEvent obj to this route
        };
        console.log(hbsObject);
        res.render("members", hbsObject);
    });
    habitEvent.all(function (data) {
        var eventObject = {
            habitEvent: data
            //habitEvent needs to be named in line with what is in the views folder
            //nest in habitsEvent obj to this route
        };
        console.log(eventObject);
        res.render("members", eventObject);
    });
});

router.get("/members", function(req,res){
    res.render("index");
});

router.post("/api/habits", function (req, res) {
    habit.create(["name", "displayGlobal"], [req.body.name, req.body.displayGlobal], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/habitsEvent/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    habitEvent.update(
        {
            // date: req.body
            //need to figure out what req.body obj looks like to pull out the correct data for this put request
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                return res.status(404);
            }
            res.status(200);

        }
    );
});

module.exports = router;
