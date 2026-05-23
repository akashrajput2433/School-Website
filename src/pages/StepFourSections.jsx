import { useRef } from "react";
import {
  BookOpenCheck,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Mail,
  MapPin,
  Phone,
  PlayCircle,
  School,
  Send,
  Sparkles
} from "lucide-react";

function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "mx-auto text-center";

  return (
    <div className={`premium-section-heading max-w-4xl ${alignment}`}>
      <p className="premium-eyebrow">
        {eyebrow}
      </p>
      <h2 className="premium-section-title">
        {title}
      </h2>
      <span
        className={`premium-heading-rule ${
          align === "left" ? "" : "mx-auto"
        }`}
      >
        <span />
        <i />
      </span>
      {description ? (
        <p className="premium-section-description">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function AboutSection({ about, assets }) {
  return (
    <section id="about" className="bg-[#f8fbff] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="A trusted English Medium CBSE school for strong foundations."
              description={about.intro}
            />
            <div className="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2">
              {[
                { label: "Mission", text: about.mission, icon: School },
                { label: "Vision", text: about.vision, icon: Sparkles },
                { label: "Infrastructure", text: "Smart classrooms, transport support, security, activity areas, and a friendly campus environment.", icon: Building2 },
                { label: "Philosophy", text: about.philosophy, icon: BookOpenCheck }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.label} className="flex h-full min-h-[190px] flex-col rounded-[1.5rem] border border-white bg-white p-5 shadow-soft ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:border-school-gold/50 hover:shadow-premium dark:border-white/10 dark:bg-white/[0.08] dark:ring-white/10">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-school-mist text-school-blue dark:bg-white/10 dark:text-school-gold">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-4 text-lg font-black text-school-navy">{item.label}</h3>
                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="grid content-start gap-3 lg:pt-10 xl:pt-12">
            <div className="group relative overflow-hidden rounded-[2rem] bg-white p-2 shadow-premium ring-1 ring-slate-100 dark:bg-white/[0.08] dark:ring-white/10">
              <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] bg-school-mist sm:h-[420px] lg:h-[460px]">
                <img
                  src={assets.aboutHero}
                  alt="S.D. Public & Convent School main gate"
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-school-navy/35 via-transparent to-transparent" />
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-white bg-white p-4 shadow-soft ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-premium dark:border-white/10 dark:bg-white/[0.08] dark:ring-white/10">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-school-blue dark:text-school-gold">
                Our Campus Identity
              </p>
              <p className="mt-1.5 text-lg font-black leading-tight text-school-navy dark:text-white">
                A welcoming school environment for confident learning.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {about.timeline.map((item) => (
                <div key={item.year} className="flex min-h-[86px] flex-col justify-center rounded-[1.25rem] bg-school-navy p-3.5 text-white shadow-soft ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:shadow-premium">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-school-gold">{item.year}</p>
                  <p className="mt-1.5 text-[13px] font-semibold leading-5 text-blue-50">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AcademicZone({ academics }) {
  return (
    <section id="academics" className="bg-school-mist py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading align="left" eyebrow="Academic Zone" title="Structured learning from early years to Class 8." description={academics.curriculum} />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="grid gap-5">
            <div className="rounded-[1.75rem] bg-school-navy p-6 text-white shadow-premium">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-school-gold">Class Structure</p>
                  <p className="mt-2 text-sm font-semibold text-blue-100">Complete academic coverage for early and middle school learners.</p>
                </div>
                <span className="rounded-full bg-school-gold px-4 py-2 text-sm font-black text-school-navy">Session 2026-27</span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {academics.classStructure.map((item) => (
                  <span key={item} className="flex min-h-14 items-center justify-center rounded-2xl bg-white/10 px-4 text-center text-sm font-black text-blue-50 ring-1 ring-white/10">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
              {academics.systems.map((item) => (
                <div key={item} className="flex min-h-[150px] flex-col rounded-[1.75rem] bg-white p-5 text-sm font-bold leading-6 text-slate-700 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-premium">
                  <CheckCircle2 className="mb-4 text-school-blue" size={22} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[1.75rem] bg-white p-6 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-school-blue">Academic Calendar</p>
              <div className="mt-5 grid gap-4">
                {academics.calendar.map((item) => (
                  <div key={item.month} className="grid gap-2 border-l-4 border-school-gold pl-4 sm:grid-cols-[150px_1fr]">
                    <p className="font-black text-school-navy">{item.month}</p>
                    <p className="text-sm leading-6 text-slate-600">{item.work}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-auto w-full max-w-[560px] rounded-[1.75rem] bg-white p-5 text-center shadow-premium ring-1 ring-slate-100 sm:p-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-school-blue">Grading System</p>
              <p className="mt-2 text-sm font-semibold text-slate-600">Clear assessment bands for student progress.</p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100 text-left">
                <div className="grid grid-cols-[0.75fr_1fr_1.35fr] bg-school-navy px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-white">
                  <span>Grade</span>
                  <span>Marks</span>
                  <span>Remark</span>
                </div>
                {academics.gradingSystem.map((item) => (
                  <div key={item.grade} className="grid grid-cols-[0.75fr_1fr_1.35fr] border-t border-slate-100 px-4 py-3 text-sm transition hover:bg-school-mist/70">
                    <span className="font-black text-school-navy">{item.grade}</span>
                    <span className="font-semibold text-slate-600">{item.range}</span>
                    <span className="font-semibold text-slate-700">{item.remark}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export function StaffSection({ staff }) {
  return (
    <section id="staff" className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(56,189,248,0.13),transparent_28%),radial-gradient(circle_at_90%_15%,rgba(244,185,64,0.13),transparent_24%)] dark:opacity-60" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative">
          <SectionHeading eyebrow="Staff" title="Leadership and office team." description="Meet the school administration and office team available for admissions, records, academic coordination, and parent support." />
          <div className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
            {staff.map((person) => (
              <article key={person.name} className="group flex h-full min-h-[520px] flex-col overflow-hidden rounded-[2rem] border border-white bg-white shadow-soft ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1.5 hover:ring-school-gold/60 hover:shadow-premium dark:border-white/10 dark:bg-white/[0.08] dark:ring-white/10">
                <div className="relative h-72 shrink-0 overflow-hidden bg-school-mist">
                  <img src={person.image} alt={person.name} className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-navy/85 via-school-navy/12 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="inline-flex rounded-full bg-school-gold px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-school-navy">
                      {person.designation}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[1.35rem] font-black leading-tight text-school-navy dark:text-white">{person.name}</h3>
                  <p className="mt-3 min-h-[56px] text-sm font-semibold leading-7 text-slate-600 dark:text-slate-200">{person.qualification}</p>
                  {person.phone ? (
                    <a href={`tel:${person.phone}`} className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-school-navy px-4 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-school-blue hover:shadow-premium dark:bg-school-gold dark:text-school-navy">
                      <Phone size={17} />
                      {person.phone}
                    </a>
                  ) : (
                    <span className="mt-auto inline-flex min-h-12 items-center justify-center rounded-full bg-school-mist px-4 text-sm font-black text-school-navy ring-1 ring-school-blue/10 dark:bg-white/10 dark:text-school-gold dark:ring-white/10">
                      School Co-ordination
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-[2rem] bg-school-navy p-5 text-center text-white shadow-premium sm:p-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-school-gold">Parent Support Team</p>
            <p className="mt-2 text-sm font-semibold leading-7 text-blue-50">
              Our leadership and office staff help parents with admissions, records, academic coordination, and daily school support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ToppersSection({ toppers }) {
  const sliderRef = useRef(null);

  const slideToppers = (direction) => {
    if (!sliderRef.current) {
      return;
    }

    sliderRef.current.scrollBy({
      left: direction === "next" ? 330 : -330,
      behavior: "smooth"
    });
  };

  return (
    <section id="toppers" className="relative overflow-hidden bg-[#f8fbff] py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(244,185,64,0.16),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(56,189,248,0.16),transparent_26%)] dark:opacity-60" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative">
          <SectionHeading eyebrow="School Toppers" title="Achievement wall for academic excellence." description="Celebrating our bright achievers with their class-wise performance, confidence, and dedication to learning." />
          <div className="relative mt-12">
            <div className="pointer-events-none absolute -left-1 top-0 z-10 hidden h-full w-20 bg-gradient-to-r from-[#f8fbff] to-transparent dark:from-[#101d31] md:block" />
            <div className="pointer-events-none absolute -right-1 top-0 z-10 hidden h-full w-20 bg-gradient-to-l from-[#f8fbff] to-transparent dark:from-[#101d31] md:block" />

            <button
              type="button"
              onClick={() => slideToppers("prev")}
              className="absolute -left-2 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white text-school-navy shadow-premium transition hover:-translate-y-[54%] hover:bg-school-gold md:inline-flex dark:border-white/10 dark:bg-[#17243a] dark:text-school-gold"
              aria-label="Slide toppers left"
            >
              <ChevronLeft size={22} />
            </button>

            <div
              ref={sliderRef}
              className="nav-slider-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-4 md:px-10"
            >
              {toppers.map((student) => (
                <article key={student.name} className="group relative flex min-h-[360px] w-[265px] shrink-0 snap-start flex-col overflow-hidden rounded-[1.45rem] border border-white bg-white p-2 shadow-soft ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1.5 hover:ring-school-gold/60 hover:shadow-premium sm:w-[285px] dark:border-white/10 dark:bg-white/[0.08] dark:ring-white/10">
                  <div className="relative h-[185px] overflow-hidden rounded-[1.1rem] bg-school-mist sm:h-[195px]">
                    <img src={student.image} alt={`${student.name} school topper`} className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-school-navy/88 via-school-navy/18 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 text-white">
                      <div className="min-w-0">
                        <p className="inline-flex max-w-full rounded-full bg-white/15 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-school-gold ring-1 ring-white/20 backdrop-blur">
                          {student.className}
                        </p>
                        <h3 className="mt-1.5 truncate text-lg font-black leading-tight">{student.name}</h3>
                      </div>
                      <p className="shrink-0 rounded-xl bg-school-gold px-2.5 py-1.5 text-base font-black text-school-navy shadow-soft">
                        {student.score}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-3 text-center">
                    <p className="mx-auto inline-flex rounded-full bg-school-mist px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.13em] text-school-blue ring-1 ring-school-blue/10 dark:bg-white/10 dark:text-school-gold dark:ring-white/10">
                      {student.achievement}
                    </p>
                    <p className="mt-2.5 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-200">
                      Recognized for focused study habits, classroom discipline, and excellent academic performance.
                    </p>
                    <div className="mt-auto pt-3">
                      <div className="h-1.5 overflow-hidden rounded-full bg-school-blue/10 dark:bg-white/10">
                        <span className="block h-full rounded-full bg-gradient-to-r from-school-gold via-school-blue to-school-sky" style={{ width: student.progress || student.score }} />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button
              type="button"
              onClick={() => slideToppers("next")}
              className="absolute -right-2 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white text-school-navy shadow-premium transition hover:-translate-y-[54%] hover:bg-school-gold md:inline-flex dark:border-white/10 dark:bg-[#17243a] dark:text-school-gold"
              aria-label="Slide toppers right"
            >
              <ChevronRight size={22} />
            </button>

            <div className="mt-2 flex justify-center gap-2 md:hidden">
              <button
                type="button"
                onClick={() => slideToppers("prev")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-school-navy text-school-gold shadow-soft"
                aria-label="Slide toppers left"
              >
                <ChevronLeft size={21} />
              </button>
              <button
                type="button"
                onClick={() => slideToppers("next")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-school-navy text-school-gold shadow-soft"
                aria-label="Slide toppers right"
              >
                <ChevronRight size={21} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MandatoryDocs({ docs }) {
  return (
    <section id="docs" className="bg-school-mist py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Mandatory Docs" title="Important school documents in one place." description="This section is ready for official PDF uploads. Download buttons are shown in the final layout and can be connected to real files once documents are provided." />
        <div className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {docs.map((doc) => (
            <article key={doc} className="flex min-h-[190px] flex-col items-center justify-between rounded-[1.35rem] border border-white bg-white p-4 text-center shadow-soft ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:ring-school-gold/50 hover:shadow-premium dark:border-white/10 dark:bg-white/[0.08] dark:ring-white/10">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-school-navy text-school-gold shadow-soft dark:bg-school-gold dark:text-school-navy"><FileText size={22} /></div>
              <h3 className="mt-4 min-h-10 text-[15px] font-black leading-5 text-school-navy">{doc}</h3>
              <button type="button" className="mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-school-blue/20 px-4 text-xs font-black text-school-navy transition hover:bg-school-navy hover:text-white dark:border-white/10 dark:hover:bg-school-gold dark:hover:text-school-navy">
                <Download size={16} />
                PDF Soon
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function VideosSection({ videos }) {
  return (
    <section id="videos" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Videos" title="School videos and event clips." description="This section is ready for official YouTube or school event video embeds. Placeholder cards keep the layout polished until final links are shared." />
        <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-3">
          {videos.map((video) => (
            <article key={video.title} className="flex min-h-[340px] flex-col overflow-hidden rounded-[1.75rem] bg-school-navy text-white shadow-premium transition duration-300 hover:-translate-y-1">
              <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-school-blue to-school-navy">
                <PlayCircle className="text-school-gold" size={54} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-school-gold">{video.category}</p>
                <h3 className="mt-2 text-xl font-black">{video.title}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">Official video link can be embedded here after upload.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ school }) {
  const contactNumbers = school.phone.slice(0, 2);

  return (
    <section id="contact" className="relative overflow-hidden bg-[#f8fbff] py-14 sm:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(244,185,64,0.16),transparent_24%)] dark:opacity-60" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] bg-school-navy p-5 text-white shadow-premium sm:p-6">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-school-gold ring-1 ring-white/10">
                Contact Us
              </p>
              <h2 className="premium-dark-title mt-4 text-[1.9rem] font-black leading-[1.08] sm:text-[2.35rem]">
                Ready to discuss your child's admission?
              </h2>
              <span className="relative mt-5 block h-2 w-40 overflow-hidden rounded-full bg-white/10">
                <span className="absolute inset-y-0 left-0 w-28 rounded-full bg-gradient-to-r from-school-gold via-school-sky to-white shadow-[0_8px_24px_rgba(244,185,64,0.26)]" />
                <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-school-gold" />
              </span>
              <p className="mt-4 text-sm font-semibold leading-7 text-blue-50 sm:text-base">
                Reach the school office for admissions, transport details, fee structure, class availability, and campus visit guidance.
              </p>
            </div>

            <div className="mt-5 grid gap-3">
              <div className="grid auto-rows-fr gap-3 sm:grid-cols-2">
                {school.publicInfo.map((item) => (
                  <div key={item.label} className="min-h-[86px] rounded-3xl border border-white/10 bg-white/[0.08] p-4 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.12]">
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-school-gold">{item.label}</p>
                    <p className="mt-1.5 break-words text-base font-black leading-6 text-white">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.08] p-4 shadow-soft backdrop-blur">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-school-gold text-school-navy">
                        <Phone size={21} />
                      </span>
                      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-school-gold">Call Office</p>
                    </div>
                    <div className="mt-3 grid gap-2">
                      {contactNumbers.map((phone) => (
                        <a key={phone} href={`tel:${phone}`} className="inline-flex min-h-11 items-center justify-between rounded-2xl bg-white/[0.1] px-4 text-sm font-black text-white ring-1 ring-white/10 transition hover:bg-school-gold hover:text-school-navy">
                          {phone}
                          <Phone size={15} />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.08] p-4 shadow-soft backdrop-blur">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-school-gold text-school-navy">
                        <Mail size={21} />
                      </span>
                      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-school-gold">Email Us</p>
                    </div>
                    <a href={`mailto:${school.email}`} className="mt-3 block rounded-2xl bg-white/[0.1] px-4 py-3 text-sm font-black leading-6 text-white ring-1 ring-white/10 transition hover:bg-school-gold hover:text-school-navy">
                      <span className="break-all">{school.email}</span>
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 rounded-3xl border border-white/10 bg-white/[0.08] p-4 shadow-soft backdrop-blur">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-school-gold text-school-navy">
                    <MapPin size={21} />
                  </span>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-school-gold">School Address</p>
                    <p className="mt-1.5 text-sm font-semibold leading-6 text-blue-50">{school.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form action="mailto:sanjayyadavsky424@gmail.com" method="post" encType="text/plain" className="mx-auto w-full max-w-[760px] rounded-[2.25rem] border border-white bg-white/[0.94] p-6 shadow-premium ring-1 ring-slate-100 backdrop-blur sm:p-8 dark:border-white/10 dark:bg-white/[0.08]">
            <div className="mb-5 flex items-center gap-4 rounded-3xl bg-school-mist p-4 dark:bg-white/10">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-school-navy text-school-gold dark:bg-school-gold dark:text-school-navy">
                <Send size={22} />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-school-blue dark:text-school-gold">Admission Enquiry</p>
                <p className="mt-1 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-200">Share your details and the office team will guide you.</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-school-navy">Parent Name<input name="Parent Name" className="min-h-[54px] rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-school-blue focus:ring-4 focus:ring-school-blue/10" placeholder="Enter name" /></label>
              <label className="grid gap-2 text-sm font-bold text-school-navy">Phone Number<input name="Phone Number" className="min-h-[54px] rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-school-blue focus:ring-4 focus:ring-school-blue/10" placeholder="Enter phone" /></label>
              <label className="grid gap-2 text-sm font-bold text-school-navy">Class Interested<input name="Class Interested" className="min-h-[54px] rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-school-blue focus:ring-4 focus:ring-school-blue/10" placeholder="Example: L.K.G." /></label>
              <label className="grid gap-2 text-sm font-bold text-school-navy">Email<input name="Email" className="min-h-[54px] rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-school-blue focus:ring-4 focus:ring-school-blue/10" placeholder="Optional" /></label>
              <label className="grid gap-2 text-sm font-bold text-school-navy sm:col-span-2">Message<textarea name="Message" className="min-h-28 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-school-blue focus:ring-4 focus:ring-school-blue/10" placeholder="Write your enquiry" /></label>
            </div>
            <button type="submit" className="mt-6 inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-full bg-school-navy px-6 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-school-blue hover:shadow-premium dark:bg-school-gold dark:text-school-navy">
              Send Enquiry
              <Send size={17} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

