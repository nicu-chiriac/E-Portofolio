import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project1 from './components/Pages/Project1/Project1';
import Project5 from './components/Pages/Project5/Project5';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route exact path='/E-Portofolio/' 
              element = {
                <>
                  <Hero />
                  <About />
                  <Education />
                  <Skills />
                  <Projects />
                  <Footer />
                </>
              } 
            />
            <Route path='/E-Portofolio/project1' element={<Project1 />} />
            <Route path='/E-Portofolio/project5' element={<Project5 />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
