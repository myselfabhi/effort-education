import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CoursesPage from './Components/CoursesPage';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import HomePage from './Components/homepage';

function App() {
  return (
    <Router>
         <div>
        <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
