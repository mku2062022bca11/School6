import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import LearningExperience from './pages/LearningExperience';
import Enrollment from './pages/Enrollment';
import StudentLife from './pages/StudentLife';
import CampusInnovation from './pages/CampusInnovation';
import BuzzHighlights from './pages/BuzzHighlights';
import Connect from './pages/Connect';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/who-we-are" element={<WhoWeAre />} />
              <Route path="/learning-experience" element={<LearningExperience />} />
              <Route path="/enrollment" element={<Enrollment />} />
              <Route path="/student-life" element={<StudentLife />} />
              <Route path="/campus-innovation" element={<CampusInnovation />} />
              <Route path="/buzz-highlights" element={<BuzzHighlights />} />
              <Route path="/connect" element={<Connect />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;