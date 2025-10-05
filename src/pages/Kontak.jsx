import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contactData, { 
  getWhatsAppLink, 
  getGoogleMapsLink, 
  isValidEmail,
  formatFormDataForWhatsApp,
  getAccessColorClasses 
} from '../data/contactData';

const Kontak = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    subjek: '',
    pesan: ''
  });
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
    
    setTimeout(() => {
      const messageDiv = document.getElementById('form-message');
      if (messageDiv) {
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);

    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 10000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.nama || !formData.email || !formData.subjek || !formData.pesan) {
      showMessage('Mohon isi semua field yang wajib diisi.', 'error');
      return;
    }

    if (!isValidEmail(formData.email)) {
      showMessage('Mohon masukkan email yang valid.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission (2 seconds delay)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      showMessage('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.', 'success');
      
      // Reset form
      setFormData({
        nama: '',
        email: '',
        telepon: '',
        subjek: '',
        pesan: ''
      });

      // Optional: Redirect to WhatsApp
      const whatsappMessage = formatFormDataForWhatsApp(formData);
      const whatsappUrl = getWhatsAppLink(whatsappMessage);
      
      setTimeout(() => {
        if (window.confirm('Apakah Anda ingin melanjutkan ke WhatsApp untuk komunikasi lebih lanjut?')) {
          window.open(whatsappUrl, '_blank');
        }
      }, 1000);

    } catch {
      showMessage('Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi kami melalui WhatsApp.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6" data-aos="zoom-in">
            <i className="fas fa-phone text-5xl text-white"></i>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 gradient-text break-words" data-aos="fade-up">
            Hubungi Kami
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto px-4" data-aos="fade-up" data-aos-delay="200">
            Kami siap membantu Anda dengan informasi lengkap tentang program dan layanan GCNI
          </p>
        </div>
      </section>

      {/* Pendaftaran Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 via-white to-yellow-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden" data-aos="zoom-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Left Side - Info */}
                <div className="bg-gradient-to-br from-teal-600 to-teal-800 p-6 sm:p-8 md:p-12 text-white flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-4">
                      <i className="fas fa-user-graduate text-2xl sm:text-3xl text-teal-800"></i>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-words">Daftar Santri Baru</h2>
                    <p className="text-teal-100 text-base sm:text-lg mb-6 break-words">
                      Jadilah bagian dari generasi Qur'ani berakhlak mulia dan berjiwa entrepreneur
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {contactData.registrationForm.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <i className={`fas ${feature.icon} text-yellow-400 mt-1 mr-3 text-lg sm:text-xl flex-shrink-0`}></i>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold mb-1 break-words">{feature.title}</h4>
                          <p className="text-teal-100 text-sm break-words">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Right Side - CTA */}
                <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-50 to-white">
                  <div className="mb-8 w-full">
                    <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4 break-words">
                      <i className="fas fa-star mr-1"></i> Tahun Ajaran {contactData.registrationForm.tahunAjaran}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 px-2 break-words">
                      Pendaftaran Dibuka!
                    </h3>
                    <p className="text-gray-600 mb-8 px-2 break-words">
                      Isi formulir pendaftaran online dan bergabunglah bersama kami. Proses pendaftaran hanya membutuhkan waktu 5 menit.
                    </p>
                  </div>
                  
                  {/* CTA Button */}
                  <a 
                    href={contactData.registrationForm.googleFormUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4 w-full md:w-auto"
                  >
                    <i className="fas fa-clipboard-list mr-2 sm:mr-3 text-lg sm:text-xl"></i>
                    <span>Daftar Sekarang</span>
                    <i className="fas fa-arrow-right ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform"></i>
                  </a>
                  
                  <p className="text-xs sm:text-sm text-gray-500 mt-4">
                    <i className="fas fa-lock mr-1"></i> Data Anda aman dan terlindungi
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8 w-full">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-teal-600"><i className="fas fa-graduation-cap"></i></div>
                      <div className="text-[10px] sm:text-xs text-gray-600 break-words">Kurikulum Terpadu</div>
                    </div>
                    <div className="text-center border-x border-gray-200">
                      <div className="text-xl sm:text-2xl font-bold text-teal-600"><i className="fas fa-mosque"></i></div>
                      <div className="text-[10px] sm:text-xs text-gray-600 break-words">Islami Modern</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-teal-600"><i className="fas fa-award"></i></div>
                      <div className="text-[10px] sm:text-xs text-gray-600 break-words">Berkualitas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Info Tambahan */}
            <div className="mt-8 text-center" data-aos="fade-up" data-aos-delay="200">
              <p className="text-gray-600 px-4 break-words">
                <i className="fas fa-info-circle mr-2 text-teal-600"></i>
                Butuh bantuan? Hubungi kami di{' '}
                <a 
                  href={getWhatsAppLink()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 font-semibold"
                >
                  WhatsApp <i className="fab fa-whatsapp ml-1"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-50 rounded-2xl p-8" data-aos="fade-right">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="nama"
                        name="nama"
                        value={formData.nama}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telepon" className="block text-sm font-medium text-gray-700 mb-2">
                        No. Telepon
                      </label>
                      <input
                        type="tel"
                        id="telepon"
                        name="telepon"
                        value={formData.telepon}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="subjek" className="block text-sm font-medium text-gray-700 mb-2">
                        Subjek *
                      </label>
                      <select
                        id="subjek"
                        name="subjek"
                        value={formData.subjek}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none transition-colors"
                      >
                        {contactData.formSubjects.map((subject, index) => (
                          <option key={index} value={subject.value}>
                            {subject.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="pesan" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <textarea
                      id="pesan"
                      name="pesan"
                      rows="6"
                      value={formData.pesan}
                      onChange={handleInputChange}
                      required
                      placeholder="Tuliskan pesan Anda di sini..."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg disabled:transform-none disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Mengirim...
                      </>
                    ) : (
                      'Kirim Pesan'
                    )}
                  </button>
                </form>

                {/* Success/Error Messages */}
                {message.text && (
                  <div id="form-message" className="mt-4">
                    <div className={`p-4 rounded-xl border flex items-start space-x-3 ${
                      message.type === 'success' 
                        ? 'bg-green-100 text-green-800 border-green-200' 
                        : 'bg-red-100 text-red-800 border-red-200'
                    }`}>
                      <i className={`fas ${message.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} mt-0.5 flex-shrink-0`}></i>
                      <span>{message.text}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-8" data-aos="fade-left">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
                  <p className="text-gray-600 text-lg mb-8">
                    Jangan ragu untuk menghubungi kami melalui berbagai cara berikut ini. 
                    Tim kami siap melayani Anda dengan sepenuh hati.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover-lift">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-teal-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Alamat</h3>
                      <p className="text-gray-600 font-medium">{contactData.address.street}</p>
                      <p className="text-gray-600">{contactData.address.district}</p>
                      <p className="text-gray-600">{contactData.address.regency}, {contactData.address.province} {contactData.address.postalCode}</p>
                      <p className="text-sm text-teal-600 mt-2">📍 Plus Code: {contactData.coordinates.plusCode.split(',')[0]}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover-lift">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-phone text-yellow-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Telepon</h3>
                      <p className="text-gray-600">{contactData.phone}</p>
                      <p className="text-sm text-gray-500 mt-1">Senin - Jumat: {contactData.operatingHours.weekdays}</p>
                      <p className="text-sm text-gray-500">Sabtu: {contactData.operatingHours.saturday}</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover-lift">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fab fa-whatsapp text-green-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                      <p className="text-gray-600">{contactData.whatsappFormatted}</p>
                      <a 
                        href={getWhatsAppLink()} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold mt-2"
                      >
                        Chat Sekarang
                        <i className="fas fa-external-link-alt text-sm ml-1"></i>
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover-lift">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-envelope text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">{contactData.email}</p>
                      <p className="text-gray-600">{contactData.emailRegistration}</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Ikuti Kami</h3>
                  <div className="flex space-x-4">
                    {Object.values(contactData.social).map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 ${social.color} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg`}
                        title={social.username}
                      >
                        <i className={`${social.icon} text-xl`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access & Transportation */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <i className="fas fa-route text-teal-600 mr-3"></i>
                Akses & Transportasi
              </h2>
              <p className="text-xl text-gray-600">Lokasi strategis dengan berbagai akses transportasi</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactData.access.map((item) => {
                const colors = getAccessColorClasses(item.color);
                return (
                  <div key={item.id} className={`bg-gradient-to-br ${colors.bg} rounded-xl shadow-lg p-6 hover-lift`}>
                    <div className={`w-14 h-14 ${colors.icon} rounded-lg flex items-center justify-center mb-4`}>
                      <i className={`fas ${item.icon} text-2xl text-white`}></i>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-700 mb-2"><strong>{item.description}</strong></p>
                    {item.type === 'gps' ? (
                      <p className="text-sm text-gray-600 font-mono bg-white px-2 py-1 rounded">{item.detail}</p>
                    ) : (
                      <p className="text-sm text-gray-600">{item.detail}</p>
                    )}
                    <p className="text-sm text-gray-600 mt-2">{item.time}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center ${colors.text} hover:opacity-80 font-semibold mt-3 text-sm`}
                      >
                        <i className="fas fa-external-link-alt mr-1"></i>
                        Buka di Google Maps
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Map Note */}
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <div className="flex items-start">
                <i className="fas fa-info-circle text-blue-600 text-xl mr-3 mt-1"></i>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Tips Perjalanan:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    {contactData.travelTips.map((tip, index) => (
                      <li key={index}>• {tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Jam Operasional</h2>
              <p className="text-xl text-gray-600">Kunjungi kami pada jam kerja atau hubungi untuk membuat janji</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Weekdays */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-2xl text-teal-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hari Kerja</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Senin - Jumat:</strong> {contactData.operatingHours.weekdays}</p>
                  <p><strong>Sabtu:</strong> {contactData.operatingHours.saturday}</p>
                </div>
              </div>

              {/* Consultation */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-2xl text-yellow-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Konsultasi</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Setiap Hari:</strong> {contactData.operatingHours.consultation}</p>
                  <p><strong>Via WhatsApp:</strong> {contactData.operatingHours.whatsapp24x7}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Lokasi Kami</h2>
              <p className="text-xl text-gray-600">Temukan kami di lokasi yang strategis dan mudah dijangkau</p>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={contactData.coordinates.googleMapsEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Yayasan GCNI di Google Maps"
              ></iframe>
            </div>

            {/* Quick Links */}
            <div className="mt-8 text-center">
              <a
                href={getGoogleMapsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-map-marker-alt mr-3"></i>
                Buka di Google Maps
                <i className="fas fa-external-link-alt text-sm ml-3"></i>
              </a>
              <p className="text-sm text-gray-600 mt-4">
                Plus Code: <span className="font-mono bg-gray-100 px-3 py-1 rounded">{contactData.coordinates.plusCode.split(',')[0]}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 text-white" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap Bergabung dengan GCNI?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Jangan ragu untuk menghubungi kami. Tim profesional kami siap membantu mewujudkan impian pendidikan Islam terbaik untuk putra-putri Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Chat WhatsApp
              <i className="fab fa-whatsapp ml-2"></i>
            </a>
            <a
              href={`tel:${contactData.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Telepon Sekarang
              <i className="fas fa-phone ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontak;
