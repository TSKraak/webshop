"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "John",
          lastName: "Doe",
          street: "van Ostadestraat",
          number: "12",
          zipCode: "1056YE",
          country: "Netherlands",
          email: "john@doe.com",
          phone: "+31-5723623",
          password: "test1",
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Erik",
          lastName: "Peters",
          street: "Wibautstraat",
          number: "156",
          zipCode: "1068CB",
          country: "Netherlands",
          email: "erik@peters.com",
          phone: "+31-257537356",
          password: "test2",
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
