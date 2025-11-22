import { Link } from 'react-router-dom';
import contactData from '../data/contactData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mr-3">
                <img className="text-white font-bold text-xl rounded-full" src="gcni-logo.png" alt="GCNI Logo" />
              </div>
              <div>
                <h3 className="font-bold text-xl">GCNI</h3>
                <p className="text-sm text-gray-400">Global Cahaya Nubuwwah Insani</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Yayasan pendidikan Islam yang berkomitmen mencetak generasi Qur'ani yang berakhlak mulia dan berjiwa entrepreneur.
            </p>
            <div className="flex space-x-3 mt-4">
              <a 
                href={contactData.social.instagram.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram GCNI"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a 
                href={contactData.social.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="YouTube GCNI"
              >
                <i className="fab fa-youtube text-lg"></i>
              </a>
              <a 
                href={contactData.social.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="TikTok GCNI"
              >
                <i className="fab fa-tiktok text-lg"></i>
              </a>
              <a 
                href={`https://wa.me/${contactData.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp GCNI"
              >
                <i className="fab fa-whatsapp text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Program</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/program" className="hover:text-teal-400 transition-colors">
                  IEBS (SMP & SMA)
                </Link>
              </li>
              <li>
                <Link to="/program" className="hover:text-teal-400 transition-colors">
                  Tahfizh Qur'an
                </Link>
              </li>
              <li>
                <Link to="/program" className="hover:text-teal-400 transition-colors">
                  TPQ
                </Link>
              </li>
              <li>
                <Link to="/program" className="hover:text-teal-400 transition-colors">
                  International Program
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Informasi</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/tentang" className="hover:text-teal-400 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/program" className="hover:text-teal-400 transition-colors">
                  Program Kami
                </Link>
              </li>
              <li>
                <Link to="/pendaftaran" className="hover:text-teal-400 transition-colors">
                  Pendaftaran
                </Link>
              </li>
              <li>
                <Link to="/berita" className="hover:text-teal-400 transition-colors">
                  Berita & Artikel
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-teal-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="hover:text-teal-400 transition-colors">
                  Kontak
                </Link>
              </li>
              <li>
                <Link to="/donasi" className="hover:text-teal-400 transition-colors">
                  Donasi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Kontak Kami</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt mr-3 mt-1 text-teal-400"></i>
                <div>
                  <p className="text-sm">{contactData.address.street}</p>
                  <p className="text-sm">{contactData.address.district}</p>
                  <p className="text-sm">{contactData.address.regency}, {contactData.address.province}</p>
                  <p className="text-sm">{contactData.address.postalCode}</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fab fa-whatsapp mr-3 text-teal-400"></i>
                <a href={`https://wa.me/${contactData.whatsapp}`} className="hover:text-white transition-colors">
                  {contactData.whatsappFormatted}
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope mr-3 text-teal-400"></i>
                <a href={`mailto:${contactData.email}`} className="hover:text-white transition-colors">
                  {contactData.email}
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-sm text-gray-500">Jam Operasional:</p>
                <p className="text-sm">Senin - Jumat: {contactData.operatingHours.weekdays}</p>
                <p className="text-sm">Sabtu: {contactData.operatingHours.saturday}</p>
                <p className="text-sm text-teal-400">WhatsApp: {contactData.operatingHours.whatsapp24x7}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} GCNI - Global Cahaya Nubuwwah Insani. All rights reserved.</p>
          <p className="text-sm mt-2 text-gray-500">Islamic Entrepreneurship Boarding School</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
