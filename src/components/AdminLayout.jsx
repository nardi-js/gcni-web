import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUnreadCount } from '../services/messageService';

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const [unreadCount, setUnreadCount] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    loadUnreadCount();
    // Reload unread count every 30 seconds
    const interval = setInterval(loadUnreadCount, 30000);
    return () => clearInterval(interval);
  }, []);

  const loadUnreadCount = async () => {
    const result = await getUnreadCount();
    if (result.success) {
      setUnreadCount(result.count);
    }
  };

  const navItems = [
    {
      path: '/admin/news',
      icon: 'fa-newspaper',
      label: 'Kelola Berita',
      badge: null
    },
    {
      path: '/admin/messages',
      icon: 'fa-envelope',
      label: 'Pesan Kontak',
      badge: unreadCount > 0 ? unreadCount : null
    }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b px-4 py-3 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 hover:text-gray-900"
          >
            <i className={`fas ${sidebarOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
          <h1 className="text-xl font-bold text-gray-900">
            <i className="fas fa-shield-alt text-teal-600 mr-2"></i>
            Admin GCNI
          </h1>
        </div>
        <Link to="/" className="text-teal-600 hover:text-teal-700">
          <i className="fas fa-home text-xl"></i>
        </Link>
      </div>

      {/* Sidebar Overlay (Mobile) */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r w-64 z-40 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="p-6 border-b">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center">
              <i className="fas fa-shield-alt text-white text-2xl"></i>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Admin GCNI</h2>
              <p className="text-xs text-gray-500">Dashboard</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-lg font-semibold transition-all ${
                isActive(item.path)
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <i className={`fas ${item.icon} text-lg`}></i>
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 font-semibold transition-all"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Kembali ke Website</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
