module.exports = function(sequelize, DataTypes) {
  var Workouts = sequelize.define("Workouts", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  Workouts.associate = function(models) {
    Workouts.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Workouts.hasMany(models.Exercise, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Workouts;
};
