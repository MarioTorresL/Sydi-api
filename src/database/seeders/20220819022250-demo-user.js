'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * 
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
     */
     return queryInterface.bulkInsert('Users',[
      {
        firstName:'Matias',
        lastName:'Lara',
        email:'cuenta@gmail.com',
        password:'112233##',
        RoleId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName:'Juan',
        lastName:'Galaz',
        email:'account@gmail.com',
        password:'331133##',
        RoleId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        firstName:'marcela',
        lastName:'araya',
        email:'acnt@gmail.com',
        password:'3da133##',
        RoleId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ])
    },
  
   
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
