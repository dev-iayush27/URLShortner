const express = require("express");
const urlRoute = require("./routes/urlRouter");
const { connectToMongoDB } = require("./dbConnection");

const app = express();
const PORT = 8001;

connectToMongoDB();

app.use(express.json());

app.use("/", urlRoute);

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
