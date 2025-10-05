# 🚀 GCNI Web - Deployment Guide

## ✅ Pre-Deployment Checklist

### 1. **Code Optimization** ✅ DONE
- [x] Remove unused seed functions
- [x] Remove unused utils files
- [x] Clean admin panel code
- [x] Optimize imports

### 2. **Environment Variables**
Create `.env.production` file:

```bash
# Firebase Production Config
VITE_FIREBASE_API_KEY=your_production_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

⚠️ **IMPORTANT**: Jangan commit `.env.production` ke Git!

---

## 🔧 Build Commands

### **Development:**
```bash
npm run dev
```

### **Production Build:**
```bash
npm run build
```

Build output akan ada di folder `dist/`

### **Preview Production Build Locally:**
```bash
npm run preview
```

---

## 🌐 Deployment Options

### **Option 1: Firebase Hosting** (Recommended ⭐)

#### Why Firebase Hosting?
- ✅ **Gratis** untuk starter (10GB storage, 360MB/day bandwidth)
- ✅ **Auto SSL** (HTTPS default)
- ✅ **CDN global** (fast loading worldwide)
- ✅ **Integrasi sempurna** dengan Firebase services (Firestore, Auth, Storage)
- ✅ **Custom domain** support
- ✅ **Auto deployment** dengan GitHub Actions

#### Setup Steps:

**1. Install Firebase CLI**
```bash
npm install -g firebase-tools
```

**2. Login ke Firebase**
```bash
firebase login
```

**3. Initialize Firebase Hosting**
```bash
firebase init hosting
```

Pilihan setup:
- **Public directory:** `dist`
- **Single-page app:** `Yes`
- **Automatic builds with GitHub:** `No` (bisa setup nanti)
- **Overwrite index.html:** `No`

**4. Build & Deploy**
```bash
# Build production
npm run build

# Deploy ke Firebase
firebase deploy --only hosting
```

**5. Custom Domain** (Optional)
1. Buka Firebase Console → Hosting
2. Klik "Add custom domain"
3. Follow instructions (add DNS records)
4. Wait for SSL provisioning (~24 hours)

**6. Auto Deploy with GitHub Actions** (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: your-project-id
```

---

### **Option 2: Vercel** (Fastest Deploy 🚀)

#### Why Vercel?
- ✅ **Super cepat** deploy (< 1 menit)
- ✅ **Gratis** unlimited projects
- ✅ **Auto deploy** from GitHub
- ✅ **Preview deployments** untuk setiap PR
- ✅ **Global CDN**

#### Setup Steps:

**1. Install Vercel CLI**
```bash
npm install -g vercel
```

**2. Deploy**
```bash
# Login
vercel login

# Deploy (first time)
vercel

# Production deploy
vercel --prod
```

**3. Connect to GitHub** (Recommended)
1. Buka https://vercel.com/
2. Import Git Repository
3. Select your `gcni-web` repo
4. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Add environment variables (Firebase config)
6. Deploy!

**Auto Deploy:** Setiap push ke `main` branch = auto deploy production

---

### **Option 3: Netlify**

#### Why Netlify?
- ✅ **Gratis** 100GB bandwidth/month
- ✅ **Form submissions** (bonus untuk contact form)
- ✅ **Serverless functions** support
- ✅ **Easy setup**

#### Setup Steps:

**1. Install Netlify CLI**
```bash
npm install -g netlify-cli
```

**2. Deploy**
```bash
# Build first
npm run build

# Deploy
netlify deploy

# Production deploy
netlify deploy --prod
```

**3. Netlify UI Deploy**
1. Buka https://app.netlify.com/
2. "Add new site" → "Import from Git"
3. Select `gcni-web` repo
4. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Add environment variables
6. Deploy!

---

### **Option 4: GitHub Pages** (Gratis 100%)

#### Why GitHub Pages?
- ✅ **Completely free**
- ✅ **Integrated** with GitHub
- ✅ **Custom domain** support

#### Setup Steps:

**1. Install gh-pages**
```bash
npm install --save-dev gh-pages
```

**2. Update `package.json`**
```json
{
  "homepage": "https://nardi-js.github.io/gcni-web",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**3. Update `vite.config.js`**
```javascript
export default defineConfig({
  base: '/gcni-web/', // Nama repo kamu
  plugins: [react()],
})
```

**4. Deploy**
```bash
npm run deploy
```

**5. Enable GitHub Pages**
1. Repo → Settings → Pages
2. Source: `gh-pages` branch
3. Save

Site akan live di: `https://nardi-js.github.io/gcni-web`

---

## 🎯 Recommended: Firebase Hosting

**Why?** Karena project ini sudah pakai:
- Firebase Firestore
- Firebase Storage  
- Firebase Auth
- Firebase Analytics

