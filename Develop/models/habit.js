module.exports = function (sequelize, DataTypes) {
    let Habit = sequelize.define('Habits', {
        name: DataTypes.STRING,
        displayGlobal: DataTypes.BOOLEAN,
    });
    Habit.associate = function (models) {
        Habit.hasOne(models.User);
    }
    return Habit;
}
