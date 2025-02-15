const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
app.use(express.json());

// Connect to MongoDB Atlas
connectDB();

app.get("/", (req, res) => {
  res.send("Smart Classroom API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
