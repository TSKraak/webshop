"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          categoryId: "1",
          name: "MacBook Pro",
          imageUrl: "http://macbookpro",
          priceEuroCent: "250000",
          status: "In stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: "1",
          name: "Adapter",
          imageUrl: "http://adapter",
          priceEuroCent: "2500",
          status: "In stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: "2",
          name: "Couch",
          imageUrl: "http://couch",
          priceEuroCent: "100000",
          status: "In stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: "3",
          name: "Senseo",
          imageUrl: "http://senseo",
          priceEuroCent: "5000",
          status: "Out of stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
