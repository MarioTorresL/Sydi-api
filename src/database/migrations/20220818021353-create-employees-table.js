"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return queryInterface.createTable("Employees", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      salary: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      rut: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      direction: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      BranchId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Branchs",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable("Employees");
  },
};
