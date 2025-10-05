# 🔒 Admin Access Control - GCNI Web

## 📋 Overview

Sistem admin menggunakan **Hybrid Whitelist Approach**:
1. **Super Admins** - Hardcoded di `authService.js` (akses penuh, always)
2. **Regular Admins** - Disimpan di Firestore collection `admins` (bisa ditambah/hapus)

---

## 🚀 Setup Admin Access

### 1️⃣ **Setup Super Admin (Pertama Kali)**

Edit file `src/services/authService.js`:

```javascript
// Super Admin Whitelist
const SUPER_ADMINS = [
  'your-email@gmail.com',     // 👈 GANTI dengan email Google kamu
  'admin@gcni.org',           // Bisa tambah lebih banyak
];
```

**⚠️ PENTING:**
- Gunakan email yang **sama persis** dengan akun Google kamu
- Email **case-insensitive** (huruf besar/kecil sama aja)
- Email ini **permanent admin** dan tidak bisa di-remove dari Firestore

---

### 2️⃣ **Update Firestore Security Rules**

Edit file `firestore.rules`:

```javascript
let superAdmins = [
  'your-email@gmail.com'  // 👈 GANTI sama seperti authService.js
];
```

Deploy rules ke Firebase:

```bash
firebase deploy --only firestore:rules
```

Atau copy-paste manual di Firebase Console:
1. Buka https://console.firebase.google.com/
2. Pilih project **gcni-web**
3. **Firestore Database** → **Rules** tab
4. Paste isi file `firestore.rules`
5. Klik **Publish**

---

## 👥 Menambah Admin Baru

### **Option A: Via Firebase Console** (Recommended)

1. Buka **Firestore Database** di Firebase Console
2. Buat collection baru: `admins`
3. Tambah document:
   - **Document ID**: `admin-email@gmail.com` (email admin)
   - **Fields**:
     ```
     role: "admin"          (string)
     name: "Nama Admin"     (string)
     addedAt: [timestamp]   (timestamp)
     addedBy: "your-email"  (string)
     ```

**Contoh:**

```
Collection: admins
Document ID: john@example.com
Fields:
  - role: "admin"
  - name: "John Doe"
  - addedAt: October 6, 2025 at 10:30:00 AM UTC+7
  - addedBy: "your-email@gmail.com"
```

### **Option B: Via Code** (Advanced)

Buat admin panel untuk manage admins (future enhancement).

---

## 🎭 Role System

Saat ini ada 2 role:

| Role | Access | Manage |
|------|--------|--------|
| **super-admin** | ✅ Full access | Hardcoded di authService.js |
| **admin** | ✅ Full access | Via Firestore collection |

### **Future Enhancement:**
Bisa tambah role lebih spesifik:
- `editor` - Bisa edit news, tapi tidak bisa delete
- `viewer` - Read-only access
- `moderator` - Bisa manage messages only

---

## 🔐 Login Flow

```
1. User klik "Login dengan Google"
   ↓
2. Google OAuth popup
   ↓
3. Firebase Auth login success
   ↓
4. checkAdminAccess(email)
   ├─ Check SUPER_ADMINS array
   │  └─ Found → role: "super-admin" ✅
   └─ Check Firestore /admins/{email}
      └─ Found → role: "admin" ✅
      └─ Not Found → Logout & Error ❌
   ↓
5. Redirect ke /admin/news
```

---

## 🛡️ Security Features

### ✅ **Implemented:**

1. **Email Whitelist** - Cuma email terdaftar yang bisa login
2. **Auto Logout** - Non-admin langsung di-logout setelah login
3. **Firestore Rules** - Database-level protection
4. **Protected Routes** - Frontend route guards
5. **Role-based Access** - Super admin vs regular admin

### ⏳ **Future Enhancements:**

1. **Admin Management Panel** - UI untuk manage admins
2. **Activity Logs** - Track siapa edit apa
3. **Email Verification** - Verify email sebelum add admin
4. **2FA (Two-Factor Auth)** - Extra security layer
5. **Session Timeout** - Auto logout after X hours

---

## 🧪 Testing

### **Test Case 1: Super Admin Login**
```
Email: your-email@gmail.com
Expected: ✅ Login success → Redirect to /admin/news
Role: super-admin
```

### **Test Case 2: Firestore Admin Login**
```
Email: john@example.com (ada di Firestore /admins)
Expected: ✅ Login success → Redirect to /admin/news
Role: admin
```

### **Test Case 3: Non-Admin Login**
```
Email: random@gmail.com (tidak ada di whitelist)
Expected: ❌ Error: "Akses ditolak! Email Anda tidak terdaftar sebagai admin."
Action: Auto logout
```

### **Test Case 4: Direct URL Access**
```
Action: Akses /admin/news tanpa login
Expected: ❌ Redirect to /admin/login
```

---

## 📂 File Structure

```
src/
├── services/
│   └── authService.js          # SUPER_ADMINS array + checkAdminAccess()
├── context/
│   └── AuthContext.jsx         # Global auth state + admin check
├── components/
│   └── ProtectedRoute.jsx      # Route guard
└── pages/
    └── admin/
        └── AdminLogin.jsx      # Login page

firestore.rules                 # Firestore security rules
```

---

## 🔧 Troubleshooting

### **Problem: "Akses ditolak" padahal email sudah ditambah**

**Solution:**
1. Check email di `authService.js` sama persis dengan Google account
2. Check Firestore document ID sama dengan email (lowercase)
3. Refresh browser / logout-login lagi
4. Check console log: `Admin access granted: {...}`

### **Problem: Bisa login tapi tidak bisa CRUD news**

**Solution:**
1. Check Firestore Rules sudah di-deploy
2. Check email di `firestore.rules` sama dengan `authService.js`
3. Lihat error di browser console
4. Test rules di Firebase Console → Rules Playground

### **Problem: "Popup blocked"**

**Solution:**
1. Allow popup untuk `localhost:5173`
2. Atau klik icon popup di address bar
3. Login ulang

---

## 🚨 Security Best Practices

### ✅ **DO:**
- Gunakan email kerja untuk super admin (bukan personal)
- Audit Firestore `/admins` collection secara berkala
- Deploy Firestore Rules sebelum production
- Enable Firebase App Check (production)
- Monitor Firebase Authentication logs

### ❌ **DON'T:**
- Jangan share super admin credentials
- Jangan commit `.env` dengan Firebase config ke public repo
- Jangan add email tidak dikenal ke whitelist
- Jangan disable Firestore Rules di production

---

## 📞 Contact

Kalau ada pertanyaan atau butuh bantuan setup admin access, contact developer.

**Developer**: nardi-js
**Project**: gcni-web
**Last Updated**: October 6, 2025
