const express = require("express");
const {
  generateNewShortURL,
  getShortURL,
  getAnalytics,
} = require("../controller/urlController");

const router = express.Router();

router.post("/", generateNewShortURL);
router.get("/:shortId", getShortURL);
router.get("/analytics/:shortId", getAnalytics);

module.exports = router;
