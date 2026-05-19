import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

export function Footer({ school, navItems = [] }) {
  return (
    <footer className="bg-school-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={school.logo}
              alt={`${school.name} logo`}
              className="h-14 w-14 rounded-full object-cover ring-2 ring-school-gold"
            />
            <div>
              <p className="text-lg font-bold">{school.name}</p>
              <p className="text-sm text-blue-100">{school.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100">
            English Medium CBSE school focused on confident communication,
            disciplined learning, activity-based education, and a caring campus.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#home"
                aria-label="Social media link"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-school-gold transition hover:bg-school-gold hover:text-school-navy"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-school-gold">
            Quick Links
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-blue-50 md:grid-cols-1">
            {navItems.slice(0, 8).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-school-gold"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-school-gold">
            Contact
          </p>
          <div className="mt-4 grid gap-3 text-sm text-blue-50">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 shrink-0 text-school-gold" size={18} />
              <span>{school.address}</span>
            </p>
            <p className="flex gap-3">
              <Phone className="mt-0.5 shrink-0 text-school-gold" size={18} />
              <span>{school.phone.join(", ")}</span>
            </p>
            <p className="flex gap-3">
              <Mail className="mt-0.5 shrink-0 text-school-gold" size={18} />
              <span>{school.email}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs font-semibold text-blue-100">
        (c) 2026 {school.name}. All rights reserved.
      </div>
    </footer>
  );
}

