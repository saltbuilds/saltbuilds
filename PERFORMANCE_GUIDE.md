# Performance Features Quick Reference

## 🎯 How to Test Lighthouse Scores

### 1. Production Build Test
```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

Then run Lighthouse on the preview URL (usually http://localhost:4173)

### 2. Running Lighthouse
1. Open Chrome/Edge DevTools (F12)
2. Click "Lighthouse" tab
3. Select categories: Performance, SEO, Best Practices, Accessibility
4. Choose "Desktop" or "Mobile"
5. Click "Analyze page load"

## 📊 Core Web Vitals Monitoring

### In Development
- Open browser console (F12)
- Navigate through the site
- Look for `[Web Vitals]` logs showing real-time metrics

### Metrics Explained
- **LCP** (Largest Contentful Paint): Should be < 2.5s (Good)
- **CLS** (Cumulative Layout Shift): Should be < 0.1 (Good)
- **INP** (Interaction to Next Paint): Should be < 200ms (Good)
- **FCP** (First Contentful Paint): Should be < 1.8s (Good)
- **TTFB** (Time to First Byte): Should be < 600ms (Good)

## 🎨 GSAP Animations Features

### Salt Particles
- **Count**: 30 animated particles
- **Colors**: Brand aqua (#81C7D4)
- **Behavior**: Floating, scroll-responsive
- **Performance**: GPU-accelerated with GSAP

### Customization
Edit `components/SaltParticles.tsx` to adjust:
- Particle count (line 24)
- Animation duration (line 38)
- Scroll trigger points (line 50-52)

## 🖼️ Lazy Loading Images

### How It Works
- Images load only when entering viewport
- Placeholder shown initially
- Smooth fade-in transition
- ~50px margin before loading starts

### Add Lazy Loading to New Images
```tsx
import LazyImage from './components/LazyImage';

<LazyImage
  src="/your-image.png"
  alt="Description"
  className="your-classes"
/>
```

## 🔍 SEO Schema Markup

### Validate Your Schema
1. Visit: https://search.google.com/test/rich-results
2. Enter your site URL
3. Check for errors/warnings
4. Test with Google's Rich Results Test

### Current Schemas
- ✅ Organization
- ✅ LocalBusiness
- ✅ Service Catalog (12 services)

## ⚡ Build Optimizations

### What's Optimized
- JS/CSS minification (Terser)
- Code splitting (React + GSAP chunks)
- Tree shaking (unused code removed)
- Asset inlining (< 4KB files)
- Console removal in production

### Bundle Analysis
```bash
# After building, check dist folder
npm run build

# Look at dist/assets for chunk sizes
```

## 🎯 Target Lighthouse Scores

| Metric | Target | Key Optimizations |
|--------|--------|------------------|
| **Performance** | 90+ | Lazy loading, code splitting, minification |
| **SEO** | 95+ | Schema markup, meta tags, semantic HTML |
| **Best Practices** | 95+ | HTTPS, no errors, modern APIs |
| **Accessibility** | 90+ | Alt text, semantic HTML, ARIA labels |

## 🚀 Deployment Checklist

- [ ] Test with production build locally
- [ ] Run Lighthouse audit (Desktop + Mobile)
- [ ] Validate schema markup
- [ ] Check Web Vitals in console
- [ ] Test on real mobile devices
- [ ] Verify all images load correctly
- [ ] Check animations perform smoothly
- [ ] Deploy to production
- [ ] Re-run Lighthouse on live site
- [ ] Set up analytics integration

## 💡 Pro Tips

1. **Test on 3G**: Lighthouse has throttling options
2. **Test Mobile**: Mobile scores often differ from desktop
3. **Clear Cache**: Between tests for accurate results
4. **Incognito Mode**: Avoids extension interference
5. **Multiple Runs**: Scores can vary, run 3-5 times

## 🔗 Useful Resources

- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse Scoring](https://web.dev/performance-scoring/)
- [Schema.org](https://schema.org/)
- [GSAP Docs](https://greensock.com/docs/)
- [Rich Results Test](https://search.google.com/test/rich-results)

---

**Happy Optimizing! 🧂✨**
