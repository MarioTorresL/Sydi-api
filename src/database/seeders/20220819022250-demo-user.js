'use strict';
const bcrypt = require('bcryptjs');

const hash = bcrypt.hashSync("123")

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
        firstName:'Test',
        lastName:'Testing',
        email:'test@gmail.com',
        password:hash,
        RoleId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName:'Juan',
        lastName:'Galaz',
        email:'account@gmail.com',
        password:hash,
        RoleId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        firstName:'marcela',
        lastName:'araya',
        email:'acnt@gmail.com',
        password:hash,
        RoleId:1,
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
     return queryInterface.bulkDelete('Users', null, {})

  }
}
