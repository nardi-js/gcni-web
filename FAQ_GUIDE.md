# Data FAQ GCNI - Panduan Lengkap

## Overview

File `faqData.js` berisi 45 pertanyaan yang sering ditanyakan (FAQ) tentang GCNI, dikelompokkan dalam 5 kategori utama.

## Struktur Data

```javascript
{
  id: Number,              // ID unik FAQ
  category: String,        // Kategori: pendaftaran, program, biaya, fasilitas, asrama
  question: String,        // Pertanyaan
  answer: String          // Jawaban (HTML format untuk formatting)
}
```

## Kategori FAQ

### 1. **Pendaftaran** (10 FAQs)
- Cara mendaftar
- Waktu pendaftaran
- Persyaratan dokumen
- Usia minimal
- Test masuk
- Proses pendaftaran
- Siswa pindahan
- Tidak lulus test
- Kuota penerimaan
- Open house & kunjungan

### 2. **Program** (10 FAQs)
- Program yang tersedia
- Keunggulan IEBS
- Durasi Tahfizh
- Akreditasi kurikulum
- Jam belajar
- Ekstrakurikuler
- Program akselerasi
- Pembelajaran online
- Program bahasa asing
- Pertukaran pelajar

### 3. **Biaya** (10 FAQs)
- Biaya pendidikan
- Program beasiswa
- Sistem pembayaran
- Diskon kakak-adik
- Rincian SPP
- Biaya asrama
- Sistem cicilan
- Cara mengajukan beasiswa
- Biaya tambahan
- Pengembalian uang pendaftaran

### 4. **Fasilitas** (8 FAQs)
- Fasilitas umum
- Klinik kesehatan
- Transportasi
- Perpustakaan
- Kantin & catering
- Lab komputer
- Fasilitas olahraga
- Masjid

### 5. **Asrama** (7 FAQs)
- Kondisi asrama
- Jadwal pulang
- Makanan santri
- Aturan gadget
- Jadwal harian
- Layanan laundry
- Keamanan asrama

## Cara Menambah FAQ Baru

### 1. Tambah ke faqData.js

```javascript
{
  id: 46, // ID berikutnya
  category: "pendaftaran", // atau program, biaya, fasilitas, asrama
  question: "Pertanyaan baru disini?",
  answer: `Jawaban dengan format HTML:<br>
    • <strong>Poin 1:</strong> Penjelasan<br>
    • <strong>Poin 2:</strong> Penjelasan<br>
    <br>Informasi tambahan di sini.`
}
```

### 2. Tips Menulis FAQ

**Pertanyaan:**
- Gunakan bahasa yang jelas dan spesifik
- Hindari pertanyaan yang terlalu umum
- Maksimal 1-2 kalimat

**Jawaban:**
- Gunakan HTML untuk formatting:
  - `<br>` untuk line break
  - `<strong>` untuk teks tebal
  - `•` atau `✓` untuk bullet points
  - Emoji untuk visual appeal (🏫 📚 💻 dll)
- Berikan informasi lengkap tapi ringkas
- Gunakan bullet points untuk list
- Tambahkan call-to-action jika perlu

### 3. Contoh FAQ Yang Baik

```javascript
{
  id: 99,
  category: "program",
  question: "Apakah ada program beasiswa untuk santri berprestasi?",
  answer: `Ya! Kami menyediakan beberapa jenis beasiswa:<br>
    🏆 <strong>Beasiswa Akademik:</strong> Untuk siswa dengan IPK > 85<br>
    📚 <strong>Beasiswa Tahfizh:</strong> Untuk calon hafizh/hafizhah<br>
    🤝 <strong>Beasiswa Sosial:</strong> Untuk keluarga kurang mampu<br>
    <br>Syarat lengkap bisa dilihat di halaman <a href="/beasiswa">Beasiswa</a> kami.`
}
```

## Helper Functions

### `getFaqByCategory(category)`
Filter FAQ berdasarkan kategori

