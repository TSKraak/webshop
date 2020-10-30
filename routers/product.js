const express = require("express");
const { product: Product, category: Category } = require("../models");
const { Router } = express;

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

router.post("/", async (req, res, next) => {
  const { categoryId, name, imageUrl, priceEuroCent, status } = req.body;
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
    console.log(newProduct.status);
    if (
      newProduct.status !== "In stock" ||
      newProduct.status !== "Out of stock"
    ) {
      res.status(400).send("invalid stock status");
      return;
    }
  } catch (e) {
    res.status(400).send("Product allready exists");
    next(e);
  }
  res.send(newProduct);
});

module.exports = router;
