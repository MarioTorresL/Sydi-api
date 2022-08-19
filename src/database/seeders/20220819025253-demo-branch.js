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

     return queryInterface.bulkInsert('Branchs',[
      {
        name:'plaza backedano',
        direction:' Bernardo Ohiggins #5',
        status:'active',
        CompanyId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Rancagua ',
        direction:'san francisco #7',
        status:'active',
        CompanyId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Alameda',
        direction:' Los Dominicos #25',
        status:'active',
        CompanyId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
          
      ])
    },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      return  await queryInterface.bulkDelete('Branchs', null, {});
  }
};
