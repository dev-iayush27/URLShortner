const User = require("../model/userModel");
const { getUser } = require("../service/auth");

async function restrictToLoggedInUsersOnly(req, res, next) {
  // const token = req.cookies.token;
  const authToken = req.headers["authorization"];
  if (!authToken) {
    return res
      .status(400)
      .json({ status: "Failed", msg: "Login first to access this resource." });
  }
  const token = authToken.split("Bearer ")[1];
  const user = getUser(token);
  req.user = user;
  next();
}

async function checkAuth(req, res, next) {
  // const token = req.cookies.token;
  const authToken = req.headers["authorization"];
  const token = authToken.split("Bearer ")[1];
  const user = getUser(token);
  req.user = user;
  next();
}

module.exports = { restrictToLoggedInUsersOnly, checkAuth };
