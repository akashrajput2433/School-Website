import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  AboutSection,
  AcademicZone,
  ContactSection,
  MandatoryDocs,
  StaffSection,
  ToppersSection,
  VideosSection
} from "./StepFourSections.jsx";
import {
  ArrowRight,
  BookOpenCheck,
  Bus,
  CalendarDays,
  Cctv,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Laptop,
  Library,
  Megaphone,
  MessagesSquare,
  MonitorPlay,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  UsersRound
} from "lucide-react";

const iconMap = {
  BookOpenCheck,
  Bus,
  Cctv,
  GraduationCap,
  Laptop,
  Library,
  MessagesSquare,
  MonitorPlay,
  Sparkles,
  Trophy
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "mx-auto text-center";

  return (
    <div className={`max-w-4xl ${alignment}`}>
      <p className="inline-flex rounded-full bg-school-mist px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-school-blue ring-1 ring-school-blue/10 dark:bg-white/10 dark:text-school-gold dark:ring-white/10">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-[2.1rem] font-black leading-[1.08] text-school-navy sm:text-5xl">
        {title}
      </h2>
      <span
        className={`relative mt-5 block h-2 w-40 overflow-hidden rounded-full bg-school-blue/10 ${
          align === "left" ? "" : "mx-auto"
        }`}
      >
        <span className="absolute inset-y-0 left-0 w-28 rounded-full bg-gradient-to-r from-school-gold via-school-blue to-school-sky shadow-[0_8px_24px_rgba(56,189,248,0.28)]" />
        <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-school-gold" />
      </span>
      {description ? (
        <p className="mt-5 text-base font-medium leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function HeroSlider({ school, assets, admission }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % assets.banners.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [assets.banners.length]);

  const goToSlide = (direction) => {
    setActiveSlide((current) => {
      if (direction === "next") {
        return (current + 1) % assets.banners.length;
      }

      return (current - 1 + assets.banners.length) % assets.banners.length;
    });
  };

  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#f7fbff] dark:bg-[#101d31]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.18),transparent_28%),linear-gradient(135deg,#ffffff_0%,#eef7ff_48%,#fff8e7_100%)] dark:bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(244,185,64,0.13),transparent_26%),linear-gradient(135deg,#101d31_0%,#17243a_52%,#0f1b2e_100%)]" />
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[linear-gradient(90deg,rgba(8,47,99,0.08)_1px,transparent_1px),linear-gradient(rgba(8,47,99,0.06)_1px,transparent_1px)] bg-[size:42px_42px] opacity-40 dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] dark:opacity-25" />

      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pt-4"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white bg-white/75 px-4 py-2 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/10">
            <img
              src={school.logo}
              alt={`${school.name} logo`}
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="text-sm font-bold text-school-navy dark:text-white">
              {school.type}
            </span>
          </div>

          <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.05] text-school-navy dark:text-white sm:text-5xl lg:text-6xl">
            {school.name}
          </h1>
          <p className="mt-4 text-xl font-semibold text-school-blue dark:text-school-gold">
            {school.tagline}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-200 sm:text-lg">
            {admission.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-school-navy px-6 py-3 text-sm font-bold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-school-blue"
            >
              {admission.primaryCta}
              <ArrowRight size={18} />
            </a>
            <a
              href="#gallery"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-school-blue/20 bg-white px-6 py-3 text-sm font-bold text-school-navy shadow-sm transition hover:-translate-y-0.5 hover:border-school-blue/40 hover:bg-school-mist dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              {admission.secondaryCta}
            </a>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
            {["Pre-Nursery to Class 8", "CBSE Pattern", "Safe Campus"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white bg-white/70 px-4 py-3 text-sm font-bold text-school-navy shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white"
                >
                  <CheckCircle2 className="mb-2 text-school-gold" size={18} />
                  {item}
                </div>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-2 shadow-premium dark:border-white/10 dark:bg-white/10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-school-mist dark:bg-[#17243a] sm:aspect-[16/10] lg:aspect-[5/4] xl:aspect-[16/11]">
              {assets.banners.map((banner, index) => (
                <img
                  key={banner}
                  src={banner}
                  alt={`${school.name} admission banner ${index + 1}`}
                  className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
                    activeSlide === index
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-school-navy/35 via-transparent to-white/5" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div className="rounded-2xl bg-white/[0.92] px-4 py-3 shadow-soft backdrop-blur dark:bg-[#17243a]/90">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-school-blue dark:text-school-gold">
                    Session 2026-27
                  </p>
                  <p className="mt-1 text-lg font-black text-school-navy dark:text-white">
                    {admission.title}
                  </p>
                </div>
                <div className="hidden gap-2 sm:flex">
                  <button
                    type="button"
                    onClick={() => goToSlide("prev")}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.92] text-school-navy shadow-soft transition hover:bg-school-gold"
                    aria-label="Previous banner"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() => goToSlide("next")}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.92] text-school-navy shadow-soft transition hover:bg-school-gold"
                    aria-label="Next banner"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 -top-5 hidden rounded-3xl bg-school-navy px-5 py-4 text-white shadow-premium md:block">
            <p className="text-3xl font-black">2026</p>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
              Admissions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PrincipalMessage({ assets, message }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[1.75rem] bg-school-mist shadow-premium">
            <img
              src={assets.facultyMale}
              alt="S.D. Public School faculty group"
              className="h-full min-h-[340px] w-full object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white/[0.92] p-5 shadow-soft backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-school-blue">
              Trusted Guidance
            </p>
            <p className="mt-1 text-xl font-black text-school-navy">
              Caring leadership for every child
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="pt-8 lg:pt-0"
        >
          <SectionHeading
            align="left"
            eyebrow="Principal Message"
            title="A school culture built on discipline, confidence, and care."
            description={message.message}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {["English speaking environment", "Regular academic attention", "Values with modern learning", "Safe and friendly campus"].map(
              (point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 text-sm font-bold text-slate-700"
                >
                  <ShieldCheck className="text-school-blue" size={20} />
                  {point}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Highlights({ highlights }) {
  return (
    <section id="features" className="bg-school-mist py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="School Highlights"
          title="Facilities that make learning clear, active, and joyful."
          description="A modern school experience with strong academics, thoughtful supervision, and activities that help children grow beyond textbooks."
        />

        <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Star;
            return (
              <motion.article
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group flex h-full min-h-[260px] flex-col rounded-[1.75rem] border border-white bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-school-gold/50 hover:shadow-premium"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-school-navy text-school-gold transition group-hover:bg-school-blue group-hover:text-white">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-black text-school-navy">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stats({ stats }) {
  return (
    <section className="bg-school-navy py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-white/10 bg-white/[0.08] px-6 py-7 text-center backdrop-blur"
          >
            <p className="text-4xl font-black text-school-gold sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-blue-100">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Notices({ notices }) {
  return (
    <section id="notices" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Latest Notices"
            title="Important updates for parents and students."
            description="Stay connected with admission updates, school announcements, transport information, and academic notices."
          />
          <a
            href="#notices"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-school-blue/20 px-5 py-3 text-sm font-bold text-school-navy transition hover:bg-school-mist"
          >
            View Notice Board
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="mt-10 grid auto-rows-fr gap-5 lg:grid-cols-3">
          {notices.map((notice) => (
            <article
              key={notice.title}
              className="flex h-full min-h-[240px] flex-col rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-school-gold/50 hover:shadow-premium"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-school-mist px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-school-blue">
                  <Megaphone size={14} />
                  {notice.tag}
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <CalendarDays size={16} />
                  {notice.date}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-black text-school-navy">
                {notice.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {notice.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryPreview({ gallery }) {
  const sliderItems = [...gallery, ...gallery];

  return (
    <section id="gallery" className="overflow-hidden bg-[#f8fbff] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Gallery Preview"
          title="School tour moments in a premium gallery slider."
          description="A smooth auto-scrolling gallery with equal-size photo cards, clean cropping, and real moments from the school community."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="relative mt-12"
        >
          <div className="pointer-events-none absolute -left-1 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f8fbff] to-transparent dark:from-[#101d31] sm:w-28" />
          <div className="pointer-events-none absolute -right-1 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f8fbff] to-transparent dark:from-[#101d31] sm:w-28" />

          <div className="overflow-hidden rounded-[2rem] border border-white bg-white/80 p-3 shadow-premium ring-1 ring-slate-100 backdrop-blur dark:border-white/10 dark:bg-white/[0.06] dark:ring-white/10">
            <div className="gallery-slider-track flex w-max gap-4">
              {sliderItems.map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="group relative h-[260px] w-[330px] shrink-0 overflow-hidden rounded-[1.5rem] bg-school-mist shadow-soft ring-1 ring-white/80 transition duration-300 hover:-translate-y-1 hover:shadow-premium sm:h-[310px] sm:w-[430px] lg:h-[340px] lg:w-[520px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                    loading={index < gallery.length ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-navy/70 via-school-navy/5 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-school-gold">
                      {item.category}
                    </p>
                    <h3 className="mt-1 text-xl font-black">{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {gallery.map((item) => (
              <div
                key={item.title}
                className="h-2.5 w-8 rounded-full bg-school-blue/20 first:bg-school-gold dark:bg-white/20"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AdmissionBand({ school }) {
  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-8 rounded-[2rem] bg-school-navy p-6 text-white shadow-premium sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-school-gold">
              Admissions Helpdesk
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Ready to discuss your child's admission?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100">
              Contact the school office for fee details, transport route support,
              class availability, and admission guidance.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-5 text-school-navy shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-school-blue">
              Call Now
            </p>
            <div className="mt-4 grid gap-3">
              {school.phone.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 rounded-2xl bg-school-mist px-4 py-3 text-base font-black transition hover:bg-school-gold"
                >
                  <PhoneCall size={19} />
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage({ config }) {
  const { school, assets, home } = config;

  return (
    <>
      <HeroSlider school={school} assets={assets} admission={home.admission} />
      <PrincipalMessage assets={assets} message={home.principalMessage} />
      <AboutSection about={home.about} assets={assets} />
      <Highlights highlights={home.highlights} />
      <Stats stats={home.stats} />
      <AcademicZone academics={home.academics} />
      <StaffSection staff={home.staff} />
      <ToppersSection toppers={home.toppers} />
      <Notices notices={home.notices} />
      <MandatoryDocs docs={home.mandatoryDocs} />
      <GalleryPreview gallery={home.galleryPreview} />
      <VideosSection videos={home.videos} />
      <ContactSection school={school} />
    </>
  );
}









