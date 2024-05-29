const mongoose = require("mongoose");

async function connectToMongoDB() {
  return mongoose
    .connect("mongodb://localhost:27017/short-url")
    .then(() => console.log("MongoDB connected."));
}

module.exports = { connectToMongoDB };
