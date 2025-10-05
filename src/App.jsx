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
import AdminNews from './pages/admin/AdminNews';
import AdminMessages from './pages/admin/AdminMessages';

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
          <Route path="artikel/:slug" element={<Artikel />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="kontak" element={<Kontak />} />
          <Route path="donasi" element={<Donasi />} />
        </Route>
        
        {/* Admin Routes - Without Layout (No Header/Footer) */}
        <Route path="/admin/news" element={<AdminNews />} />
        <Route path="/admin/messages" element={<AdminMessages />} />
      </Routes>
    </Router>
  );
}

export default App;
