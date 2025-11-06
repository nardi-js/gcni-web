import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Integration = () => {
  // Active Applications
  const activeApps = [
    {
      id: 'gcni-web',
      name: 'GCNI Web',
      tagline: 'Portal Informasi & Pendaftaran',
      description: 'Website resmi GCNI untuk informasi program beasiswa, berita, dan pendaftaran calon siswa.',
      icon: 'fas fa-globe',
      color: 'teal',
      gradient: 'from-teal-500 to-teal-700',
      url: 'https://gcni.web.app',
      features: [
        'Informasi Program Beasiswa',
        'Berita & Artikel Terbaru',
        'Formulir Pendaftaran',
        'FAQ & Kontak',
        'Dokumentasi Program'
      ],
      status: 'live',
      version: 'v2.1.0',
      launchDate: 'Oktober 2024',
      users: '500+ Pengunjung/bulan'
    },
    {
      id: 'gcni-perform',
      name: 'GCNI Perform',
      tagline: 'School Management & Gamification',
      description: 'Sistem manajemen sekolah dengan gamifikasi untuk mengelola misi siswa, transaksi, dan aktivitas pendidikan.',
      icon: 'fas fa-chart-line',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-700',
      url: 'https://gcni-perform.web.app',
      features: [
        'Dashboard Multi-Role',
        'Manajemen Misi & Gamifikasi',
        'Virtual Economy System',
        'Top-Up & Transaksi',
        'Real-time Monitoring'
      ],
      status: 'live',
      version: 'v1.5.2',
      launchDate: 'September 2024',
      users: '150+ Active Users'
    }
  ];

  // Coming Soon Applications
  const comingSoonApps = [
    {
      id: 'gcni-learn',
      name: 'GCNI Learn',
      tagline: 'E-Learning Platform',
      description: 'Platform pembelajaran online dengan video course, quiz interaktif, dan sertifikat digital.',
      icon: 'fas fa-graduation-cap',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-700',
      features: [
        'Video Course & Tutorial',
        'Quiz & Assessment',
        'Live Class Integration',
        'Digital Certificate',
        'Progress Tracking'
      ],
      status: 'in-development',
      progress: 65,
      estimatedLaunch: 'Q1 2026',
      targetUsers: 'Siswa & Alumni'
    },
    {
      id: 'gcni-alumni',
      name: 'GCNI Alumni Network',
      tagline: 'Alumni Community Hub',
      description: 'Platform jejaring alumni untuk networking, mentorship, dan sharing opportunities.',
      icon: 'fas fa-users',
      color: 'green',
      gradient: 'from-green-500 to-green-700',
      features: [
        'Alumni Directory',
        'Mentorship Program',
        'Job Board',
        'Event Calendar',
        'Success Stories'
      ],
      status: 'planned',
      progress: 30,
      estimatedLaunch: 'Q2 2026',
      targetUsers: 'Alumni GCNI'
    },
    {
      id: 'gcni-mobile',
      name: 'GCNI Mobile App',
      tagline: 'Mobile Application',
      description: 'Aplikasi mobile iOS & Android untuk akses mudah ke semua layanan GCNI dari smartphone.',
      icon: 'fas fa-mobile-alt',
      color: 'indigo',
      gradient: 'from-indigo-500 to-indigo-700',
      features: [
        'Unified Mobile Access',
        'Push Notifications',
        'Offline Mode',
        'QR Code Scanner',
        'Quick Actions'
      ],
      status: 'planned',
      progress: 15,
      estimatedLaunch: 'Q3 2026',
      targetUsers: 'Semua Pengguna'
    },
    {
      id: 'gcni-library',
      name: 'GCNI Digital Library',
      tagline: 'Perpustakaan Digital',
      description: 'Perpustakaan digital dengan ribuan e-book, jurnal, dan materi pembelajaran.',
      icon: 'fas fa-book',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-700',
      features: [
        'E-Book Collection',
        'Academic Journals',
        'Reading Tracker',
        'Bookmark & Notes',
        'Recommendation Engine'
      ],
      status: 'planned',
      progress: 10,
      estimatedLaunch: 'Q4 2026',
      targetUsers: 'Siswa & Guru'
    }
  ];

  // Upcoming Features (for existing apps)
  const upcomingFeatures = [
    {
      title: 'Single Sign-On (SSO)',
      description: 'Login sekali untuk semua aplikasi GCNI',
      icon: 'fas fa-key',
      status: 'Q1 2026',
      color: 'purple',
      forApps: ['GCNI Web', 'GCNI Perform', 'GCNI Learn']
    },
    {
      title: 'AI Assistant',
      description: 'Chatbot AI untuk bantuan 24/7',
      icon: 'fas fa-robot',
      status: 'Q2 2026',
      color: 'blue',
      forApps: ['Semua Aplikasi']
    },
    {
      title: 'Payment Gateway',
      description: 'Pembayaran online terintegrasi',
      icon: 'fas fa-credit-card',
      status: 'Q1 2026',
      color: 'green',
      forApps: ['GCNI Perform', 'GCNI Web']
    },
    {
      title: 'Video Conference',
      description: 'Video call untuk kelas online',
      icon: 'fas fa-video',
      status: 'Q2 2026',
      color: 'red',
      forApps: ['GCNI Learn']
    },
    {
      title: 'Analytics Dashboard',
      description: 'Dashboard analitik komprehensif',
      icon: 'fas fa-chart-pie',
      status: 'Q1 2026',
      color: 'orange',
      forApps: ['GCNI Perform', 'Admin']
    },
    {
      title: 'Parent Mobile App',
      description: 'Aplikasi khusus orang tua',
      icon: 'fas fa-mobile',
      status: 'Q3 2026',
      color: 'pink',
      forApps: ['GCNI Perform']
    }
  ];

  const stats = [
    { label: 'Total Aplikasi', value: '6', subtext: '2 Live, 4 Coming Soon', icon: 'fas fa-apps' },
    { label: 'Platform Aktif', value: '2', subtext: 'Siap Digunakan', icon: 'fas fa-check-circle' },
    { label: 'Fitur Baru', value: '12+', subtext: 'Dalam Pengembangan', icon: 'fas fa-sparkles' },
    { label: 'Rilis Terbaru', value: 'v2.1', subtext: 'Oktober 2024', icon: 'fas fa-rocket' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6">
              <motion.div 
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.i 
                  className="fas fa-layer-group text-3xl"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                ></motion.i>
                <span className="text-xl font-semibold">Ekosistem Digital GCNI</span>
              </motion.div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Platform & Aplikasi GCNI
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 mb-12">
              Solusi teknologi komprehensif untuk pendidikan modern
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <i className={`${stat.icon} text-3xl mb-3`}></i>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-teal-100">{stat.label}</div>
                  <div className="text-xs text-teal-200 mt-1">{stat.subtext}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Active Applications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="fas fa-circle text-green-500 animate-pulse mr-2"></i>
              LIVE NOW
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aplikasi Aktif
            </h2>
            <p className="text-gray-600 text-lg">
              Platform yang sudah bisa kamu gunakan sekarang
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {activeApps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${app.gradient} p-8 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <i className={`${app.icon} text-3xl`}></i>
                    </div>
                    <div className="text-right">
                      <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-xs font-semibold block mb-2">
                        ● LIVE
                      </span>
                      <span className="text-white/80 text-sm">{app.version}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{app.name}</h3>
                  <p className="text-white/90 text-sm mb-3">{app.tagline}</p>
                  <div className="flex items-center gap-4 text-xs text-white/70">
                    <span><i className="fas fa-calendar mr-1"></i>{app.launchDate}</span>
                    <span><i className="fas fa-users mr-1"></i>{app.users}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{app.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <i className="fas fa-check-circle text-teal-600 mr-2"></i>
                      Fitur Utama:
                    </h4>
                    <ul className="space-y-2">
                      {app.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 text-sm">
                          <i className="fas fa-chevron-right text-teal-600 mr-2 mt-1"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full bg-gradient-to-r ${app.gradient} hover:opacity-90 text-white text-center py-3 rounded-xl font-semibold transition-all`}
                  >
                    Buka {app.name}
                    <i className="fas fa-external-link-alt ml-2"></i>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Applications */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="fas fa-rocket mr-2"></i>
              COMING SOON
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aplikasi dalam Pengembangan
            </h2>
            <p className="text-gray-600 text-lg">
              Aplikasi baru yang akan segera hadir untuk melengkapi ekosistem GCNI
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {comingSoonApps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
              >
                {/* Header with Icon */}
                <div className={`bg-gradient-to-br ${app.gradient} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <i className={`${app.icon} text-2xl`}></i>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{app.name}</h3>
                    <p className="text-white/80 text-xs">{app.tagline}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{app.description}</p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-gray-500 font-medium">Progress</span>
                      <span className="font-bold text-gray-900">{app.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${app.gradient} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${app.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-900 mb-2">Fitur Utama:</h4>
                    <ul className="space-y-1">
                      {app.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start">
                          <i className="fas fa-check text-teal-600 mr-2 mt-0.5"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <p className="text-gray-500">Estimasi Rilis</p>
                        <p className="font-bold text-gray-900">{app.estimatedLaunch}</p>
                      </div>
                      <div className={`px-3 py-1 bg-${app.color}-100 text-${app.color}-700 rounded-full font-semibold`}>
                        {app.status === 'in-development' ? 'In Dev' : 'Planned'}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="fas fa-sparkles mr-2"></i>
              NEW FEATURES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fitur yang Akan Datang
            </h2>
            <p className="text-gray-600 text-lg">
              Peningkatan dan fitur baru untuk aplikasi yang sudah ada
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {upcomingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-teal-200"
              >
                <div className={`w-12 h-12 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                  <i className={`${feature.icon} text-2xl text-${feature.color}-600`}></i>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    <i className="fas fa-calendar mr-1"></i>
                    {feature.status}
                  </span>
                  <span className="text-xs font-semibold text-teal-600">
                    {feature.forApps[0]}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Roadmap 2026
            </h2>
            <p className="text-gray-600 text-lg">
              Rencana pengembangan ekosistem GCNI
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { quarter: 'Q1 2026', items: ['GCNI Learn (Beta Launch)', 'SSO Integration', 'Payment Gateway', 'Analytics Dashboard'] },
                { quarter: 'Q2 2026', items: ['GCNI Alumni Network', 'AI Assistant', 'Video Conference', 'Parent Mobile App'] },
                { quarter: 'Q3 2026', items: ['GCNI Mobile App (iOS & Android)', 'Advanced Gamification', 'Smart Notifications'] },
                { quarter: 'Q4 2026', items: ['GCNI Digital Library', 'AR/VR Learning', 'Blockchain Certificates'] }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-6 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    {index < 3 && <div className="w-0.5 h-full bg-gradient-to-b from-teal-500 to-blue-500 mt-2"></div>}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                      <h3 className="font-bold text-xl text-gray-900 mb-3">{phase.quarter}</h3>
                      <ul className="space-y-2">
                        {phase.items.map((item, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <i className="fas fa-circle text-teal-500 text-xs mr-3"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <i className="fas fa-rocket text-5xl mb-6"></i>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bergabunglah dengan Ekosistem GCNI
              </h2>
              <p className="text-xl text-teal-100 mb-8">
                Jadilah bagian dari revolusi pendidikan digital Indonesia
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/berita"
                  className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all shadow-lg inline-flex items-center justify-center"
                >
                  <i className="fas fa-newspaper mr-2"></i>
                  Baca Berita Terbaru
                </Link>
                <a
                  href="https://gcni-perform.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg inline-flex items-center justify-center"
                >
                  <i className="fas fa-chart-line mr-2"></i>
                  Coba GCNI Perform
                </a>
              </div>

              {/* Newsletter Signup (Optional) */}
              <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="font-bold text-xl mb-3">
                  <i className="fas fa-bell mr-2"></i>
                  Dapatkan Update Terbaru
                </h3>
                <p className="text-teal-100 text-sm mb-4">
                  Subscribe untuk mendapat notifikasi peluncuran aplikasi baru
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Email kamu..."
                    className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integration;
