import { useEffect, useState } from "react";
import { BackToTop } from "./components/BackToTop.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { siteConfig } from "./data/siteData.js";

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return window.localStorage.getItem("school-theme") || "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.dataset.theme = theme;
    window.localStorage.setItem("school-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen bg-white text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">
      <Header
        school={siteConfig.school}
        navItems={siteConfig.navItems}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      <main id="main-content">
        <HomePage config={siteConfig} />
      </main>
      <Footer school={siteConfig.school} navItems={siteConfig.navItems} />
      <BackToTop />
    </div>
  );
}
