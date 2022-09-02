'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('Bills', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      value: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE
      },
      deletedAt: {
        type: Sequelize.DataTypes.DATE
      },
      BranchId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Branchs",
          key: "id",
        }
      }
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
