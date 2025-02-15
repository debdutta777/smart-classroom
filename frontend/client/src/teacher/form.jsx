import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';

const QuestionForm = () => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctAnswer, setCorrectAnswer] = useState('');

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            question,
            options,
            correctAnswer
        };
        try {
            const response = await axios.post('http://localhost:5000/submit-question', formData);
            console.log(response.data);
            // Handle successful form submission logic here
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Submit a Question
                </Typography>
                <TextField
                    label="Question"
                    fullWidth
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                    margin="normal"
                />
                {options.map((option, index) => (
                    <TextField
                        key={index}
                        label={`Option ${index + 1}`}
                        fullWidth
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        required
                        margin="normal"
                    />
                ))}
                <TextField
                    label="Correct Answer"
                    fullWidth
                    value={correctAnswer}
                    onChange={(e) => setCorrectAnswer(e.target.value)}
                    required
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default QuestionForm;
