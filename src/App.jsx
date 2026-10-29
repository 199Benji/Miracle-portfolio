import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience'; 
import Contact from './components/Contact';
import Background from './components/Background';
import { ThemeProvider } from './context/ThemeContext';

const Divider = () => (
  <div className="w-full max-w-5xl mx-auto px-6 py-4">
    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent shadow-[0_0_15px_rgba(100,255,218,0.4)]"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Background />
      <div className="app-container">
        <Navbar />
        <main>
          <Hero />
          <Divider />
          <Projects />
          <Divider />
          <Skills />
          <Divider />
          <Experience /> 
          <Divider />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;