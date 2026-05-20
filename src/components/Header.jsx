import { useEffect, useMemo, useRef, useState } from "react";
import { Menu, Moon, PhoneCall, Sun, X } from "lucide-react";

export function Header({ school, navItems, theme, onThemeToggle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({ left: 4, width: 0 });
  const navContainerRef = useRef(null);
  const navLinkRefs = useRef({});

  const existingNavItems = useMemo(() => navItems, [navItems]);

  useEffect(() => {
    const updateHeaderState = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setIsScrolled(scrollTop > 8);
      setScrollProgress(
        documentHeight > 0 ? Math.min((scrollTop / documentHeight) * 100, 100) : 0
      );

      const currentSection = existingNavItems
        .map((item) => ({ ...item, node: document.querySelector(item.href) }))
        .filter((item) => item.node)
        .map((item) => ({
          href: item.href,
          top: item.node.getBoundingClientRect().top
        }))
        .filter((item) => item.top <= 120)
        .sort((a, b) => b.top - a.top)[0];

      if (currentSection) {
        setActiveHref(currentSection.href);
      }
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, [existingNavItems]);

  useEffect(() => {
    const updateSlider = () => {
      const activeLink = navLinkRefs.current[activeHref];

      if (!activeLink || !navContainerRef.current) {
        return;
      }

      setSliderStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth
      });
    };

    updateSlider();
    window.addEventListener("resize", updateSlider);

    return () => window.removeEventListener("resize", updateSlider);
  }, [activeHref, existingNavItems]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const renderNavLink = (item, isMobile = false) => {
    const isActive = activeHref === item.href;

    if (isMobile) {
      return (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setIsOpen(false)}
          className={`flex min-h-12 items-center justify-between rounded-2xl px-4 text-sm font-black transition ${
            isActive
              ? "bg-school-navy text-white shadow-soft dark:bg-school-gold dark:text-school-navy"
              : "bg-white text-slate-700 hover:bg-school-mist hover:text-school-navy dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          }`}
          aria-current={isActive ? "page" : undefined}
        >
          {item.label}
          <span
            className={`h-2 w-2 rounded-full ${
              isActive ? "bg-school-gold dark:bg-school-navy" : "bg-slate-200"
            }`}
          />
        </a>
      );
    }

    return (
      <a
        key={item.href}
        ref={(node) => {
          navLinkRefs.current[item.href] = node;
        }}
        href={item.href}
        className={`relative z-10 inline-flex h-10 shrink-0 items-center whitespace-nowrap rounded-full px-3 text-[12px] font-black transition 2xl:px-3.5 2xl:text-[13px] ${
          isActive
            ? "text-white dark:text-school-navy"
            : "text-slate-700 hover:text-school-navy dark:text-slate-200 dark:hover:text-white"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        {item.label}
      </a>
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ${
        isScrolled
          ? "border-slate-200/80 bg-white/[0.97] shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/[0.94]"
          : "border-white/70 bg-white/[0.94] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/[0.88]"
      }`}
    >
      <nav className="mx-auto flex max-w-[1540px] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex min-w-0 shrink-0 items-center gap-3 xl:w-[260px] 2xl:w-[300px]"
          aria-label={school.name}
          onClick={() => setIsOpen(false)}
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white p-1 shadow-soft ring-1 ring-school-gold/60 dark:bg-slate-900">
            <img
              src={school.logo}
              alt={`${school.name} logo`}
              className="h-full w-full rounded-xl object-cover"
            />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-base font-black text-school-navy dark:text-white 2xl:text-lg">
              {school.shortName}
            </span>
            <span className="hidden max-w-[210px] truncate text-[11px] font-bold text-slate-500 dark:text-slate-300 xl:block 2xl:max-w-[250px]">
              {school.tagline}
            </span>
          </span>
        </a>

        <div
          ref={navContainerRef}
          className="relative hidden min-w-0 flex-1 items-center gap-1 overflow-hidden rounded-full bg-school-mist/90 p-1 ring-1 ring-school-blue/10 dark:bg-slate-900 dark:ring-white/10 xl:flex"
        >
          <span
            className="absolute bottom-1 top-1 rounded-full bg-school-navy shadow-soft transition-all duration-300 ease-out dark:bg-school-gold"
            style={{
              left: `${sliderStyle.left}px`,
              width: `${sliderStyle.width}px`
            }}
          />
          {existingNavItems.map((item) => renderNavLink(item))}
        </div>

        <div className="ml-auto hidden shrink-0 items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={onThemeToggle}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-school-blue/15 bg-white text-school-navy shadow-sm transition hover:-translate-y-0.5 hover:border-school-gold hover:shadow-soft dark:border-white/10 dark:bg-slate-900 dark:text-school-gold"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={`tel:${school.phone[0]}`}
            className="hidden h-11 items-center gap-2 rounded-full border border-school-blue/15 bg-white px-4 text-sm font-black text-school-navy shadow-sm transition hover:-translate-y-0.5 hover:border-school-gold hover:shadow-soft dark:border-white/10 dark:bg-slate-900 dark:text-white 2xl:inline-flex"
          >
            <PhoneCall size={16} />
            {school.phone[0]}
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center whitespace-nowrap rounded-full bg-school-navy px-5 text-sm font-black text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-school-blue dark:bg-school-gold dark:text-school-navy"
          >
            Admission Enquiry
          </a>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onThemeToggle}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-school-navy shadow-sm transition hover:border-school-gold hover:bg-school-mist dark:border-white/10 dark:bg-slate-900 dark:text-school-gold"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-school-navy shadow-sm transition hover:border-school-gold hover:bg-school-mist dark:border-white/10 dark:bg-slate-900 dark:text-school-gold"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="fixed inset-x-0 top-[73px] z-40 border-t border-slate-100 bg-white/[0.98] px-5 py-5 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/[0.98] xl:hidden">
          <div className="mx-auto grid max-h-[calc(100vh-100px)] max-w-7xl gap-5 overflow-y-auto">
            <div className="grid gap-2 sm:grid-cols-2">
              {existingNavItems.map((item) => renderNavLink(item, true))}
            </div>
            <div className="rounded-3xl bg-school-navy p-5 text-white shadow-premium dark:bg-slate-900 dark:ring-1 dark:ring-white/10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-school-gold">
                Admission Helpdesk
              </p>
              <p className="mt-2 text-lg font-black">Session 2026-27 is open</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {school.phone.slice(0, 4).map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold text-blue-50 transition hover:bg-school-gold hover:text-school-navy"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="h-0.5 bg-slate-100 dark:bg-slate-800">
        <div
          className="h-full bg-school-gold transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}
