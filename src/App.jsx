import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
// import Sociallinks from "./components/Sociallinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Sociallinks from "./components/Sociallinks";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />

      <Sociallinks/>
      
    </div>
  );
}

export default App;
