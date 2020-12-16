module.exports = function (sequelize, DataTypes) {
    let HabitEvent = sequelize.define('HabitEvents', {
        date: DataTypes.DATE,
    });
    HabitEvent.associate = function (models) {
        HabitEvent.hasOne(models.Habit);
    };
    return HabitEvent;
}