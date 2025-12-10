const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

const DefaultSchema = new mongoose.Schema({
  data: mongoose.Schema.Types.Mixed,
});

const AllDataModel = mongoose.model("students", DefaultSchema);

// API KEY MIDDLEWARE
const apiKeyAuth = (req, res, next) => {
  const userKey = req.headers["x-api-key"] || req.query.apiKey;

  if (!userKey) {
    return res.status(401).json({
      success: false,
      message: "API key missing",
    });
  }

  if (userKey !== process.env.API_KEY) {
    return res.status(403).json({
      success: false,
      message: "Invalid API key",
    });
  }

  next();
};

// PROTECTED ROUTE
app.get("/studenterp/all", apiKeyAuth, async (req, res) => {
  try {
    const data = await AllDataModel.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("API running at http://localhost:8080/studenterp/all");
});
