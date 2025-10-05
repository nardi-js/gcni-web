/**
 * SEO Utilities untuk GCNI Website
 * Metadata dan konfigurasi SEO untuk setiap halaman
 */

export const siteMetadata = {
  siteName: "GCNI - Global Center for Nusantara Islam",
  siteUrl: "https://gcni.or.id",
  domain: "gcni.or.id",
  
  // Contact Information
  contact: {
    phone: "+62 896-8044-0055",
    whatsapp: "+62 896-8044-0055",
    email: "info@gcni.or.id",
    address: "Kp. Babakan RT 05 / RW 02 Kel. Neglasari Kec. Neglasari, Kota Tangerang 15129",
    addressShort: "Neglasari, Kota Tangerang 15129",
    coordinates: {
      lat: "-6.5056",
      lng: "107.4929"
    }
  },
  
  // Social Media
  social: {
    instagram: "https://www.instagram.com/pm.gcni_iebs",
    youtube: "https://www.youtube.com/@gcnitv9792",
    tiktok: "https://www.tiktok.com/@ponpes.gcni.iebs"
  },
  
  // Default SEO
  defaultTitle: "GCNI - Pondok Pesantren Tahfidz & Entrepreneur di Tangerang",
  defaultDescription: "Pondok Pesantren GCNI (Global Center for Nusantara Islam) - Lembaga pendidikan Islam terpadu dengan program Tahfidz Quran, Tahsin, dan Entrepreneur Islamic Boarding School di Tangerang.",
  defaultKeywords: "pondok pesantren tangerang, pesantren tahfidz tangerang, islamic boarding school, tahfidz quran, entrepreneur islamic boarding school, pesantren modern, pendidikan islam, GCNI, tahsin quran",
  
  // Organization Schema
  organization: {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "GCNI - Global Center for Nusantara Islam",
    "alternateName": "Pondok Pesantren GCNI",
    "url": "https://gcni.or.id",
    "logo": "https://gcni.or.id/logo.png",
    "description": "Pondok Pesantren Islam terpadu dengan program Tahfidz Quran dan Entrepreneur Islamic Boarding School",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kp. Babakan RT 05 / RW 02 Kel. Neglasari Kec. Neglasari",
      "addressLocality": "Tangerang",
      "addressRegion": "Banten",
      "postalCode": "15129",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-896-8044-0055",
      "contactType": "customer service",
      "email": "info@gcni.or.id",
      "availableLanguage": ["Indonesian", "Arabic"]
    },
    "sameAs": [
      "https://www.instagram.com/pm.gcni_iebs",
      "https://www.youtube.com/@gcnitv9792",
      "https://www.tiktok.com/@ponpes.gcni.iebs"
    ]
  }
};

// SEO Configuration untuk setiap halaman
export const pageMetadata = {
  home: {
    title: "GCNI - Pondok Pesantren Tahfidz & Entrepreneur di Tangerang",
    description: "Bergabunglah dengan GCNI, pondok pesantren modern yang menggabungkan program Tahfidz Quran, Tahsin, dan Entrepreneur Islamic Boarding School. Wujudkan generasi Qur'ani yang berakhlak mulia.",
    keywords: "pondok pesantren tangerang, pesantren tahfidz, islamic boarding school, entrepreneur islamic boarding school, pendidikan islam modern, tahfidz quran tangerang",
    canonical: "https://gcni.or.id"
  },
  
  tentang: {
    title: "Tentang Kami - GCNI Pondok Pesantren Tangerang",
    description: "Mengenal lebih dekat GCNI - Pondok Pesantren Islam yang berfokus pada pembentukan generasi Qur'ani melalui program Tahfidz, Tahsin, dan kewirausahaan Islam.",
    keywords: "tentang gcni, profil pesantren, visi misi pesantren, sejarah gcni, pondok pesantren modern tangerang",
    canonical: "https://gcni.or.id/tentang"
  },
  
  program: {
    title: "Program Pendidikan - GCNI Pondok Pesantren",
    description: "Program unggulan GCNI: Tahfidz Quran 30 Juz, Tahsin & Tartil, Entrepreneur Islamic Boarding School, Pendidikan Formal, Kegiatan Ekstrakurikuler, dan Bimbingan Spiritual.",
    keywords: "program tahfidz, program pesantren, entrepreneur islamic boarding school, tahsin quran, tartil quran, pendidikan islam, ekstrakurikuler pesantren",
    canonical: "https://gcni.or.id/program"
  },
  
  berita: {
    title: "Berita & Kegiatan - GCNI Pondok Pesantren",
    description: "Berita terkini, kegiatan, dan pengumuman dari Pondok Pesantren GCNI. Ikuti perkembangan dan aktivitas santri GCNI.",
    keywords: "berita pesantren, kegiatan pesantren, pengumuman gcni, aktivitas santri, berita gcni tangerang",
    canonical: "https://gcni.or.id/berita"
  },
  
  faq: {
    title: "FAQ - Pertanyaan Umum GCNI Pondok Pesantren",
    description: "Temukan jawaban atas pertanyaan umum seputar pendaftaran, program, biaya, fasilitas, dan kehidupan santri di Pondok Pesantren GCNI Tangerang.",
    keywords: "faq pesantren, pertanyaan pendaftaran, biaya pesantren, syarat pendaftaran, fasilitas pesantren, tanya jawab gcni",
    canonical: "https://gcni.or.id/faq"
  },
  
  kontak: {
    title: "Kontak Kami - GCNI Pondok Pesantren Tangerang",
    description: "Hubungi kami di GCNI Pondok Pesantren Tangerang. Alamat: Neglasari, Tangerang 15129. Telepon/WA: +62 896-8044-0055. Email: info@gcni.or.id",
    keywords: "kontak gcni, alamat pesantren tangerang, nomor telepon gcni, email gcni, lokasi pondok pesantren, hubungi gcni",
    canonical: "https://gcni.or.id/kontak"
  },
  
  donasi: {
    title: "Donasi - Dukung Pendidikan Islam GCNI",
    description: "Salurkan donasi Anda untuk mendukung pembangunan infrastruktur, fasilitas pembelajaran, dan program pendidikan Islam di Pondok Pesantren GCNI Tangerang.",
    keywords: "donasi pesantren, sedekah pendidikan, wakaf pesantren, donasi pembangunan, infaq pesantren, charity islamic education",
    canonical: "https://gcni.or.id/donasi"
  }
};

