import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllMessages, markAsRead, markAsReplied, deleteMessage, getUnreadCount } from '../../services/messageService';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState('all'); // all, unread, read, replied
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    loadMessages();
    loadUnreadCount();
  }, []);

  const loadMessages = async () => {
    setLoading(true);
    const result = await getAllMessages();
    if (result.success) {
      setMessages(result.data);
    }
    setLoading(false);
  };

  const loadUnreadCount = async () => {
    const result = await getUnreadCount();
    if (result.success) {
      setUnreadCount(result.count);
    }
  };

  const handleOpenMessage = async (message) => {
    setSelectedMessage(message);
    setShowModal(true);
    
    // Mark as read if unread
    if (message.status === 'unread') {
      await markAsRead(message.id);
      loadMessages();
      loadUnreadCount();
    }
  };

  const handleMarkAsReplied = async (id) => {
    await markAsReplied(id);
    loadMessages();
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus pesan ini?')) {
      const result = await deleteMessage(id);
      if (result.success) {
        loadMessages();
        loadUnreadCount();
        setShowModal(false);
      }
    }
  };

  const getFilteredMessages = () => {
    if (filter === 'all') return messages;
    return messages.filter(msg => msg.status === filter);
  };

  const getStatusBadge = (status) => {
    const badges = {
      unread: 'bg-blue-100 text-blue-800',
      read: 'bg-gray-100 text-gray-800',
      replied: 'bg-green-100 text-green-800'
    };
    const labels = {
      unread: 'Belum Dibaca',
      read: 'Sudah Dibaca',
      replied: 'Sudah Dibalas'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badges[status]}`}>
        {labels[status]}
      </span>
    );
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return '-';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return new Intl.DateTimeFormat('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const filteredMessages = getFilteredMessages();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/admin/news"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="Kembali ke News"
              >
                <i className="fas fa-arrow-left text-xl"></i>
              </Link>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <i className="fas fa-envelope text-teal-600"></i>
                  Pesan Kontak
                  {unreadCount > 0 && (
                    <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                      {unreadCount} baru
                    </span>
                  )}
                </h1>
                <p className="text-gray-600 mt-1">Kelola pesan dari pengunjung website</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4">
            {[
              { value: 'all', label: 'Semua', count: messages.length },
              { value: 'unread', label: 'Belum Dibaca', count: messages.filter(m => m.status === 'unread').length },
              { value: 'read', label: 'Sudah Dibaca', count: messages.filter(m => m.status === 'read').length },
              { value: 'replied', label: 'Sudah Dibalas', count: messages.filter(m => m.status === 'replied').length }
            ].map(tab => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  filter === tab.value
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Messages List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-20">
            <i className="fas fa-spinner fa-spin text-6xl text-teal-600 mb-4"></i>
            <p className="text-gray-600">Memuat pesan...</p>
          </div>
        ) : filteredMessages.length === 0 ? (
          <div className="text-center py-20">
            <i className="fas fa-inbox text-6xl text-gray-300 mb-4"></i>
            <p className="text-gray-600 text-lg">Tidak ada pesan</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="divide-y divide-gray-200">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => handleOpenMessage(message)}
                  className={`p-4 sm:p-6 hover:bg-gray-50 cursor-pointer transition-colors ${
                    message.status === 'unread' ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        {getStatusBadge(message.status)}
                        <span className="text-xs text-gray-500">
                          <i className="far fa-clock mr-1"></i>
                          {formatDate(message.createdAt)}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {message.subject}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <span>
                          <i className="far fa-user mr-1"></i>
                          {message.name}
                        </span>
                        <span>
                          <i className="far fa-envelope mr-1"></i>
                          {message.email}
                        </span>
                        {message.phone && (
                          <span>
                            <i className="fas fa-phone mr-1"></i>
                            {message.phone}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-700 line-clamp-2">
                        {message.message}
                      </p>
                    </div>
                    
                    <button className="text-teal-600 hover:text-teal-700 flex-shrink-0">
                      <i className="fas fa-chevron-right text-xl"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal Detail */}
      {showModal && selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Detail Pesan</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Status & Date */}
              <div className="flex items-center justify-between">
                {getStatusBadge(selectedMessage.status)}
                <span className="text-sm text-gray-500">
                  <i className="far fa-clock mr-1"></i>
                  {formatDate(selectedMessage.createdAt)}
                </span>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subjek:</label>
                <p className="text-xl font-bold text-gray-900">{selectedMessage.subject}</p>
              </div>

              {/* Sender Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nama:</label>
                  <p className="text-gray-900">{selectedMessage.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email:</label>
                  <a
                    href={`mailto:${selectedMessage.email}`}
                    className="text-teal-600 hover:text-teal-700"
                  >
                    {selectedMessage.email}
                  </a>
                </div>
              </div>

              {selectedMessage.phone && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Telepon:</label>
                  <a
                    href={`tel:${selectedMessage.phone}`}
                    className="text-teal-600 hover:text-teal-700"
                  >
                    {selectedMessage.phone}
                  </a>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Pesan:</label>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-gray-900 whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
              </div>

              {/* Timestamps */}
              {selectedMessage.readAt && (
                <div className="text-sm text-gray-600">
                  <i className="fas fa-check mr-1"></i>
                  Dibaca: {formatDate(selectedMessage.readAt)}
                </div>
              )}
              {selectedMessage.repliedAt && (
                <div className="text-sm text-gray-600">
                  <i className="fas fa-reply mr-1"></i>
                  Dibalas: {formatDate(selectedMessage.repliedAt)}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t px-6 py-4 flex flex-wrap gap-3">
              <a
                href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors text-center"
                onClick={() => handleMarkAsReplied(selectedMessage.id)}
              >
                <i className="fas fa-reply mr-2"></i>
                Balas via Email
              </a>
              
              {selectedMessage.phone && (
                <a
                  href={`https://wa.me/${selectedMessage.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  WhatsApp
                </a>
              )}
              
              {selectedMessage.status !== 'replied' && (
                <button
                  onClick={() => handleMarkAsReplied(selectedMessage.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  <i className="fas fa-check mr-2"></i>
                  Tandai Dibalas
                </button>
              )}
              
              <button
                onClick={() => handleDelete(selectedMessage.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
              >
                <i className="fas fa-trash mr-2"></i>
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMessages;
