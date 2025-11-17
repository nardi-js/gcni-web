import { useEffect } from 'react';

/**
 * Custom hook untuk scroll animation
 * Mendeteksi elemen saat masuk viewport dan menambahkan class 'is-visible'
 */
const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observe all elements with data-scroll attribute
    const scrollElements = document.querySelectorAll('[data-scroll]');
    scrollElements.forEach(el => observer.observe(el));

    // Observe stagger containers
    const staggerElements = document.querySelectorAll('[data-scroll-stagger]');
    staggerElements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      scrollElements.forEach(el => observer.unobserve(el));
      staggerElements.forEach(el => observer.unobserve(el));
    };
  }, []);
};

export default useScrollAnimation;
