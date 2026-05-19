import { Menu } from "lucide-react";

export function Header({ school, navItems }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-white/90 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
        <a href="#home" className="flex items-center gap-3" aria-label={school.name}>
          <img
            src={school.logo}
            alt={`${school.name} logo`}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-school-gold/60"
          />
          <span className="hidden text-sm font-bold leading-tight text-school-navy sm:block">
            {school.shortName}
          </span>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-school-mist hover:text-school-navy"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-school-navy shadow-sm xl:hidden"
          aria-label="Open navigation menu"
        >
          <Menu size={21} />
        </button>
      </nav>
    </header>
  );
}
