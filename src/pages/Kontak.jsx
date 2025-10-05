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
      // Send to Firebase
      const result = await createMessage({
        name: formData.nama,
        email: formData.email,
        phone: formData.telepon,
        subject: formData.subjek,
        message: formData.pesan
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
      } else {
        showMessage(`Gagal mengirim pesan: ${result.error}`, 'error');
      }
    } catch (error) {
      showMessage('Terjadi kesalahan. Silakan coba lagi.', 'error');
      console.error('Form submission error:', error);
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

      {/* Pendaftaran Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 via-white to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants.zoomIn}
              transition={transition}
            >
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
            </motion.div>
            
            {/* Info Tambahan */}
            <motion.div 
              className="mt-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants.fadeUp}
              transition={{ ...transition, delay: 0.2 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants.fadeUp}
              transition={transition}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Jangan ragu untuk menghubungi kami melalui berbagai cara berikut ini. Tim kami siap melayani Anda dengan sepenuh hati.
              </p>
            </motion.div>

            {/* Contact Form - Full Width */}
            <motion.div 
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants.fadeUp}
              transition={transition}
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
                {/* Form Header */}
                <div className="mb-8">
                  <div className="flex items-center mb-3">
                    <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-2xl text-teal-600"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Kirim Pesan</h3>
                      <p className="text-gray-600 text-sm">
                        Isi formulir di bawah ini dan kami akan merespons secepat mungkin
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Nama & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nama" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <i className="fas fa-user text-gray-400"></i>
                        </div>
                        <input
                          type="text"
                          id="nama"
                          name="nama"
                          value={formData.nama}
                          onChange={handleInputChange}
                          required
                          placeholder="Masukkan nama Anda"
                          className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <i className="fas fa-envelope text-gray-400"></i>
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="nama@email.com"
                          className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Telepon & Subjek */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telepon" className="block text-sm font-semibold text-gray-700 mb-2">
                        No. Telepon
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <i className="fas fa-phone text-gray-400"></i>
                        </div>
                        <input
                          type="tel"
                          id="telepon"
                          name="telepon"
                          value={formData.telepon}
                          onChange={handleInputChange}
                          placeholder="08123456789"
                          className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subjek" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subjek <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <i className="fas fa-tag text-gray-400"></i>
                        </div>
                        <select
                          id="subjek"
                          name="subjek"
                          value={formData.subjek}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all appearance-none bg-white cursor-pointer"
                        >
                          {contactData.formSubjects.map((subject, index) => (
                            <option key={index} value={subject.value}>
                              {subject.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                          <i className="fas fa-chevron-down text-gray-400 text-sm"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Pesan */}
                  <div>
                    <label htmlFor="pesan" className="block text-sm font-semibold text-gray-700 mb-2">
                      Pesan <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-4 left-4 pointer-events-none">
                        <i className="fas fa-comment-dots text-gray-400"></i>
                      </div>
                      <textarea
                        id="pesan"
                        name="pesan"
                        rows="5"
                        value={formData.pesan}
                        onChange={handleInputChange}
                        required
                        placeholder="Tuliskan pesan Anda di sini..."
                        className="w-full pl-11 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all resize-none"
                      ></textarea>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      <i className="fas fa-info-circle mr-1"></i>
                      Minimal 10 karakter
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 disabled:from-gray-400 disabled:to-gray-400 text-white py-4 px-12 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:transform-none disabled:cursor-not-allowed disabled:shadow-none flex items-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin"></i>
                          <span>Mengirim...</span>
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane"></i>
                          <span>Kirim Pesan</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Success/Error Messages */}
                {message.text && (
                  <div id="form-message" className="mt-6 animate-fade-in">
                    <div className={`p-4 rounded-xl border-2 flex items-start space-x-3 ${
                      message.type === 'success' 
                        ? 'bg-green-50 text-green-800 border-green-300' 
                        : 'bg-red-50 text-red-800 border-red-300'
                    }`}>
                      <i className={`fas ${message.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} text-xl mt-0.5 flex-shrink-0`}></i>
                      <span className="text-sm font-medium">{message.text}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Contact Information - Grid Below Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants.fadeUp}
              transition={{ ...transition, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Informasi Kontak</h3>
                <p className="text-gray-600">
                  Atau hubungi kami melalui salah satu channel di bawah ini
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Address */}
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-4">
                    <i className="fas fa-map-marker-alt text-2xl text-teal-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Alamat</h3>
                  <p className="text-gray-600 text-sm font-medium">{contactData.address.street}</p>
                  <p className="text-gray-600 text-sm">{contactData.address.district}</p>
                  <p className="text-gray-600 text-sm">{contactData.address.regency}</p>
                  <p className="text-gray-600 text-sm">{contactData.address.province} {contactData.address.postalCode}</p>
                  <a
                    href={getGoogleMapsLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-teal-600 hover:text-teal-700 font-semibold text-sm flex items-center"
                  >
                    <i className="fas fa-directions mr-2"></i>
                    Lihat di Maps
                  </a>
                </div>

                {/* Phone */}
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4">
                    <i className="fas fa-phone text-2xl text-yellow-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Telepon</h3>
                  <p className="text-gray-700 font-semibold mb-2">{contactData.phone}</p>
                  <div className="text-xs text-gray-600">
                    <p className="mb-1">
                      <i className="far fa-clock mr-1"></i>
                      Senin - Jumat
                    </p>
                    <p className="font-medium">{contactData.operatingHours.weekdays}</p>
                    <p className="mt-2 mb-1">
                      <i className="far fa-clock mr-1"></i>
                      Sabtu
                    </p>
                    <p className="font-medium">{contactData.operatingHours.saturday}</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                    <i className="fab fa-whatsapp text-2xl text-green-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">WhatsApp</h3>
                  <p className="text-gray-700 font-semibold mb-2">{contactData.whatsappFormatted}</p>
                  <p className="text-xs text-gray-600 mb-4">Chat langsung dengan kami</p>
                  <a 
                    href={getWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    Chat Sekarang
                  </a>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                    <i className="fas fa-envelope text-2xl text-blue-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Email</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Info Umum</p>
                      <a href={`mailto:${contactData.email.info}`} className="text-gray-700 hover:text-teal-600 font-medium text-sm block">
                        {contactData.email.info}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Pendaftaran</p>
                      <a href={`mailto:${contactData.email.registration}`} className="text-gray-700 hover:text-teal-600 font-medium text-sm block">
                        {contactData.email.registration}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="mt-12">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Ikuti Kami</h3>
                  <p className="text-gray-600">Tetap terhubung dengan kami melalui media sosial</p>
                </div>
                <div className="flex justify-center items-center space-x-4">
                  {Object.values(contactData.social).map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 ${social.color} rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg hover:shadow-xl`}
                      title={social.username}
                    >
                      <i className={`${social.icon} text-2xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

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
