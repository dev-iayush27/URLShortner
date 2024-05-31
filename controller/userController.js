const User = require("../model/userModel");

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

module.exports = { handleUserSignup };
