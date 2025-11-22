import { motion } from 'framer-motion';
import { useState, useMemo, useEffect } from 'react';
import contactData, { getWhatsAppLink } from '../data/contactData';

const Pendaftaran = () => {
  useEffect(() => {
    document.title = 'Pendaftaran Santri GCNI School';
  }, []);

  const [activeTab, setActiveTab] = useState('info');

  // Animation variants
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

  // Syarat Pendaftaran
  const syaratPendaftaran = [
    {
      icon: 'fa-globe',
      title: 'Warga Negara Indonesia/Asing',
      description: 'Calon santri WNI dan WNA (Warga Negara Asing) dipersilahkan mendaftar'
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Lulus SD/MI untuk SMP',
      description: 'Telah lulus SD/MI atau sederajat dengan nilai minimum 70'
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Lulus SMP/MTs untuk SMA',
      description: 'Telah lulus SMP/MTs atau sederajat dengan nilai minimum 70'
    },
    {
      icon: 'fa-heart',
      title: 'Sehat Jasmani & Rohani',
      description: 'Dalam kondisi sehat jasmani dan rohani, dibuktikan dengan surat keterangan dokter'
    },
    {
      icon: 'fa-book-quran',
      title: 'Bisa Membaca Al-Qur\'an',
      description: 'Mampu membaca Al-Qur\'an dengan baik dan benar (minimal lancar)'
    },
    {
      icon: 'fa-users',
      title: 'Dukungan Orang Tua',
      description: 'Mendapat persetujuan penuh dari orang tua/wali untuk tinggal di pesantren'
    }
  ];

  // Berkas Pendaftaran
  const berkasPendaftaran = [
    {
      icon: 'fa-file-alt',
      title: 'Fotokopi Ijazah/SKL',
      description: 'Fotokopi ijazah yang telah dilegalisir, atau Surat Keterangan Lulus (SKL) jika ijazah belum terbit',
      color: 'blue'
    },
    {
      icon: 'fa-id-card',
      title: 'Fotokopi Akta Kelahiran',
      description: 'Fotokopi akta kelahiran (2 lembar)',
      color: 'yellow'
    },
    {
      icon: 'fa-id-card-alt',
      title: 'Fotokopi KK',
      description: 'Fotokopi Kartu Keluarga (2 lembar)',
      color: 'purple'
    },
    {
      icon: 'fa-hospital',
      title: 'Surat Keterangan Sehat',
      description: 'Surat keterangan sehat dari dokter',
      color: 'red'
    },
    {
      icon: 'fa-image',
      title: 'Pas Foto',
      description: 'Pas foto terbaru ukuran 3x4 (6 lembar) dan 4x6 (4 lembar), background merah',
      color: 'teal'
    },
    {
      icon: 'fa-receipt',
      title: 'Bukti Pembayaran',
      description: 'Upload bukti pembayaran biaya pendaftaran ke sistem online',
      color: 'green'
    }
  ];

  // Tahapan Pendaftaran
  const tahapanPendaftaran = [
    {
      step: '01',
      title: 'Isi Formulir & Upload Berkas',
      description: 'Isi formulir pendaftaran online via Google Form. Upload semua berkas yang diperlukan dalam format digital.',
      icon: 'fa-clipboard-list',
      color: 'emerald'
    },
    {
      step: '02',
      title: 'Bayar Biaya Pendaftaran',
      description: 'Transfer biaya pendaftaran Rp 100.000 ke rekening yang tertera, lalu upload bukti pembayaran ke form.',
      icon: 'fa-money-bill-wave',
      color: 'green'
    },
    {
      step: '03',
      title: 'Verifikasi Berkas',
      description: 'Tim kami akan memverifikasi berkas dan bukti pembayaran yang Anda upload. Proses ini memakan waktu 1-3 hari kerja.',
      icon: 'fa-file-check',
      color: 'blue'
    },
    {
      step: '04',
      title: 'Tes Masuk',
      description: 'Calon santri mengikuti tes akademik, tes baca Al-Qur\'an, dan wawancara dengan tim akademik.',
      icon: 'fa-pen-to-square',
      color: 'purple'
    },
    {
      step: '05',
      title: 'Pengumuman Hasil',
      description: 'Pengumuman hasil seleksi akan diinformasikan melalui WhatsApp/email maksimal 7 hari setelah tes.',
      icon: 'fa-bullhorn',
      color: 'yellow'
    },
    {
      step: '06',
      title: 'Daftar Ulang & Orientasi',
      description: 'Calon santri yang diterima melakukan daftar ulang dengan melengkapi administrasi, lalu mengikuti orientasi santri baru (MOSB).',
      icon: 'fa-flag-checkered',
      color: 'red'
    }
  ];

  // Biaya Pendidikan
  const biayaPendidikan = {
    smp: [
      { item: 'Biaya Pendaftaran', nominal: 'Rp 100.000' },
      { item: 'Biaya SPP/Bulan', nominal: 'Rp 1.500.000' },
      { item: 'Biaya Masuk (Sekali)', nominal: 'Rp 8.000.000' },
      { item: 'Seragam & Perlengkapan', nominal: 'Rp 2.500.000' }
    ],
    sma: [
      { item: 'Biaya Pendaftaran', nominal: 'Rp 100.000' },
      { item: 'Biaya SPP/Bulan', nominal: 'Rp 1.800.000' },
      { item: 'Biaya Masuk (Sekali)', nominal: 'Rp 10.000.000' },
      { item: 'Seragam & Perlengkapan', nominal: 'Rp 3.000.000' }
    ]
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      purple: 'bg-purple-100 text-purple-600',
      red: 'bg-red-100 text-red-600',
      teal: 'bg-teal-100 text-teal-600',
      emerald: 'bg-emerald-100 text-emerald-600'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <motion.div 
            className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants.zoomIn}
            transition={transition}
          >
            <i className="fas fa-user-graduate text-5xl text-white"></i>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 break-words"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants.fadeUp}
            transition={transition}
          >
            Pendaftaran Santri Baru
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto px-4 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants.fadeUp}
            transition={{ ...transition, delay: 0.2 }}
          >
            Bergabunglah dengan kami dan menjadi bagian dari generasi Qur'ani yang berakhlak mulia dan berjiwa entrepreneur
          </motion.p>

          <motion.div
            className="inline-block px-6 py-3 bg-yellow-400 text-gray-900 rounded-full text-lg font-bold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants.zoomIn}
            transition={{ ...transition, delay: 0.3 }}
          >
            <i className="fas fa-calendar-alt mr-2"></i>
            Tahun Ajaran {contactData.registrationForm.tahunAjaran}
          </motion.div>
        </div>
      </section>

      {/* CTA Daftar Sekarang */}
      <section className="py-12 bg-gradient-to-br from-yellow-50 via-white to-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants.zoomIn}
            transition={transition}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Left - Info */}
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 md:p-12 text-white flex flex-col justify-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-4">
                    <i className="fas fa-graduation-cap text-3xl text-emerald-800"></i>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Daftar Santri Baru</h2>
                  <p className="text-emerald-100 text-lg mb-6">
                    Jadilah bagian dari generasi Qur'ani berakhlak mulia dan berjiwa entrepreneur
                  </p>
                </div>
                
                <div className="space-y-4">
                  {contactData.registrationForm.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <i className={`fas ${feature.icon} text-yellow-400 mt-1 mr-3 text-xl flex-shrink-0`}></i>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-emerald-100 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right - CTA */}
              <div className="p-8 md:p-12 flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-50 to-white">
                <div className="mb-8 w-full">
                  <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
                    <i className="fas fa-star mr-1"></i> Pendaftaran Dibuka
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Segera Daftar!
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Isi formulir pendaftaran online dan bergabunglah bersama kami. Proses pendaftaran mudah dan cepat.
                  </p>
                </div>
                
                {/* CTA Button */}
                <a 
                  href={contactData.registrationForm.googleFormUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4 w-full md:w-auto"
                >
                  <i className="fas fa-clipboard-list mr-3 text-xl"></i>
                  <span>Daftar Sekarang</span>
                  <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                </a>
                
                <p className="text-sm text-gray-500 mt-4">
                  <i className="fas fa-lock mr-1"></i> Data Anda aman dan terlindungi
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 w-full">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600"><i className="fas fa-book-open"></i></div>
                    <div className="text-xs text-gray-600">Kurikulum Terpadu</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-emerald-600"><i className="fas fa-mosque"></i></div>
                    <div className="text-xs text-gray-600">Islami Modern</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600"><i className="fas fa-award"></i></div>
                    <div className="text-xs text-gray-600">Berkualitas</div>
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
            <p className="text-gray-600">
              <i className="fas fa-info-circle mr-2 text-emerald-600"></i>
              Butuh bantuan? Hubungi kami di{' '}
              <a 
                href={getWhatsAppLink('Halo, saya ingin konsultasi tentang pendaftaran santri baru')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                WhatsApp <i className="fab fa-whatsapp ml-1"></i>
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('info')}
              className={`px-6 py-4 font-semibold transition-all whitespace-nowrap ${
                activeTab === 'info'
                  ? 'text-emerald-600 border-b-4 border-emerald-600'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              <i className="fas fa-info-circle mr-2"></i>
              Informasi Umum
            </button>
            <button
              onClick={() => setActiveTab('syarat')}
              className={`px-6 py-4 font-semibold transition-all whitespace-nowrap ${
                activeTab === 'syarat'
                  ? 'text-emerald-600 border-b-4 border-emerald-600'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              <i className="fas fa-list-check mr-2"></i>
              Syarat & Berkas
            </button>
            <button
              onClick={() => setActiveTab('tahapan')}
              className={`px-6 py-4 font-semibold transition-all whitespace-nowrap ${
                activeTab === 'tahapan'
                  ? 'text-emerald-600 border-b-4 border-emerald-600'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              <i className="fas fa-tasks mr-2"></i>
              Tahapan Pendaftaran
            </button>
            <button
              onClick={() => setActiveTab('biaya')}
              className={`px-6 py-4 font-semibold transition-all whitespace-nowrap ${
                activeTab === 'biaya'
                  ? 'text-emerald-600 border-b-4 border-emerald-600'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              <i className="fas fa-money-bill-wave mr-2"></i>
              Biaya Pendidikan
            </button>
          </div>
        </div>
      </section>

      {/* Informasi Umum Tab */}
      {activeTab === 'info' && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={transition}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Informasi Umum Pendaftaran</h2>
                <p className="text-xl text-gray-600">Ketahui lebih lanjut tentang proses pendaftaran santri baru di GCNI</p>
              </motion.div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <motion.div
                  className="bg-white rounded-xl shadow-lg p-6 hover-lift"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={variants.fadeUp}
                  transition={{ ...transition, delay: 0.1 }}
                >
                  <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-calendar text-2xl text-emerald-600"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Periode Pendaftaran</h3>
                  <p className="text-gray-600 mb-2">Gelombang 1: Januari - Maret</p>
                  <p className="text-gray-600 mb-2">Gelombang 2: April - Juni</p>
                  <p className="text-sm text-emerald-600 font-semibold mt-4">
                    <i className="fas fa-info-circle mr-1"></i>
                    Daftar lebih awal untuk mendapat benefit khusus
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-lg p-6 hover-lift"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={variants.fadeUp}
                  transition={{ ...transition, delay: 0.2 }}
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-school text-2xl text-blue-600"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Jenjang Pendidikan</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>SMP:</strong> Kelas 7, 8, dan 9
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>SMA:</strong> Kelas 10, 11, dan 12
                  </p>
                  <p className="text-sm text-blue-600 font-semibold mt-4">
                    <i className="fas fa-certificate mr-1"></i>
                    Terakreditasi dengan kurikulum terintegrasi
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-lg p-6 hover-lift"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={variants.fadeUp}
                  transition={{ ...transition, delay: 0.3 }}
                >
                  <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-users text-2xl text-yellow-600"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Kuota Santri</h3>
                  <p className="text-gray-600 mb-2">SMP: 60 santri per angkatan</p>
                  <p className="text-gray-600 mb-2">SMA: 60 santri per angkatan</p>
                  <p className="text-sm text-yellow-600 font-semibold mt-4">
                    <i className="fas fa-fire mr-1"></i>
                    Kuota terbatas! Daftar sekarang
                  </p>
                </motion.div>
              </div>

              {/* FAQ Cepat */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={transition}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  <i className="fas fa-question-circle text-emerald-600 mr-2"></i>
                  Pertanyaan yang Sering Diajukan
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-600 pl-4 py-2">
                    <h4 className="font-bold text-gray-900 mb-1">Apakah ada biaya pendaftaran?</h4>
                    <p className="text-gray-600 text-sm">Ya, biaya pendaftaran sebesar Rp 100.000 (non-refundable) untuk proses administrasi dan tes masuk.</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4 py-2">
                    <h4 className="font-bold text-gray-900 mb-1">Apakah bisa daftar di tengah tahun ajaran?</h4>
                    <p className="text-gray-600 text-sm">Pendaftaran hanya dibuka di awal tahun ajaran. Namun, untuk kasus khusus bisa konsultasi langsung dengan pihak sekolah.</p>
                  </div>
                  <div className="border-l-4 border-yellow-600 pl-4 py-2">
                    <h4 className="font-bold text-gray-900 mb-1">Apakah ada program beasiswa?</h4>
                    <p className="text-gray-600 text-sm">Ya, tersedia beasiswa prestasi akademik dan tahfidz untuk siswa berprestasi. Informasi detail bisa ditanyakan saat pendaftaran.</p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4 py-2">
                    <h4 className="font-bold text-gray-900 mb-1">Sistem asrama seperti apa?</h4>
                    <p className="text-gray-600 text-sm">Sistem full boarding school dengan pengawasan 24 jam, fasilitas lengkap, dan pembinaan karakter Islami setiap hari.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Syarat & Berkas Tab */}
      {activeTab === 'syarat' && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Syarat Pendaftaran */}
              <motion.div
                className="mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={transition}
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Syarat Pendaftaran</h2>
                  <p className="text-xl text-gray-600">Pastikan calon santri memenuhi semua persyaratan berikut</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {syaratPendaftaran.map((syarat, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-6 hover-lift"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={variants.fadeUp}
                      transition={{ ...transition, delay: index * 0.1 }}
                    >
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                        <i className={`fas ${syarat.icon} text-xl text-emerald-600`}></i>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{syarat.title}</h3>
                      <p className="text-gray-600 text-sm">{syarat.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Berkas Pendaftaran */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={transition}
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Berkas yang Harus Disiapkan</h2>
                  <p className="text-xl text-gray-600">Lengkapi semua dokumen berikut untuk kelancaran proses pendaftaran</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {berkasPendaftaran.map((berkas, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-6 hover-lift border-t-4 border-emerald-600"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={variants.fadeUp}
                      transition={{ ...transition, delay: index * 0.1 }}
                    >
                      <div className={`w-12 h-12 ${getColorClasses(berkas.color)} rounded-lg flex items-center justify-center mb-4`}>
                        <i className={`fas ${berkas.icon} text-xl`}></i>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{berkas.title}</h3>
                      <p className="text-gray-600 text-sm">{berkas.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Note */}
                <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
                  <div className="flex items-start">
                    <i className="fas fa-exclamation-triangle text-yellow-600 text-xl mr-3 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Catatan Penting:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Semua berkas harus dalam kondisi baik dan jelas (tidak rusak/luntur)</li>
                        <li>• Legalisir dilakukan oleh sekolah asal</li>
                        <li>• Berkas dapat dikirim via pos atau diserahkan langsung saat daftar ulang</li>
                        <li>• Simpan salinan berkas untuk keperluan sendiri</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Tahapan Pendaftaran Tab */}
      {activeTab === 'tahapan' && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={transition}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Tahapan Pendaftaran</h2>
                <p className="text-xl text-gray-600">Ikuti 6 langkah mudah untuk menjadi santri GCNI</p>
              </motion.div>

              <div className="space-y-6">
                {tahapanPendaftaran.map((tahap, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 hover-lift flex items-start gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={variants.fadeRight}
                    transition={{ ...transition, delay: index * 0.1 }}
                  >
                    <div className={`flex-shrink-0 w-16 h-16 ${getColorClasses(tahap.color)} rounded-full flex items-center justify-center font-bold text-2xl`}>
                      {tahap.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 ${getColorClasses(tahap.color)} rounded-lg flex items-center justify-center`}>
                          <i className={`fas ${tahap.icon} text-lg`}></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{tahap.title}</h3>
                      </div>
                      <p className="text-gray-600">{tahap.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Timeline Info */}
              <motion.div
                className="mt-12 bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={transition}
              >
                <div className="flex items-start">
                  <i className="fas fa-clock text-emerald-600 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Estimasi Waktu Total:</h4>
                    <p className="text-gray-700">Proses pendaftaran hingga pengumuman membutuhkan waktu sekitar <strong>14-21 hari kerja</strong>. Pastikan Anda mendaftar jauh-jauh hari sebelum tahun ajaran dimulai.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Biaya Pendidikan Tab */}
      {activeTab === 'biaya' && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={transition}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Biaya Pendidikan</h2>
                <p className="text-xl text-gray-600">Investasi terbaik untuk masa depan putra-putri Anda</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* SMP */}
                <motion.div
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={variants.fadeRight}
                  transition={transition}
                >
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-6 text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-school text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">SMP</h3>
                    <p className="text-emerald-100">Sekolah Menengah Pertama</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {biayaPendidikan.smp.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                          <span className="text-gray-700">{item.item}</span>
                          <span className="font-bold text-emerald-600 text-lg">{item.nominal}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t-2 border-emerald-200">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">Total Tahun Pertama:</span>
                        <span className="text-2xl font-bold text-emerald-600">Rp 12.500.000</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">*Belum termasuk SPP bulan ke-2 dan seterusnya</p>
                    </div>
                  </div>
                </motion.div>

                {/* SMA */}
                <motion.div
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={variants.fadeLeft}
                  transition={transition}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-graduation-cap text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">SMA</h3>
                    <p className="text-blue-100">Sekolah Menengah Atas</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {biayaPendidikan.sma.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                          <span className="text-gray-700">{item.item}</span>
                          <span className="font-bold text-blue-600 text-lg">{item.nominal}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t-2 border-blue-200">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">Total Tahun Pertama:</span>
                        <span className="text-2xl font-bold text-blue-600">Rp 15.300.000</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">*Belum termasuk SPP bulan ke-2 dan seterusnya</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Fasilitas yang Didapat */}
              <motion.div
                className="mt-12 bg-white rounded-2xl shadow-lg p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={transition}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  <i className="fas fa-star text-yellow-500 mr-2"></i>
                  Fasilitas yang Didapat
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-bed text-2xl text-emerald-600"></i>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Asrama Nyaman</h4>
                    <p className="text-sm text-gray-600">Full fasilitas dengan kasur & lemari</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-utensils text-2xl text-blue-600"></i>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Makan 3x Sehari</h4>
                    <p className="text-sm text-gray-600">Menu bergizi & bervariasi</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-tshirt text-2xl text-yellow-600"></i>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Seragam Lengkap</h4>
                    <p className="text-sm text-gray-600">Seragam harian & olahraga</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-book text-2xl text-purple-600"></i>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Buku Pelajaran</h4>
                    <p className="text-sm text-gray-600">Semua buku & modul</p>
                  </div>
                </div>
              </motion.div>

              {/* Beasiswa */}
              <motion.div
                className="mt-8 bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-600 p-6 rounded-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants.fadeUp}
                transition={transition}
              >
                <div className="flex items-start">
                  <i className="fas fa-award text-yellow-600 text-2xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Program Beasiswa Tersedia!</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• <strong>Beasiswa Prestasi Akademik:</strong> Potongan hingga 50% untuk siswa berprestasi</li>
                      <li>• <strong>Beasiswa Tahfidz:</strong> Gratis biaya pendidikan bagi hafidz/hafidzah</li>
                      <li>• <strong>Beasiswa Tidak Mampu:</strong> Subsidi biaya untuk keluarga yang membutuhkan</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-3">
                      <i className="fas fa-info-circle mr-1"></i>
                      Hubungi kami untuk informasi lebih lanjut tentang program beasiswa
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Bottom */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={variants.fadeUp}
        transition={transition}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap Menjadi Bagian dari GCNI?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Jangan lewatkan kesempatan emas ini! Daftarkan putra-putri Anda sekarang dan jadilah bagian dari generasi Qur'ani yang unggul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={contactData.registrationForm.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-clipboard-list mr-2"></i>
              Daftar Sekarang
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
            <a
              href={getWhatsAppLink('Halo, saya ingin konsultasi tentang pendaftaran santri baru')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Konsultasi WhatsApp
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Pendaftaran;
