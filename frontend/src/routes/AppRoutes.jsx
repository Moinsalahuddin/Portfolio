import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Education from '../pages/Education';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

