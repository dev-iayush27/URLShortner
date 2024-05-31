const User = require("../model/userModel");
const { setUser } = require("../service/auth");

async function handleUserSignup(req, res) {
  const body = req.body;

  if (!body || !body.name || !body.email || !body.password) {
    return res.status(400).json({ msg: "All fields are required." });
  }

  await User.create({
    name: body.name,
    email: body.email,
    password: body.password,
  });
  return res.status(201).json({ status: "Success" });
}

async function handleUserLogin(req, res) {
  const body = req.body;
  if (!body || !body.email || !body.password) {
    return res.status(400).json({ msg: "All fields are required." });
  }

  const user = await User.findOne({
    email: body.email,
    password: body.password,
  });

  if (!user) {
    return res.status(404).json({ msg: "Invalid username/password." });
  }
  const token = setUser(user);
  return res
    .status(200)
    .cookie("token", token)
    .json({ status: "Success", token: token });
}

module.exports = { handleUserSignup, handleUserLogin };
