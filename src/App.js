import './App.css';
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import ContactForm from './Components/Contact';
import AnimatedList from './Components/Skills';
import EducationPage from './Components/Education';




function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <AnimatedList />
      </div>
      <div id="education">
        <EducationPage />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default App;

