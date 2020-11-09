"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          categoryId: "1",
          name: "Dumbell set",
          description: "This is a set of dumbells, total 50kg",
          imageUrl: "https://media.s-bol.com/NkDmvJDO5pBp/168x171.jpg",
          priceEuroCent: "5000",
          status: "In stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: "1",
          name: "Jumping ropes",
          description: "Jump up, jump up and get down",
          imageUrl: "https://media.s-bol.com/gp60A5K3Vxxl/168x164.jpg",
          priceEuroCent: "2500",
          status: "In stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: "1",
          name: "Kettle bell set",
          description: "Big balls with a handle",
          imageUrl: "https://media.s-bol.com/Nk95W0JoP1Vm/168x194.jpg",
          priceEuroCent: "7000",
          status: "In stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: "1",
          name: "Compression bands",
          description: "when you need the compression",
          imageUrl: "https://media.s-bol.com/BNDGqJ6XBGQW/168x191.jpg",
          priceEuroCent: "3500",
          status: "In stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: "1",
          name: "suspension trainer",
          description: "A perfect product when you need some suspense",
          imageUrl: "https://media.s-bol.com/9BMXn73MJ93/168x166.jpg",
          priceEuroCent: "5500",
          status: "In stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: "1",
          name: "Resistance bands",
          description: "For the times you need some resistance",
          imageUrl: "https://media.s-bol.com/gpjK0JLGl68Z/168x167.jpg",
          priceEuroCent: "2500",
          status: "In stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: "1",
          name: "Core trainer wheel",
          description: "They see me rollin, they hatin'",
          imageUrl: "https://media.s-bol.com/xOGpLnE43kB/168x117.jpg",
          priceEuroCent: "1800",
          status: "In stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: "1",
          name: "Pull up bar",
          description: "When you feel down, just pull yourself up",
          imageUrl: "https://media.s-bol.com/qjjZ3JV3xE8D/168x89.jpg",
          priceEuroCent: "2800",
          status: "In stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: "1",
          name: "treadmill",
          description: "When you feel like a hamster",
          imageUrl: "https://media.s-bol.com/mBM4zWNW3x9/168x201.jpg",
          priceEuroCent: "4900",
          status: "In stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: "1",
          name: "Crosstrainer",
          description: "When you don't have money for crossfit",
          imageUrl: "https://media.s-bol.com/xO2m429AG0P/168x193.jpg",
          priceEuroCent: "4900",
          status: "In stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: "1",
          name: "Yoga matt",
          description: "A matrass for pussies",
          imageUrl: "https://media.s-bol.com/qjwOk0Z60pQy/168x165.jpg",
          priceEuroCent: "4900",
          status: "In stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: "1",
          name: "Rowing Machine",
          description: "When you're tired of life",
          imageUrl: "https://media.s-bol.com/7vz1xB81gZA/168x81.jpg",
          priceEuroCent: "4900",
          status: "In stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: "1",
          name: "Vibration plate",
          description:
            "when you want to loose fat, but you don't feel like exercising",
          imageUrl: "https://media.s-bol.com/Z8WNJmQw6Qg8/168x148.jpg",
          priceEuroCent: "4900",
          status: "In stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: "1",
          name: "FitBit sports watch",
          description: "Tracking your health, and comparing with friends",
          imageUrl: "https://media.s-bol.com/gLEVk93Nm6pl/64x210.jpg",
          priceEuroCent: "4900",
          status: "In stock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: "1",
          name: "Whey nutrition",
          description: "when you need those extra gains.",
          imageUrl: "https://media.s-bol.com/YyQWBED2p3B0/134x210.jpg",
          priceEuroCent: "4900",
          status: "In stock",
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
