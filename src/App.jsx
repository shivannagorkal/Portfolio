
import './App.css';

import Navbar from './pages/navbar/navbar';
import Home from './pages/home/home' ;
import About from './pages/about/about'
import Skills from './pages/skills/skills';
import Projects from "./pages/projects/project"
import Certificates from './pages/certificates/certificate';
import Contact from './pages/contact/contact'
import Footer from './pages/footer/footer' ;

function App() {

  return (
    <>
      <Navbar />
      <Home/>
      <About />
      <Skills/>
      <Projects />
      <Certificates/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
