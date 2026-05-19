import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { siteConfig } from "./data/siteData.js";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Header school={siteConfig.school} navItems={siteConfig.navItems} />
      <main id="main-content">
        <section className="mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center px-5 py-24 sm:px-8 lg:px-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-school-blue">
            Step 1 foundation
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-school-navy sm:text-5xl lg:text-6xl">
            Premium CBSE school website structure is ready.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            The next step is to build the homepage with the hero slider,
            admission CTA, principal message, highlights, stats, notices,
            gallery preview, and footer.
          </p>
        </section>
      </main>
      <Footer school={siteConfig.school} />
    </div>
  );
}
