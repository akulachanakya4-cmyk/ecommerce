const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv").config({
  path: path.join(
    __dirname,
    "user model(models",
    "product model(models",
    "authentication route(routes",
    "product routes(routes",
    ".env"
  ),
});

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.MONGO_URI) {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("MongoDB Connected"))
        .catch(err => console.log("MongoDB connection error:", err.message));
} else {
    console.log("MongoDB connection skipped: MONGO_URI is not set");
}

app.get("/", (req, res) => {
    res.send("E-Commerce API Running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});