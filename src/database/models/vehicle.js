'use strict'
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) =>{
  class Vehicles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vehicles.hasMany(models.Branchs)
      // define association here
    }
  }
  Vehicles.init({
    licence_plate: DataTypes.STRING,
    alias:DataTypes.STRING,
    status: DataTypes.STRING,
    mantention: DataTypes.STRING,
    date: DataTypes.DATE,

  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'Vehicles',
  });
  return Vehicles;
}
