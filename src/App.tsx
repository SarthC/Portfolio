import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Certifications from './components/Certifications';
import Extracurriculars from './components/Extracurriculars';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Animate elements on scroll using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Hackathons />
        <Certifications />
        <Extracurriculars />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
