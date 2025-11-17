import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { createMessage } from '../services/messageService';
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
      // Kirim pesan ke Firebase
      const result = await createMessage({
        nama: formData.nama,
        email: formData.email,
        telepon: formData.telepon || '-',
        subjek: formData.subjek,
        pesan: formData.pesan
      });

      if (result.success) {
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
      } else {
        showMessage('Maaf, terjadi kesalahan: ' + result.message, 'error');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      showMessage('Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi kami melalui WhatsApp.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <i className="fas fa-phone text-5xl text-white"></i>
          </motion.div>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 gradient-text break-words"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants.fadeUp}
            transition={transition}
          >
            Hubungi Kami
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants.fadeUp}
            transition={{ ...transition, delay: 0.2 }}
          >
            Kami siap membantu Anda dengan informasi lengkap tentang program dan layanan GCNI
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info - Column Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Contact Form */}
              <motion.div 
                className="bg-gray-50 rounded-2xl p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={transition}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Kirim Pesan</h2>
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
              </motion.div>

              {/* Contact Information */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={{ ...transition, delay: 0.2 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Informasi Kontak</h2>
                  <p className="text-gray-600 text-lg">
                    Jangan ragu untuk menghubungi kami melalui berbagai cara berikut ini. 
                    Tim kami siap melayani Anda dengan sepenuh hati.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Access & Transportation */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={variants.fadeUp}
        transition={transition}
      >
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
      </motion.section>

      {/* Office Hours */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={variants.fadeUp}
        transition={transition}
      >
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
      </motion.section>

      {/* Map Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={variants.fadeUp}
        transition={transition}
      >
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
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-teal-600 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={variants.fadeUp}
        transition={transition}
      >
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
      </motion.section>
    </div>
  );
};

export default Kontak;
