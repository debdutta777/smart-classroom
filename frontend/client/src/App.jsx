import { useState } from 'react'
import StudentLanding from './Home'
import QuizPage from './QuizPage'
import QuestionForm from './teacher/form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentLanding />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/form" element={<QuestionForm />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  )
}

export default App