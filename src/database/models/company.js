'use strict'
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) =>{
  class Companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
    
      // define association here
    }
  }
  Companies.init({
    name: DataTypes.STRING,
    direction: DataTypes.STRING,
    status: DataTypes.STRING

  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'Companies',
  });
  return Companies;
}