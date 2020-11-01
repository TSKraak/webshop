const express = require("express");
const { Router } = express;
const { user: User } = require("../models");
const bcrypt = require("bcrypt");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    if (!users) {
      res.status(404).send("no users found");
    } else {
      res.send(users);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/:userId", async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  const {
    firstName,
    lastName,
    street,
    number,
    zipCode,
    country,
    email,
    phone,
    password,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !street ||
    !number ||
    !zipCode ||
    !country ||
    !email ||
    !phone ||
    !password
  ) {
    res.status(400).send("missing credentials");
    return;
  }
  const hashedPassword = bcrypt.hashSync(password, 10);
  try {
    const newUser = await User.create({
      firstName,
      lastName,
      street,
      number,
      zipCode,
      country,
      email,
      phone,
      password: hashedPassword,
    });
    res.send(newUser);
  } catch (e) {
    res.status(400).json("User with this email already exists");
    next(e);
  }
});

module.exports = router;
