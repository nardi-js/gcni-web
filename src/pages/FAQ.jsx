import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { faqData, getFaqByCategory, searchFaq, categories, getCategoryStats } from '../data/faqData';

const FAQ = () => {
  const [filteredFaqs, setFilteredFaqs] = useState(faqData);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaqId, setOpenFaqId] = useState(null);
  const [categoryStats] = useState(getCategoryStats());

  useEffect(() => {
    document.title = 'FAQ - Pertanyaan Umum GCNI | Informasi Lengkap Program & Pendaftaran';
  }, []);

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
    setSearchTerm('');
    const filtered = getFaqByCategory(category);
    setFilteredFaqs(filtered);
    setOpenFaqId(null);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.trim() === '') {
      setFilteredFaqs(getFaqByCategory(activeCategory));
    } else {
      const results = searchFaq(term);
      setFilteredFaqs(results);
    }
    setOpenFaqId(null);
  };

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  // Group FAQs by category for display
  const groupedFaqs = filteredFaqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {});

  const getCategoryInfo = (category) => {
    const info = {
      pendaftaran: { title: 'Pendaftaran', icon: 'fa-user-plus' },
      program: { title: 'Program', icon: 'fa-graduation-cap' },
      biaya: { title: 'Biaya & Pembayaran', icon: 'fa-money-bill-wave' },
      fasilitas: { title: 'Fasilitas', icon: 'fa-building' },
      asrama: { title: 'Asrama & Kehidupan Santri', icon: 'fa-home' }
    };
    return info[category] || { title: category, icon: 'fa-question-circle' };
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div 
            className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <motion.i 
              className="fas fa-question-circle text-5xl text-white"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            ></motion.i>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Pertanyaan Umum</span>
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan Anda seputar GCNI, program, pendaftaran, dan fasilitas
          </p>
          <p className="text-teal-200 mt-4">
            <i className="fas fa-book mr-2"></i>
            {faqData.length} pertanyaan yang sering ditanyakan
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Cari pertanyaan..."
                className="w-full px-6 py-4 pl-14 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none text-gray-700"
              />
              <i className="fas fa-search absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></i>
              {searchTerm && (
                <button
                  onClick={() => handleSearch('')}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategoryFilter(cat.value)}
                className={`px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 ${
                  activeCategory === cat.value
                    ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:shadow-lg hover:scale-105'
                }`}
              >
                <i className={`fas ${cat.icon} mr-2`}></i>
                {cat.label}
                <span className="ml-2 text-xs opacity-75">({categoryStats[cat.value]})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {searchTerm && (
              <div className="mb-8 text-gray-600">
                <i className="fas fa-search mr-2"></i>
                Menampilkan {filteredFaqs.length} hasil untuk "<strong>{searchTerm}</strong>"
              </div>
            )}

            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16">
                <i className="fas fa-search text-6xl text-gray-300 mb-4"></i>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">Tidak ada hasil</h3>
                <p className="text-gray-500 mb-6">
                  Tidak ditemukan FAQ yang sesuai dengan pencarian "{searchTerm}"
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setFilteredFaqs(faqData);
                    setActiveCategory('all');
                  }}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  <i className="fas fa-redo mr-2"></i>
                  Reset Pencarian
                </button>
              </div>
            ) : (
              Object.keys(groupedFaqs).map((category) => {
                const catInfo = getCategoryInfo(category);
                return (
                  <div key={category} className="mb-12">
                    {(activeCategory === 'all' || searchTerm) && (
                      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                        <i className={`fas ${catInfo.icon} text-teal-600 mr-3`}></i>
                        {catInfo.title}
                        <span className="ml-3 text-sm text-gray-500 font-normal">
                          ({groupedFaqs[category].length})
                        </span>
                      </h2>
                    )}
                    <div className="space-y-4">
                      {groupedFaqs[category].map((faq, index) => (
                        <div
                          key={faq.id}
                          className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-150 cursor-pointer"
                          onClick={() => toggleFaq(faq.id)}
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900 pr-8 flex-1">
                              {faq.question}
                            </h3>
                            <i
                              className={`fas fa-chevron-down text-teal-600 transition-transform duration-150 ${
                                openFaqId === faq.id ? 'rotate-180' : ''
                              }`}
                            ></i>
                          </div>
                          <div
                            className={`overflow-hidden transition-all duration-150 ${
                              openFaqId === faq.id ? 'max-h-[1000px] mt-4' : 'max-h-0'
                            }`}
                          >
                            <div
                              className="text-gray-600 leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: faq.answer }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <motion.i 
              className="fas fa-comments text-6xl mb-6 opacity-80"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            ></motion.i>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Tim kami siap membantu menjawab semua pertanyaan Anda. Jangan ragu untuk menghubungi kami!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <i className="fab fa-whatsapp mr-3 text-2xl"></i>
                Chat WhatsApp
              </a>
              <Link
                to="/kontak"
                className="inline-flex items-center justify-center bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <motion.i 
                  className="fas fa-envelope mr-3"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                ></motion.i>
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .rotate-180 {
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
};

export default FAQ;
