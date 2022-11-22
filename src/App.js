import './App.css';
// import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project1 from './components/Pages/Project1/Project1';
import Project2 from './components/Pages/Project2/Project2';
import Project3 from './components/Pages/Project3/Project3';
import Project4 from './components/Pages/Project4/Project4';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path='/' 
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
          <Route path='/project1' element={<Project1 />} />
          <Route path='/project2' element={<Project2 />} />
          <Route path='/project3' element={<Project3 />} />
          <Route path='/project4' element={<Project4 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
