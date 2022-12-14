
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('Companies',{
      id:{
        type:Sequelize.DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      name:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      direction:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      rut:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      status:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
    
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
    return queryInterface.dropTable('Companies');
  }
};

