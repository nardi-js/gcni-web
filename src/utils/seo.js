/**
 * SEO Utilities untuk GCNI School (Purwakarta)
 * Domain resmi: gcnischool.or.id
 */

import { contactData } from "./contactData"; // <- pastikan path benar

export const siteMetadata = {
  siteName: "GCNI School - Islamic Entrepreneur Boarding School",
  siteUrl: "https://gcnischool.or.id",
  domain: "gcnischool.or.id",

  // Contact (langsung ambil dari contactData)
  contact: {
    phone: contactData.phone,
    whatsapp: contactData.whatsappFormatted,
    email: contactData.email,
    address: contactData.address.full,
    addressShort: contactData.address.short,
    coordinates: {
      lat: contactData.coordinates.lat,
      lng: contactData.coordinates.lng
    }
  },

  // Social Media (ambil dari contactData.social)
  social: {
    instagram: contactData.social.instagram.url,
    youtube: contactData.social.youtube.url,
    tiktok: contactData.social.tiktok.url,
    email: contactData.social.email.url
  },

  // Default SEO
  defaultTitle: "GCNI School - Islamic Entrepreneur Boarding School Purwakarta",
  defaultDescription:
    "GCNI School (Islamic Entrepreneur Boarding School) di Purwakarta dengan program Tahfidz 30 Juz, Courtesy, Entrepreneurship, dan International Program. Kurikulum Blended berbasis Islam, Nasional, dan Cambridge.",
  defaultKeywords:
    "pesantren purwakarta, sekolah islam purwakarta, tahfidz purwakarta, entrepreneur islam, pesantren modern, gcni school, tahfidz 30 juz, sekolah islam, boarding school islam",

  // Organization Schema
  organization: {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "GCNI School - Islamic Entrepreneur Boarding School",
    "alternateName": "IEBS GCNI Purwakarta",
    "url": "https://gcnischool.or.id",
    "logo": "https://gcnischool.or.id/logo/gcni-logo.png",
    "description":
      "Islamic Entrepreneur Boarding School dengan program Tahfidz, Courtesy, Entrepreneurship, dan International Program.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": contactData.address.street,
      "addressLocality": "Purwakarta",
      "addressRegion": "Jawa Barat",
      "postalCode": contactData.address.postalCode,
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": contactData.phone,
      "contactType": "customer service",
      "email": contactData.email,
      "availableLanguage": ["Indonesian", "Arabic", "English"]
    },
    "sameAs": [
      contactData.social.instagram.url,
      contactData.social.youtube.url,
      contactData.social.tiktok.url
    ]
  }
};

// =========================
// PAGE SEO METADATA
// =========================

export const pageMetadata = {
  home: {
    title: "GCNI School - Islamic Entrepreneur Boarding School Purwakarta",
    description:
      "Pendidikan holistik berbasis Al-Qur’an dan karakter. Program Tahfidz, Courtesy, Entrepreneurship, International Program, dan LDC.",
    keywords:
      "pesantren purwakarta, boarding school islam, sekolah islam purwakarta, tahfidz, entrepreneur islam",
    canonical: "https://gcnischool.or.id"
  },

  tentang: {
    title: "Tentang GCNI School | Islamic Entrepreneur Boarding School",
    description:
      "Mengenal GCNI School dan visi membentuk santripreneur dengan moralitas, intelektualitas, dan tanggung jawab.",
    keywords: "tentang gcni, sejarah pesantren, visi misi gcni, profil gcni",
    canonical: "https://gcnischool.or.id/tentang"
  },

  program: {
    title: "Program Pendidikan GCNI School",
    description:
      "Program unggulan: Tahfidz 30 Juz, Courtesy, Entrepreneur, International Program, dan Language Development Center.",
    keywords:
      "tahfidz 30 juz, entrepreneur islam, international program, courtesy islam, program pesantren",
    canonical: "https://gcnischool.or.id/program"
  },

  berita: {
    title: "Berita & Kegiatan GCNI School",
    description:
      "Update kegiatan, prestasi, event, dan informasi terbaru dari GCNI School Purwakarta.",
    keywords: "berita gcni, kegiatan santri, event gcni school",
    canonical: "https://gcnischool.or.id/berita"
  },

  faq: {
    title: "FAQ - Pertanyaan Umum GCNI School",
    description:
      "Pertanyaan umum terkait pendaftaran, biaya, program, kurikulum, dan kehidupan santri.",
    keywords: "faq gcni, biaya pesantren, pendaftaran pesantren, info gcni",
    canonical: "https://gcnischool.or.id/faq"
  },

  kontak: {
    title: "Kontak GCNI School Purwakarta",
    description:
      "Hubungi GCNI School untuk konsultasi program, pendaftaran, dan informasi kunjungan.",
    keywords: "kontak pesantren, alamat gcni, nomor wa gcni",
    canonical: "https://gcnischool.or.id/kontak"
  },

  donasi: {
    title: "Donasi & Infaq untuk GCNI School",
    description:
      "Salurkan infaq dan sedekah untuk mendukung pendidikan Islam dan pembangunan fasilitas GCNI.",
    keywords: "donasi pesantren, infaq, sedekah pendidikan, wakaf gcni",
    canonical: "https://gcnischool.or.id/donasi"
  }
};

/**
 * Structured Data Generator
 */
export const generateStructuredData = (pageType, data = {}) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@graph": [siteMetadata.organization]
  };

  // Breadcrumb
  if (data.breadcrumbs) {
    baseSchema["@graph"].push({
      "@type": "BreadcrumbList",
      "itemListElement": data.breadcrumbs.map((item, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": item.name,
        "item": item.url
      }))
    });
  }

  // Article schema
  if (pageType === "article" && data.article) {
    baseSchema["@graph"].push({
      "@type": "Article",
      "headline": data.article.title,
      "description": data.article.excerpt,
      "image": data.article.image,
      "datePublished": data.article.date,
      "author": { "@type": "Organization", "name": "GCNI School" },
      "publisher": {
        "@type": "Organization",
        "name": "GCNI School",
        "logo": { "@type": "ImageObject", "url": "https://gcnischool.or.id/logo/gcni-logo.png" }
      }
    });
  }

  // FAQ schema
  if (pageType === "faq" && data.faqs?.length) {
    baseSchema["@graph"].push({
      "@type": "FAQPage",
      "mainEntity": data.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    });
  }

  return baseSchema;
};

export default {
  siteMetadata,
  pageMetadata,
  generateStructuredData
};
