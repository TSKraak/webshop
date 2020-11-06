"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Fitness",
          description:
            "strength training, crossfit, personal training, functional fitness, cardio training.",
          imageUrl:
            "https://cdn.fitsociety.nl/wp-content/2020/06/back-in-topshape.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Yoga",
          description:
            "Yoga is a systematic practice of physical exercise, breath control, relaxation, diet control, and positive thinking.",
          imageUrl:
            "https://www.tinohoogendijk.nl/content/uploads/2019/07/iStock-858115500.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cycling",
          description:
            "Cycling, also called bicycling or biking, is the use of bicycles for transport.",
          imageUrl: "https://img.redbull.com/",
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
