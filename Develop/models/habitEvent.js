var sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    var HabitEvent = sequelize.define("HabitEvent", {
        date: DataTypes.DATE
    }, {
        timestamps: false
    }, {
        freezeTableName: true
    });
    HabitEvent.associate = function (models) {
        HabitEvent.belongsTo(models.Habit);
    };
    return HabitEvent;
}