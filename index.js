const express = require("express");
const app = express();
const port = 5000;
const jsonParser = express.json();
const userRouter = require("./routers/user");
const orderRouter = require("./routers/order");
const categoryRouter = require("./routers/category");
const productRouter = require("./routers/product");
const authRouter = require("./routers/auth");
const authMiddleware = require("./auth/middleware");
const cors = require("cors");
const { graphqlExpress, ApolloServer } = require("apollo-server-express");
const resolvers = require("./graphql/resolvers");
const db = require("./models");
const { typeDefs } = require("./graphql/schema");

app.use(cors());
app.use(jsonParser);

app.use("/login", authRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use("/orders", authMiddleware, orderRouter);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, db }),
});
server.applyMiddleware({ app });

function onListen() {
  console.log(`Listening on :${port}`);
}

app.listen(
  // with app.listen you assign the port and as a second argument a callback function
  port, // TCP port where the server listens
  onListen // callback runs when server starts
);
