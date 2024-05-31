const express = require("express");
const { handleUserSignup } = require("../controller/userController");

const router = express.Router();

router.post("/", handleUserSignup);

module.exports = router;
