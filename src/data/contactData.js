/**
 * GCNI Website - Data Kontak & Alamat
 * Informasi lengkap alamat dan kontak Yayasan GCNI
 */

export const contactData = {
    // Alamat Lengkap
    address: {
        street: "Kampung Tegalsapi, Neglasari",
        district: "Kec. Darangdan",
        regency: "Kabupaten Purwakarta",
        province: "Jawa Barat",
        postalCode: "41163",
        country: "Indonesia",
        full: "Kampung Tegalsapi, Neglasari, Kec. Darangdan, Kabupaten Purwakarta, Jawa Barat 41163, Indonesia",
        short: "Neglasari, Purwakarta, Jawa Barat 41163"
    },
    
    // Koordinat GPS
    coordinates: {
        lat: -6.5056,
        lng: 107.4929,
        plusCode: "7FVV+Q5 Neglasari, Purwakarta Regency, West Java, Indonesia",
        googleMapsUrl: "https://www.google.com/maps/place/7FVV%2BQ5+Neglasari,+Purwakarta+Regency,+West+Java/@-6.5056,107.4929,17z",
        googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5!2d107.4929!3d-6.5056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzAnMjAuMiJTIDEwN8KwMjknMzQuNCJF!5e0!3m2!1sen!2sid!4v1633000000000!5m2!1sen!2sid"
    },
    
    // Kontak
    phone: "(021) 1234-5678",
    whatsapp: "628123456789", // Format tanpa + dan spasi
    whatsappFormatted: "+62 812-3456-789",
    email: "info@gcni.or.id",
    emailRegistration: "pendaftaran@gcni.or.id",
    
    // Jam Operasional
    operatingHours: {
        weekdays: "08:00 - 16:00 WIB",
        saturday: "08:00 - 14:00 WIB",
        sunday: "Tutup",
        consultation: "09:00 - 21:00 WIB",
        whatsapp24x7: "24/7"
    },
    
    // Akses Transportasi
    access: [
        {
            id: 1,
            type: "toll",
            icon: "fa-road",
            title: "Akses Tol",
            description: "Tol Cipularang",
            detail: "Exit Sadang/Purwakarta (± 5 km)",
            time: "± 10 menit dari pintu tol",
            color: "blue"
        },
        {
            id: 2,
            type: "train",
            icon: "fa-train",
            title: "Kereta / KRL",
            description: "Stasiun Purwakarta",
            detail: "Jarak ± 8 km dari yayasan",
            time: "🚕 Lanjut ojek online/angkot",
            color: "green"
        },
        {
            id: 3,
            type: "bus",
            icon: "fa-bus",
            title: "Bus / Terminal",
            description: "Terminal Purwakarta",
            detail: "Jarak ± 7 km (DAMRI, Primajasa)",
            time: "🚐 Angkot Sadang-Plered tersedia",
            color: "yellow"
        },
        {
            id: 4,
            type: "car",
            icon: "fa-car",
            title: "Mobil Pribadi",
            description: "Parkir Luas",
            detail: "Area parkir untuk mobil & motor",
            time: "📍 Gunakan Google Maps/Waze",
            color: "purple"
        },
        {
            id: 5,
            type: "ojek",
            icon: "fa-motorcycle",
            title: "Ojek Online",
            description: "Gojek / Grab",
            detail: "Tersedia di area Purwakarta",
            time: '📱 Input: "GCNI Neglasari"',
            color: "red"
        },
        {
            id: 6,
            type: "gps",
            icon: "fa-map-marked-alt",
            title: "Navigasi GPS",
            description: "Plus Code",
            detail: "7FVV+Q5 Neglasari",
            link: "https://www.google.com/maps/place/7FVV%2BQ5+Neglasari,+Purwakarta+Regency,+West+Java/@-6.5056,107.4929,17z",
            color: "teal"
        }
    ],
    
    // Tips Perjalanan
    travelTips: [
        "Dari Jakarta: Via Tol Cipularang ± 1,5 jam",
        "Dari Bandung: Via Tol Cipularang ± 1 jam",
        "Patokan: Dekat Jalan Tol Cipularang dan pasar tradisional Neglasari",
        "Koordinat GPS: -6.5056, 107.4929"
    ],
    
    // Social Media
    social: {
        instagram: {
            url: "https://www.instagram.com/pm.gcni_iebs",
            username: "@pm.gcni_iebs",
            icon: "fab fa-instagram",
            color: "gradient-to-br from-purple-600 via-pink-600 to-orange-500"
        },
        youtube: {
            url: "https://www.youtube.com/@gcnitv9792",
            username: "@gcnitv9792",
            icon: "fab fa-youtube",
            color: "bg-red-600 hover:bg-red-700"
        },
        tiktok: {
            url: "https://www.tiktok.com/@ponpes.gcni.iebs",
            username: "@ponpes.gcni.iebs",
            icon: "fab fa-tiktok",
            color: "bg-black"
        },
        email: {
            url: "mailto:iebs.gcni@gmail.com",
            username: "iebs.gcni@gmail.com",
            icon: "fas fa-envelope",
            color: "bg-teal-600 hover:bg-teal-700"
        }
    },
    
    // Form Pendaftaran
    registrationForm: {
        googleFormUrl: "https://forms.google.com/FORM_ID_ANDA", // GANTI dengan link Google Form asli
        description: "Form pendaftaran santri baru tahun ajaran 2025/2026",
        tahunAjaran: "2025/2026",
        features: [
            { icon: "fa-clipboard-list", title: "Pendaftaran Online", description: "Proses cepat dan mudah" },
            { icon: "fa-coins", title: "Gratis Biaya Pendaftaran", description: "Tidak ada biaya administrasi" },
            { icon: "fa-clock", title: "Respon Cepat", description: "Tim kami akan segera menghubungi Anda" }
        ],
        note: "PENTING: Ganti FORM_ID_ANDA dengan ID Google Form yang sebenarnya"
    },
    
    // Form Subjects (untuk dropdown kontak form)
    formSubjects: [
        { value: "", label: "Pilih subjek" },
        { value: "pendaftaran", label: "Pendaftaran" },
        { value: "informasi", label: "Informasi Program" },
        { value: "konsultasi", label: "Konsultasi" },
        { value: "kerjasama", label: "Kerjasama" },
        { value: "donasi", label: "Donasi" },
        { value: "lainnya", label: "Lainnya" }
    ]
};

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Format alamat sesuai kebutuhan
 * @param {string} type - 'full' atau 'short'
 * @returns {string}
 */
