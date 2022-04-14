"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: true,
        unique: true,
      },
      googleId: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
      },
      picture_link: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      gender: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      experience: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      timezone: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      prefered_schedule: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      textarea: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
