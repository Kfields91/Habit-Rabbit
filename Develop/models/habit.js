module.exports = function (sequelize, DataTypes) {
    let Habit = sequelize.define('Habits', {
        name: DataTypes.STRING,
        displayGlobal: DataTypes.BOOLEAN,
        checked: DataTypes.JSON
    });
    Habit.hasOne(User);
    return Habit;
}
