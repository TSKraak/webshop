const { ApolloError } = require("apollo-server-express");
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");

module.exports = {
  Query: {
    users: async (parent, _args, { db }, info) => {
      return db.user.findAll();
    },
    products: async (parent, _args, { db }, info) => {
      return db.product.findAll({ include: [db.category] });
    },
    categories: async (parent, _args, { db }, info) => {
      return db.category.findAll({ include: [db.product] });
    },
    orders: async (parent, _args, { db }, info) => {
      return db.order.findAll({ include: [db.product] });
    },
  },

  Mutation: {
    signup: async (parent, { firstName, email, password }, { db }, info) => {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = await db.user.create({
        firstName,
        email,
        password: hashedPassword,
      });
      delete newUser["password"];
      return newUser;
    },

    login: async (parent, { email, password }, { db }, info) => {
      const user = await db.user.findOne({
        where: { email },
      });

      if (!user) return new ApolloError("User with that email not found", 404);

      const passwordsMatch = bcrypt.compareSync(password, user.password);
      if (!passwordsMatch) return new ApolloError("Password incorrect", 400);
      const token = toJWT({ userId: user.id });
      return { token };
    },

    order: async (
      parent,
      { productIds, userId, priceEuroCentPerUnit },
      { db },
      info
    ) => {
      const newOrder = await db.order.create({ userId, priceEuroCentPerUnit });

      const newOrderItems = productIds.map(
        async (id) =>
          await db.orderItem.create({
            productId: id,
            orderId: newOrder.id,
            quantity: 1,
          })
      ); // [Promise, Promise, Promise]

      await Promise.all(newOrderItems);
      const fullNewOrder = await db.order.findByPk(newOrder.id, {
        include: [db.user, { model: db.product, include: [db.category] }],
      });
      // console.log("FULLNEWORDER:", fullNewOrder);
      return fullNewOrder;
    },
  },
};
