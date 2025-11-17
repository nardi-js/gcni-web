import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Tentang = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Tentang GCNI - Profil Yayasan Islamic Boarding School Jakarta | Visi Misi Sejarah';
  }, []);

  // Animation variants - Memoized for performance
  const variants = useMemo(() => ({
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    fadeRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    fadeLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    }
  }), []);

  const transition = useMemo(() => ({ duration: 0.6, ease: "easeOut" }), []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 text-center">
            <motion.div 
              className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants.zoomIn}
              transition={transition}
            >
              <i className="fas fa-info-circle text-5xl text-white"></i>
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 break-words"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants.fadeUp}
              transition={transition}
            >
              <span className="gradient-text">Tentang GCNI</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants.fadeUp}
              transition={{ ...transition, delay: 0.2 }}
            >
              Mengenal lebih dekat Yayasan Global Cahaya Nurbuwwah Insani dan perjalanan kami dalam mendidik generasi Qur'ani
            </motion.p>
          </div>
        </section>

        {/* Visi Misi Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Visi */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeRight}
                transition={transition}
              >
                <div className="bg-emerald-50 rounded-2xl p-6 md:p-8">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-600 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <i className="fas fa-eye text-xl md:text-2xl text-white"></i>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Visi</h2>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed break-words mb-6">
                    Terbentuknya santripreneur berjiwa leader dengan 3 karakter:
                  </p>
                  
                  <div className="space-y-4">
                    {/* Morality */}
                    <div className="bg-white rounded-xl p-4">
                      <h3 className="font-bold text-emerald-600 mb-2 flex items-center">
                        <i className="fas fa-praying-hands mr-2"></i>
                        1. Morality
                      </h3>
                      <ul className="space-y-1 ml-6 text-gray-700 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Aqidah Salimah</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Ibadah Shalihah</span>
                        </li>
                      </ul>
                    </div>

                    {/* Intellectuality */}
                    <div className="bg-white rounded-xl p-4">
                      <h3 className="font-bold text-emerald-600 mb-2 flex items-center">
                        <i className="fas fa-brain mr-2"></i>
                        2. Intellectuality
                      </h3>
                      <ul className="space-y-1 ml-6 text-gray-700 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Syumuliyyatul Fahm (Pemahaman yang Menyeluruh)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Wasatiyyatul Fikr (Pemikiran yang Moderat)</span>
                        </li>
                      </ul>
                    </div>

                    {/* Responsibility */}
                    <div className="bg-white rounded-xl p-4">
                      <h3 className="font-bold text-emerald-600 mb-2 flex items-center">
                        <i className="fas fa-hands-helping mr-2"></i>
                        3. Responsibility
                      </h3>
                      <ul className="space-y-1 ml-6 text-gray-700 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Mandiri Ekonomi</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Nafi'un Lighoirihi (Bermanfaat bagi Sesama)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Misi */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeLeft}
                transition={transition}
              >
                <div className="bg-yellow-50 rounded-2xl p-6 md:p-8 h-full">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <i className="fas fa-bullseye text-xl md:text-2xl text-white"></i>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Misi</h2>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed break-words">
                      Menyelenggarakan proses pendidikan Islami yang <strong>komprehensif</strong>, <strong>universal</strong>, <strong>informatif</strong>, dan <strong>kontributif</strong> berbasis <strong>Islamic Entrepreneurship</strong> untuk kemajuan bangsa Indonesia dan umat Islam dunia.
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-start bg-white rounded-lg p-3">
                      <i className="fas fa-check-circle text-yellow-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span className="text-gray-700 text-sm md:text-base">Pendidikan Islami yang komprehensif</span>
                    </div>
                    <div className="flex items-start bg-white rounded-lg p-3">
                      <i className="fas fa-check-circle text-yellow-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span className="text-gray-700 text-sm md:text-base">Universal dan informatif</span>
                    </div>
                    <div className="flex items-start bg-white rounded-lg p-3">
                      <i className="fas fa-check-circle text-yellow-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span className="text-gray-700 text-sm md:text-base">Kontributif berbasis Islamic Entrepreneurship</span>
                    </div>
                    <div className="flex items-start bg-white rounded-lg p-3">
                      <i className="fas fa-check-circle text-yellow-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span className="text-gray-700 text-sm md:text-base">Untuk kemajuan bangsa dan umat Islam</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sejarah Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <motion.h2 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4 break-words"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={variants.fadeUp}
                  transition={transition}
                >
                  Perjalanan GCNI
                </motion.h2>
                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-gray-600 px-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={variants.fadeUp}
                  transition={{ ...transition, delay: 0.1 }}
                >
                  Langkah demi langkah dalam mengabdi untuk pendidikan umat
                </motion.p>
              </div>

              <div className="space-y-8 md:space-y-12">
                {/* Timeline Item 1 */}
                <motion.div 
                  className="flex items-start gap-4 md:gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={variants.fadeUp}
                  transition={{ ...transition, delay: 0.2 }}
                >
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-emerald-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-flag text-2xl md:text-3xl text-white"></i>
                  </div>
                  <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover-lift flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 break-words">Fase Awal - Pendirian</h3>
                    <p className="text-gray-600 text-sm md:text-base break-words">
                      Yayasan Global Cahaya Nubuwwah Insani (GCNI) didirikan dengan visi mulia untuk mencetak generasi Qur'ani yang berakhlak mulia, cerdas, dan berjiwa entrepreneur. Dimulai dengan komitmen kuat untuk berkontribusi dalam pendidikan Islam yang berkualitas.
                    </p>
                  </div>
                </motion.div>

                {/* Timeline Item 2 */}
                <motion.div 
                  className="flex items-start gap-4 md:gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={variants.fadeUp}
                  transition={{ ...transition, delay: 0.3 }}
                >
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-green-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-book-quran text-2xl md:text-3xl text-white"></i>
                  </div>
                  <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover-lift flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 break-words">Fase Pengembangan - Program Tahfidz</h3>
                    <p className="text-gray-600 text-sm md:text-base break-words">
                      Meluncurkan program Tahfidz Al-Qur'an sebagai program unggulan, dengan metode pembelajaran yang terstruktur dan bimbingan ustadz berpengalaman. Target hafalan 30 juz dengan pembinaan karakter Islami yang komprehensif.
                    </p>
                  </div>
                </motion.div>

                {/* Timeline Item 3 */}
                <motion.div 
                  className="flex items-start gap-4 md:gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={variants.fadeUp}
                  transition={{ ...transition, delay: 0.4 }}
                >
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-school text-2xl md:text-3xl text-white"></i>
                  </div>
                  <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover-lift flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 break-words">Fase Ekspansi - Jenjang Pendidikan</h3>
                    <p className="text-gray-600 text-sm md:text-base break-words">
                      Membuka jenjang pendidikan formal SMP dan SMA dengan mengintegrasikan kurikulum nasional, kurikulum Cambridge, dan nilai-nilai pendidikan Islam. Fokus pada pembentukan santripreneur yang berkarakter dan berprestasi.
                    </p>
                  </div>
                </motion.div>

                {/* Timeline Item 4 */}
                <motion.div 
                  className="flex items-start gap-4 md:gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={variants.fadeUp}
                  transition={{ ...transition, delay: 0.5 }}
                >
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-purple-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-rocket text-2xl md:text-3xl text-white"></i>
                  </div>
                  <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover-lift flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 break-words">Fase Transformasi - Islamic Entrepreneurship</h3>
                    <p className="text-gray-600 text-sm md:text-base break-words">
                      Mengimplementasikan konsep Islamic Entrepreneurship Boarding School dengan 5 program unggulan: Tahfidz, Courtesy, Entrepreneurship, International Program, dan Language Development Center. Mewujudkan lulusan yang mandiri, berkarakter, dan siap bersaing global.
                    </p>
                  </div>
                </motion.div>

                {/* Timeline Item 5 - Present */}
                <motion.div 
                  className="flex items-start gap-4 md:gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={variants.fadeUp}
                  transition={{ ...transition, delay: 0.6 }}
                >
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-yellow-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-star text-2xl md:text-3xl text-white"></i>
                  </div>
                  <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover-lift flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 break-words">Masa Kini - Terus Berkembang</h3>
                    <p className="text-gray-600 text-sm md:text-base break-words">
                      GCNI terus berkomitmen untuk memberikan pendidikan Islam terbaik dengan mengembangkan fasilitas, program, dan kualitas pembelajaran. Bersama mewujudkan generasi santripreneur berjiwa leader yang membawa keberkahan bagi umat dan bangsa.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Nilai-Nilai Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4 break-words"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={transition}
              >
                Nilai-Nilai Kami
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={{ ...transition, delay: 0.1 }}
              >
                Landasan moral dan spiritual yang menjadi pedoman dalam setiap langkah perjalanan kami
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Nilai 1 */}
              <motion.div 
                className="group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={{ ...transition, delay: 0.2 }}
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="fas fa-quran text-2xl md:text-3xl text-white"></i>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 text-center">Qur'ani</h3>
                  <p className="text-gray-600 text-sm md:text-base text-center leading-relaxed">
                    Menjadikan Al-Qur'an sebagai pedoman utama dalam kehidupan dan pendidikan
                  </p>
                </div>
              </motion.div>

              {/* Nilai 2 */}
              <motion.div 
                className="group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={{ ...transition, delay: 0.3 }}
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="fas fa-heart text-2xl md:text-3xl text-white"></i>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 text-center">Akhlak Mulia</h3>
                  <p className="text-gray-600 text-sm md:text-base text-center leading-relaxed">
                    Membentuk karakter yang berakhlak mulia sesuai dengan ajaran Rasulullah SAW
                  </p>
                </div>
              </motion.div>

              {/* Nilai 3 */}
              <motion.div 
                className="group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={{ ...transition, delay: 0.4 }}
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="fas fa-lightbulb text-2xl md:text-3xl text-white"></i>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 text-center">Inovatif</h3>
                  <p className="text-gray-600 text-sm md:text-base text-center leading-relaxed">
                    Mengembangkan metode pembelajaran yang inovatif dan sesuai perkembangan zaman
                  </p>
                </div>
              </motion.div>

              {/* Nilai 4 */}
              <motion.div 
                className="group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={{ ...transition, delay: 0.5 }}
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className="fas fa-handshake text-2xl md:text-3xl text-white"></i>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 text-center">Kemitraan</h3>
                  <p className="text-gray-600 text-sm md:text-base text-center leading-relaxed">
                    Membangun kemitraan yang kuat dengan berbagai pihak untuk kemajuan bersama
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Blended Curriculum Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4 break-words"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={transition}
              >
                <span className="gradient-text">Blended Curriculum</span>
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-600 px-4 max-w-3xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={{ ...transition, delay: 0.1 }}
              >
                Kurikulum Unggulan yang Mengintegrasikan Tiga Pilar Utama
              </motion.p>
            </div>

            {/* Tiga Pilar Kurikulum */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div 
                className="bg-emerald-50 rounded-xl p-6 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={transition}
              >
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-book text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kurikulum Nasional</h3>
                <p className="text-gray-600">Standar pendidikan Indonesia yang komprehensif</p>
              </motion.div>

              <motion.div 
                className="bg-blue-50 rounded-xl p-6 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={{ ...transition, delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-globe text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Standar Cambridge</h3>
                <p className="text-gray-600">Kurikulum internasional untuk daya saing global</p>
              </motion.div>

              <motion.div 
                className="bg-yellow-50 rounded-xl p-6 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={{ ...transition, delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-mosque text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pendidikan Islam</h3>
                <p className="text-gray-600">Nilai-nilai luhur Islam sebagai fondasi</p>
              </motion.div>
            </div>

            {/* Keunggulan */}
            <motion.div 
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants.fadeUp}
              transition={transition}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Keunggulan Blended Curriculum:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-600 mr-3 mt-1"></i>
                  <span className="text-gray-700">Lulusan berdaya saing global</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-600 mr-3 mt-1"></i>
                  <span className="text-gray-700">Pembentukan karakter mulia</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-600 mr-3 mt-1"></i>
                  <span className="text-gray-700">Kesiapan menghadapi masa depan</span>
                </div>
              </div>
            </motion.div>

            {/* Metode Pembelajaran */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeRight}
                transition={transition}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Metode Pembelajaran:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-search text-emerald-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">Inquiry-Based Learning</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-project-diagram text-emerald-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">Project-Based Learning</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-users text-emerald-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">Collaborative Learning</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-brain text-emerald-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">Reflective Learning</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeLeft}
                transition={transition}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contoh Integrasi:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-flask text-blue-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">Sains dikaitkan dengan ayat Al-Qur'an</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-shapes text-blue-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">Geometri melalui seni Islam</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-language text-blue-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">Bahasa berbasis standar Cambridge</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-chart-line text-blue-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">Penilaian formatif & portofolio</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Konsep Pembelajaran Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4 break-words"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={transition}
              >
                <span className="gradient-text">Konsep Pembelajaran</span>
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-600 px-4 max-w-3xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={{ ...transition, delay: 0.1 }}
              >
                Pembelajaran Aktif, Bermakna, dan Berkarakter
              </motion.p>
            </div>

            {/* Empat Pilar Pembelajaran */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-lg text-center hover-lift"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.zoomIn}
                transition={transition}
              >
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-search text-2xl text-white"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Inquiry</h3>
                <p className="text-gray-600 text-sm">Pembelajaran berbasis penyelidikan</p>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl p-6 shadow-lg text-center hover-lift"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.zoomIn}
                transition={{ ...transition, delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-project-diagram text-2xl text-white"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Project</h3>
                <p className="text-gray-600 text-sm">Pembelajaran berbasis proyek</p>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl p-6 shadow-lg text-center hover-lift"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.zoomIn}
                transition={{ ...transition, delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-2xl text-white"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Collaborative</h3>
                <p className="text-gray-600 text-sm">Pembelajaran kolaboratif</p>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl p-6 shadow-lg text-center hover-lift"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.zoomIn}
                transition={{ ...transition, delay: 0.3 }}
              >
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-brain text-2xl text-white"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Reflective</h3>
                <p className="text-gray-600 text-sm">Pembelajaran reflektif</p>
              </motion.div>
            </div>

            {/* Integrasi Nilai Islam */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants.fadeUp}
              transition={transition}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Integrasi Nilai Islam</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <i className="fas fa-quran text-4xl text-emerald-600 mb-3"></i>
                  <h4 className="font-bold text-gray-900 mb-2">Ayat Qur'an & Hadits</h4>
                  <p className="text-gray-600 text-sm">Integrasi nilai-nilai Al-Qur'an dan Hadits dalam setiap pembelajaran</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-heart text-4xl text-emerald-600 mb-3"></i>
                  <h4 className="font-bold text-gray-900 mb-2">Penguatan Akhlak</h4>
                  <p className="text-gray-600 text-sm">Pembentukan karakter dan akhlak mulia dalam setiap aktivitas</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-praying-hands text-4xl text-emerald-600 mb-3"></i>
                  <h4 className="font-bold text-gray-900 mb-2">Penerapan Adab</h4>
                  <p className="text-gray-600 text-sm">Praktik adab Islami dalam kehidupan sehari-hari</p>
                </div>
              </div>
            </motion.div>

            {/* Teknologi Pendukung */}
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants.fadeUp}
              transition={transition}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Didukung Teknologi</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white rounded-lg px-6 py-3 shadow">
                  <i className="fas fa-laptop-code text-blue-600 mr-2"></i>
                  <span className="text-gray-700">LMS (Learning Management System)</span>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow">
                  <i className="fas fa-video text-blue-600 mr-2"></i>
                  <span className="text-gray-700">Media Interaktif</span>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow">
                  <i className="fas fa-network-wired text-blue-600 mr-2"></i>
                  <span className="text-gray-700">Kolaborasi Digital</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-emerald-600">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants.fadeUp}
              transition={transition}
            >
              Bergabunglah dengan Misi Kami
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-teal-100 mb-6 md:mb-8 max-w-3xl mx-auto px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants.fadeUp}
              transition={{ ...transition, delay: 0.1 }}
            >
              Mari bersama-sama membangun generasi Qur'ani yang siap menghadapi tantangan masa depan
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants.fadeUp}
              transition={{ ...transition, delay: 0.2 }}
            >
              <Link
                to="/program"
                className="inline-flex items-center justify-center bg-white text-emerald-600 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
              >
                <i className="fas fa-graduation-cap mr-2"></i>
                Lihat Program Kami
              </Link>
              <Link
                to="/donasi"
                className="inline-flex items-center justify-center bg-yellow-400 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
              >
                <i className="fas fa-heart mr-2"></i>
                Dukung Misi Kami
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
  );
};

export default Tentang;
