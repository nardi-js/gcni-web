# GCNI Website - React Application

Yayasan GCNI (Global Cahaya Nurbuwwah Insani) - Website resmi untuk lembaga pendidikan Islam terpadu dengan program Islamic Entrepreneurship Boarding School (IEBS), Tahfizh Al-Qur'an, dan TPQ.

## 🚀 Features

- **React + Vite** - Fast development with Hot Module Replacement
- **React Router** - Client-side routing for smooth navigation
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **AOS Animation** - Scroll animation effects
- **Font Awesome** - Icon library
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags and structured data

## 📁 Project Structure

```
gcni-web/
├── public/
│   └── images/           # Static images
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.jsx    # Navigation header with mobile menu
│   │   ├── Footer.jsx    # Footer with links and contact info
│   │   └── Layout.jsx    # Main layout wrapper
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Homepage
│   │   ├── Tentang.jsx   # About page
│   │   ├── Program.jsx   # Programs page
│   │   ├── Berita.jsx    # News page
│   │   ├── FAQ.jsx       # FAQ page
│   │   ├── Kontak.jsx    # Contact page
│   │   └── Donasi.jsx    # Donation page
│   ├── App.jsx           # Main app component with routes
│   ├── App.css           # Global styles
│   ├── index.css         # Base CSS
│   └── main.jsx          # Entry point
├── index.html            # HTML template with SEO meta tags
├── package.json          # Dependencies
└── vite.config.js        # Vite configuration
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd gcni-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Dependencies

```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router-dom": "^6.28.0",
  "aos": "^2.3.4"
}
```

## 🎨 Components Overview

### Header Component
- Responsive navigation with desktop and mobile menu
- Mobile menu with slide-in animation
- Overlay backdrop for mobile menu
- Active route highlighting

### Footer Component
- Organized into 4 columns
- Quick links to programs and pages
- Contact information
- Reusable across all pages

### Layout Component
- Wraps all pages with Header and Footer
- Uses React Router's `<Outlet />` for nested routes
- Maintains consistent structure across pages

### Home Page
- Hero section with gradient text animation
- About section with feature cards
- Programs showcase with 3 main programs
- Call-to-action section
- AOS scroll animations

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 SEO Features

- Comprehensive meta tags (title, description, keywords)
- Open Graph tags for social media sharing
- Twitter Card support
- Schema.org structured data for education organization
- Canonical URL
- Proper semantic HTML

## 🌐 Routes

- `/` - Homepage
- `/tentang` - About Us
- `/program` - Programs
- `/berita` - News
- `/faq` - FAQ
- `/kontak` - Contact
- `/donasi` - Donation

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl` (Tailwind defaults)
- Mobile menu for small screens
- Desktop navigation for larger screens

## 🎨 Styling

- **Tailwind CSS** via CDN (loaded in index.html)
- **Custom animations** defined in App.css
- **Google Fonts**: Poppins (body), Amiri (decorative)
- **Font Awesome** for icons

## 🔄 Adding New Pages

1. Create page component in `src/pages/`:
   ```jsx
   const NewPage = () => {
     return (
       <div className="pt-32 pb-20 px-4">
         <div className="container mx-auto">
           <h1>New Page</h1>
         </div>
       </div>
     );
   };
   export default NewPage;
   ```

2. Import and add route in `src/App.jsx`:
   ```jsx
   import NewPage from './pages/NewPage';
   
   // In Routes:
   <Route path="new-page" element={<NewPage />} />
   ```

3. Add navigation link in Header and Footer components

## 🖼️ Adding Images

Place images in the `public/images/` directory:
- `/public/images/hero/` - Hero section images
- `/public/images/programs/` - Program images
- `/public/images/logo/` - Logo files

Reference them in components:
```jsx
<img src="/images/hero/hero.jpg" alt="Description" />
```

## 📄 License

© 2024 GCNI - Global Cahaya Nurbuwwah Insani. All rights reserved.

## 👥 Contact

- **Website**: https://gcni.or.id
- **Email**: info@gcni.or.id
- **Phone**: (021) 1234-5678
- **Address**: Neglasari, Purwakarta, Jawa Barat 41163


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
