"use strict";
const bcrypt = require("bcrypt");

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
          password: bcrypt.hashSync("test1", 10),
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
          password: bcrypt.hashSync("test2", 10),
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Rein",
          lastName: "Op 't land",
          street: "Overtoom",
          number: "123",
          zipCode: "1033CB",
          country: "Netherlands",
          email: "rein@land.com",
          phone: "+31-2575323423",
          password: bcrypt.hashSync("test3", 10),
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
