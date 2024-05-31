const shortid = require("shortid");
const URL = require("../model/urlModel");

async function generateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortId = shortid();
  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });

  return res.json({ status: "Success", id: shortId });
}

async function getShortURL(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
}

async function getAllUrl(req, res) {
  const urls = await URL.find({ createdBy: req.user._id });
  res.json({ status: "Success", urls: urls });
}

async function getAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = { generateNewShortURL, getShortURL, getAllUrl, getAnalytics };
