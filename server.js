const express = require("express");
const urlRouter = require("./routes/urlRouter");
const { connectToMongoDB } = require("./dbConnection");
const userRouter = require("./routes/userRouter");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 8001;

connectToMongoDB();

// Middleware - pasres all bodies from request
app.use(express.json());

// Middleware - pasres only urlencoded bodies from request
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use("/url", urlRouter);
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
