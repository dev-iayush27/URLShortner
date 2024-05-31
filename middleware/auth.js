const User = require("../model/userModel");
const { getUser } = require("../service/auth");

async function restrictToLoggedInUsersOnly(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(400)
      .json({ status: "Failed", msg: "Login first to access this resource." });
  }

  const user = getUser(token);
  req.user = user;
  next();
}

async function checkAuth(req, res, next) {
  const token = req.cookies.token;
  const user = getUser(token);
  req.user = user;
  next();
}

module.exports = { restrictToLoggedInUsersOnly, checkAuth };
