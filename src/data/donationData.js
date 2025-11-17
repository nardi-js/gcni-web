/**
 * GCNI Website - Data Donasi
 * Informasi lengkap untuk sistem donasi online
 */

export const donationData = {
    // Predefined donation amounts
    amounts: [
        { value: 50000, label: "Rp 50.000" },
        { value: 100000, label: "Rp 100.000" },
        { value: 250000, label: "Rp 250.000" },
        { value: 500000, label: "Rp 500.000" },
        { value: 1000000, label: "Rp 1.000.000" },
        { value: 2000000, label: "Rp 2.000.000" }
    ],

    // Minimum donation amount
    minAmount: 10000,

    // Donation purposes
    purposes: [
        {
            icon: "fa-building",
            text: "Pembangunan gedung dan infrastruktur"
        },
        {
            icon: "fa-chalkboard-teacher",
            text: "Pengadaan fasilitas pembelajaran"
        },
        {
            icon: "fa-mosque",
            text: "Program pendidikan keagamaan"
        },
        {
            icon: "fa-hands-helping",
            text: "Kegiatan sosial dan dakwah"
        }
    ],

    // Payment methods
    paymentMethods: [
        {
            id: "bank",
            name: "Transfer Bank",
            description: "Bank BTN & Bank BSI",
            icon: "fa-university",
            color: "blue",
            accounts: [
                {
                    bank: "Bank BTN",
                    accountNumber: "3601501145904",
                    accountName: "Yayasan Global Cahaya Nubuwwah Insani"
                },
                {
                    bank: "Bank BSI",
                    accountNumber: "7377776668",
                    accountName: "Yayasan Global Cahaya Nubuwwah Insani"
                }
            ]
        },
        {
            id: "ewallet",
            name: "E-Wallet",
            description: "Hubungi admin untuk informasi E-Wallet",
            icon: "fa-mobile-alt",
            color: "green",
            wallets: []
        },
        {
            id: "qris",
            name: "QRIS",
            description: "Scan QR Code",
            icon: "fa-qrcode",
            color: "purple",
            qrCodeUrl: "/images/donation/qris-code.png" // Path ke gambar QRIS
        }
    ],

    // Impact statistics
    impact: [
        {
            icon: "fa-building",
            count: "100%",
            label: "Pembangunan Infrastruktur",
            color: "teal"
        },
        {
            icon: "fa-chalkboard-teacher",
            count: "100%",
            label: "Fasilitas Pembelajaran",
            color: "yellow"
        },
        {
            icon: "fa-mosque",
            count: "100%",
            label: "Program Keagamaan",
            color: "green"
        },
        {
            icon: "fa-hands-helping",
            count: "100%",
            label: "Kegiatan Sosial",
            color: "blue"
        }
    ],

    // Testimonials from donors
    testimonials: [
        {
            id: 1,
            name: "Ahmad Fauzi",
            role: "Donatur Rutin",
            message: "Alhamdulillah, senang bisa berkontribusi untuk pendidikan generasi Qur'ani melalui GCNI.",
            image: "/images/testimonials/donor1.jpg",
            rating: 5
        },
        {
            id: 2,
            name: "Siti Nurhaliza",
            role: "Orang Tua Santri",
            message: "Program beasiswa GCNI sangat membantu pendidikan anak saya. Semoga GCNI semakin berkembang.",
            image: "/images/testimonials/donor2.jpg",
            rating: 5
        },
        {
            id: 3,
            name: "Budi Santoso",
            role: "Alumni",
            message: "Sebagai alumni, saya bangga bisa membantu adik-adik santri melalui donasi.",
            image: "/images/testimonials/donor3.jpg",
            rating: 5
        }
    ],

    // FAQ for donations
    faq: [
        {
            question: "Apakah donasi saya akan mendapatkan bukti?",
            answer: "Ya, setiap donasi akan mendapatkan bukti transfer via email yang Anda daftarkan."
        },
        {
            question: "Berapa minimal donasi yang bisa saya berikan?",
            answer: "Minimal donasi adalah Rp 10.000. Namun Anda bisa memberikan donasi sesuai kemampuan."
        },
        {
            question: "Apakah donasi bisa dikategorikan sebagai zakat?",
            answer: "Untuk zakat, silakan konsultasikan dengan ustadz atau hubungi kami langsung di WhatsApp."
        },
        {
            question: "Bagaimana cara memastikan donasi saya sampai?",
            answer: "Kami akan mengirimkan konfirmasi via email setelah donasi Anda diterima dan diverifikasi."
        }
    ]
};

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Format currency to Indonesian Rupiah
 * @param {number} amount
 * @returns {string}
 */
