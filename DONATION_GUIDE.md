# 💰 GCNI Donation System - Panduan Lengkap

Dokumentasi lengkap untuk sistem donasi online GCNI dengan multi-step process.

---

## 📁 File Terkait

1. **`src/data/donationData.js`** - Data donasi & helper functions
2. **`src/pages/Donasi.jsx`** - Komponen halaman donasi (multi-step)

---

## 🎯 Fitur Utama

### ✅ Multi-Step Donation Process

1. **Step 1: Pilih Nominal** - Pilih nominal donasi atau input custom amount
2. **Step 2: Metode Pembayaran** - Pilih metode & isi data donatur
3. **Step 3: Instruksi Pembayaran** - Lihat detail rekening/e-wallet
4. **Step 4: Konfirmasi** - Receipt & success message

### ✅ Payment Methods

- **Transfer Bank** - BCA, Mandiri, BNI, BRI
- **E-Wallet** - GoPay, OVO, DANA, ShopeePay
- **QRIS** - Scan QR Code

### ✅ Features

- Real-time amount formatting (Rp format)
- Form validation (amount, email, required fields)
- Dynamic payment instructions
- Receipt generation with unique ID
- Impact statistics display
- Responsive design dengan AOS animations

---

## 📊 Struktur Data

### 1. **Predefined Amounts**

```javascript
amounts: [
    { value: 50000, label: "Rp 50.000" },
    { value: 100000, label: "Rp 100.000" },
    { value: 250000, label: "Rp 250.000" },
    { value: 500000, label: "Rp 500.000" },
    { value: 1000000, label: "Rp 1.000.000" },
    { value: 2000000, label: "Rp 2.000.000" }
]
```

**Cara Menambah Nominal Baru:**

```javascript
// Di donationData.js, tambahkan di array amounts
{ value: 5000000, label: "Rp 5.000.000" }
```

---

### 2. **Minimum Amount**

```javascript
minAmount: 10000 // Rp 10.000
```

**Cara Mengubah Minimal Donasi:**

```javascript
// Edit nilai minAmount
minAmount: 50000 // Jadi Rp 50.000
```

---

### 3. **Donation Purposes**

```javascript
purposes: [
    {
        icon: "fa-book-open",
        text: "Pembangunan fasilitas pendidikan"
    },
    // ... 4 purposes total
]
```

**Cara Menambah Purpose Baru:**

```javascript
{
    icon: "fa-mosque", // Font Awesome icon
    text: "Pembangunan masjid"
}
```

---

### 4. **Payment Methods**

#### A. Transfer Bank

```javascript
{
    id: "bank",
    name: "Transfer Bank",
    description: "BCA, Mandiri, BNI, BRI",
    icon: "fa-university",
    color: "blue",
    accounts: [
        {
            bank: "Bank Mandiri",
            accountNumber: "1234567890",
            accountName: "Yayasan GCNI"
        },
        // ... more banks
    ]
}
```

**⚠️ PENTING - Update Rekening Bank:**

```javascript
// Ganti nomor rekening dengan nomor asli di donationData.js
{
    bank: "Bank Mandiri",
    accountNumber: "1370012345678", // ✅ GANTI INI
    accountName: "Yayasan GCNI"     // ✅ GANTI INI
}
```

#### B. E-Wallet

```javascript
{
    id: "ewallet",
    name: "E-Wallet",
    wallets: [
        {
            name: "GoPay",
            number: "081234567890", // ✅ GANTI dengan nomor asli
            icon: "fab fa-android",
            color: "green"
        },
        // ... more wallets
    ]
}
```

#### C. QRIS

```javascript
{
    id: "qris",
    name: "QRIS",
    qrCodeUrl: "/images/donation/qris-code.png" // ✅ Upload QR Code image
}
```

**Cara Upload QR Code:**

1. Generate QRIS dari bank/payment gateway
2. Download gambar QR Code
3. Upload ke `/public/images/donation/qris-code.png`
4. Update `qrCodeUrl` di data

---

### 5. **Impact Statistics**

```javascript
impact: [
    {
        icon: "fa-users",
        count: "500+",
        label: "Santri Terdaftar",
        color: "teal"
    },
    // ... 4 stats total
]
```

**Cara Update Statistik:**

```javascript
// Edit angka sesuai data real
{
    icon: "fa-users",
    count: "750+", // ✅ UPDATE ANGKA
    label: "Santri Terdaftar",
    color: "teal"
}
```

---

## 🛠️ Helper Functions

### 1. `formatCurrency(amount)`

Format angka ke format Rupiah.

```javascript
import { formatCurrency } from '../data/donationData';

formatCurrency(100000);
// Output: "Rp 100.000"
```

---

### 2. `formatNumber(num)`

Format angka dengan thousand separator.

```javascript
import { formatNumber } from '../data/donationData';

formatNumber(1000000);
// Output: "1.000.000"
```

---

### 3. `validateDonationAmount(amount)`

Validasi nominal donasi.

```javascript
import { validateDonationAmount } from '../data/donationData';

const result = validateDonationAmount(5000);
// {
//   valid: false,
//   message: "Minimal donasi adalah Rp 10.000"
// }
```

