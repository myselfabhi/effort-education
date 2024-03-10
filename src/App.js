import React, { useState }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CoursesPage from './Components/StudyMaterial';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import HomePage from './Components/homepage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import StudyMaterialTile from './Components/StudyMaterialTile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(setIsAuthenticated)

  return (
    <Router>
         <div>
        <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/study-material" element={<StudyMaterialTile isAuthenticated={isAuthenticated} />} />
        
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
