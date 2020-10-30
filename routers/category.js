const express = require("express");
const { product: Product, category: Category } = require("../models");
const { Router } = express;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    if (!categories) {
      res.status(404).json("No categories found.");
    } else {
      res.json(categories);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/:categoryId", async (req, res, next) => {
  const categoryId = req.params.categoryId;
  try {
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json("Category doesn't exist.");
    }
    res.json(category);
  } catch (error) {
    next(error);
  }
});

router.get("/:categoryId/products", async (req, res, next) => {
  const categoryId = req.params.categoryId;

  try {
    const products = await Product.findAll({ where: { categoryId } });
    if (products.length === 0) {
      return res.status(404).json("No products in this category");
    }
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get("/:categoryId/products/:productId", async (req, res, next) => {
  const { categoryId, productId } = req.params;
  try {
    const product = await Product.findByPk(productId);
    // console.log("product", product.categoryId);
    if (!product) {
      res.status(404).json("Product doesn't exist.");
      return;
    }
    if (product.categoryId !== parseInt(categoryId)) {
      res.status(404).json("Product doesn't exist in this category.");
      return;
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
