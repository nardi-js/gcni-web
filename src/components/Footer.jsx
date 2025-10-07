import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mr-3">
                <img className="text-white font-bold text-xl rounded-full" src="/logo/gcni-logo.png" alt="GCNI Logo" />
              </div>
              <div>
                <h3 className="font-bold text-xl">GCNI</h3>
                <p className="text-sm text-gray-400">Global Cahaya Nurbuwwah Insani</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Yayasan pendidikan Islam yang berkomitmen mencetak generasi Qur'ani yang berakhlak mulia dan berjiwa entrepreneur.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Program</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/program" className="hover:text-white transition-colors">
                  IEBS
                </Link>
              </li>
              <li>
                <Link to="/program" className="hover:text-white transition-colors">
                  Tahfizh Qur'an
                </Link>
              </li>
              <li>
                <Link to="/program" className="hover:text-white transition-colors">
                  TPQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Informasi</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/tentang" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/berita" className="hover:text-white transition-colors">
                  Berita
                </Link>
              </li>
              <li>
                <Link to="/integrasi" className="hover:text-white transition-colors">
                  Ekosistem & Aplikasi
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Kontak</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                <i className="fas fa-map-marker-alt mr-2"></i>
                Neglasari, Purwakarta, Jawa Barat 41163
              </p>
              <p>
                <i className="fas fa-phone mr-2"></i>
                (021) 1234-5678
              </p>
              <p>
                <i className="fas fa-envelope mr-2"></i>
                info@gcni.or.id
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 GCNI - Global Cahaya Nurbuwwah Insani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
