# Portfolio Development Plan
## Eran Haim — AI Integration & Full-Stack Developer

### 🎯 Project Overview
**Objective:** Build a production-ready personal portfolio website  
**Tech Stack:** Next.js (App Router) + TypeScript + Tailwind CSS  
**Theme:** Dark theme with modern, accessible design  
**Target:** WCAG AA compliance, Lighthouse 90+ scores  

---

## 📋 Development Phases

### **Phase 1: Project Setup & Foundation** ⏳
**Status:** Pending  
**Estimated Time:** 30 minutes  

**Tasks:**
- [ ] Initialize Next.js project with TypeScript
- [ ] Install and configure Tailwind CSS
- [ ] Set up ESLint and basic configurations
- [ ] Create initial file structure
- [ ] Install required dependencies
- [ ] Verify `npm run dev` works

**Files to Create:**
- `package.json` (via create-next-app)
- `tailwind.config.ts`
- `tsconfig.json`
- `next.config.ts`

---

### **Phase 2: Core Layout & Styling** ⏳
**Status:** Pending  
**Estimated Time:** 45 minutes  

**Tasks:**
- [ ] Create `app/layout.tsx` with metadata and dark theme
- [ ] Set up `app/globals.css` with Tailwind directives
- [ ] Configure typography system (H1, H2, body styles)
- [ ] Add color variables and background gradient
- [ ] Test responsive container classes

**Files to Create:**
- `app/layout.tsx`
- `app/globals.css`

**Design Specifications:**
- Background: `#0B0B10`
- Text: `white`
- Primary: `#6C5CE7`
- Container: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- Section spacing: `py-20` (mobile `py-14`)

---

### **Phase 3: Data Layer** ⏳
**Status:** Pending  
**Estimated Time:** 20 minutes  

**Tasks:**
- [ ] Create `lib/projects.ts` with TypeScript interfaces
- [ ] Define `Project` type with all required fields
- [ ] Add project data for 3 featured projects
- [ ] Export projects array for components

**Files to Create:**
- `lib/projects.ts`

**Project Data:**
1. AI Resume Ranker (Next.js, OpenAI, Embeddings, Vercel)
2. Realtime Chat with RAG (RAG, Supabase, Postgres, Edge Functions)
3. E-commerce Starter (Next.js, Stripe, Prisma, Auth)

---

### **Phase 4: Header Component** ⏳
**Status:** Pending  
**Estimated Time:** 60 minutes  

**Tasks:**
- [ ] Create `components/Header.tsx`
- [ ] Implement sticky navigation
- [ ] Add smooth scroll links to sections
- [ ] Build mobile menu with disclosure
- [ ] Add CV download CTA button
- [ ] Implement proper focus states
- [ ] Test keyboard navigation

**Files to Create:**
- `components/Header.tsx`

