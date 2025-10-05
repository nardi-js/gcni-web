import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen pt-32 bg-gradient-to-r from-teal-600 to-teal-800 flex items-center justify-center"
        style={{
          backgroundImage: "url('../../hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            <span className="gradient-text">Yayasan GCNI</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-4 fade-up">
            Global Cahaya Nurbuwwah Insani - Islamic Entrepreneurship Boarding School Jakarta
          </h2>
          <p className="text-lg md:text-xl mb-8 fade-up max-w-3xl mx-auto">
            Lembaga Pendidikan Islam Terpadu untuk Membangun Generasi Qur'ani yang Berakhlak Mulia, Cerdas, dan Berjiwa Entrepreneur
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up">
            <Link
              to="/tentang"
              className="inline-flex items-center bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-info-circle mr-2"></i>
              Selengkapnya
            </Link>
            <Link
              to="/donasi"
              className="inline-flex items-center bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-heart mr-2"></i>
              Donasi Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up">
              <span className="gradient-text">Membangun Generasi Qur'ani</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              Yayasan GCNI (Global Cahaya Nurbuwwah Insani) berkomitmen mendidik generasi muda menjadi hafizh Al-Qur'an yang berakhlak mulia, cerdas, dan berjiwa entrepreneur untuk menghadapi tantangan zaman.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-book-open text-2xl text-teal-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Pendidikan Holistik</h3>
                <p className="text-gray-600">Integrasi kurikulum nasional, agama, dan kewirausahaan</p>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-heart text-2xl text-yellow-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Akhlak Mulia</h3>
                <p className="text-gray-600">Pembentukan karakter Islami dan kepribadian yang terpuji</p>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Pemberdayaan Umat</h3>
                <p className="text-gray-600">Program dakwah dan pemberdayaan ekonomi masyarakat</p>
              </div>
            </div>

            <Link
              to="/tentang"
              className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <i className="fas fa-arrow-right mr-2"></i>
              Selengkapnya
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up">
              Program Unggulan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Berbagai program berkualitas untuk mendukung pendidikan dan pemberdayaan umat Islam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* IEBS Program */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift" data-aos="fade-up" data-aos-delay="200">
              <div className="h-48 bg-gradient-to-r from-teal-400 to-teal-600 relative">
                <img
                  src="/images/programs/iebs.jpg"
                  alt="IEBS Program"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center hidden">
                  <i className="fas fa-graduation-cap text-6xl text-white"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">IEBS</h3>
                <p className="text-sm text-teal-600 mb-3">Islamic Entrepreneurship Boarding School</p>
                <p className="text-gray-600 mb-4">
                  Program SMP & SMA dengan kurikulum terpadu Islam, IT, dan Entrepreneurship untuk mencetak generasi unggul.
                </p>
                <Link to="/program" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold">
                  <i className="fas fa-arrow-right mr-2"></i>
                  Selengkapnya
                </Link>
              </div>
            </div>

            {/* Tahfizh Program */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift" data-aos="fade-up" data-aos-delay="300">
              <div className="h-48 bg-gradient-to-r from-green-400 to-green-600 relative">
                <img
                  src="/images/programs/tahfizh.jpg"
                  alt="Tahfizh Program"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center hidden">
                  <i className="fas fa-quran text-6xl text-white"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tahfizh Qur'an</h3>
                <p className="text-sm text-green-600 mb-3">Program Penghafal Al-Qur'an</p>
                <p className="text-gray-600 mb-4">
                  Program intensif menghafal Al-Qur'an dengan bimbingan para ustadz berpengalaman dan metode terbukti.
                </p>
                <Link to="/program" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold">
                  <i className="fas fa-arrow-right mr-2"></i>
                  Selengkapnya
                </Link>
              </div>
            </div>

            {/* TPQ Program */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift" data-aos="fade-up" data-aos-delay="400">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 relative">
                <img
                  src="/images/programs/tpq.jpg"
                  alt="TPQ Program"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center hidden">
                  <i className="fas fa-child text-6xl text-white"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">TPQ</h3>
                <p className="text-sm text-blue-600 mb-3">Taman Pendidikan Al-Qur'an</p>
                <p className="text-gray-600 mb-4">
                  Pendidikan dasar Al-Qur'an untuk anak-anak dengan metode fun learning dan pembinaan akhlak.
                </p>
                <Link to="/program" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  <i className="fas fa-arrow-right mr-2"></i>
                  Selengkapnya
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/program"
              className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <i className="fas fa-arrow-right mr-2"></i>
              Lihat Semua Program
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-aos="fade-up">
            Mari Bersama Membangun Generasi Qur'ani
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Bergabunglah dengan misi kami dalam mencetak generasi yang hafal Al-Qur'an, berakhlak mulia, dan siap menghadapi masa depan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/program"
              className="inline-flex items-center bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-graduation-cap mr-2"></i>
              Daftar Program
            </Link>
            <Link
              to="/donasi"
              className="inline-flex items-center bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-heart mr-2"></i>
              Donasi Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
