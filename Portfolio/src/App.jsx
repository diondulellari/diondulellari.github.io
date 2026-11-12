import Header from "./Components/Header";
import { HeroSection } from "./Components/HeroSection";
import Experience from "./Components/Experience";
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
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