---

### 4. `validateDonorInfo(donorInfo)`

Validasi informasi donatur.

```javascript
import { validateDonorInfo } from '../data/donationData';

const result = validateDonorInfo({
    name: '',
    email: 'invalid-email'
});
// {
//   valid: false,
//   errors: {
//     name: "Nama wajib diisi",
//     email: "Format email tidak valid"
//   }
// }
```

---

### 5. `generateDonationReceipt(donationInfo)`

Generate bukti donasi dengan unique ID.

```javascript
import { generateDonationReceipt } from '../data/donationData';

const receipt = generateDonationReceipt({
    name: "Ahmad",
    email: "ahmad@email.com",
    amount: 100000,
    paymentMethod: "bank"
});

// Output:
// {
//   receiptNumber: "DON-1633000000000-123",
//   date: "Senin, 5 Oktober 2025",
//   donorName: "Ahmad",
//   donorEmail: "ahmad@email.com",
//   amount: 100000,
//   paymentMethod: "Transfer Bank",
//   status: "pending"
// }
```

---

### 6. `cleanInputNumber(value)`

Bersihkan input dari karakter non-digit.

```javascript
import { cleanInputNumber } from '../data/donationData';

cleanInputNumber("Rp 100.000");
// Output: 100000
```

---

### 7. `formatInputCurrency(value)`

Format input saat user mengetik.

```javascript
import { formatInputCurrency } from '../data/donationData';

formatInputCurrency("100000");
// Output: "100.000"
```

---

## 🎨 Customization Guide

### 1. **Ganti Warna Theme**

Halaman Donasi menggunakan **teal** sebagai primary color.

**Untuk ganti warna:**

Cari dan replace di `Donasi.jsx`:
- `teal-600` → `blue-600`
- `teal-700` → `blue-700`
- `teal-50` → `blue-50`

### 2. **Tambah Payment Method Baru**

Contoh: Tambah Kredivo

```javascript
// Di donationData.js, tambahkan di paymentMethods array
{
    id: "kredivo",
    name: "Kredivo",
    description: "Bayar nanti dengan Kredivo",
    icon: "fa-credit-card",
    color: "indigo",
    instructions: "Pilih Kredivo saat checkout"
}
```

Lalu update `renderPaymentInstructions()` di `Donasi.jsx`:

```javascript
else if (method.id === 'kredivo') {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Kredivo Payment
            </h3>
            <p>{method.instructions}</p>
        </div>
    );
}
```

### 3. **Tambah Field Form Baru**

Contoh: Tambah field "Alamat"

```javascript
// 1. Update state di Donasi.jsx
const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '', // ✅ TAMBAH INI
    message: ''
});

// 2. Tambah field di form JSX (Step 2)
<div>
    <label htmlFor="address">Alamat</label>
    <textarea
        id="address"
        name="address"
        value={donorInfo.address}
        onChange={handleDonorInfoChange}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl..."
    />
</div>
```

### 4. **Custom Receipt Design**

Edit `renderPaymentInstructions()` di Step 4:

```javascript
<div className="bg-gray-50 rounded-xl p-6 mb-8">
    <h3 className="font-semibold text-lg mb-4">Detail Donasi</h3>
    <div className="space-y-2 text-left">
        <p><span className="font-medium">Nama:</span> {receipt.donorName}</p>
        <p><span className="font-medium">Tanggal:</span> {receipt.date}</p>
        {/* ✅ TAMBAH FIELD BARU */}
        <p><span className="font-medium">Kategori:</span> Pendidikan</p>
    </div>
</div>
```

---

## 🔄 Multi-Step Flow

### Step Navigation Logic

```javascript
// State management
const [currentStep, setCurrentStep] = useState(1); // 1, 2, 3, or 4

// Next step
const handleNextStep = () => {
    if (currentStep === 1) {
        // Validate amount
        if (validateDonationAmount(selectedAmount).valid) {
            setCurrentStep(2);
        }
    } else if (currentStep === 2) {
        // Validate donor info & payment method
        setCurrentStep(3);
    } else if (currentStep === 3) {
        // Generate receipt
        setCurrentStep(4);
    }
};

// Previous step
const handlePrevStep = () => {
    if (currentStep > 1) {
        setCurrentStep(currentStep - 1);
    }
};
```

### Progress Indicator

```javascript
const getIndicatorClass = (step) => {
    if (step < currentStep) {
        return 'bg-green-600'; // Completed
    } else if (step === currentStep) {
        return 'bg-teal-600'; // Active
    } else {
        return 'bg-gray-300'; // Inactive
    }
};
```

---

## 📧 Integration Guide

### 1. **Email Notification**

Untuk mengirim email konfirmasi setelah donasi:

```javascript
// Di handleNextStep() step 3 → 4
const sendEmailNotification = async (receipt) => {
    try {
        await fetch('/api/donation/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                to: receipt.donorEmail,
                subject: 'Konfirmasi Donasi GCNI',
                receiptNumber: receipt.receiptNumber,
                amount: receipt.amount
            })
        });
    } catch (error) {
        console.error('Failed to send email:', error);
    }
};
```

