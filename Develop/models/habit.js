module.exports = function (sequelize, DataTypes) {
    var Habit = sequelize.define("Habit", {
        name: DataTypes.STRING,
        displayGlobal: DataTypes.BOOLEAN
    });
    Habit.associate = function (models) {
        Habit.hasOne(models.User);
    }
    return Habit;
}
