import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getNewsBySlug, getAllNews } from '../services/newsService';
import { formatDate } from '../data/newsData';

const Artikel = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadArticle();
  }, [slug]);

  const loadArticle = async () => {
    setLoading(true);
    setError(null);

    try {
      // Get article by slug
      const result = await getNewsBySlug(slug);
      
      if (!result.success || !result.data) {
        setError('Artikel tidak ditemukan');
        setTimeout(() => navigate('/berita'), 2000);
        return;
      }

      setArticle(result.data);
      document.title = `${result.data.title} - GCNI`;

      // Get related articles (same category, excluding current)
      const allNewsResult = await getAllNews();
      if (allNewsResult.success) {
        const related = allNewsResult.data
          .filter(news => 
            news.category === result.data.category && 
            news.slug !== result.data.slug
          )
          .slice(0, 3);
        setRelatedArticles(related);
      }

      // Scroll to top
      window.scrollTo(0, 0);
    } catch (err) {
      setError('Gagal memuat artikel: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link berhasil disalin!');
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-6xl text-teal-600 mb-4"></i>
          <p className="text-gray-600 text-lg">Memuat artikel...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-exclamation-triangle text-6xl text-red-400 mb-4"></i>
          <p className="text-red-600 text-lg mb-4">{error}</p>
          <Link
            to="/berita"
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Kembali ke Berita
          </Link>
        </div>
      </div>
    );
  }

  if (!article) {
    return null;
  }

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(article.title);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <section className="pt-32 pb-12 bg-gradient-to-r from-teal-600 to-teal-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center text-white/80 mb-6">
              <Link to="/" className="hover:text-white">Beranda</Link>
              <i className="fas fa-chevron-right mx-2 text-sm"></i>
              <Link to="/berita" className="hover:text-white">Berita</Link>
              <i className="fas fa-chevron-right mx-2 text-sm"></i>
              <span className="text-white">Artikel</span>
            </div>
            
            {/* Category Badge */}
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {article.category}
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {article.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex items-center justify-center text-white/90 space-x-6 text-sm">
              <div className="flex items-center">
                <i className="far fa-calendar mr-2"></i>
                <span>{formatDate(article.date)}</span>
              </div>
              <div className="flex items-center">
                <i className="far fa-user mr-2"></i>
                <span>{article.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl" style={{ maxHeight: '600px' }}>
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
                style={{ maxHeight: '600px', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/1200x600/14B8A6/FFFFFF?text=GCNI+News';
                }}
              />
            </div>

            {/* Article Body */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Bagikan Artikel:</h3>
                <div className="flex space-x-4">
                  <a
                    href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Bagikan ke WhatsApp"
                    className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all hover:scale-110 shadow-lg"
                  >
                    <i className="fab fa-whatsapp text-xl"></i>
                  </a>
                  <a
                    href={`https://t.me/share/url?url=${shareUrl}&text=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Bagikan ke Telegram"
                    className="flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all hover:scale-110 shadow-lg"
                  >
                    <i className="fab fa-telegram text-xl"></i>
                  </a>
                  <button
                    onClick={copyToClipboard}
                    title="Salin Link"
                    className="flex items-center justify-center w-12 h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-full transition-all hover:scale-110 shadow-lg"
                  >
                    <i className="fas fa-link text-xl"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Berita Terkait</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map((news) => (
                    <Link
                      key={news.id}
                      to={`/artikel/${news.slug}`}
                      className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
                     
                     
                    >
                      <div className="h-48 bg-gradient-to-r from-teal-400 to-teal-600 relative overflow-hidden">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 hidden items-center justify-center">
                          <i className="fas fa-newspaper text-6xl text-white"></i>
                        </div>
                      </div>
                      <div className="p-6">
                        <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                          {news.category}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                          {news.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {news.excerpt}
                        </p>
                        <div className="flex items-center text-gray-500 text-xs">
                          <i className="far fa-calendar mr-1"></i>
                          <span>{formatDate(news.date)}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to News Button */}
            <div className="mt-12 text-center">
              <Link
                to="/berita"
                className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Kembali ke Berita
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .article-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1F2937;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .article-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #374151;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .article-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #4B5563;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .article-content p {
          margin-bottom: 1rem;
          line-height: 1.75;
          color: #4B5563;
        }
        .article-content ul, .article-content ol {
          margin: 1rem 0 1rem 2rem;
          color: #4B5563;
        }
        .article-content li {
          margin-bottom: 0.5rem;
          line-height: 1.75;
        }
        .article-content ul {
          list-style-type: disc;
        }
        .article-content ol {
          list-style-type: decimal;
        }
        .article-content blockquote {
          border-left: 4px solid #14B8A6;
          padding-left: 1rem;
          font-style: italic;
          margin: 1.5rem 0;
          color: #6B7280;
        }
        .article-content strong {
          font-weight: 600;
          color: #1F2937;
        }
        .article-content a {
          color: #14B8A6;
          text-decoration: underline;
        }
        .article-content a:hover {
          color: #0F766E;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Artikel;
