import { Mail, MapPin, Phone } from "lucide-react";

export function Footer({ school }) {
  return (
    <footer className="bg-school-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.2fr_1fr] lg:px-10">
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
        </div>

        <div className="grid gap-3 text-sm text-blue-50">
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
    </footer>
  );
}
