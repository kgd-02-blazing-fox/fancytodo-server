'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Todos', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'add_fkey_userId',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Todos', 'add_fkey_userId')
  }
};
