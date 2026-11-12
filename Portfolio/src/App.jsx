import Header from "./Components/Header";
import { HeroSection } from "./Components/HeroSection";
import Education from "./Components/Education";
import { Skills } from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