### 2. **Database Integration**

Simpan data donasi ke database:

```javascript
// Di handleNextStep() step 3 → 4
const saveDonation = async (donationData) => {
    try {
        const response = await fetch('/api/donation/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: donationData.name,
                email: donationData.email,
                phone: donationData.phone,
                amount: donationData.amount,
                paymentMethod: donationData.paymentMethod,
                message: donationData.message,
                status: 'pending'
            })
        });
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Failed to save donation:', error);
    }
};
```

### 3. **Payment Gateway Integration**

Untuk integrasi dengan Midtrans/Xendit/dll:

```javascript
// Di handleNextStep() step 2 → 3
const initiatePayment = async () => {
    try {
        const response = await fetch('/api/payment/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                amount: selectedAmount,
                customer: {
                    name: donorInfo.name,
                    email: donorInfo.email,
                    phone: donorInfo.phone
                },
                paymentMethod: selectedPayment
            })
        });
        
        const { paymentUrl } = await response.json();
        
        // Redirect ke payment gateway
        window.location.href = paymentUrl;
    } catch (error) {
        console.error('Payment initiation failed:', error);
    }
};
```

---

## 🔐 Security Best Practices

### 1. **Input Sanitization**

```javascript
// Sanitize user input sebelum save
const sanitizeInput = (input) => {
    return input.trim().replace(/<script[^>]*>.*?<\/script>/gi, '');
};

const handleDonorInfoChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo(prev => ({
        ...prev,
        [name]: sanitizeInput(value)
    }));
};
```

### 2. **Amount Validation**

```javascript
// Validasi nominal di server-side juga
const validateAmount = (amount) => {
    if (amount < 10000) return false;
    if (amount > 100000000) return false; // Max 100 juta
    return true;
};
```

### 3. **Rate Limiting**

Batasi jumlah donasi per IP/user dalam waktu tertentu.

---

## 🎯 Testing Checklist

### ✅ Functional Testing

- [ ] Pilih nominal predefined works
- [ ] Input custom amount works
- [ ] Amount validation works (min Rp 10.000)
- [ ] Currency formatting real-time
- [ ] Payment method selection works
- [ ] Form validation (name, email)
- [ ] Email format validation
- [ ] Step navigation (next/prev)
- [ ] Payment instructions display correctly
- [ ] Receipt generation works
- [ ] Unique receipt number generated

### ✅ UI/UX Testing

- [ ] Responsive di mobile (320px - 768px)
- [ ] Responsive di tablet (768px - 1024px)
- [ ] Responsive di desktop (1024px+)
- [ ] Progress indicator updates correctly
- [ ] Active state styling correct
- [ ] Hover effects work
- [ ] AOS animations smooth
- [ ] Form focus states visible

### ✅ Browser Testing

- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🚀 Deployment Checklist

### ⚠️ PENTING - Sebelum Deploy:

1. ✅ **Update Rekening Bank**
   - Ganti semua nomor rekening dengan nomor asli
   - Pastikan nama penerima benar

2. ✅ **Update E-Wallet Numbers**
   - Ganti semua nomor e-wallet dengan nomor asli
   - Test transfer kecil untuk memastikan

3. ✅ **Upload QRIS QR Code**
   - Generate QRIS dari bank
   - Upload gambar ke `/public/images/donation/`
   - Update path di `donationData.js`

4. ✅ **Setup Email Notifications**
   - Configure SMTP/email service
   - Test email delivery

5. ✅ **Setup Database**
   - Create donations table
   - Test insert/query

6. ✅ **Test Payment Flow**
   - Test dengan nominal kecil (Rp 10.000)
   - Cek email diterima
   - Cek data masuk database

7. ✅ **Security Review**
   - Enable HTTPS
   - Add CSRF protection
   - Sanitize all inputs
   - Rate limiting

---

## 📊 Analytics & Tracking

### Recommended Events to Track:

```javascript
// Google Analytics / Facebook Pixel
gtag('event', 'donation_started', {
    amount: selectedAmount,
    currency: 'IDR'
});

gtag('event', 'donation_completed', {
    amount: selectedAmount,
    payment_method: selectedPayment,
    currency: 'IDR'
});
```

---

## 🆘 Troubleshooting

### Issue: Amount tidak ter-format

**Solution:**
```javascript
// Pastikan menggunakan formatNumber() helper
setCustomAmount(formatNumber(amount));
```

### Issue: Validation tidak jalan

**Solution:**
```javascript
// Cek apakah validateDonationAmount di-import dengan benar
import { validateDonationAmount } from '../data/donationData';
```

### Issue: Payment instructions tidak muncul

**Solution:**
```javascript
// Pastikan selectedPayment state ter-set
console.log('Selected Payment:', selectedPayment);
```

---

## 📧 Support

Jika ada issue:
1. Cek console browser (F12)
2. Lihat error messages
3. Test dengan data dummy
4. Cek network tab untuk API calls

---

**Terakhir diupdate:** Oktober 2025  
**Version:** 1.0  
**Maintainer:** GCNI Dev Team
