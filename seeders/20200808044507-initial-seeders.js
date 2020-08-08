'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

   await queryInterface.bulkInsert('Todos', [{
    title: 'Project Saya Selesai',
    description: "Wujudkan semua ide disini",
    status:'Unfinished',
    due_date: new Date("10-01-2021"),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: 'Mencari Pekerjaan',
    description: "Menjadi pecari kerja yg optimis dan strategis",
    due_date: new Date("10-11-2020"),
    status:'Unfinished',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Todos', null, {});
  }
};
