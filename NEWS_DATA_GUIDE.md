# Data Berita GCNI

## Struktur Data

File `newsData.js` berisi array objek berita dengan struktur berikut:

```javascript
{
  id: Number,              // ID unik artikel
  slug: String,            // URL-friendly slug
  title: String,           // Judul berita
  excerpt: String,         // Ringkasan singkat (untuk preview)
  category: String,        // Kategori: Pendaftaran, Prestasi, Kegiatan, Program, Beasiswa
  date: String,            // Format: YYYY-MM-DD
  author: String,          // Nama penulis
  image: String,           // URL gambar
  content: String,         // Konten HTML lengkap
  tags: Array<String>      // Array tag untuk SEO
}
```

## Kategori Berita

- **Pendaftaran** - Info pendaftaran santri, jadwal, persyaratan
- **Prestasi** - Pencapaian dan penghargaan santri
- **Kegiatan** - Event dan aktivitas yayasan
- **Program** - Launching program baru
- **Beasiswa** - Info beasiswa dan bantuan pendidikan

## Cara Menambah Berita Baru

1. Buka file `src/data/newsData.js`
2. Tambahkan objek baru ke dalam array `newsData`:

```javascript
{
  id: 7, // ID berikutnya
  slug: "judul-berita-baru",
  title: "Judul Berita Baru",
  excerpt: "Ringkasan singkat berita ini...",
  category: "Kegiatan",
  date: "2024-12-01",
  author: "Admin GCNI",
  image: "https://example.com/image.jpg",
  content: `
    <h2>Judul Section</h2>
    <p>Konten berita menggunakan HTML...</p>
    <h3>Sub Judul</h3>
    <ul>
      <li>Poin 1</li>
      <li>Poin 2</li>
    </ul>
  `,
  tags: ["tag1", "tag2", "tag3"]
}
```

3. Berita baru akan otomatis muncul di halaman `/berita`

## Helper Functions

### `getNewsById(id)`
Mengambil berita berdasarkan ID

```javascript
const article = getNewsById(1);
```

### `getNewsBySlug(slug)`
Mengambil berita berdasarkan slug URL

```javascript
const article = getNewsBySlug("pembukaan-pendaftaran-santri-baru-2024");
```

### `getNewsByCategory(category)`
Filter berita berdasarkan kategori

```javascript
const kegiatan = getNewsByCategory("Kegiatan");
const semua = getNewsByCategory("all");
```

### `getLatestNews(limit)`
Ambil berita terbaru (default 3)

```javascript
const latest = getLatestNews(5); // 5 berita terbaru
```

### `formatDate(dateString)`
Format tanggal ke bahasa Indonesia

```javascript
formatDate("2024-10-01"); // Output: "1 Oktober 2024"
```

### `getCategoryColor(category)`
Mendapatkan warna tema berdasarkan kategori

```javascript
getCategoryColor("Prestasi"); // Output: "green"
```

## Routing

- `/berita` - Halaman daftar semua berita
- `/artikel/:id` - Halaman detail artikel berdasarkan ID

## Tips Menulis Konten

1. **Gunakan HTML untuk formatting**:
   - `<h2>` untuk judul utama
   - `<h3>` untuk subjudul
   - `<h4>` untuk sub-subjudul
   - `<p>` untuk paragraf
   - `<ul>` dan `<ol>` untuk list
   - `<strong>` untuk teks tebal
   - `<blockquote>` untuk kutipan

2. **Gambar**:
   - Gunakan URL eksternal atau placeholder
   - Ukuran recommended: 800x600px minimum
   - Format: JPG atau PNG

3. **Tags**:
   - Maksimal 5-7 tags per artikel
   - Gunakan kata kunci yang relevan
   - Lowercase, tanpa spasi (gunakan dash untuk multi-kata)

4. **Excerpt**:
   - Maksimal 2-3 kalimat
   - Harus menarik perhatian pembaca
   - Rangkum inti berita

## Contoh Konten HTML Lengkap

```html
<h2>Judul Utama Artikel</h2>

<p>Paragraf pembuka yang menarik perhatian pembaca...</p>

<h3>Section 1</h3>
<p>Konten section pertama...</p>

<ul>
  <li>Poin penting 1</li>
  <li>Poin penting 2</li>
  <li>Poin penting 3</li>
</ul>

<h3>Section 2</h3>
<p>Konten section kedua...</p>

<ol>
  <li>Langkah 1</li>
  <li>Langkah 2</li>
  <li>Langkah 3</li>
</ol>

<h4>Sub Section</h4>
<p>Detail tambahan...</p>

<blockquote>
  "Ini adalah kutipan penting dari narasumber."
</blockquote>

<p><strong>Kesimpulan:</strong> Rangkuman akhir artikel...</p>
```

## Preview di Development

1. Jalankan development server: `npm run dev`
2. Buka browser: `http://localhost:5173`
3. Navigate ke `/berita` untuk melihat semua berita
4. Klik artikel untuk melihat detail

## Build untuk Production

```bash
npm run build
```

File hasil build akan ada di folder `dist/`
