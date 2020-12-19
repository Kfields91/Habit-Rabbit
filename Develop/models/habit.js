
module.exports = function (sequelize, DataTypes) {
    var Habit = sequelize.define("Habit", {
        name: {
            type: DataTypes.STRING

        },
        displayGlobal: {
            type: DataTypes.BOOLEAN
        },

    },
        {
            timestamps: false
        }, {
        freezeTableName: true
    });
    // Habit.associate = function (models) {
    //     Habit.hasOne(models.User);
    // }
    return Habit;
}
