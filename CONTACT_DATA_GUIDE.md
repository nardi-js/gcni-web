# 📞 GCNI Contact Data - Panduan Pengelolaan

Dokumentasi lengkap untuk mengelola data kontak dan alamat Yayasan GCNI.

---

## 📁 File Terkait

1. **`src/data/contactData.js`** - Data kontak & helper functions
2. **`src/pages/Kontak.jsx`** - Komponen halaman kontak

---

## 📊 Struktur Data

### 1. **Alamat (Address)**

```javascript
address: {
    street: "Kampung Tegalsapi, Neglasari",
    district: "Kec. Darangdan",
    regency: "Kabupaten Purwakarta",
    province: "Jawa Barat",
    postalCode: "41163",
    country: "Indonesia",
    full: "...", // Alamat lengkap
    short: "..." // Alamat singkat
}
```

**Cara Update Alamat:**
```javascript
// Edit file src/data/contactData.js
address: {
    street: "Jalan Baru Anda",
    district: "Kecamatan Baru",
    regency: "Kabupaten Baru",
    // ... dst
}
```

---

### 2. **Koordinat GPS**

```javascript
coordinates: {
    lat: -6.5056,
    lng: 107.4929,
    plusCode: "7FVV+Q5 Neglasari",
    googleMapsUrl: "https://...",
    googleMapsEmbedUrl: "https://..."
}
```

**Cara Update Koordinat:**

1. Buka Google Maps
2. Klik kanan pada lokasi → Pilih koordinat (akan di-copy)
3. Update `lat` dan `lng` di file
4. Update Plus Code (lihat di Google Maps)
5. Update `googleMapsUrl` dengan link baru

**Cara Mendapatkan Embed URL:**
1. Buka Google Maps
2. Klik **Share** → **Embed a map**
3. Copy `src` dari iframe HTML
4. Paste ke `googleMapsEmbedUrl`

---

### 3. **Kontak**

```javascript
phone: "(021) 1234-5678",
whatsapp: "628123456789", // PENTING: Tanpa + dan spasi
whatsappFormatted: "+62 812-3456-789",
email: "info@gcni.or.id",
emailRegistration: "pendaftaran@gcni.or.id"
```

**⚠️ PENTING untuk WhatsApp:**
- `whatsapp`: Format untuk link (tanpa +, tanpa spasi, tanpa -)
- `whatsappFormatted`: Format untuk ditampilkan

---

### 4. **Jam Operasional**

```javascript
operatingHours: {
    weekdays: "08:00 - 16:00 WIB",
    saturday: "08:00 - 14:00 WIB",
    sunday: "Tutup",
    consultation: "09:00 - 21:00 WIB",
    whatsapp24x7: "24/7"
}
```

---

### 5. **Akses Transportasi**

Array of 6 items dengan struktur:

```javascript
{
    id: 1,
    type: "toll", // toll, train, bus, car, ojek, gps
    icon: "fa-road", // Font Awesome icon
    title: "Akses Tol",
    description: "Tol Cipularang",
    detail: "Exit Sadang/Purwakarta (± 5 km)",
    time: "± 10 menit dari pintu tol",
    color: "blue" // blue, green, yellow, purple, red, teal
}
```

**Cara Menambah Akses Baru:**

```javascript
// Tambahkan di array contactData.access
{
    id: 7, // ID baru
    type: "bandara",
    icon: "fa-plane",
    title: "Akses Bandara",
    description: "Bandara Kertajati",
    detail: "Jarak ± 50 km",
    time: "± 1 jam perjalanan",
    color: "indigo"
}
```

---

### 6. **Social Media**

```javascript
social: {
    instagram: {
        url: "https://www.instagram.com/pm.gcni_iebs",
        username: "@pm.gcni_iebs",
        icon: "fab fa-instagram",
        color: "gradient-to-br from-purple-600 via-pink-600 to-orange-500"
    },
    // ... dst
}
```

**Cara Menambah Social Media Baru:**