Lebih **efisien** deploy di Firebase Hosting untuk:
1. **Security:** Same origin untuk semua Firebase services
2. **Performance:** No CORS issues
3. **Cost:** Gratis tier cukup untuk startup
4. **Management:** Semua di satu dashboard

---

## 📊 Performance Optimization (Before Deploy)

### **1. Image Optimization**
```bash
# Optimize all images in public/
npm install -g imagemin-cli

imagemin public/images/*.{jpg,png} --out-dir=public/images
```

### **2. Check Bundle Size**
```bash
npm run build -- --report
```

### **3. Enable Compression** (Firebase Hosting)

Create `firebase.json`:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      },
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

---

## 🔒 Security Checklist

### **Before Deploy:**

- [x] Update Firebase Security Rules
- [ ] Enable Firebase App Check (recommended)
- [ ] Update SUPER_ADMINS emails in `authService.js`
- [ ] Update firestore.rules dengan email yang sama
- [ ] Deploy Firestore Rules: `firebase deploy --only firestore:rules`
- [ ] Add production domain ke Firebase Auth authorized domains
- [ ] Setup CORS untuk Storage (if using external images)

### **After Deploy:**

- [ ] Test login functionality
- [ ] Test CRUD operations
- [ ] Test image upload
- [ ] Test contact form
- [ ] Check console for errors
- [ ] Test on mobile devices
- [ ] Check Lighthouse scores
- [ ] Monitor Firebase Usage dashboard

---

## 🐛 Common Issues & Solutions

### **Issue 1: Firebase Auth Error - Unauthorized Domain**
```
Error: auth/unauthorized-domain
```

**Solution:**
1. Firebase Console → Authentication → Settings
2. Authorized domains → Add your domain
3. Wait 5 minutes for propagation

### **Issue 2: Firestore Permission Denied**
```
Error: Missing or insufficient permissions
```

**Solution:**
1. Deploy firestore.rules: `firebase deploy --only firestore:rules`
2. Check email di SUPER_ADMINS array sama dengan firestore.rules

### **Issue 3: Images Not Loading**
```
CORS error or 404
```

**Solution:**
1. Check images ada di `public/` folder
2. Path harus `/images/...` bukan `public/images/...`
3. Deploy ulang

### **Issue 4: Routing Issues (404 on Refresh)**

**Firebase Hosting:** Already handled by `rewrites` in `firebase.json`

**Vercel/Netlify:** Create `dist/_redirects`:
```
/*    /index.html   200
```

---

## 📈 Monitoring & Analytics

### **Firebase Analytics**
- Sudah aktif ✅
- Dashboard: Firebase Console → Analytics

### **Firebase Performance Monitoring** (Optional)
```bash
npm install firebase/performance

# Add to firebase/config.js
import { getPerformance } from "firebase/performance";
const perf = getPerformance(app);
```

### **Google Analytics 4** (Advanced)
Link Firebase Analytics dengan GA4 di Firebase Console

---

## 💰 Cost Estimation (Firebase)

### **Free Tier (Spark Plan):**
- ✅ Hosting: 10GB storage, 360MB/day bandwidth
- ✅ Firestore: 1GB storage, 50K reads/day
- ✅ Storage: 5GB storage, 1GB/day download
- ✅ Auth: Unlimited

**Expected Cost:** **$0/month** untuk 1,000-5,000 visitors/month

### **Paid Tier (Blaze Plan):** Pay-as-you-go
- Hosting: $0.026/GB storage, $0.15/GB bandwidth
- Firestore: $0.18/GB storage, $0.06/100K reads
- Storage: $0.026/GB storage, $0.12/GB download

**Tip:** Set budget alerts di Firebase Console → Usage & Billing

---

## 🚀 Final Deploy Command (Firebase)

```bash
# 1. Update super admin email
# Edit: src/services/authService.js & firestore.rules

# 2. Build production
npm run build

# 3. Deploy everything
firebase deploy

# Or deploy specific
firebase deploy --only hosting
firebase deploy --only firestore:rules
```

**Live URL:** `https://your-project-id.web.app`

---

## 📞 Support

Kalau ada masalah saat deploy:
1. Check Firebase Console error logs
2. Check browser console  
3. Check this guide's troubleshooting section
4. Google specific error messages

**Developer:** nardi-js
**Project:** gcni-web
**Last Updated:** October 6, 2025

---

## 🎉 Post-Deployment

Setelah deploy sukses:
1. ✅ Test semua fitur
2. ✅ Share URL dengan team
3. ✅ Setup monitoring alerts
4. ✅ Add to Google Search Console
5. ✅ Submit sitemap: `https://your-domain.com/sitemap.xml`
6. ✅ Celebrate! 🎊
