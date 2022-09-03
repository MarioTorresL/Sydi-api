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
   return queryInterface.bulkInsert('Bills',[
    {
      name:'factura1',
      value: 100000,
      createdAt: new Date(),
      updatedAt: new Date(),
      BranchId: 1
    },
    {
      name:'factura1',
      value: 500000,
      createdAt: new Date(),
      updatedAt: new Date(),
      BranchId: 2
    },
    {
      name:'factura1',
      value: 70000,
      createdAt: new Date(),
      updatedAt: new Date(),
      BranchId: 3
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
    return queryInterface.bulkDelete('Bills', null, {})
  }
};
