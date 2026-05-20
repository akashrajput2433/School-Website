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
  const footerPhones = school.phone.slice(0, 2);

  return (
    <footer className="relative overflow-hidden bg-[#071f45] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(56,189,248,0.22),transparent_30%),radial-gradient(circle_at_86%_0%,rgba(244,185,64,0.2),transparent_26%),linear-gradient(135deg,#071f45_0%,#082f63_52%,#061733_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-school-gold to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-5 rounded-[2.25rem] border border-white/10 bg-white/[0.07] p-5 shadow-premium backdrop-blur sm:p-7 lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <span className="grid h-24 w-24 shrink-0 place-items-center rounded-[1.75rem] bg-white p-2 shadow-premium ring-1 ring-school-gold/70">
              <img
                src={school.logo}
                alt={`${school.name} logo`}
                className="h-full w-full rounded-[1.25rem] object-cover"
              />
            </span>
            <div>
              <p className="text-3xl font-black leading-tight sm:text-4xl">{school.name}</p>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.2em] text-school-gold">
                {school.tagline}
              </p>
              <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-blue-50">
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
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-black text-blue-50 shadow-soft transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-school-gold text-school-navy">
                    <Icon size={18} />
                  </span>
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-[0.85fr_1.05fr_1.15fr_0.95fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 shadow-soft backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-school-gold">
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
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-school-gold ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-school-gold hover:text-school-navy"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>
            <p className="mt-5 text-sm font-semibold leading-7 text-blue-100">
              Follow school updates, admission notices, event photos, and campus
              announcements through our official channels.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 shadow-soft backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-school-gold">
              Explore
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2 text-sm text-blue-50">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full bg-white/[0.07] px-3 py-2 font-bold transition hover:bg-school-gold hover:text-school-navy"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 shadow-soft backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-school-gold">
              Contact
            </p>
            <div className="mt-5 grid gap-3 text-sm text-blue-50">
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 rounded-2xl bg-white/[0.07] p-3 font-semibold transition hover:bg-white/10 hover:text-school-gold"
              >
                <MapPin className="mt-0.5 shrink-0 text-school-gold" size={18} />
                <span>{school.address}</span>
              </a>
              <div className="flex gap-3 rounded-2xl bg-white/[0.07] p-3">
                <Phone className="mt-0.5 shrink-0 text-school-gold" size={18} />
                <span className="grid gap-1">
                  {footerPhones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="font-black transition hover:text-school-gold"
                    >
                      {phone}
                    </a>
                  ))}
                </span>
              </div>
              <a
                href={`mailto:${school.email}`}
                className="flex gap-3 rounded-2xl bg-white/[0.07] p-3 font-black transition hover:bg-white/10 hover:text-school-gold"
              >
                <Mail className="mt-0.5 shrink-0 text-school-gold" size={18} />
                <span className="break-all">{school.email}</span>
              </a>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-school-gold/30 bg-school-gold p-5 text-school-navy shadow-premium">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-school-navy/80">
              Admissions
            </p>
            <p className="mt-3 text-3xl font-black leading-tight">Session 2026-27 Open</p>
            <p className="mt-3 text-sm font-semibold leading-6 text-school-navy/80">
              Classes from Pre-Nursery to Class 8. Contact the office for fee,
              transport, and admission details.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-school-navy px-5 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-school-blue"
            >
              Enquire Now
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-black/10 px-5 py-5 text-center text-xs font-bold tracking-wide text-blue-100">
        © 2026 {school.name}. All rights reserved. Built for a premium school experience.
      </div>
    </footer>
  );
}
