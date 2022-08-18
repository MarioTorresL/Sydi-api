'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('Vehicles',{
      id:{
        type:Sequelize.DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      licence_plate:{
        type:Sequelize.DataTypes.STRING,
        allowNull: false
      },
      alias:{
        type:Sequelize.DataTypes.STRING
      },
      status:{
        type:Sequelize.DataTypes.STRING
      },
      mantention:{
        type:Sequelize.DataTypes.STRING
      },
      date:{
        type:Sequelize.DataTypes.DATE
      },
      createdAt:{
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updatedAt:{
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      deletedAt:{
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
    return queryInterface.dropTable('Vehicles');
  }
};
