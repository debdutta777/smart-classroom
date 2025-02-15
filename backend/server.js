const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Connect to MongoDB Atlas
connectDB();

app.get("/", (req, res) => {
  res.send("Smart Classroom API is running...");
});

let questions = [];

app.post('/submit-question', (req, res) => {
    const { question, options, correctAnswer } = req.body;
    questions.push({ question, options, correctAnswer });
    res.status(200).send({ message: 'Question submitted successfully' });
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
