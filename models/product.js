"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init(
    {
      categoryId: { type: DataTypes.INTEGER, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false, unique: true },
      priceInCents: { type: DataTypes.INTEGER, allowNull: false },
      status: {
        type: DataTypes.ENUM(["In stock", "Out of stock"]),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
