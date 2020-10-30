const express = require("express");
const { order: Order } = require("../models");
const { Router } = express;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    if (!orders) {
      res.status(404).send("Orders not found");
    } else {
      res.send(orders);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
