var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/members", function (req, res) {
    db.Habit.findAll(
        //need to enter a WHERE after fixing the foreign keys, reference where user is the one logged in somehow
    ).then(function (data) {
        //https://stackoverflow.com/questions/59690923/handlebars-access-has-been-denied-to-resolve-the-property-from-because-it-is
        const context = {
            usersDocuments: data.map((x, i) => {
                return {
                    name: x.name,
                    id: x.id,
                    displayGlobal: x.displayGlobal
                }
            })
        };
        res.render("index", { Habit: context.usersDocuments });
    })
});

router.get("/global", function (req, res) {
    db.Habit.findAll({
        where: {
            displayGlobal: true
        }
    }).then(function (data) {
        //https://stackoverflow.com/questions/59690923/handlebars-access-has-been-denied-to-resolve-the-property-from-because-it-is
        const context = {
            usersDocuments: data.map((x, i) => {
                return {
                    name: x.name,
                    id: x.id,
                    displayGlobal: x.displayGlobal
                }
            })
        };
        res.render("global", { Habit: context.usersDocuments });
    })
});

router.post("/api/habits", function (req, res) {
    db.Habit.create({ name: req.body.name, displayGlobal: req.body.displayGlobal }).then(function (dbHabit) {
        res.json(dbHabit);
    })
});

module.exports = router;
