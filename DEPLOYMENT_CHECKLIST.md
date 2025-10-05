# 🚀 GCNI Website - Deployment Checklist

## ✅ Pre-Deployment Checklist

### **Build & Files**
- [x] Production build completed (`npm run build`)
- [x] Build size optimized (CSS: 26 KB, JS: 366 KB)
- [x] All unused files removed
- [x] No console errors in preview
- [x] Preview tested (http://localhost:4173/)

### **SEO Files**
- [x] robots.txt created
- [x] sitemap.xml created
- [x] .htaccess configured (Apache)
- [x] Meta tags optimized
- [x] Structured data (Schema.org) added
- [x] Canonical URLs set

### **Content Verification**
- [x] Contact info correct
  - Phone: +62 896-8044-0055 ✓
  - Email: info@gcni.or.id ✓
  - Address: Neglasari, Tangerang 15129 ✓
  - GPS: -6.5056, 107.4929 ✓
- [x] Social media links working
  - Instagram: @pm.gcni_iebs ✓
  - YouTube: @gcnitv9792 ✓
  - TikTok: @ponpes.gcni.iebs ✓
- [x] All images optimized
- [x] All links tested

### **Pages Tested**
- [x] Home page
- [x] Tentang page
- [x] Program page (6 programs + modals)
- [x] Berita page (listing + filters)
- [x] Artikel detail page
- [x] FAQ page (45 questions)
- [x] Kontak page (form + map)
- [x] Donasi page (4 steps)

### **Responsive Design**
- [x] Mobile (320px - 480px)
- [x] Tablet (768px - 1024px)
- [x] Desktop (1200px+)
- [x] Navigation menu (mobile & desktop)
- [x] All forms responsive
- [x] All modals responsive

### **Performance**
- [x] CSS minified (26.36 KB → 2.46 KB gzipped)
- [x] JS minified (366.10 KB → 104 KB gzipped)
- [x] Images optimized
- [x] Lazy loading ready
- [x] Caching configured

## 📋 Deployment Steps

### **Option 1: cPanel / Shared Hosting**

1. **Login ke cPanel**
   - URL: Your hosting control panel
   - Username: Your username
   - Password: Your password

2. **Upload Files**
   ```
   File Manager → public_html/ → Upload
   ```
   - Upload ALL files dari folder `dist/`
   - Pastikan `.htaccess` ikut terupload

3. **Set File Permissions**
   ```
   index.html → 644
   .htaccess → 644
   All folders → 755
   ```

4. **Test Domain**
   - Browse ke: https://gcni.or.id
   - Test semua halaman
   - Test form kontak
   - Test navigation

### **Option 2: Netlify (Recommended)**

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**
   ```bash
   cd dist
   netlify deploy --prod
   ```

3. **Custom Domain**
   - Netlify Dashboard → Domain Settings
   - Add custom domain: gcni.or.id
   - Configure DNS (A record / CNAME)

### **Option 3: Vercel**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Custom Domain**
   - Vercel Dashboard → Domains
   - Add: gcni.or.id

## 🔍 Post-Deployment Checklist

### **Immediate Tests (After Upload)**
- [ ] Homepage loads correctly
- [ ] All 8 pages accessible
- [ ] Navigation works
- [ ] Mobile menu works
- [ ] Forms submittable
- [ ] Images display
- [ ] Links open correctly
- [ ] HTTPS working
- [ ] No 404 errors

### **Google Search Console Setup**
1. [ ] Add property: https://gcni.or.id
2. [ ] Verify ownership (HTML file / meta tag)
3. [ ] Submit sitemap: https://gcni.or.id/sitemap.xml
4. [ ] Request indexing for main pages

### **Performance Testing**
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/)
  - Target: Score > 90
- [ ] [GTmetrix](https://gtmetrix.com/)
  - Target: Grade A
- [ ] [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
  - Target: Pass

### **SEO Validation**
- [ ] [Rich Results Test](https://search.google.com/test/rich-results)
  - Check Schema.org markup
- [ ] [Schema Validator](https://validator.schema.org/)
  - Validate structured data
- [ ] Meta tags check
  - View page source
  - Verify title, description, OG tags

### **Social Media Testing**
- [ ] Facebook Sharing
  - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
  - Check OG image, title, description
- [ ] Twitter Card
  - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] WhatsApp Preview
  - Send link to WhatsApp
  - Check preview display

### **Browser Testing**
- [ ] Chrome (Desktop & Mobile)
- [ ] Firefox (Desktop & Mobile)
- [ ] Safari (Desktop & Mobile)
- [ ] Edge (Desktop)

### **Functionality Tests**
- [ ] Contact form submission
  - Test email delivery
  - Test WhatsApp link
- [ ] Donation flow
  - Step 1: Select amount
  - Step 2: Payment method
  - Step 3: Instructions
  - Step 4: Success page
- [ ] FAQ search & filter
- [ ] News filtering
- [ ] Program modals
- [ ] Google Maps integration
- [ ] Social media links

## 🎯 SEO Optimization Tasks

### **Week 1 After Launch**
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Create Google My Business profile
- [ ] Share on social media
- [ ] Add to relevant directories

### **Week 2-4**
- [ ] Monitor Google Search Console
  - Check indexing status
  - Fix any crawl errors
  - Monitor search appearance
- [ ] Analyze traffic (if Analytics installed)
- [ ] Check backlinks
- [ ] Update content if needed

### **Monthly Tasks**
- [ ] Update news/articles regularly
- [ ] Add new FAQ if needed
- [ ] Monitor page speed
- [ ] Check for broken links
- [ ] Update sitemap if pages added

## 📊 Success Metrics

### **Technical**
- ✅ PageSpeed Score: > 90
- ✅ Mobile-Friendly: Pass
- ✅ HTTPS: Enabled
- ✅ Load Time: < 3 seconds
- ✅ All pages indexed

### **SEO**
- 🎯 Ranking keywords: "pondok pesantren tangerang", "tahfidz quran tangerang"
- 🎯 Google My Business: Active
- 🎯 Backlinks: Growing
- 🎯 Domain Authority: Increasing

### **User Engagement**
- 📈 Page views
- 📈 Time on site
- 📈 Contact form submissions
- 📈 Donation clicks
- 📈 Social media follows

## 🆘 Troubleshooting

### **Issue: 404 Errors on Page Refresh**
**Solution**: Check `.htaccess` file uploaded and mod_rewrite enabled

### **Issue: Images Not Loading**
**Solution**: Check file permissions (644 for files, 755 for folders)

### **Issue: HTTPS Not Working**
**Solution**: 
- Check SSL certificate installed
- Update .htaccess HTTP→HTTPS redirect
- Clear browser cache

### **Issue: Mobile Menu Not Working**
**Solution**: Check JavaScript loaded, clear cache

### **Issue: Form Not Submitting**
**Solution**: Configure form handler (mailto: or backend API)

## 📞 Support Contacts

**Website Issues**: Technical team  
**Content Updates**: Admin team  
**SEO Questions**: Marketing team

## ✨ Final Notes

**Domain**: https://gcni.or.id  
**Staging**: http://localhost:4173/ (for testing)  
**Build Command**: `npm run build`  
**Deploy Folder**: `dist/`

**Last Build**: October 5, 2025  
**Build Size**: 
- HTML: 5.83 KB (gzipped: 1.83 KB)
- CSS: 26.36 KB (gzipped: 2.46 KB)
- JS: 366.10 KB (gzipped: 104 KB)

---

## 🎉 Website GCNI Ready to Launch! 🚀

Semua checklist sudah completed. Website siap untuk di-deploy!

**Good luck with the launch! 🎊**
