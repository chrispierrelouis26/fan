module.exports = function(sequelize, DataTypes) {
    var Animal = sequelize.define("Animal", {
      animal: DataTypes.STRING,
      lat: DataTypes.FLOAT,
      lng: DataTypes.FLOAT,
      month: DataTypes.FLOAT,
      description: DataTypes.TEXT
    });

    return Animal;
  };