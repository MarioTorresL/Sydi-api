'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('Users',{
      id:{
        type:Sequelize.DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      firstName:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
      },
      lastName:{
        type:Sequelize.DataTypes.STRING,
      },
      email:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      password:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
      },
      image:{
        type:Sequelize.DataTypes.BLOB
      },
      RoleId:{
        type:Sequelize.DataTypes.INTEGER,

        allowNull: false,
        references: {
          model: 'Roles',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DataTypes.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('Users');
  }
};
