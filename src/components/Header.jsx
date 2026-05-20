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

      setIsScrolled(scrollTop > 10);
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
        .filter((item) => item.top <= 170)
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

    if (isMobile) {
      return (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setIsOpen(false)}
          className={`flex min-h-12 items-center justify-between rounded-2xl px-4 text-sm font-black transition ${
            isActive
              ? "bg-school-navy text-white shadow-soft"
              : "bg-white text-slate-700 hover:bg-school-mist hover:text-school-navy"
          }`}
          aria-current={isActive ? "page" : undefined}
        >
          {item.label}
          <span
            className={`h-2 w-2 rounded-full ${
              isActive ? "bg-school-gold" : "bg-slate-200"
            }`}
          />
        </a>
      );
    }

    return (
      <a
        key={item.href}
        href={item.href}
        className={`group relative inline-flex min-h-10 items-center rounded-full px-4 text-sm font-black transition ${
          isActive
            ? "bg-school-navy text-white shadow-soft"
            : "text-slate-700 hover:bg-white hover:text-school-navy hover:shadow-sm"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        {item.label}
        <span
          className={`absolute inset-x-4 -bottom-1 h-0.5 rounded-full transition ${
            isActive ? "bg-school-gold opacity-100" : "bg-school-gold opacity-0"
          }`}
        />
      </a>
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ${
        isScrolled
          ? "border-slate-200/80 bg-white/[0.96] shadow-soft backdrop-blur-xl"
          : "border-white/60 bg-white/[0.92] backdrop-blur-xl"
      }`}
    >
      <div className="hidden bg-school-navy text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-2 text-xs font-semibold lg:px-10">
          <p className="flex min-w-0 items-center gap-2 text-blue-100">
            <MapPin size={14} className="shrink-0 text-school-gold" />
            <span className="truncate">{school.address}</span>
          </p>
          <div className="flex shrink-0 items-center gap-4">
            <a
              href={`tel:${school.phone[0]}`}
              className="flex items-center gap-2 text-blue-100 transition hover:text-school-gold"
            >
              <PhoneCall size={14} />
              {school.phone[0]}
            </a>
            <span className="rounded-full bg-school-gold px-3 py-1 font-black text-school-navy shadow-sm">
              Admissions 2026-27 Open
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 sm:px-8 lg:px-10">
        <a
          href="#home"
          className="flex min-w-0 items-center gap-3"
          aria-label={school.name}
          onClick={() => setIsOpen(false)}
        >
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white p-1 shadow-soft ring-1 ring-school-gold/50">
            <img
              src={school.logo}
              alt={`${school.name} logo`}
              className="h-full w-full rounded-xl object-cover"
            />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-lg font-black text-school-navy">
              {school.shortName}
            </span>
            <span className="hidden max-w-[260px] truncate text-xs font-bold text-slate-500 sm:block">
              {school.tagline}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${school.phone[0]}`}
            className="hidden min-h-12 items-center gap-2 rounded-full border border-school-blue/15 bg-white px-5 text-sm font-black text-school-navy shadow-sm transition hover:-translate-y-0.5 hover:border-school-gold hover:shadow-soft xl:inline-flex"
          >
            <PhoneCall size={17} />
            {school.phone[0]}
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center rounded-full bg-school-navy px-6 text-sm font-black text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-school-blue"
          >
            Admission Enquiry
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-school-navy shadow-sm transition hover:border-school-gold hover:bg-school-mist lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className="hidden border-t border-slate-100/80 bg-school-mist/70 lg:block">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-8 py-2 lg:px-10">
          {existingNavItems.map((item) => renderNavLink(item))}
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-x-0 top-[79px] z-40 border-t border-slate-100 bg-white/[0.98] px-5 py-5 shadow-premium backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-h-[calc(100vh-100px)] max-w-7xl gap-5 overflow-y-auto">
            <div className="grid gap-2 sm:grid-cols-2">
              {existingNavItems.map((item) => renderNavLink(item, true))}
            </div>
            <div className="rounded-3xl bg-school-navy p-5 text-white shadow-premium">
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

      <div className="h-0.5 bg-slate-100">
        <div
          className="h-full bg-school-gold transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}