/**
 * Generate structured data untuk halaman
 */
export const generateStructuredData = (pageType, data = {}) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@graph": [siteMetadata.organization]
  };

  // Add BreadcrumbList
  if (data.breadcrumbs) {
    baseSchema["@graph"].push({
      "@type": "BreadcrumbList",
      "itemListElement": data.breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    });
  }

  // Add specific schema based on page type
  switch (pageType) {
    case 'article':
      if (data.article) {
        baseSchema["@graph"].push({
          "@type": "Article",
          "headline": data.article.title,
          "description": data.article.excerpt,
          "image": data.article.image,
          "datePublished": data.article.date,
          "author": {
            "@type": "Organization",
            "name": "GCNI"
          },
          "publisher": {
            "@type": "Organization",
            "name": "GCNI",
            "logo": {
              "@type": "ImageObject",
              "url": "https://gcni.or.id/logo.png"
            }
          }
        });
      }
      break;
      
    case 'faq':
      if (data.faqs && data.faqs.length > 0) {
        baseSchema["@graph"].push({
          "@type": "FAQPage",
          "mainEntity": data.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        });
      }
      break;
      
    case 'contact':
      baseSchema["@graph"].push({
        "@type": "ContactPage",
        "name": "Kontak GCNI",
        "description": "Hubungi Pondok Pesantren GCNI"
      });
      break;
  }

  return baseSchema;
};

/**
 * Set document metadata
 */
export const setPageMetadata = (pageName, customData = {}) => {
  const metadata = pageMetadata[pageName] || {};
  const title = customData.title || metadata.title || siteMetadata.defaultTitle;
  const description = customData.description || metadata.description || siteMetadata.defaultDescription;
  const keywords = customData.keywords || metadata.keywords || siteMetadata.defaultKeywords;
  const canonical = customData.canonical || metadata.canonical || siteMetadata.siteUrl;
  
  // Set title
  document.title = title;
  
  // Set meta tags
  setMetaTag('description', description);
  setMetaTag('keywords', keywords);
  
  // Open Graph
  setMetaTag('og:title', title, 'property');
  setMetaTag('og:description', description, 'property');
  setMetaTag('og:url', canonical, 'property');
  setMetaTag('og:type', 'website', 'property');
  setMetaTag('og:site_name', siteMetadata.siteName, 'property');
  setMetaTag('og:locale', 'id_ID', 'property');
  
  // Twitter Card
  setMetaTag('twitter:card', 'summary_large_image');
  setMetaTag('twitter:title', title);
  setMetaTag('twitter:description', description);
  
  // Canonical URL
  setCanonicalUrl(canonical);
  
  // Structured Data
  if (customData.structuredData) {
    setStructuredData(customData.structuredData);
  }
};

/**
 * Helper function to set meta tag
 */
const setMetaTag = (name, content, attribute = 'name') => {
  if (!content) return;
  
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
};

/**
 * Helper function to set canonical URL
 */
const setCanonicalUrl = (url) => {
  let element = document.querySelector('link[rel="canonical"]');
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  
  element.setAttribute('href', url);
};

/**
 * Helper function to set structured data
 */
const setStructuredData = (data) => {
  let element = document.querySelector('script[type="application/ld+json"]');
  
  if (!element) {
    element = document.createElement('script');
    element.setAttribute('type', 'application/ld+json');
    document.head.appendChild(element);
  }
  
  element.textContent = JSON.stringify(data);
};

export default {
  siteMetadata,
  pageMetadata,
  generateStructuredData,
  setPageMetadata
};
