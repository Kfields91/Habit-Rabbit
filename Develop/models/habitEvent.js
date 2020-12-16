module.exports = function (sequelize, DataTypes) {
    var HabitEvent = sequelize.define("HabitEvent", {
        date: DataTypes.DATE
    });
    HabitEvent.associate = function (models) {
        HabitEvent.hasOne(models.Habit);
    };
    return HabitEvent;
}