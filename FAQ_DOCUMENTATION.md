# FAQ Accordion Documentation

## 📋 Overview
The FAQ section addresses customer objections and answers critical questions to improve conversion rates and reduce friction in the sales process.

## 🎯 Purpose
- **Cut Objections**: Answer common concerns before they become blockers
- **Build Trust**: Transparent, specific answers with real numbers
- **Improve SEO**: FAQ schema markup for rich snippets in search results
- **Educate Prospects**: Help visitors self-qualify and understand value

## ❓ FAQ Questions & Answers

### 1. **How long does it take to build an MVP?**
- **Answer Highlights**: 2-4 weeks delivery timeline
- **Objection Addressed**: "This will take forever"
- **Key Metric**: Week-by-week breakdown
- **Strategy**: Shows efficiency without compromising quality

### 2. **What's Salt's optimization math?**
- **Answer Highlights**: 90+ Lighthouse Scores
- **Objection Addressed**: "How do you deliver performance?"
- **Key Metric**: Under 2 seconds load time
- **Strategy**: Demonstrates technical expertise with specific formula

### 3. **Why custom code instead of templates?**
- **Answer Highlights**: 5x faster, under 100KB gzipped
- **Objection Addressed**: "Templates are cheaper/easier"
- **Key Metric**: 500KB+ template bloat vs lean custom code
- **Strategy**: Quantifies the cost of templates

### 4. **How do you ensure mobile responsiveness?**
- **Answer Highlights**: Mobile-first design approach
- **Objection Addressed**: "Will it work on phones?"
- **Key Metric**: 320px to 4K compatibility
- **Strategy**: Emphasizes real device testing

### 5. **What's included in ongoing support?**
- **Answer Highlights**: 24/7 monitoring, 24-hour security patches
- **Objection Addressed**: "What happens after launch?"
- **Key Metric**: 5 hours/month content updates
- **Strategy**: Positions as in-house dev team alternative

### 6. **Can you integrate with my existing tools?**
- **Answer Highlights**: 100+ platform integrations
- **Objection Addressed**: "Will this work with what I have?"
- **Key Metric**: Major platforms listed (HubSpot, Stripe, etc.)
- **Strategy**: Shows flexibility and experience

### 7. **How do you measure lead generation success?**
- **Answer Highlights**: 40% increase in qualified leads
- **Objection Addressed**: "How do I know it's working?"
- **Key Metric**: Conversion rate, form submissions tracking
- **Strategy**: Data-driven approach with real results

### 8. **What makes SALT different from other agencies?**
- **Answer Highlights**: Pure optimized code, no fluff
- **Objection Addressed**: "Why choose you over competitors?"
- **Key Metric**: Zero bloat philosophy
- **Strategy**: Clear value proposition and positioning

## 🎨 Design Features

