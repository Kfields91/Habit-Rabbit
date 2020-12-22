
module.exports = function (sequelize, DataTypes) {
    var Habit = sequelize.define("Habit", {
        name: {
            type: DataTypes.STRING

        },
        displayGlobal: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },

    },
        {
            freezeTableName: true
        });
    Habit.associate = function (models) {
        Habit.belongsTo(models.User);
        Habit.hasMany(models.HabitEvent);
    }

    return Habit;
}
