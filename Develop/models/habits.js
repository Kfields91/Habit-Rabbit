module.exports = function (sequelize, DataTypes) {
    var Habits = sequelize.define("Habits", {
        name: DataTypes.STRING,
        displayGlobal: DataTypes.BOOLEAN,
    });
    Habits.hasOne(User);
    return Habits;
};
