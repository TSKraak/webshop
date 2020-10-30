"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orderItems",
      [
        {
          orderId: 1,
          productId: 2,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 1,
          productId: 1,
          quantity: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 2,
          productId: 2,
          quantity: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 3,
          productId: 2,
          quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orderItems", null, {});
  },
};
