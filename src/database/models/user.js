'use strict'
const {Model} = require('seuqelize');
module.exports = (sequelize, DataTypes) =>{
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.belongsTo(models.Roles,{foreignKey: 'UserId'})
      // define association here
    }
  }
  Users.init({
    firstName: DataTypes.STRING,
    lastName:DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.BLOB,

  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'Users',
  });
  return Users;
}