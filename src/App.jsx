import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Tentang from './pages/Tentang';
import Program from './pages/Program';
import Berita from './pages/Berita';
import Artikel from './pages/Artikel';
import FAQ from './pages/FAQ';
import Kontak from './pages/Kontak';
import Donasi from './pages/Donasi';
import Pendaftaran from './pages/Pendaftaran';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tentang" element={<Tentang />} />
          <Route path="program" element={<Program />} />
          <Route path="berita" element={<Berita />} />
          <Route path="artikel/:id" element={<Artikel />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="kontak" element={<Kontak />} />
          <Route path="donasi" element={<Donasi />} />
          <Route path="pendaftaran" element={<Pendaftaran />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
