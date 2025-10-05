# Component Usage Guide

## Header Component

### Import
```jsx
import Header from './components/Header';
```

### Usage
```jsx
<Header />
```

### Features
- Automatic responsive behavior
- Mobile menu with slide animation
- Active route highlighting
- ESC key to close mobile menu
- Click outside to close mobile menu

### Customization
To modify navigation links, edit `src/components/Header.jsx`:

```jsx
// Desktop Menu
<Link to="/your-page" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
  Your Link
</Link>

// Mobile Menu
<Link
  to="/your-page"
  onClick={closeMobileMenu}
  className="block py-3 px-4 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium transition-colors mb-2"
>
  <i className="fas fa-icon mr-3"></i>Your Link
</Link>
```

---

## Footer Component

### Import
```jsx
import Footer from './components/Footer';
```

### Usage
```jsx
<Footer />
```

### Features
- 4-column responsive grid
- Social links support
- Contact information
- Copyright notice

### Customization
Edit `src/components/Footer.jsx` to modify:

```jsx
// Add new footer column
<div>
  <h4 className="font-semibold text-lg mb-4">New Section</h4>
  <ul className="space-y-2 text-gray-400">
    <li>
      <Link to="/link" className="hover:text-white transition-colors">
        Link Text
      </Link>
    </li>
  </ul>
</div>
```

---

## Layout Component

### Import
```jsx
import Layout from './components/Layout';
```

### Usage in App.jsx
```jsx
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
</Route>
```

### Features
- Wraps Header and Footer
- Uses React Router Outlet
- Maintains consistent structure

---

## Creating a New Page

### Step 1: Create Page Component
Create file: `src/pages/YourPage.jsx`

```jsx
const YourPage = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Page Title
        </h1>
        <p className="text-xl text-gray-600">Your content here...</p>
      </div>
    </div>
  );
};

export default YourPage;
```

**Note**: `pt-32` adds padding-top to account for fixed header

### Step 2: Add Route
In `src/App.jsx`:

```jsx
import YourPage from './pages/YourPage';

// In Routes:
<Route path="your-page" element={<YourPage />} />
```

### Step 3: Add Navigation Links
In `src/components/Header.jsx`:

```jsx
// Desktop
<Link to="/your-page" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
  Your Page
</Link>

// Mobile
<Link
  to="/your-page"
  onClick={closeMobileMenu}
  className="block py-3 px-4 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium transition-colors mb-2"
>
  <i className="fas fa-icon mr-3"></i>Your Page
</Link>
```

In `src/components/Footer.jsx`:

```jsx
<li>
  <Link to="/your-page" className="hover:text-white transition-colors">
    Your Page
  </Link>
</li>
```

---

## Using AOS Animations

### Import in component
```jsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
```

### Initialize in component
```jsx
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });
}, []);
```

### Apply to elements
```jsx
<div data-aos="fade-up">Content</div>
<div data-aos="fade-up" data-aos-delay="200">Content with delay</div>
<div data-aos="fade-left">Slide from right</div>
<div data-aos="zoom-in">Zoom in</div>
```

### Animation Types
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- `flip-left`, `flip-right`
- `slide-up`, `slide-down`

---

## Styling Patterns

### Container
```jsx
<div className="container mx-auto px-4">
  {/* Content */}
</div>
```

### Section with padding
```jsx
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    {/* Content */}
  </div>
</section>
```

### Responsive grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Grid items */}
</div>
```

### Card with hover effect
```jsx
<div className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
  {/* Card content */}
</div>
```

### Button
```jsx
<Link
  to="/link"
  className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
>
  <i className="fas fa-icon mr-2"></i>
  Button Text
</Link>
```

### Gradient text
```jsx
<h1 className="gradient-text">Gradient Text</h1>
```

---

## Adding Images

### Place images in public folder
```
/public/images/your-folder/image.jpg
```

### Use in component
```jsx
<img 
  src="/images/your-folder/image.jpg" 
  alt="Description"
  className="w-full h-full object-cover"
/>
```

### With error fallback
```jsx
<img
  src="/images/your-folder/image.jpg"
  alt="Description"
  onError={(e) => {
    e.target.style.display = 'none';
    e.target.nextElementSibling.style.display = 'flex';
  }}
/>
<div className="hidden bg-teal-600 flex items-center justify-center">
  <i className="fas fa-image text-6xl text-white"></i>
</div>
```

---

## Icons (Font Awesome)

### Basic usage
```jsx
<i className="fas fa-icon-name"></i>
```

### With styling
```jsx
<i className="fas fa-heart text-2xl text-red-600"></i>
```

### Common icons
- `fa-home` - Home
- `fa-info-circle` - Info
- `fa-graduation-cap` - Education
- `fa-newspaper` - News
- `fa-envelope` - Email
- `fa-phone` - Phone
- `fa-map-marker-alt` - Location
- `fa-heart` - Favorite/Donate
- `fa-bars` - Menu
- `fa-times` - Close

---

## Color Classes (Tailwind)

### Background
- `bg-white`, `bg-gray-50`, `bg-gray-900`
- `bg-teal-600`, `bg-teal-700`
- `bg-yellow-400`

### Text
- `text-gray-600`, `text-gray-700`, `text-gray-900`
- `text-teal-600`, `text-white`

### Hover
- `hover:bg-teal-700`
- `hover:text-teal-600`

---

## Responsive Classes

### Display
- `hidden md:flex` - Hidden on mobile, flex on desktop
- `md:hidden` - Hidden on desktop, visible on mobile

### Grid
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### Text
- `text-xl md:text-2xl lg:text-4xl`

### Spacing
- `px-4 md:px-8` - Padding horizontal
- `py-8 md:py-16` - Padding vertical

---

## Common Patterns

### Hero section
```jsx
<section
  className="relative w-full min-h-screen pt-32 bg-gradient-to-r from-teal-600 to-teal-800 flex items-center justify-center"
  style={{
    backgroundImage: "url('/images/hero.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',
  }}
>
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="relative text-center text-white z-10 px-4">
    {/* Content */}
  </div>
</section>
```

### Feature cards
```jsx
<div className="text-center" data-aos="fade-up">
  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <i className="fas fa-icon text-2xl text-teal-600"></i>
  </div>
  <h3 className="text-xl font-semibold mb-2">Title</h3>
  <p className="text-gray-600">Description</p>
</div>
```

### CTA section
```jsx
<section className="py-20 bg-teal-600">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      Call to Action
    </h2>
    <p className="text-xl text-teal-100 mb-8">Description</p>
    <Link to="/action" className="inline-flex items-center bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold">
      Button
    </Link>
  </div>
</section>
```

---

## Tips

1. **Always use `pt-32`** on page containers to account for fixed header
2. **Use `container mx-auto px-4`** for consistent page width
3. **Add `data-aos` attributes** for scroll animations
4. **Use semantic HTML** (`<section>`, `<article>`, `<nav>`, etc.)
5. **Keep components small** and focused on single responsibility
6. **Use React Router `<Link>`** instead of `<a>` tags
7. **Close mobile menu** with `onClick={closeMobileMenu}` on mobile links
8. **Test on mobile** - mobile menu and responsive design
