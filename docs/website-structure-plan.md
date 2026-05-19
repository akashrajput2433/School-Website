# S.D. Public & Convent School Website Plan

## Project Direction

Build a premium, responsive React website for an English Medium CBSE school serving parents, students, visitors, and new admissions. The site should feel trustworthy, polished, modern, and easy to scan on mobile and desktop.

## Visual Identity

- Primary palette: deep navy, academic blue, clean white, soft sky blue, and restrained gold accents.
- Style: premium CBSE/international-school feel with crisp spacing, glass-like navigation, refined cards, soft shadows, and purposeful motion.
- Imagery: use the school logo as the brand anchor, admission banners in the hero slider, classroom/event photos for trust, and faculty images for staff/gallery sections.
- Typography: modern sans-serif with strong display headings and highly readable body text.

## Site Architecture

- `Home`: hero slider, admission CTA, principal message, highlights, stats, latest notices, gallery preview, footer.
- `About Us`: history, mission, vision, infrastructure, educational philosophy, timeline.
- `Silent Features`: smart classes, computer lab, English speaking environment, sports, transport, library, CCTV, experienced teachers.
- `Academic Zone`: curriculum, class structure, exam system, academic calendar, homework/assignments.
- `Staff`: principal, teachers, staff profile cards.
- `School Toppers`: achievement cards with class and percentage/award.
- `Notice Board`: important notices, holidays, admissions, exam schedules.
- `Mandatory Docs`: affiliation certificate, NOC, recognition, academic calendar, fee structure.
- `Gallery`: masonry/grid gallery, lightbox, categories.
- `Videos`: responsive video cards.
- `Contact Us`: address, phone, email, map, contact form.

## Component Plan

- `Header`: sticky responsive navigation with hamburger menu and smooth anchor scrolling.
- `Footer`: school identity, contact details, quick links, social links.
- `HeroSlider`: branded admission carousel using supplied banners.
- `SectionHeading`: reusable title/eyebrow/description layout.
- `FeatureCard`: icon-led feature blocks.
- `StatsCounter`: animated school stats.
- `NoticeCard`: dynamic notice style.
- `GalleryGrid`: responsive image grid and lightbox.
- `ProfileCard`: staff and topper cards.
- `ContactPanel`: contact form and detail cards.
- `BackToTop`: floating scroll helper.

## Asset Mapping

- `logo.jpeg`: brand logo in navbar, hero, footer, favicon.
- `banner-admission-green.jpeg`: hero slider and admissions section.
- `banner-admission-gold.jpeg`: hero slider and admissions section.
- `event-classroom.jpeg`: gallery preview, activities, about sections.
- `faculty-male.png`: staff preview and faculty gallery.
- `faculty-female.png`: staff preview and faculty gallery.

## Build Sequence

1. Foundation and UI plan.
2. Homepage sections.
3. Navbar and footer refinement.
4. Remaining sections/pages.
5. Motion, counters, lightbox, responsiveness.
6. Image placement and brand polish.
7. UI/UX optimization and performance pass.
8. Free deployment guide for Vercel or Netlify.

## Deployment Path

Recommended free route: GitHub plus Vercel.

- Push the project to GitHub.
- Import the repository in Vercel.
- Use `npm run build` as the build command and `dist` as the output directory.
- Add a custom domain later from Vercel project settings if needed.
