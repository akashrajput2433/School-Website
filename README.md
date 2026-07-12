# S.D. Public & Convent School Website

A modern, responsive, and premium school website for **S.D. Public & Convent School**.  
The website is built for parents, students, visitors, and new admissions with a clean educational brand identity.

## Live Preview

The project can be deployed for free using **Vercel** or **Netlify**.

## Features

- Premium responsive school website
- Sticky header with smooth navigation
- Modern hero section with admission banners
- Principal message section
- About school section
- Academic zone
- Staff profile cards
- School toppers carousel
- Notice board
- Mandatory documents section
- Auto-scrolling gallery with image preview
- Video section
- Contact and admission enquiry section
- Light and dark theme support
- Back-to-top button
- SEO-friendly structure

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Project Structure

```text
S.D. Public School Website/
├── public/
│   └── assets/
│       └── school/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deployment

### Vercel

1. Push the project to GitHub.
2. Login to [Vercel](https://vercel.com).
3. Import the GitHub repository.
4. Use these settings:
   - Framework: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Deploy the project.

### Netlify

1. Login to [Netlify](https://netlify.com).
2. Import the GitHub repository.
3. Use these settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Deploy the project.

## School Information

- School Name: S.D. Public & Convent School
- Type: English Medium CBSE School
- Classes: Pre-Nursery to Class 8
- Session: 2026-27
- Tagline: Quality Education for a Bright Future

## Notes

- All school images are stored inside `public/assets/school`.
- Main website content is managed from `src/data/siteData.js`.
- Section layouts are handled in `src/pages/HomePage.jsx` and `src/pages/StepFourSections.jsx`.
- Global styling is maintained in `src/styles.css`.

## License

This project is created for S.D. Public & Convent School.
