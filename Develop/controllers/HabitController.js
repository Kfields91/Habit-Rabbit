var express = require("express");
var router = express.Router();
var db = require("../models");

router.use("/members", function (req, res) {
    db.Habit.findAll(
        {
            where:
                //might need to tweak below
                {}// User: HabitId}
        }
    ).then(function (data) {
        //https://stackoverflow.com/questions/59690923/handlebars-access-has-been-denied-to-resolve-the-property-from-because-it-is
        var context = {
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

router.get("/displayGlobal", function (req, res) {
    db.Habit.findAll(
        {
            where: {
                displayGlobal: true
            }
        }
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
router.post("/api/habits", function (req, res) {
    db.Habit.create({ name: req.body.name, displayGlobal: req.body.displayGlobal }).then(function (dbHabit) {
        res.json(dbHabit);
    })
});

//move this to HabitEventController.js, turn into a create and destroy for toggle
router.put("/api/habits/:id", function (req, res) {
    db.Habit.update(req.body,
        {
            where: {
                id: req.body.id
            }
        })
        .then(function (dbHabit) {
            res.json(dbHabit);
        })
})

module.exports = router;
