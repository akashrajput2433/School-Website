import { BackToTop } from "./components/BackToTop.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { siteConfig } from "./data/siteData.js";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Header school={siteConfig.school} navItems={siteConfig.navItems} />
      <main id="main-content">
        <HomePage config={siteConfig} />
      </main>
      <Footer school={siteConfig.school} navItems={siteConfig.navItems} />
      <BackToTop />
    </div>
  );
}
