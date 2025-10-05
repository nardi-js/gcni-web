# GCNI Website - Quick Start Guide

## 🚀 Getting Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```

### 3️⃣ Open in Browser
Navigate to: **http://localhost:5174/** (or the port shown in terminal)

---

## 📂 Project Overview

```
gcni-web/
├── src/
│   ├── components/
│   │   ├── Header.jsx    ← Navigation (reusable)
│   │   ├── Footer.jsx    ← Footer (reusable)
│   │   └── Layout.jsx    ← Wrapper for all pages
│   ├── pages/
│   │   ├── Home.jsx      ← Homepage (complete)
│   │   ├── Tentang.jsx   ← About (placeholder)
│   │   ├── Program.jsx   ← Programs (placeholder)
│   │   ├── Berita.jsx    ← News (placeholder)
│   │   ├── FAQ.jsx       ← FAQ (placeholder)
│   │   ├── Kontak.jsx    ← Contact (placeholder)
│   │   └── Donasi.jsx    ← Donation (placeholder)
│   ├── App.jsx           ← Routes & main app
│   └── App.css           ← Custom styles
└── index.html            ← SEO meta tags
```

---

## 🎯 What's Working

✅ **Header Component**
- Desktop navigation menu
- Mobile slide-in menu
- Logo and branding
- Responsive design

✅ **Footer Component**
- 4-column layout
- Quick links
- Contact info
- Social media ready

✅ **Home Page**
- Hero section with animation
- About section with features
- Programs showcase
- Call-to-action section
- Scroll animations (AOS)

✅ **Routing**
- All 7 routes configured
- React Router working
- Navigation between pages

✅ **SEO**
- Meta tags for all social platforms
- Structured data (Schema.org)
- Open Graph tags
- Twitter Cards

---

## 🎨 Quick Customization

### Change Primary Color
In all components, replace `teal-600` with your color:
- `bg-teal-600` → `bg-blue-600`
- `text-teal-600` → `text-blue-600`
- `hover:text-teal-600` → `hover:text-blue-600`

### Add Your Logo
1. Place logo in `/public/images/logo/logo-gcni.png`
2. It will automatically appear in header

### Add Hero Image
1. Place image in `/public/images/hero/hero.jpg`
2. It will automatically appear as background

### Update Contact Info
Edit `src/components/Footer.jsx`:
```jsx
<p><i className="fas fa-phone mr-2"></i> YOUR PHONE</p>
<p><i className="fas fa-envelope mr-2"></i> YOUR EMAIL</p>
<p><i className="fas fa-map-marker-alt mr-2"></i> YOUR ADDRESS</p>
```

---

## 📝 Next Steps

### Priority 1: Add Content
1. **Tentang Page** - Add company info, mission, vision
2. **Program Page** - Detail all programs
3. **Kontak Page** - Add contact form

### Priority 2: Add Images
```
/public/images/
├── logo/logo-gcni.png
├── hero/hero.jpg
└── programs/
    ├── iebs.jpg
    ├── tahfizh.jpg
    └── tpq.jpg
```

### Priority 3: Enhance Features
- Contact form with validation
- News articles with real data
- FAQ accordion
- Donation form
- Image gallery

---

## 🛠️ Common Tasks

### Add a New Page

**1. Create page file:**
```jsx
// src/pages/NewPage.jsx
const NewPage = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">Page Title</h1>
        <p className="text-xl text-gray-600">Content here...</p>
      </div>
    </div>
  );
};
export default NewPage;
```

**2. Add route in App.jsx:**
```jsx
import NewPage from './pages/NewPage';

// In Routes:
<Route path="new-page" element={<NewPage />} />
```

**3. Add link in Header.jsx:**
```jsx
<Link to="/new-page">New Page</Link>
```

### Change Navigation Links

Edit `src/components/Header.jsx` and `src/components/Footer.jsx`

### Add Animation to Element

```jsx
<div data-aos="fade-up">
  Content with animation
</div>
```

### Style a Button

```jsx
<Link
  to="/page"
  className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
>
  <i className="fas fa-icon mr-2"></i>
  Button Text
</Link>
```

---

## 📱 Testing

### Desktop
- Open http://localhost:5174/
- Test all navigation links
- Check animations on scroll

### Mobile
- Open browser DevTools (F12)
- Click "Toggle device toolbar" (Ctrl+Shift+M)
- Select mobile device
- Test mobile menu
- Check responsive layout

---

## 🐛 Troubleshooting

### Port in use
If you see "Port 5173 is in use", Vite will automatically use another port (like 5174).

### Images not loading
- Check file path: `/public/images/folder/image.jpg`
- In component: `src="/images/folder/image.jpg"`
- File names are case-sensitive

### Animations not working
Make sure AOS is initialized:
```jsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);
```

### Mobile menu not closing
Make sure you're using `onClick={closeMobileMenu}` on mobile links.

---

## 📚 Resources

- **React Router**: https://reactrouter.com/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Font Awesome**: https://fontawesome.com/icons
- **AOS Animations**: https://michalsnik.github.io/aos/

---

## 💡 Pro Tips

1. **Always save files** - Vite has hot reload
2. **Use Tailwind classes** - Faster than custom CSS
3. **Check console** - For errors and warnings
4. **Mobile first** - Design for mobile, then desktop
5. **Reuse components** - DRY (Don't Repeat Yourself)
6. **Git commits** - Commit often with clear messages

---

## 🎉 You're Ready!

Your GCNI website is set up and ready for development!

**Current URL**: http://localhost:5174/

**What works:**
- ✅ Navigation (desktop & mobile)
- ✅ All routes configured
- ✅ Homepage fully designed
- ✅ SEO optimized
- ✅ Responsive design

**What to do next:**
- 📝 Add content to placeholder pages
- 🖼️ Add your images
- 🎨 Customize colors
- ✨ Add more features

Happy coding! 🚀
