const express = require("express");
const { product: Product, category: Category } = require("../models");
const { Router } = express;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    if (!products) {
      res.status(404).send("Products not found");
    } else {
      res.send(products);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/:productId", async (req, res, next) => {
  const productId = req.params.productId;
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      res.status(404).send("Products not found");
    } else {
      res.send(product);
    }
  } catch (e) {
    next(e);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  const { categoryId, name, imageUrl, priceEuroCent, status } = req.body;
  const user = req.user;
  console.log("this is user", user);
  if (user.admin !== true) {
    res.status(401).send("unauthorized");
    return;
  }
  if (!categoryId || !name || !imageUrl || !priceEuroCent || !status) {
    res.status(400).send("missing product info");
    return;
  }
  let newProduct;
  try {
    newProduct = await Product.create({
      categoryId,
      name,
      imageUrl,
      priceEuroCent,
      status,
    });
  } catch (e) {
    switch (e.name) {
      case "SequelizeUniqueConstraintError":
        return res.status(400).send("Product already exists");

      case "SequelizeDatabaseError":
        return res.status(400).send(e.message);

      default:
        return res.status(400).send("Something went wrong.");
    }
  }
  res.send(newProduct);
});

module.exports = router;
