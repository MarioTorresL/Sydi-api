'use strict'
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) =>{
  class Branchs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    
      // define association here
      Branchs.belongsTo(models.Companies,{foreignKey:'CompanyId'})
      Branchs.belongsTo(models.Vehicles,{foreignKey: 'VehicleId'})
    }
  }
  Branchs.init({
    name: DataTypes.STRING,
    direction: DataTypes.STRING,
    status: DataTypes.STRING

  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'Branchs',
  });
  return Branchs;
}
