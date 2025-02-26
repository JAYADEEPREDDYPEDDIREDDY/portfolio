import './App.css';
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import ContactForm from './Components/Contact';
import AnimatedList from './Components/Skills';
import EducationPage from './Components/Education';




function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <AnimatedList/>
    <EducationPage/>
    <ContactForm/>
   
   
    <Footer/>
      </>
  );
}

export default App;
