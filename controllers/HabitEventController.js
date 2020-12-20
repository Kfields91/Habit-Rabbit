var express = require("express");
var router = express.Router();
var db = require("../models");

router.post("/api/habitEvents", function (req, res) {
    db.HabitEvent.create({ date: req.body.date }).then(function (dbHabitEvent) {
        res.json(dbHabitEvent);
    });
});

router.delete("/api/habitEvents/:id", function (req, res) {
    db.HabitEvent.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbHabitEvent) {
        res.json(dbHabitEvent);
    });
});

module.exports = router;
