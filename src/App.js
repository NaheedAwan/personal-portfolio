
import './App.css';
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Footer from './components/Footer';
// import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";
function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <h1 className='css122 my-6'>Triangle iCoders</h1>
      <NavBar />
      <About />
      <Projects /> 
      {/* <Skills /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer/>
    </main>
  );
}

export default App;
