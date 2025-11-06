import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Program = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    document.title = 'Program GCNI Jakarta - IEBS, Tahfizh Qur\'an, TPQ, Pesantren Modern | Daftar Sekarang';
  }, []);

  const handleImageError = (programId) => {
    setImageErrors(prev => ({
      ...prev,
      [programId]: true
    }));
  };

  const openModal = (programId) => {
    setActiveModal(programId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const programs = [
    {
      id: 'iebs',
      title: 'IEBS',
      subtitle: 'Islamic Entrepreneurship Boarding School',
      description: 'Program SMP & SMA dengan kurikulum terpadu Islam, IT, dan Entrepreneurship untuk mencetak generasi unggul yang siap menghadapi tantangan masa depan.',
      icon: 'fa-graduation-cap',
      image: 'https://res.cloudinary.com/dof6csq4i/image/upload/v1758591275/santri_zzlfdp.jpg', // Path ke gambar program
      color: 'teal',
      features: [
        'Kurikulum Terpadu (Nasional + Islam + IT)',
        'Pembinaan Hafalan Al-Qur\'an',
        'Pelatihan Kewirausahaan',
        'Asrama Putra & Putri',
        'Fasilitas Modern'
      ],
      detail: 'Program pendidikan pesantren modern yang mengintegrasikan kurikulum nasional dengan pendidikan Islam dan kewirausahaan.'
    },
    {
      id: 'tahfizh',
      title: 'Tahfizh Qur\'an',
      subtitle: 'Program Penghafal Al-Qur\'an',
      description: 'Program intensif menghafal Al-Qur\'an 30 juz dengan bimbingan para ustadz berpengalaman dan metode pembelajaran yang terbukti efektif.',
      icon: 'fa-quran',
      image: 'https://res.cloudinary.com/dof6csq4i/image/upload/v1758594705/pesantren/blog/f9blppo5nwwwgja39wp7.png', // Path ke gambar program
      color: 'green',
      features: [
        'Target Hafal 30 Juz',
        'Metode Pembelajaran Efektif',
        'Pembinaan Karakter Islami',
        'Evaluasi Berkala',
        'Sertifikat Tahfizh'
      ],
      detail: 'Program khusus untuk santri yang ingin menghafal Al-Qur\'an 30 juz dengan metode pembelajaran yang efektif.'
    },
    {
      id: 'tpq',
      title: 'TPQ',
      subtitle: 'Taman Pendidikan Al-Qur\'an',
      description: 'Pendidikan dasar Al-Qur\'an untuk anak-anak usia 4-12 tahun dengan metode fun learning dan pembinaan akhlak yang menyenangkan.',
      icon: 'fa-child',
      image: 'https://res.cloudinary.com/dof6csq4i/image/upload/v1759634549/tpq.png', // Path ke gambar program
      color: 'blue',
      features: [
        'Metode Fun Learning',
        'Usia 4-12 Tahun',
        'Belajar Hijaiyah',
        'Praktek Ibadah',
        'Pembinaan Akhlak'
      ],
      detail: 'Program pendidikan Al-Qur\'an untuk anak-anak usia 4-12 tahun dengan metode pembelajaran yang menyenangkan.'
    },
    {
      id: 'diniyah',
      title: 'Diniyah',
      subtitle: 'Pendidikan Agama Islam',
      description: 'Program pendidikan agama Islam yang komprehensif meliputi fiqh, akidah, akhlaq, dan sejarah Islam untuk semua kalangan.',
      icon: 'fa-mosque',
      image: 'https://res.cloudinary.com/dof6csq4i/image/upload/v1758594351/pesantren/blog/guctu7vjf67czgapmfrp.png', // Path ke gambar program
      color: 'purple',
      features: [
        'Kurikulum Diniyah Terpadu',
        'Pembelajaran Fiqih & Akhlak',
        'Kajian Hadits & Tafsir',
        'Praktik Ibadah Langsung',
        'Ustadz Berpengalaman'
      ],
      detail: 'Program pendidikan agama Islam yang komprehensif untuk memperdalam ilmu agama dan praktik ibadah sehari-hari.'
    },
    {
      id: 'entrepreneur',
      title: 'Entrepreneur',
      subtitle: 'Kewirausahaan Islam',
      description: 'Pelatihan kewirausahaan dengan nilai-nilai Islam untuk mengembangkan jiwa entrepreneur yang mandiri dan berkah.',
      icon: 'fa-briefcase',
      image: 'https://res.cloudinary.com/dof6csq4i/image/upload/v1759635307/_storage_emulated_0_Android_data_com.miui.gallery_cache_SecurityShare_IMG_20250707_103340_ujhdks.jpg', // Path ke gambar program
      color: 'orange',
      features: [
        'Mindset Entrepreneur Islami',
        'Praktik Bisnis Langsung',
        'Mentoring Pengusaha Sukses',
        'Digital Marketing',
        'Sertifikat Entrepreneur'
      ],
      detail: 'Program pelatihan kewirausahaan untuk mengembangkan jiwa bisnis Islami dan kemandirian ekonomi sejak dini.'
    },
    {
      id: 'kajian',
      title: 'Kajian',
      subtitle: 'Dakwah & Pemberdayaan',
      description: 'Program kajian rutin dan pemberdayaan masyarakat untuk meningkatkan pemahaman agama dan kualitas hidup umat.',
      icon: 'fa-users',
      image: 'https://res.cloudinary.com/dof6csq4i/image/upload/v1759635309/IMG_20210304_055050_ctlkd9.jpg', // Path ke gambar program
      color: 'indigo',
      features: [
        'Kajian Mingguan & Bulanan',
        'Ustadz Ahli & Berkompeten',
        'Topik Aktual & Relevan',
        'Tanya Jawab Interaktif',
        'Gratis & Terbuka Umum'
      ],
      detail: 'Kajian Islam rutin mingguan dan bulanan untuk memperdalam pemahaman agama bagi masyarakat umum.'
    }
  ];

  const colorClasses = {
    teal: {
      gradient: 'from-teal-400 to-teal-600',
      button: 'bg-teal-600 hover:bg-teal-700',
      text: 'text-teal-600',
      check: 'text-teal-600'
    },
    green: {
      gradient: 'from-green-400 to-green-600',
      button: 'bg-green-600 hover:bg-green-700',
      text: 'text-green-600',
      check: 'text-green-600'
    },
    blue: {
      gradient: 'from-blue-400 to-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700',
      text: 'text-blue-600',
      check: 'text-blue-600'
    },
    purple: {
      gradient: 'from-purple-400 to-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700',
      text: 'text-purple-600',
      check: 'text-purple-600'
    },
    orange: {
      gradient: 'from-orange-400 to-orange-600',
      button: 'bg-orange-600 hover:bg-orange-700',
      text: 'text-orange-600',
      check: 'text-orange-600'
    },
    indigo: {
      gradient: 'from-indigo-400 to-indigo-600',
      button: 'bg-indigo-600 hover:bg-indigo-700',
      text: 'text-indigo-600',
      check: 'text-indigo-600'
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
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <motion.i 
              className="fas fa-graduation-cap text-5xl text-white"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            ></motion.i>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Program Unggulan</span>
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
            Berbagai program berkualitas untuk mendukung pendidikan dan pemberdayaan generasi Qur'ani
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={program.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift" 
                
               
              >
                <div className={`h-64 bg-gradient-to-r ${colorClasses[program.color].gradient} flex items-center justify-center overflow-hidden relative`}>
                  {program.image && !imageErrors[program.id] ? (
                    <img 
                      src={program.image} 
                      alt={program.title}
                      onError={() => handleImageError(program.id)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <i className={`fas ${program.icon} text-8xl text-white`}></i>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className={`${colorClasses[program.color].text} font-semibold mb-4`}>{program.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <button 
                    onClick={() => openModal(program.id)}
                    className={`inline-flex items-center ${colorClasses[program.color].button} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105`}
                  >
                    <motion.i 
                      className="fas fa-info-circle mr-2"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    ></motion.i>
                    Detail Program
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Daftar Program Sekarang
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Wujudkan impian menjadi generasi Qur'ani yang berakhlak mulia dan berjiwa entrepreneur
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/kontak" 
              className="inline-flex items-center justify-center bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <motion.i 
                className="fas fa-phone mr-2"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              ></motion.i>
              Hubungi Kami
            </Link>
            <Link 
              to="/donasi" 
              className="inline-flex items-center justify-center bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <motion.i 
                className="fas fa-heart mr-2"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              ></motion.i>
              Dukung Program
            </Link>
          </div>
        </div>
      </section>

      {/* Modals */}
      {programs.map((program) => (
        <div
          key={`modal-${program.id}`}
          className={`fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 ${
            activeModal === program.id ? 'flex' : 'hidden'
          }`}
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-xl p-6 sm:p-8 md:p-10 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-4 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {program.title} {program.subtitle && `- ${program.subtitle}`}
              </h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <motion.i 
                  className="fas fa-times text-xl"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                ></motion.i>
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">{program.detail}</p>
              <div>
                <h4 className="font-semibold text-lg mb-2">Keunggulan Program:</h4>
                <ul className="space-y-2 text-gray-600">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <motion.i 
                        className={`fas fa-check ${colorClasses[program.color].check} mt-1 mr-2`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                      ></motion.i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 mt-6">
                <Link 
                  to="/kontak" 
                  className={`${colorClasses[program.color].button} text-white px-6 py-2 rounded-lg font-semibold transition-all`}
                >
                  {program.id === 'kajian' ? 'Ikuti Kajian' : 'Daftar Sekarang'}
                </Link>
                <button 
                  onClick={closeModal}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-lg font-semibold transition-all"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Program;
