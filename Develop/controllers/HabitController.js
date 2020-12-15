var express = require("express");
var router = express.Router();

var habit = require("../models/habit.js");

router.get("/", function (req, res) {
    habit.all(function (data) {
        var hbsObject = {
            habits: data
            //habits needs to be named in line with what is in the views folder
        };
        console.log(hbsObject);
        res.render("members", hbsObject);
    });
});

router.post("/api/habits", function (req, res) {
    habit.create(["name", "displayGlobal"], [req.body.name, req.body.displayGlobal], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/habits/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    habit.update(
        {
            checked: req.body.checked
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
