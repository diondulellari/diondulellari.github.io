import React from "react";
import Header from "./Components/Header";
import { HeroSection } from "./Components/HeroSection";
import { Skills } from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