```javascript
import { getFaqByCategory } from './data/faqData';

// Dapatkan semua FAQ pendaftaran
const pendaftaranFaqs = getFaqByCategory('pendaftaran');

// Dapatkan semua FAQ
const allFaqs = getFaqByCategory('all');
```

### `searchFaq(searchTerm)`
Cari FAQ berdasarkan kata kunci

```javascript
import { searchFaq } from './data/faqData';

// Cari FAQ yang mengandung kata "beasiswa"
const results = searchFaq('beasiswa');
```

### `getFaqById(id)`
Dapatkan FAQ spesifik berdasarkan ID

```javascript
import { getFaqById } from './data/faqData';

const faq = getFaqById(1);
```

### `getCategoryStats()`
Dapatkan statistik jumlah FAQ per kategori

```javascript
import { getCategoryStats } from './data/faqData';

const stats = getCategoryStats();
// Output: { all: 45, pendaftaran: 10, program: 10, ... }
```

## Fitur Halaman FAQ

### 1. **Search Functionality**
- Real-time search saat mengetik
- Mencari di pertanyaan DAN jawaban
- Highlight hasil pencarian

### 2. **Category Filter**
- 6 kategori (All, Pendaftaran, Program, Biaya, Fasilitas, Asrama)
- Badge jumlah FAQ per kategori
- Active state untuk kategori terpilih

### 3. **Accordion UI**
- Click to expand/collapse
- Smooth animation
- Only one open at a time
- Icon rotation animation

### 4. **Grouping**
- FAQ dikelompokkan berdasarkan kategori
- Header kategori dengan icon
- Counter jumlah FAQ

### 5. **Empty State**
- Tampil jika tidak ada hasil
- Tombol reset pencarian
- Ilustrasi menarik

## Best Practices

### ✅ DO:
- Gunakan HTML untuk formatting jawaban
- Berikan jawaban lengkap dan spesifik
- Update FAQ secara berkala
- Test search functionality
- Gunakan emoji untuk visual appeal
- Link ke halaman terkait jika perlu

### ❌ DON'T:
- Jangan gunakan JavaScript di dalam answer
- Jangan buat pertanyaan terlalu panjang
- Jangan duplikasi FAQ
- Jangan lupa escape HTML entities jika perlu
- Jangan hardcode nomor telepon/email (gunakan variable)

## Maintenance

### Update Berkala

1. **Review FAQ setiap 3 bulan:**
   - Hapus FAQ yang tidak relevan
   - Update informasi yang berubah
   - Tambah FAQ baru berdasarkan pertanyaan dari calon santri

2. **Track Pertanyaan Yang Sering Muncul:**
   - Dari email
   - Dari WhatsApp
   - Dari form kontak
   - Dari telepon

3. **A/B Testing:**
   - Test variasi pertanyaan
   - Cari format jawaban yang paling jelas
   - Monitor time on page

## Analytics

Metrics yang perlu ditrack:
- Most viewed FAQ
- Most searched keywords
- Time spent on FAQ page
- Click-through rate to contact page
- FAQ category preferences

## SEO Optimization

FAQ page sudah dioptimasi untuk SEO:
- ✅ Meta title & description
- ✅ Structured data (FAQ Schema)
- ✅ Semantic HTML
- ✅ Internal linking
- ✅ Mobile responsive

## Roadmap

Future enhancements:
- [ ] FAQ voting (helpful/not helpful)
- [ ] Related FAQs suggestion
- [ ] Video answers untuk FAQ populer
- [ ] Multi-language support
- [ ] FAQ chatbot integration
- [ ] Print friendly version

## Contact for FAQ Updates

Jika ada pertanyaan atau saran untuk FAQ baru, hubungi:
- Email: info@gcni.or.id
- Tim Humas GCNI

---

**Last Updated:** January 2025  
**Total FAQs:** 45  
**Maintained by:** Tim Digital GCNI
