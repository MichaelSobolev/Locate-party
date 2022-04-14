'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Systems', [{
      title: 'D&D',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Pathfinder',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Starfinder',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Call of Cthulhu',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Wod',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Gurps',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Blades in the Dark',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Systems', null, {});
  }
};
