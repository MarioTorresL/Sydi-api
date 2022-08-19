'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Employees',[
    {
      firstName:'Mario',
      lastName:'Torres',
      salary:890000,
      rut:186732134,
      direction:'San Martín #12',
      phone:933221144,
      BranchId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName:'Carmen',
      lastName:'Lara',
      salary:990000,
      rut:156732134,
      direction:'San Perez #6',
      phone:944227744,
      BranchId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName:'Karen',
      lastName:'Salazar',
      salary:540000,
      rut:186134215,
      direction:' Italia $21',
      phone:909786633,
      BranchId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Employees', null, {})
  }
};
