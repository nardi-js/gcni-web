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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Visi */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeRight}
                transition={transition}
              >
                <div className="bg-teal-50 rounded-2xl p-6 md:p-8">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-600 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <i className="fas fa-eye text-xl md:text-2xl text-white"></i>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Visi</h2>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed break-words">
                    Menjadi lembaga pendidikan Islam terdepan yang mencetak generasi Qur'ani yang berakhlak mulia, cerdas, mandiri, dan berjiwa entrepreneur untuk kemaslahatan umat dan bangsa.
                  </p>
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
                <div className="bg-yellow-50 rounded-2xl p-6 md:p-8">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <i className="fas fa-bullseye text-xl md:text-2xl text-white"></i>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Misi</h2>
                  </div>
                  <ul className="text-gray-700 text-base md:text-lg leading-relaxed space-y-2 md:space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-yellow-500 mt-1 mr-2 md:mr-3 flex-shrink-0"></i>
                      <span>Menyelenggarakan pendidikan Islam yang holistik dan berkualitas</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-yellow-500 mt-1 mr-2 md:mr-3 flex-shrink-0"></i>
                      <span>Membina generasi penghafal Al-Qur'an yang berakhlak mulia</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-yellow-500 mt-1 mr-2 md:mr-3 flex-shrink-0"></i>
                      <span>Mengembangkan jiwa kewirausahaan dan kemandirian</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-yellow-500 mt-1 mr-2 md:mr-3 flex-shrink-0"></i>
                      <span>Memberdayakan masyarakat melalui program dakwah dan sosial</span>
                    </li>
                  </ul>
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
                  Sejarah Perjalanan GCNI
                </motion.h2>
                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-gray-600 px-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={variants.fadeUp}
                  transition={{ ...transition, delay: 0.1 }}
                >
                  Perjalanan panjang dalam mengabdi untuk pendidikan umat
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
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm md:text-lg">2015</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover-lift flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 break-words">Pendirian Yayasan</h3>
                    <p className="text-gray-600 text-sm md:text-base break-words">
                      Yayasan GCNI didirikan dengan komitmen mencetak generasi Qur'ani yang unggul dalam ilmu pengetahuan dan teknologi serta berkarakter Islami.
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
                    <span className="text-white font-bold text-sm md:text-lg">2017</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover-lift flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 break-words">Pembukaan Program TPQ</h3>
                    <p className="text-gray-600 text-sm md:text-base break-words">
                      Membuka program Taman Pendidikan Al-Qur'an (TPQ) untuk memberikan pendidikan dasar Al-Qur'an kepada anak-anak usia dini di lingkungan sekitar.
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
                    <span className="text-white font-bold text-sm md:text-lg">2019</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover-lift flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 break-words">Launching Program Tahfizh</h3>
                    <p className="text-gray-600 text-sm md:text-base break-words">
                      Meluncurkan program Tahfizh Al-Qur'an dengan target 30 juz, dilengkapi dengan metode pembelajaran modern dan pembinaan karakter yang intensif.
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
                    <span className="text-white font-bold text-sm md:text-lg">2022</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover-lift flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 break-words">Islamic Entrepreneurship Boarding School</h3>
                    <p className="text-gray-600 text-sm md:text-base break-words">
                      Membuka IEBS (Islamic Entrepreneurship Boarding School) yang mengintegrasikan kurikulum nasional, pendidikan Islam, dan kewirausahaan untuk jenjang SMP dan SMA.
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

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-teal-600">
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
                className="inline-flex items-center justify-center bg-white text-teal-600 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
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
