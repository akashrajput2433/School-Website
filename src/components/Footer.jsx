import {
  ArrowUpRight,
  BookOpenCheck,
  Clock3,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Youtube
} from "lucide-react";

export function Footer({ school, navItems = [] }) {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    school.address
  )}`;

  return (
    <footer className="relative overflow-hidden bg-school-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_90%_0%,rgba(244,185,64,0.16),transparent_24%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <img
              src={school.logo}
              alt={`${school.name} logo`}
              className="h-20 w-20 shrink-0 rounded-full object-cover ring-4 ring-school-gold/80"
            />
            <div>
              <p className="text-2xl font-black leading-tight">{school.name}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-school-gold">
                {school.tagline}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100">
                English Medium CBSE school focused on communication, discipline,
                academic confidence, activity-based learning, and a caring school
                environment for young learners.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { icon: BookOpenCheck, label: school.classes },
              { icon: ShieldCheck, label: "Safe, supervised campus" },
              { icon: Clock3, label: "Admissions helpdesk active" }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold text-blue-50"
                >
                  <Icon className="text-school-gold" size={19} />
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-[0.9fr_1fr_1.05fr_0.85fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-school-gold">
              Connect
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href="#home"
                    aria-label={item.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-school-gold transition hover:-translate-y-0.5 hover:bg-school-gold hover:text-school-navy"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>
            <p className="mt-5 text-sm leading-7 text-blue-100">
              Follow school updates, admission notices, event photos, and campus
              announcements through our official channels.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-school-gold">
              Explore
            </p>
            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-blue-50">
              {navItems.map((item) => (
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
            <div className="mt-5 grid gap-4 text-sm text-blue-50">
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 transition hover:text-school-gold"
              >
                <MapPin className="mt-0.5 shrink-0 text-school-gold" size={18} />
                <span>{school.address}</span>
              </a>
              <div className="flex gap-3">
                <Phone className="mt-0.5 shrink-0 text-school-gold" size={18} />
                <span className="grid gap-1">
                  {school.phone.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="transition hover:text-school-gold"
                    >
                      {phone}
                    </a>
                  ))}
                </span>
              </div>
              <a
                href={`mailto:${school.email}`}
                className="flex gap-3 transition hover:text-school-gold"
              >
                <Mail className="mt-0.5 shrink-0 text-school-gold" size={18} />
                <span>{school.email}</span>
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-school-gold">
              Admissions
            </p>
            <div className="mt-5 rounded-3xl bg-white p-5 text-school-navy shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-school-blue">
                Session 2026-27
              </p>
              <p className="mt-2 text-2xl font-black">Open Now</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Classes from Pre-Nursery to Class 8. Contact the office for fee,
                transport, and admission details.
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-school-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-school-blue"
              >
                Enquire Now
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-5 py-5 text-center text-xs font-semibold text-blue-100">
        (c) 2026 {school.name}. All rights reserved. Built for a premium school
        experience.
      </div>
    </footer>
  );
}
