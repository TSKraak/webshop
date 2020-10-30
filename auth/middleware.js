const User = require("../models").user;
const { toData } = require("./jwt");

async function auth(req, res, next) {
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");
  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      const data = toData(auth[1]);
      const user = await User.findByPk(data.userId);
      if (!user) {
        return res.status(404).json("User not found");
      }
      req.user = user;
      next();
    } catch (error) {
      console.log(`Error ${error.name}: ${error.message}`);
      return res.status(400).send("Invalid JWT token");
    }
  } else {
    return res.status(401).json("Please supply some valid credentials");
  }
}

module.exports = auth;