**Navigation Links:**
- About (#about)
- Work (#work)
- Contact (#contact)
- Download CV (/Eran-Haim-CV.pdf)

---

### **Phase 5: Hero Section** ⏳
**Status:** Pending  
**Estimated Time:** 45 minutes  

**Tasks:**
- [ ] Create `components/Hero.tsx`
- [ ] Add H1 with name and title
- [ ] Include tagline and intro text
- [ ] Create action buttons (See Work, Contact)
- [ ] Add headshot placeholder with gradient fallback
- [ ] Implement responsive two-column layout
- [ ] Add background gradient effect

**Files to Create:**
- `components/Hero.tsx`
- `public/headshot.jpg` (placeholder)

**Content:**
- H1: "Eran Haim — AI Integration & Full-Stack Developer"
- Tagline: "I build AI-powered web apps and high-quality user experiences."
- Intro: "I'm Eran, a full-stack developer focused on AI integration, clean architecture, and shipping fast. Below are a few projects and ways to reach me."

---

### **Phase 6: About Section** ⏳
**Status:** Pending  
**Estimated Time:** 40 minutes  

**Tasks:**
- [ ] Create `components/About.tsx`
- [ ] Add section with id="about"
- [ ] Include bio paragraph (Hebrew text)
- [ ] Create 3 stats chips (Years, Stack, Location)
- [ ] Implement responsive layout
- [ ] Add proper spacing and typography

**Files to Create:**
- `components/About.tsx`

**Content:**
- Bio: "אני ערן חיים, מפתח פול-סטאק עם התמחות באינטגרציות AI. אוהב לקחת רעיון ולהפוך אותו למוצר פרודקשן עם חוויית משתמש נקייה ומהירה. מתמקד ב-Next.js, TypeScript, ופתרונות ענן."
- Stats: Years coding, Favorite stack, Based in Israel

---

### **Phase 7: Projects Section** ⏳
**Status:** Pending  
**Estimated Time:** 75 minutes  

**Tasks:**
- [ ] Create `components/Projects.tsx` with id="work"
- [ ] Create `components/ProjectCard.tsx`
- [ ] Implement responsive grid (1→2→3 columns)
- [ ] Add project mapping and data display
- [ ] Create tag pills for technologies
- [ ] Add year badges
- [ ] Include demo/source links when available
- [ ] Add hover effects and animations

**Files to Create:**
- `components/Projects.tsx`
- `components/ProjectCard.tsx`

**Features:**
- Responsive grid layout
- Technology tags
- Year indicators
- Demo and source links
- Hover effects

---

### **Phase 8: Contact Section** ⏳
**Status:** Pending  
**Estimated Time:** 60 minutes  

**Tasks:**
- [ ] Create `components/Contact.tsx` with id="contact"
- [ ] Build two-column layout
- [ ] Add services list (left column)
- [ ] Create contact form (right column)
- [ ] Implement form validation
- [ ] Add direct contact links row
- [ ] Configure mailto or Formspree action
- [ ] Test form accessibility

**Files to Create:**
- `components/Contact.tsx`

**Form Fields:**
- Name (required)
- Email (required)
- Message (required)

**Direct Links:**
- Email (mailto)
- WhatsApp
- LinkedIn
- GitHub

---

### **Phase 9: Main Page Assembly** ⏳
**Status:** Pending  
**Estimated Time:** 30 minutes  

**Tasks:**
- [ ] Create `app/page.tsx`
- [ ] Import all section components
- [ ] Compose sections in proper order
- [ ] Add section spacing and layout
- [ ] Create simple footer
- [ ] Test overall page flow
- [ ] Verify all anchor links work

**Files to Create:**
- `app/page.tsx`

**Section Order:**
1. Header
2. Hero
3. About
4. Projects
5. Contact
6. Footer

---

### **Phase 10: Accessibility & SEO** ⏳
**Status:** Pending  
**Estimated Time:** 45 minutes  

**Tasks:**
- [ ] Add proper ARIA labels to all interactive elements
- [ ] Implement visible focus states
- [ ] Add alt text for images
- [ ] Configure page metadata
- [ ] Add JSON-LD structured data
- [ ] Test keyboard navigation
- [ ] Run accessibility audit
- [ ] Optimize for SEO

**Focus Areas:**
- Keyboard navigation
- Screen reader compatibility
- Focus indicators
- Semantic HTML
- Meta tags
- Structured data

---

### **Phase 11: Polish & Testing** ⏳
**Status:** Pending  
**Estimated Time:** 60 minutes  

**Tasks:**
- [ ] Test all responsive breakpoints
- [ ] Verify smooth scrolling functionality
- [ ] Fix any TypeScript errors
- [ ] Test all interactive elements
- [ ] Optimize loading performance
- [ ] Run Lighthouse audit
- [ ] Cross-browser testing
- [ ] Mobile device testing

**Testing Checklist:**
- [ ] Desktop (1920px, 1440px, 1024px)
- [ ] Tablet (768px)
- [ ] Mobile (375px, 414px)
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Performance metrics

---

### **Phase 12: Optional Enhancements** ⏳
**Status:** Pending  
**Estimated Time:** 45 minutes  

**Tasks:**
- [ ] Add project filtering by technology tags
- [ ] Implement tag filter state management
- [ ] Add smooth animations and transitions
- [ ] Optimize images and assets
- [ ] Add loading states if needed
- [ ] Performance optimizations
- [ ] Final design polish

**Nice-to-Have Features:**
- Project tag filtering
- Smooth animations
- Image optimization
- Loading states
- Advanced interactions

---

## 🏁 Definition of Done

### **Technical Requirements:**
- ✅ Next.js App Router with TypeScript
- ✅ Tailwind CSS for styling
- ✅ No TypeScript errors
- ✅ Runs with `npm run dev` without issues
- ✅ All components properly typed

### **Design Requirements:**
- ✅ Dark theme (#0B0B10 background)
- ✅ Responsive design (mobile-first)
- ✅ Typography hierarchy implemented
- ✅ Color system consistent
- ✅ Proper spacing and layout

### **Content Requirements:**
- ✅ All specified content included
- ✅ 3 project examples with data
- ✅ Contact form functional
- ✅ Navigation links working
- ✅ CV download link present

### **Accessibility Requirements:**
- ✅ WCAG AA compliance
- ✅ Keyboard navigation working
- ✅ Focus states visible
- ✅ Screen reader friendly
- ✅ Alt text for images

### **Performance Requirements:**
- ✅ Lighthouse Score 90+ (Accessibility)
- ✅ Lighthouse Score 90+ (Best Practices)
- ✅ Lighthouse Score 90+ (SEO)
- ✅ Fast loading times
- ✅ Smooth animations

---

## 📝 Notes & Considerations

### **Key Technical Decisions:**
- Using Next.js App Router (latest)
- TypeScript for type safety
- Tailwind for utility-first CSS
- No external UI library (custom components)
- Minimal dependencies for performance

### **Development Best Practices:**
- Component-based architecture
- Proper TypeScript typing
- Accessible HTML structure
- Mobile-first responsive design
- Performance optimization

### **Future Enhancements:**
- CMS integration for easy content updates
- Blog section
- Dark/light theme toggle
- Advanced animations
- Contact form backend integration

---

**Last Updated:** December 2024  
**Next Review:** After Phase 6 completion
