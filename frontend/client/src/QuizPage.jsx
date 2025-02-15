"use client"

import { useState } from "react"
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  FormControlLabel,
  LinearProgress,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material"

// Quiz questions data
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci",
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const handleAnswerSelect = (event) => {
    setSelectedAnswer(event.target.value)
  }

  const handleNext = () => {
    // Check if answer is correct and update score
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    // Move to next question or show results
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer("")
    } else {
      setShowResults(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer("")
    setScore(0)
    setShowResults(false)
  }

  const progress = ((currentQuestion + 1) / quizData.length) * 100

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Card elevation={3}>
        <CardContent>
          {!showResults ? (
            <>
              <Box sx={{ mb: 2 }}>
                <LinearProgress variant="determinate" value={progress} sx={{ mb: 2 }} />
                <Typography variant="body2" color="text.secondary" align="right">
                  Question {currentQuestion + 1} of {quizData.length}
                </Typography>
              </Box>

              <Typography variant="h5" component="h1" gutterBottom>
                {quizData[currentQuestion].question}
              </Typography>

              <FormControl component="fieldset" sx={{ width: "100%", my: 2 }}>
                <RadioGroup value={selectedAnswer} onChange={handleAnswerSelect}>
                  {quizData[currentQuestion].options.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={option}
                      sx={{
                        border: 1,
                        borderColor: "divider",
                        borderRadius: 1,
                        mb: 1,
                        px: 2,
                        "&:hover": {
                          bgcolor: "action.hover",
                        },
                      }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>

              <Button variant="contained" fullWidth onClick={handleNext} disabled={!selectedAnswer} sx={{ mt: 2 }}>
                {currentQuestion === quizData.length - 1 ? "Finish" : "Next Question"}
              </Button>
            </>
          ) : (
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h4" component="h1" gutterBottom>
                Quiz Complete!
              </Typography>
              <Typography variant="h5" color="primary" gutterBottom>
                Your Score: {score} out of {quizData.length}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                {score === quizData.length
                  ? "Perfect score! Excellent work! 🎉"
                  : score >= quizData.length / 2
                    ? "Good job! Keep practicing! 👍"
                    : "Keep learning and try again! 💪"}
              </Typography>
              <Button variant="contained" onClick={handleRestart}>
                Restart Quiz
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  )
}

