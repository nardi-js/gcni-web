import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen pt-32 bg-gradient-to-r from-emerald-600 to-teal-800 flex items-center justify-center"
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
            Global Cahaya Nubuwwah Insani - Islamic Entrepreneurship Boarding School
          </h2>
          <p className="text-lg md:text-xl mb-8 fade-up max-w-3xl mx-auto">
            Membentuk Santripreneur Berjiwa Leader Melalui Pendidikan Islam Terpadu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up">
            <Link
              to="/tentang"
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
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

      {/* Mengapa Memilih Kami Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-scroll="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Mengapa Memilih Kami?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keunggulan yang menjadikan GCNI pilihan terbaik untuk pendidikan putra-putri Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-scroll-stagger>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 hover-lift">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-book-open text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Blended Curriculum</h3>
              <p className="text-gray-600 text-center">
                Pendekatan pendidikan yang mengintegrasikan kurikulum nasional, kurikulum internasional, serta nilai-nilai pendidikan Islam.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover-lift">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-quran text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Program Tahfidz Terpadu</h3>
              <p className="text-gray-600 text-center">
                Membina generasi Qur'ani melalui program hafalan Al-Qur'an yang terstruktur dan dibimbing para ahli.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 hover-lift">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heart text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Pembentukan Karakter dan Adab</h3>
              <p className="text-gray-600 text-center">
                Penanaman nilai moral, santun, etika, dan kepemimpinan sebagai fondasi utama setiap siswa.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover-lift">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-lightbulb text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Jiwa Kewirausahaan</h3>
              <p className="text-gray-600 text-center">
                Mengasah kreativitas dan kemandirian siswa melalui proyek nyata sejak dini.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-scroll="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Program Unggulan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Program-program berkualitas untuk mengembangkan potensi siswa secara optimal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-scroll-stagger>
            {/* Tahfidz */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://res.cloudinary.com/dof6csq4i/image/upload/v1758594705/pesantren/blog/f9blppo5nwwwgja39wp7.png" 
                  alt="Program Tahfidz"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tahfidz</h3>
                <p className="text-sm text-emerald-600 mb-3">Program Hafalan Al-Qur'an</p>
                <p className="text-gray-600 mb-4">
                  Program intensif hafalan Al-Qur'an dengan metode terbukti dan bimbingan ustadz berpengalaman.
                </p>
                <Link to="/program" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold">
                  <i className="fas fa-arrow-right mr-2"></i>
                  Selengkapnya
                </Link>
              </div>
            </div>

            {/* Courtesy */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://res.cloudinary.com/dtcfexttw/image/upload/v1759675078/IMG_20210304_055050_xkk59n.jpg" 
                  alt="Program Courtesy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Courtesy</h3>
                <p className="text-sm text-yellow-600 mb-3">Pendidikan Karakter & Adab</p>
                <p className="text-gray-600 mb-4">
                  Pembentukan akhlak mulia, etika, dan sopan santun sebagai dasar kepribadian Islami.
                </p>
                <Link to="/program" className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold">
                  <i className="fas fa-arrow-right mr-2"></i>
                  Selengkapnya
                </Link>
              </div>
            </div>

            {/* Entrepreneurship */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://res.cloudinary.com/dtcfexttw/image/upload/v1759675082/_storage_emulated_0_Android_data_com.miui.gallery_cache_SecurityShare_IMG20250707_091615_lmc_8.4_p4w0v8.jpg" 
                  alt="Program Entrepreneurship"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Entrepreneurship</h3>
                <p className="text-sm text-blue-600 mb-3">Kewirausahaan</p>
                <p className="text-gray-600 mb-4">
                  Mengembangkan jiwa wirausaha, kreativitas, dan kemandirian ekonomi sejak dini.
                </p>
                <Link to="/program" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  <i className="fas fa-arrow-right mr-2"></i>
                  Selengkapnya
                </Link>
              </div>
            </div>

            {/* International Program */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://res.cloudinary.com/dof6csq4i/image/upload/v1758591275/santri_zzlfdp.jpg" 
                  alt="International Program"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">International Program</h3>
                <p className="text-sm text-purple-600 mb-3">Kurikulum Cambridge</p>
                <p className="text-gray-600 mb-4">
                  Program dengan standar internasional Cambridge untuk daya saing global.
                </p>
                <Link to="/program" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
                  <i className="fas fa-arrow-right mr-2"></i>
                  Selengkapnya
                </Link>
              </div>
            </div>

            {/* Language Development Center */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://res.cloudinary.com/dtcfexttw/image/upload/v1759675073/f_bi8ais.jpg" 
                  alt="Language Development Center"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Language Development Center</h3>
                <p className="text-sm text-red-600 mb-3">Pengembangan Bahasa</p>
                <p className="text-gray-600 mb-4">
                  Pusat pengembangan kemampuan berbahasa Arab dan Inggris secara intensif.
                </p>
                <Link to="/program" className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold">
                  <i className="fas fa-arrow-right mr-2"></i>
                  Selengkapnya
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/program"
              className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-arrow-right mr-2"></i>
              Lihat Semua Program
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section - Navigasi ke halaman penting */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Jelajahi GCNI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan informasi lengkap tentang program, berita terkini, dan cara bergabung dengan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link to="/program" className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-graduation-cap text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-center mb-2 text-gray-900">Program Kami</h3>
              <p className="text-sm text-gray-600 text-center">Lihat semua program unggulan dengan foto & detail lengkap</p>
            </Link>

            <Link to="/berita" className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-newspaper text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-center mb-2 text-gray-900">Berita & Artikel</h3>
              <p className="text-sm text-gray-600 text-center">Update terbaru kegiatan & informasi seputar GCNI</p>
            </Link>

            <Link to="/pendaftaran" className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-user-plus text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-center mb-2 text-gray-900">Pendaftaran</h3>
              <p className="text-sm text-gray-600 text-center">Informasi lengkap pendaftaran santri baru</p>
            </Link>

            <Link to="/faq" className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-question-circle text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-center mb-2 text-gray-900">FAQ</h3>
              <p className="text-sm text-gray-600 text-center">Pertanyaan umum seputar GCNI</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Jenjang Pendidikan Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Jenjang Pendidikan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pendidikan berkualitas untuk setiap tahap perkembangan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* SMP */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-school text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">SMP</h3>
                  <p className="text-emerald-600 font-semibold">Membentuk Generasi Berkarakter dan Berprestasi</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Fokus pada dasar akademis yang kokoh, pengembangan minat & bakat, serta pembentukan karakter Islami yang kuat.
              </p>
              <h4 className="font-bold text-gray-900 mb-3">Keunggulan:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-600 mr-3 mt-1"></i>
                  <span className="text-gray-700">Kurikulum Nasional (Merdeka)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-600 mr-3 mt-1"></i>
                  <span className="text-gray-700">Kurikulum Cambridge</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-600 mr-3 mt-1"></i>
                  <span className="text-gray-700">Islamic Pointview</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-600 mr-3 mt-1"></i>
                  <span className="text-gray-700">Diniyyah Kurikulum Timur Tengah</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-600 mr-3 mt-1"></i>
                  <span className="text-gray-700">Program pengembangan kepribadian</span>
                </li>
              </ul>
            </div>

            {/* SMA */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-graduation-cap text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">SMA</h3>
                  <p className="text-blue-600 font-semibold">Melangkah Menuju Masa Depan Gemilang</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Fokus pada akademik intensif, persiapan masuk perguruan tinggi terbaik, dan pengembangan life skills global.
              </p>
              <h4 className="font-bold text-gray-900 mb-3">Keunggulan SMA:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-600 mr-3 mt-1"></i>
                  <span className="text-gray-700">Kurikulum Nasional</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-600 mr-3 mt-1"></i>
                  <span className="text-gray-700">Kurikulum Cambridge</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-600 mr-3 mt-1"></i>
                  <span className="text-gray-700">Islamic Pointview</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-600 mr-3 mt-1"></i>
                  <span className="text-gray-700">Diniyyah Kurikulum Timur Tengah</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mari Bergabung Bersama Kami
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Wujudkan pendidikan Islam terbaik untuk generasi penerus bangsa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/program"
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-graduation-cap mr-2"></i>
              Lihat Program
            </Link>
            <Link
              to="/kontak"
              className="inline-flex items-center bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-phone mr-2"></i>
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
