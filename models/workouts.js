module.exports = function(sequelize, DataTypes) {
  var Workouts = sequelize.define("Workouts", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Workouts.associate = function(models) {
    Workouts.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Workouts;
};
