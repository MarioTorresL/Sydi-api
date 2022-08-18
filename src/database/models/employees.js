"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employees.hasMany(models.Branchs);
    }
  }
  Employees.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      salary: DataTypes.STRING,
      rut: DataTypes.INTEGER,
      direction: DataTypes.STRING,
      phone: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "Employees",
    }
  );
  return Employees;
};