export function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

/**
 * Format number with thousand separator
 * @param {number} num
 * @returns {string}
 */
export function formatNumber(num) {
    return num.toLocaleString('id-ID');
}

/**
 * Get payment method by ID
 * @param {string} id
 * @returns {object|null}
 */
export function getPaymentMethodById(id) {
    return donationData.paymentMethods.find(method => method.id === id) || null;
}

/**
 * Get payment method name by ID
 * @param {string} id
 * @returns {string}
 */
export function getPaymentMethodName(id) {
    const method = getPaymentMethodById(id);
    return method ? method.name : id;
}

/**
 * Validate donation amount
 * @param {number} amount
 * @returns {object}
 */
export function validateDonationAmount(amount) {
    if (!amount || isNaN(amount)) {
        return {
            valid: false,
            message: "Mohon masukkan nominal donasi yang valid"
        };
    }

    if (amount < donationData.minAmount) {
        return {
            valid: false,
            message: `Minimal donasi adalah ${formatCurrency(donationData.minAmount)}`
        };
    }

    return {
        valid: true,
        message: "Valid"
    };
}

/**
 * Validate donor information
 * @param {object} donorInfo
 * @returns {object}
 */
export function validateDonorInfo(donorInfo) {
    const errors = {};

    if (!donorInfo.name || donorInfo.name.trim().length === 0) {
        errors.name = "Nama wajib diisi";
    }

    if (!donorInfo.email || donorInfo.email.trim().length === 0) {
        errors.email = "Email wajib diisi";
    } else if (!isValidEmail(donorInfo.email)) {
        errors.email = "Format email tidak valid";
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors
    };
}

/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Get color classes for payment method card
 * @param {string} color
 * @returns {object}
 */
export function getPaymentColorClasses(color) {
    const colors = {
        blue: { bg: "bg-blue-100", icon: "text-blue-600", border: "border-blue-600" },
        green: { bg: "bg-green-100", icon: "text-green-600", border: "border-green-600" },
        purple: { bg: "bg-purple-100", icon: "text-purple-600", border: "border-purple-600" },
        teal: { bg: "bg-teal-100", icon: "text-teal-600", border: "border-teal-600" },
        yellow: { bg: "bg-yellow-100", icon: "text-yellow-600", border: "border-yellow-600" },
        orange: { bg: "bg-orange-100", icon: "text-orange-600", border: "border-orange-600" }
    };

    return colors[color] || colors.blue;
}

/**
 * Get impact color classes
 * @param {string} color
 * @returns {object}
 */
export function getImpactColorClasses(color) {
    const colors = {
        teal: { bg: "bg-teal-50", iconBg: "bg-teal-600", text: "text-teal-600" },
        yellow: { bg: "bg-yellow-50", iconBg: "bg-yellow-600", text: "text-yellow-600" },
        green: { bg: "bg-green-50", iconBg: "bg-green-600", text: "text-green-600" },
        blue: { bg: "bg-blue-50", iconBg: "bg-blue-600", text: "text-blue-600" }
    };

    return colors[color] || colors.teal;
}

/**
 * Generate donation receipt data
 * @param {object} donationInfo
 * @returns {object}
 */
export function generateDonationReceipt(donationInfo) {
    const receiptNumber = `DON-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const date = new Date().toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return {
        receiptNumber,
        date,
        donorName: donationInfo.name,
        donorEmail: donationInfo.email,
        donorPhone: donationInfo.phone || '-',
        amount: donationInfo.amount,
        paymentMethod: getPaymentMethodName(donationInfo.paymentMethod),
        message: donationInfo.message || '-',
        status: 'pending' // pending, confirmed, completed
    };
}

/**
 * Clean input number (remove non-digits)
 * @param {string} value
 * @returns {number}
 */
export function cleanInputNumber(value) {
    return parseInt(value.replace(/\D/g, '')) || 0;
}

/**
 * Format input as currency while typing
 * @param {string} value
 * @returns {string}
 */
export function formatInputCurrency(value) {
    const number = cleanInputNumber(value);
    return formatNumber(number);
}

export default donationData;