export function getFormattedAddress(type = 'full') {
    if (type === 'short') {
        return contactData.address.short;
    }
    return contactData.address.full;
}

/**
 * Generate WhatsApp link dengan pesan
 * @param {string} message - Pesan yang ingin dikirim
 * @returns {string}
 */
export function getWhatsAppLink(message = '') {
    const defaultMessage = message || "Assalamu'alaikum, saya ingin bertanya tentang GCNI";
    const encodedMessage = encodeURIComponent(defaultMessage);
    return `https://wa.me/${contactData.whatsapp}?text=${encodedMessage}`;
}

/**
 * Get Google Maps URL
 * @returns {string}
 */
export function getGoogleMapsLink() {
    return contactData.coordinates.googleMapsUrl;
}

/**
 * Get akses transportasi berdasarkan tipe
 * @param {string} type - Tipe transportasi (toll, train, bus, dll)
 * @returns {object|null}
 */
export function getAccessByType(type) {
    return contactData.access.find(item => item.type === type) || null;
}

/**
 * Get all social media links
 * @returns {array}
 */
export function getSocialMediaLinks() {
    return Object.values(contactData.social);
}

/**
 * Validasi email
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Format data form untuk WhatsApp
 * @param {object} formData
 * @returns {string}
 */
export function formatFormDataForWhatsApp(formData) {
    const { nama, email, telepon, subjek, pesan } = formData;
    
    let message = `*Pesan dari Website GCNI*\n\n`;
    message += `👤 *Nama:* ${nama}\n`;
    message += `📧 *Email:* ${email}\n`;
    if (telepon) message += `📱 *Telepon:* ${telepon}\n`;
    message += `📋 *Subjek:* ${subjek}\n\n`;
    message += `💬 *Pesan:*\n${pesan}`;
    
    return message;
}

/**
 * Get color class untuk akses card
 * @param {string} color
 * @returns {object}
 */
export function getAccessColorClasses(color) {
    const colors = {
        blue: { bg: "from-blue-50 to-blue-100", icon: "bg-blue-600", text: "text-blue-600" },
        green: { bg: "from-green-50 to-green-100", icon: "bg-green-600", text: "text-green-600" },
        yellow: { bg: "from-yellow-50 to-yellow-100", icon: "bg-yellow-600", text: "text-yellow-600" },
        purple: { bg: "from-purple-50 to-purple-100", icon: "bg-purple-600", text: "text-purple-600" },
        red: { bg: "from-red-50 to-red-100", icon: "bg-red-600", text: "text-red-600" },
        teal: { bg: "from-teal-50 to-teal-100", icon: "bg-teal-600", text: "text-teal-600" }
    };
    
    return colors[color] || colors.blue;
}

export default contactData;
