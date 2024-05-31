const express = require("express");
const {
  generateNewShortURL,
  getShortURL,
  getAnalytics,
  getAllUrl,
} = require("../controller/urlController");
const {
  checkAuth,
  restrictToLoggedInUsersOnly,
} = require("../middleware/auth");

const router = express.Router();

router.post("/create", restrictToLoggedInUsersOnly, generateNewShortURL);

router.get("/all", checkAuth, getAllUrl);
router.get("/analytics/:shortId", restrictToLoggedInUsersOnly, getAnalytics);
router.get("/:shortId", restrictToLoggedInUsersOnly, getShortURL);

module.exports = router;
