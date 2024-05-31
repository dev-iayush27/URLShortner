const express = require("express");
const {
  handleUserSignup,
  handleUserLogin,
} = require("../controller/userController");

const router = express.Router();

router.post("/create", handleUserSignup);
router.post("/login", handleUserLogin);

module.exports = router;
