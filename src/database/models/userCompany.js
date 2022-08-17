'use strict'
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) =>{
  class UserCompanies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    
      // define association here
    
      models.Companies.belongsToMany(models.Users, { through: 'UserCompanies' });
      models.Users.belongsToMany(models.Companies, { through: 'UserCompanies' });

    }
  }
  Branchs.init({
    
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'UserCompanies',
  });
  return UserCompanies;
}