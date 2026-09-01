import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from '@/components/Layout';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Education } from '@/pages/Education';
import { Research } from '@/pages/Research';
import { Publications } from '@/pages/Publications';
import { Projects } from '@/pages/Projects';
import { Experience } from '@/pages/Experience';
import { Teaching } from '@/pages/Teaching';
import { Talks } from '@/pages/Talks';
import { Awards } from '@/pages/Awards';
import { Metrics } from '@/pages/Metrics';
import { Contact } from '@/pages/Contact';
import { Books } from '@/pages/Books';
import { Memberships } from '@/pages/Memberships';

function App() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/metrics" element={<Metrics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books" element={<Books />} />
        <Route path="/memberships" element={<Memberships />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
