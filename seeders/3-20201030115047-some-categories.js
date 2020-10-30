"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Electronics",
          description: "Something with a cable",
          imageUrl: "http://electronics",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Furniture",
          description: "Anything for in your house",
          imageUrl: "http://furniture",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kitchen appliances",
          description: "Stuff to cook and clean with",
          imageUrl: "http://kitchen-appliances",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
