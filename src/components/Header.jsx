import { useEffect, useMemo, useState } from "react";
import { MapPin, Menu, PhoneCall, X } from "lucide-react";

export function Header({ school, navItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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

      const availableSections = existingNavItems
        .map((item) => ({ ...item, node: document.querySelector(item.href) }))
        .filter((item) => item.node);

      const currentSection = availableSections
        .map((item) => ({
          href: item.href,
          top: item.node.getBoundingClientRect().top
        }))
        .filter((item) => item.top <= 150)
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
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const renderNavLink = (item, isMobile = false) => {
    const isActive = activeHref === item.href;
    const baseClass = isMobile
      ? "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold transition"
      : "rounded-full px-3 py-2 text-[13px] font-bold transition";
    const stateClass = isActive
      ? "bg-school-navy text-white shadow-soft"
      : "text-slate-700 hover:bg-school-mist hover:text-school-navy";

    return (
      <a
        key={item.href}
        href={item.href}
        onClick={() => setIsOpen(false)}
        className={`${baseClass} ${stateClass}`}
        aria-current={isActive ? "page" : undefined}
      >
        {item.label}
        {isMobile && isActive ? (
          <span className="h-2 w-2 rounded-full bg-school-gold" />
        ) : null}
      </a>
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ${
        isScrolled
          ? "border-slate-200/70 bg-white/[0.94] shadow-soft backdrop-blur-xl"
          : "border-white/40 bg-white/[0.88] backdrop-blur-xl"
      }`}
    >
      <div className="hidden bg-school-navy text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-2 text-xs font-semibold lg:px-10">
          <p className="flex items-center gap-2 text-blue-100">
            <MapPin size={14} className="text-school-gold" />
            {school.address}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${school.phone[0]}`}
              className="flex items-center gap-2 text-blue-100 transition hover:text-school-gold"
            >
              <PhoneCall size={14} />
              {school.phone[0]}
            </a>
            <span className="rounded-full bg-school-gold px-3 py-1 font-black text-school-navy">
              Admissions 2026-27 Open
            </span>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
        <a
          href="#home"
          className="flex min-w-0 items-center gap-3"
          aria-label={school.name}
          onClick={() => setIsOpen(false)}
        >
          <img
            src={school.logo}
            alt={`${school.name} logo`}
            className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-school-gold/70"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-black text-school-navy sm:text-base">
              {school.shortName}
            </span>
            <span className="hidden text-xs font-semibold text-slate-500 sm:block">
              {school.tagline}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {existingNavItems.map((item) => renderNavLink(item))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-school-navy px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-school-blue lg:inline-flex"
          >
            Admission Enquiry
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-school-navy shadow-sm transition hover:border-school-gold hover:bg-school-mist xl:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="fixed inset-x-0 top-[73px] z-40 border-t border-slate-100 bg-white/[0.96] px-5 py-5 shadow-premium backdrop-blur-xl lg:top-[105px] xl:hidden">
          <div className="mx-auto grid max-h-[calc(100vh-120px)] max-w-7xl gap-5 overflow-y-auto">
            <div className="grid gap-2 sm:grid-cols-2">
              {existingNavItems.map((item) => renderNavLink(item, true))}
            </div>
            <div className="rounded-3xl bg-school-navy p-5 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-school-gold">
                Admission Helpdesk
              </p>
              <p className="mt-2 text-lg font-black">Session 2026-27 is open</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {school.phone.map((phone) => (
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

      <div className="h-0.5 bg-slate-100">
        <div
          className="h-full bg-school-gold transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}

