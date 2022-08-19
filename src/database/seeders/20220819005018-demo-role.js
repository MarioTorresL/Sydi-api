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
    return queryInterface.bulkInsert('Roles',[
    {
      name:'SUPER_USER',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'ADMINISTRATOR_FULL',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'ADMINISTRATOR_BASIC',
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
    return queryInterface.bulkDelete('Roles', null, {})
  }
};
