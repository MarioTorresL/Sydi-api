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
    return queryInterface.bulkInsert('Vehicles',[
    {
      licence_plate:4433,
      alias:'xda',
      status:'on',
      mantention:'yes',
      date: new Date(),
      BranchId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      licence_plate:7843,
      alias:'xdaaaa',
      status:'of',
      mantention:'no',
      date: new Date(),
      BranchId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      licence_plate:3355,
      alias:'adxda',
      status:'on',
      mantention:'yes',
      date: new Date(),
      BranchId: 3,
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