### Visual Elements
- **Accordion Style**: Clean, modern expandable panels
- **Color Transitions**: White to #F0F9FB on expand
- **Hover Effects**: Border color changes to brand aqua (#81C7D4)
- **Icons**: Animated chevron with 180° rotation
- **Highlights**: Key metrics highlighted with aqua background

### Responsive Design
- **Mobile**: Optimized padding and text sizes
- **Desktop**: Maximum 1200px width for readability
- **Touch-Friendly**: Large tap targets (48px+)
- **Smooth Animations**: 300ms transitions for polish

### Typography
- **Headers**: 
  - Mobile: 5xl/7xl (Questions/ANSWERED)
  - Desktop: 8xl/160px (Questions/ANSWERED)
- **Questions**: 
  - Mobile: xl (20px)
  - Desktop: 2xl (24px)
- **Answers**: 
  - Mobile: base (16px)
  - Desktop: lg (18px)

## 🔍 SEO Benefits

### FAQ Schema Markup
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text"
      }
    }
  ]
}
```

### Expected Rich Snippet Results
- **Expandable FAQ panels** in Google search results
- **Direct answers** shown in search
- **Higher click-through rates** from search
- **Better mobile search visibility**

### Validation
Test your FAQ schema at: https://search.google.com/test/rich-results

## 📊 Conversion Optimization

### Strategic Placement
- **After Portfolio**: Prospects have seen proof, now address concerns
- **Before Footer/Contact**: Remove barriers before CTA
- **In Navigation**: Easy access from anywhere on site

### Highlight Strategy
Each FAQ includes a **highlighted metric** to:
- Draw attention to key numbers
- Make answers scannable
- Reinforce value propositions
- Build credibility with specifics

### CTA Integration
- **Bottom CTA**: "Still have questions? Let's talk."
- **Email Button**: Direct path to conversation
- **Low Friction**: One-click email launch

## 🎯 A/B Testing Opportunities

Consider testing:
1. **Question Order**: Most common objections first vs. most compelling
2. **Default Open**: First FAQ pre-expanded vs. all closed
3. **Visual Style**: Current vs. numbered questions
4. **CTA Variations**: "Get in Touch" vs. "Book a Call" vs. "Chat Now"
5. **Answer Length**: Current detailed vs. shorter bullet points

## 📈 Analytics to Track

### Engagement Metrics
- FAQ section scroll depth
- Individual question click rates
- Time spent on FAQ section
- CTA click-through rate after FAQ

### Conversion Metrics
- Form submissions after FAQ visit
- Email opens from FAQ CTA
- Conversion rate: FAQ visitors vs. non-visitors

### SEO Metrics
- Rich snippet impressions
- Click-through rate from search
- FAQ page ranking positions
- Voice search appearances

## 🔧 Customization

### Adding New FAQs
```tsx
{
  question: "Your question here?",
  answer: "Your detailed answer here...",
  highlight: "Key metric or phrase to highlight"
}
```

### Changing Colors
Edit the following in FAQ.tsx:
- Background: `#FFFFFF` (closed) → `#F0F9FB` (open)
- Hover border: `#81C7D4`
- Highlight background: `#81C7D4/10`
- Highlight text: `#81C7D4`

### Adjusting Animations
```tsx
// Transition duration
transition-all duration-300

// Max height for answers
max-h-96 (adjust based on content length)
```

## ✅ Best Practices

### Do's ✅
- Keep answers under 3-4 sentences
- Include specific numbers/metrics
- Use conversational, confident tone
- Address the real objection (not just surface question)
- Highlight one key metric per answer

### Don'ts ❌
- Avoid vague corporate speak
- Don't over-promise or exaggerate
- Keep technical jargon minimal
- Don't make answers too long (people skim)
- Avoid generic answers without specifics

## 🚀 Performance Impact

### Bundle Size
- Component size: ~8KB (minified)
- No external dependencies
- Schema markup: ~2KB
- Total impact: Minimal

### Loading Strategy
- Loaded with main bundle
- No lazy loading needed (below fold)
- Schema renders server-side
- Animations use CSS (GPU accelerated)

## 📱 Accessibility

### Features
- ✅ Keyboard navigation (Tab/Enter)
- ✅ Focus states on buttons
- ✅ ARIA labels (can be enhanced)
- ✅ Screen reader friendly structure
- ✅ High contrast ratios

### Recommended Enhancements
```tsx
// Add ARIA attributes
<button
  aria-expanded={openIndex === index}
  aria-controls={`faq-answer-${index}`}
>

<div
  id={`faq-answer-${index}`}
  role="region"
>
```

## 🎉 Success Metrics

Track these KPIs to measure FAQ effectiveness:

1. **Engagement**: 60%+ of visitors scroll to FAQ
2. **Interaction**: 40%+ open at least one question
3. **Conversion**: 20%+ higher conversion from FAQ visitors
4. **SEO**: 10%+ traffic from FAQ rich snippets
5. **Support**: 30%+ reduction in pre-sale questions

---

**Status**: ✅ Implemented and ready for testing  
**Location**: `/components/FAQ.tsx`  
**Schema**: Included (FAQPage)  
**Navigation**: Added to main menu