```javascript
// Tambahkan di object contactData.social
facebook: {
    url: "https://www.facebook.com/gcni",
    username: "@gcni",
    icon: "fab fa-facebook",
    color: "bg-blue-600 hover:bg-blue-700"
}
```

---

### 7. **Form Pendaftaran**

```javascript
registrationForm: {
    googleFormUrl: "https://forms.google.com/FORM_ID_ANDA", // ⚠️ WAJIB DIGANTI!
    description: "Form pendaftaran santri baru tahun ajaran 2025/2026",
    tahunAjaran: "2025/2026",
    features: [
        { 
            icon: "fa-clipboard-list", 
            title: "Pendaftaran Online", 
            description: "Proses cepat dan mudah" 
        },
        // ... 3 features total
    ]
}
```

**⚠️ PENTING - Update Google Form:**

1. Buat Google Form di https://forms.google.com
2. Setelah selesai, klik **Send**
3. Copy link yang diberikan
4. Replace `FORM_ID_ANDA` dengan link Google Form Anda

Contoh:
```javascript
googleFormUrl: "https://forms.gle/abc123xyz" // Link asli Google Form
```

---

## 🛠️ Helper Functions

### 1. `getFormattedAddress(type)`

Format alamat sesuai kebutuhan.

```javascript
import { getFormattedAddress } from '../data/contactData';

// Alamat lengkap (default)
const fullAddress = getFormattedAddress(); 
// "Kampung Tegalsapi, Neglasari, Kec. Darangdan, ..."

// Alamat singkat
const shortAddress = getFormattedAddress('short');
// "Neglasari, Purwakarta, Jawa Barat 41163"
```

---

### 2. `getWhatsAppLink(message)`

Generate link WhatsApp dengan pesan custom.

```javascript
import { getWhatsAppLink } from '../data/contactData';

// Dengan pesan default
const link1 = getWhatsAppLink();
// "https://wa.me/628123456789?text=Assalamu%27alaikum..."

// Dengan pesan custom
const link2 = getWhatsAppLink("Saya mau daftar santri baru");
// "https://wa.me/628123456789?text=Saya%20mau%20daftar..."
```

---

### 3. `getGoogleMapsLink()`

Get Google Maps URL.

```javascript
import { getGoogleMapsLink } from '../data/contactData';

const mapsUrl = getGoogleMapsLink();
// "https://www.google.com/maps/place/7FVV%2BQ5..."
```

---

### 4. `isValidEmail(email)`

Validasi format email.

```javascript
import { isValidEmail } from '../data/contactData';

isValidEmail("user@example.com"); // true
isValidEmail("invalid-email"); // false
```

---

### 5. `formatFormDataForWhatsApp(formData)`

Format data form untuk dikirim via WhatsApp.

```javascript
import { formatFormDataForWhatsApp } from '../data/contactData';

const formData = {
    nama: "Ahmad",
    email: "ahmad@email.com",
    telepon: "08123456789",
    subjek: "Pendaftaran",
    pesan: "Saya ingin daftar"
};

const whatsappMessage = formatFormDataForWhatsApp(formData);
// *Pesan dari Website GCNI*
// 👤 *Nama:* Ahmad
// 📧 *Email:* ahmad@email.com
// ...
```

---

### 6. `getAccessColorClasses(color)`

Get Tailwind CSS classes untuk akses card.

```javascript
import { getAccessColorClasses } from '../data/contactData';

const colors = getAccessColorClasses('blue');
// { 
//   bg: "from-blue-50 to-blue-100", 
//   icon: "bg-blue-600", 
//   text: "text-blue-600" 
// }
```

**Available Colors:**
- `blue`, `green`, `yellow`, `purple`, `red`, `teal`

---

## 📝 Cara Menambah Data

### Menambah Subjek Form Baru

```javascript
// Di contactData.js, edit formSubjects
formSubjects: [
    { value: "", label: "Pilih subjek" },
    { value: "pendaftaran", label: "Pendaftaran" },
    { value: "beasiswa", label: "Beasiswa" }, // ✅ TAMBAH INI
    // ... dst
]
```

