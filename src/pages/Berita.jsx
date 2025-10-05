import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { newsData, formatDate, getCategoryColor } from '../data/newsData';

const Berita = () => {
  const [filteredNews, setFilteredNews] = useState(newsData);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
    document.title = 'Berita GCNI Jakarta - Info Pendaftaran, Prestasi Santri, Kegiatan Islamic Boarding School';
  }, []);

  const filterNews = (category) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredNews(newsData);
    } else {
      setFilteredNews(newsData.filter(news => news.category.toLowerCase() === category.toLowerCase()));
    }
  };

  const categories = [
    { value: 'all', label: 'Semua Berita' },
    { value: 'kegiatan', label: 'Kegiatan' },
    { value: 'prestasi', label: 'Prestasi' },
    { value: 'program', label: 'Program' },
    { value: 'pendaftaran', label: 'Pendaftaran' },
    { value: 'beasiswa', label: 'Beasiswa' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6" data-aos="zoom-in">
            <i className="fas fa-newspaper text-5xl text-white"></i>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            <span className="gradient-text">Berita & Artikel</span>
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Ikuti perkembangan terbaru kegiatan dan prestasi Yayasan GCNI
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => filterNews(category.value)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  activeFilter === category.value
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <i className="fas fa-newspaper text-6xl text-gray-300 mb-4"></i>
              <p className="text-gray-500 text-lg">Tidak ada berita untuk kategori ini</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news, index) => (
                <article
                  key={news.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift"
                  data-aos="fade-up"
                  data-aos-delay={200 + (index % 3) * 100}
                >
                  <div className={`h-48 bg-gradient-to-r from-${getCategoryColor(news.category)}-400 to-${getCategoryColor(news.category)}-600 flex items-center justify-center relative overflow-hidden`}>
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r from-${getCategoryColor(news.category)}-400 to-${getCategoryColor(news.category)}-600 hidden items-center justify-center`}>
                      <i className="fas fa-newspaper text-6xl text-white"></i>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <i className="fas fa-calendar mr-2"></i>
                      <span>{formatDate(news.date)}</span>
                      <span className="mx-2">•</span>
                      <span className={`bg-${getCategoryColor(news.category)}-100 text-${getCategoryColor(news.category)}-800 px-2 py-1 rounded-full text-xs`}>
                        {news.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <Link
                      to={`/artikel/${news.id}`}
                      className={`inline-flex items-center text-${getCategoryColor(news.category)}-600 hover:text-${getCategoryColor(news.category)}-700 font-semibold group`}
                    >
                      <i className="fas fa-arrow-right mr-2 group-hover:translate-x-1 transition-transform"></i>
                      Baca Selengkapnya
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredNews.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg" data-aos="fade-up">
                <i className="fas fa-plus mr-2"></i>
                Muat Berita Lainnya
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-aos="fade-up">
            Ikuti Terus Perkembangan GCNI
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Jangan lewatkan berita terbaru dan informasi penting seputar kegiatan Yayasan GCNI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/kontak"
              className="inline-flex items-center justify-center bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-envelope mr-2"></i>
              Berlangganan Newsletter
            </Link>
            <Link
              to="/program"
              className="inline-flex items-center justify-center bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-graduation-cap mr-2"></i>
              Lihat Program Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Berita;
