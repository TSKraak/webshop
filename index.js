const express = require("express");
const app = express();
const port = 4000;
const jsonParser = express.json();
const userRouter = require("./routers/user");
const orderRouter = require("./routers/order");
const categoryRouter = require("./routers/category");
const productRouter = require("./routers/product");
const authRouter = require("./routers/auth");
const authMiddleware = require("./auth/middleware");

app.use(jsonParser);

app.use("/login", authRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use("/orders", authMiddleware, orderRouter);

function onListen() {
  console.log(`Listening on :${port}`);
}

app.listen(
  // with app.listen you assign the port and as a second argument a callback function
  port, // TCP port where the server listens
  onListen // callback runs when server starts
);
