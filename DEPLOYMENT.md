# GCNI Website - Deployment Guide

## ✅ Project Ready for Production

Website GCNI sudah siap untuk di-deploy! Semua file sudah dioptimasi dan dibersihkan.

### 📦 Build Output

Build production sudah dibuat di folder `dist/`:
- `dist/index.html` - HTML utama (5.83 kB)
- `dist/assets/` - CSS dan JS yang sudah diminify dan optimized

### 🚀 Cara Deploy

#### 1. **Hosting Static (Netlify / Vercel / GitHub Pages)**

Upload folder `dist/` ke hosting pilihan Anda.

**Netlify:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd dist
netlify deploy --prod
```

**Vercel:**
```bash
# Install Vercel CLI  
npm install -g vercel

# Deploy
vercel --prod
```

#### 2. **Hosting cPanel / Shared Hosting**

1. Upload semua isi folder `dist/` ke `public_html/` atau `www/`
2. File `.htaccess` sudah included untuk:
   - Redirect HTTP ke HTTPS
   - Remove www
   - React Router support
   - Compression & caching
   - Security headers

#### 3. **Custom Server (Apache/Nginx)**

**Apache:**
- Pastikan mod_rewrite enabled
- Upload file `.htaccess` yang sudah disediakan
- Upload semua file di folder `dist/`

**Nginx:**
Tambahkan konfigurasi ini ke nginx.conf:

```nginx
server {
    listen 80;
    server_name gcni.or.id www.gcni.or.id;
    
    # Redirect to HTTPS
    return 301 https://gcni.or.id$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.gcni.or.id;
    
    # Redirect www to non-www
    return 301 https://gcni.or.id$request_uri;
}

server {
    listen 443 ssl http2;
    server_name gcni.or.id;
    
    root /var/www/gcni;
    index index.html;
    
    # SSL Configuration (add your certificate)
    # ssl_certificate /path/to/cert.pem;
    # ssl_certificate_key /path/to/key.pem;
    
    # Gzip Compression
    gzip on;
    gzip_types text/plain text/css text/javascript application/javascript application/json;
    
    # React Router - SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 📊 SEO Optimasi

Website sudah dilengkapi dengan:

✅ **Meta Tags Lengkap**
- Title, description, keywords untuk setiap halaman
- Open Graph untuk social media sharing
- Twitter Cards
- Geo location tags

✅ **Structured Data (Schema.org)**
- Organization schema
- Educational organization
- Contact point
- Course offerings
- Address & location

✅ **Files SEO**
- `robots.txt` - Mengizinkan semua bot crawl
- `sitemap.xml` - Sitemap untuk Google & search engines
- Canonical URLs untuk setiap halaman

✅ **Performance**
- Minified CSS & JS
- Gzip compression ready
- Browser caching configured
- Lazy loading images

### 🔍 Post-Deployment Checklist

Setelah deploy, lakukan hal berikut:

1. **Submit Sitemap ke Google**
   - Buka [Google Search Console](https://search.google.com/search-console)
   - Add property: `https://gcni.or.id`
   - Submit sitemap: `https://gcni.or.id/sitemap.xml`

2. **Test Website**
   - ✅ Semua halaman load dengan benar
   - ✅ Navigation bekerja (routing)
   - ✅ Form kontak berfungsi
   - ✅ Responsive di mobile
   - ✅ Social media links bekerja

3. **Performance Check**
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)
   - [WebPageTest](https://www.webpagetest.org/)

4. **SEO Check**
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
   - [Schema Markup Validator](https://validator.schema.org/)
   - [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### 📝 Environment Variables

Tidak ada environment variables yang dibutuhkan untuk versi static ini.

Jika di masa depan menggunakan API atau backend:
```env
VITE_API_URL=https://api.gcni.or.id
VITE_CONTACT_EMAIL=info@gcni.or.id
```

### 🔄 Update Website

Untuk update konten di masa depan:

1. Edit file di `src/data/`:
   - `newsData.js` - Berita
   - `faqData.js` - FAQ
   - `contactData.js` - Info kontak
   - `donationData.js` - Data donasi

2. Rebuild:
   ```bash
   npm run build
   ```

3. Upload ulang folder `dist/` ke hosting

### 📞 Support

Jika ada masalah saat deployment, pastikan:
- Node.js version >= 18
- npm version >= 9
- Semua dependencies terinstall: `npm install`
- Build berhasil: `npm run build`
- Test local: `npm run preview`

### 📁 Struktur Files Production

```
dist/
├── index.html          # Entry point
├── robots.txt          # SEO robots
├── sitemap.xml         # SEO sitemap
├── .htaccess          # Apache config
├── vite.svg           # Favicon
├── hero.jpg           # Hero image
├── logo/
│   └── gcni-logo.png  # Logo
└── assets/
    ├── index-*.css    # Minified CSS
    └── index-*.js     # Minified JS
```

## 🎉 Website GCNI Siap Launch!

Website sudah production-ready dengan:
- ✅ 8 halaman lengkap
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Social media integration
- ✅ Donation system
- ✅ Contact form
- ✅ FAQ system
- ✅ News/Article system

**Domain**: https://gcni.or.id  
**Email**: info@gcni.or.id  
**WhatsApp**: +62 896-8044-0055  
**Alamat**: Kp. Babakan RT 05/RW 02, Neglasari, Tangerang 15129

---

**Built with ❤️ using React + Vite + TailwindCSS**
