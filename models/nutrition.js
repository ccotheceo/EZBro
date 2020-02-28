module.exports = function(sequelize, DataTypes) {
  var Nutritions = sequelize.define("Nutritions", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Nutritions.associate = function(models) {
    Nutritions.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Nutritions;
};
