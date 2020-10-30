"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          userId: 1,
          status: "Pending",
          priceEuroCentPerUnit: 4043,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          status: "Shipped",
          priceEuroCentPerUnit: 782365,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          status: "Processed",
          priceEuroCentPerUnit: 4123,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