### Menambah Tips Perjalanan

```javascript
// Di contactData.js, edit travelTips
travelTips: [
    "Dari Jakarta: Via Tol Cipularang ± 1,5 jam",
    "Dari Surabaya: Via Tol Trans Jawa ± 8 jam", // ✅ TAMBAH INI
    // ... dst
]
```

---

## 🎨 Customization Tips

### 1. **Ganti Warna Theme**

Halaman Kontak menggunakan warna **teal** sebagai primary color. Untuk ganti:

**Cari dan Replace di Kontak.jsx:**
- `teal-600` → `blue-600` (atau warna lain)
- `teal-700` → `blue-700`
- `teal-800` → `blue-800`

### 2. **Tambah Field Form Baru**

Di Kontak.jsx, tambahkan di state dan form:

```javascript
// 1. Tambah di state
const [formData, setFormData] = useState({
    nama: '',
    email: '',
    alamat: '', // ✅ FIELD BARU
    // ...
});

// 2. Tambah di form JSX
<div>
    <label htmlFor="alamat">Alamat</label>
    <input
        type="text"
        id="alamat"
        name="alamat"
        value={formData.alamat}
        onChange={handleInputChange}
    />
</div>
```

### 3. **Ubah Behavior Form Submit**

Saat ini form hanya simulasi. Untuk integrasi real:

```javascript
// Di Kontak.jsx, function handleSubmit
const handleSubmit = async (e) => {
    e.preventDefault();
    
    // ✅ GANTI INI dengan API call real
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });
    
    if (response.ok) {
        showMessage('Pesan terkirim!', 'success');
    } else {
        showMessage('Gagal mengirim!', 'error');
    }
};
```

---

## 🔧 Troubleshooting

### Google Maps tidak muncul?

**Solusi:**
1. Pastikan `googleMapsEmbedUrl` benar
2. Cek internet connection
3. Ganti dengan embed URL baru dari Google Maps

### WhatsApp link tidak berfungsi?

**Solusi:**
1. Pastikan format `whatsapp` benar (628xxx, tanpa +)
2. Test dengan link: `https://wa.me/628123456789`
3. Pastikan nomor aktif

### Form tidak submit?

**Solusi:**
1. Buka Console Browser (F12)
2. Lihat error messages
3. Pastikan semua field required terisi
4. Cek validasi email

---

## 📱 SEO & Performance Tips

### 1. **Meta Tags**

Sudah include di HTML:
- Title: "Kontak GCNI Jakarta - Alamat, Telepon, Email..."
- Description: Lengkap dengan kata kunci
- Open Graph & Twitter Cards

### 2. **Local Business Schema**

JSON-LD schema sudah include untuk SEO lokal:
```json
{
  "@type": "EducationalOrganization",
  "name": "Yayasan GCNI",
  "address": { ... },
  "geo": { ... }
}
```

### 3. **Image Optimization**

Jika menambahkan gambar:
- Compress dengan TinyPNG
- Use WebP format
- Add lazy loading: `loading="lazy"`

---

## 🚀 Next Steps

**Yang Perlu Dilakukan:**

1. ✅ **PENTING:** Ganti `FORM_ID_ANDA` dengan Google Form asli
2. ✅ Update koordinat GPS jika lokasi berubah
3. ✅ Update nomor WhatsApp dengan nomor aktif
4. ✅ Tambahkan gambar office/kantor di `/public/images/contact/`
5. ⚠️ Test form submission di browser
6. ⚠️ Test semua link (WhatsApp, Maps, Social Media)
7. ⚠️ Test responsive di mobile device

---

## 📧 Support

Jika ada pertanyaan tentang implementasi:
1. Cek dokumentasi ini terlebih dahulu
2. Buka Console Browser untuk debug
3. Test dengan data dummy terlebih dahulu

---

**Terakhir diupdate:** Oktober 2025  
**Version:** 1.0  
**Maintainer:** GCNI Dev Team
