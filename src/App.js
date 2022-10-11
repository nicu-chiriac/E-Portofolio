import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';


function App() {
  return (
   <BrowserRouter>
    <Navbar />
    <Hero />
    <About />
    <Education />
    <Skills />
    <Projects />
    <Footer />
   </BrowserRouter>
  );
}

export default App;
