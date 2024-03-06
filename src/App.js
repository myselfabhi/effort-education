import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoursesPage from './Components/CoursesPage';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import HomePage from './Components/homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
