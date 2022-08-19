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

     return queryInterface.bulkInsert('Companies',[
      {
        name:'Coca-Cola',
        direction:'San Martín #45',
        rut:2321,
        status:'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Amazon',
        direction:'San Isidro #51',
        rut: 23142412,
        status:'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Facebook',
        direction:'Washington #412',
        rut:1684,
        status:'active',
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
     await queryInterface.bulkDelete('Companies', null, {});
  }
};
