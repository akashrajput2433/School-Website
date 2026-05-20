import {
  BookOpenCheck,
  Building2,
  CheckCircle2,
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
    <div className={`max-w-4xl ${alignment}`}>
      <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-school-blue ring-1 ring-school-blue/10 dark:bg-white/10 dark:text-school-gold dark:ring-white/10">
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

export function AboutSection({ about, assets }) {
  return (
    <section id="about" className="bg-[#f8fbff] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
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
                  <article key={item.label} className="flex h-full min-h-[220px] flex-col rounded-[1.75rem] border border-white bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-school-gold/50 hover:shadow-premium">
                    <Icon className="text-school-blue" size={24} />
                    <h3 className="mt-4 text-lg font-black text-school-navy">{item.label}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="overflow-hidden rounded-[2rem] bg-white p-2 shadow-premium">
              <img src={assets.event} alt="Students activity at S.D. Public School" className="h-[360px] w-full rounded-[1.5rem] object-cover" />
            </div>
            <div className="grid auto-rows-fr gap-4 sm:grid-cols-3">
              {about.timeline.map((item) => (
                <div key={item.year} className="flex min-h-[132px] flex-col justify-between rounded-[1.75rem] bg-school-navy p-5 text-white shadow-soft">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-school-gold">{item.year}</p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-blue-50">{item.title}</p>
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

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-5">
            <div className="rounded-[1.75rem] bg-school-navy p-6 text-white shadow-premium">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-school-gold">Class Structure</p>
                  <p className="mt-2 text-sm font-semibold text-blue-100">Complete academic coverage for early and middle school learners.</p>
                </div>
                <span className="rounded-full bg-school-gold px-4 py-2 text-sm font-black text-school-navy">Session 2025-26</span>
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
            <div className="rounded-[1.75rem] bg-white p-6 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-school-blue">Grading System</p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100">
                <div className="grid grid-cols-[0.75fr_1fr_1.35fr] bg-school-navy px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-white">
                  <span>Grade</span>
                  <span>Marks</span>
                  <span>Remark</span>
                </div>
                {academics.gradingSystem.map((item) => (
                  <div key={item.grade} className="grid grid-cols-[0.75fr_1fr_1.35fr] border-t border-slate-100 px-4 py-3 text-sm">
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
    <section id="staff" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Staff" title="Leadership and office team." description="Meet the school administration and office team available for admissions, records, academic coordination, and parent support." />
        <div className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-5">
          {staff.map((person) => (
            <article key={person.name} className="flex h-full min-h-[460px] flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-soft ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:ring-school-gold/50 hover:shadow-premium">
              <div className="h-44 shrink-0 overflow-hidden bg-school-mist">
                <img src={person.image} alt={person.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-school-blue">{person.designation}</p>
                <h3 className="mt-2 text-xl font-black text-school-navy">{person.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{person.qualification}</p>
                {person.phone ? (
                  <div className="mt-auto grid gap-2 pt-4">
                    {person.phone.split(",").map((phone) => {
                      const cleanPhone = phone.trim();
                      return (
                        <a key={cleanPhone} href={`tel:${cleanPhone}`} className="inline-flex items-center gap-2 rounded-full bg-school-mist px-4 py-2 text-sm font-black text-school-navy transition hover:bg-school-gold">
                          <Phone size={16} />
                          {cleanPhone}
                        </a>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ToppersSection({ toppers }) {
  return (
    <section id="toppers" className="bg-[#f8fbff] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="School Toppers" title="Achievement wall for academic excellence." description="These premium topper cards are ready for real student photos and final result data whenever the school provides them." />
        <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-3">
          {toppers.map((student, index) => (
            <article key={student.name} className="relative flex min-h-[330px] flex-col overflow-hidden rounded-[1.75rem] bg-school-navy p-6 text-white shadow-premium">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-school-gold/20" />
              <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-school-gold text-2xl font-black text-school-navy">{index + 1}</div>
              <h3 className="relative mt-6 text-2xl font-black">{student.name}</h3>
              <p className="relative mt-1 text-sm font-bold text-blue-100">{student.className}</p>
              <p className="relative mt-5 text-5xl font-black text-school-gold">{student.score}</p>
              <p className="relative mt-3 text-sm font-semibold text-blue-50">{student.achievement}</p>
            </article>
          ))}
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
        <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {docs.map((doc) => (
            <article key={doc} className="flex min-h-[255px] flex-col items-center rounded-[1.75rem] bg-white p-5 text-center shadow-soft ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:ring-school-gold/50 hover:shadow-premium">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-school-navy text-school-gold"><FileText size={25} /></div>
              <h3 className="mt-5 min-h-12 text-base font-black text-school-navy">{doc}</h3>
              <button type="button" className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-school-blue/20 px-4 py-2 text-sm font-bold text-school-navy transition hover:bg-school-navy hover:text-white">
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
        <div className="relative grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="rounded-[2rem] bg-school-navy p-5 text-white shadow-premium sm:p-6">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-school-gold ring-1 ring-white/10">
                Contact Us
              </p>
              <h2 className="mt-4 text-[1.9rem] font-black leading-[1.08] text-white sm:text-[2.35rem]">
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

          <form className="rounded-[2rem] border border-white bg-white/[0.92] p-5 shadow-premium ring-1 ring-slate-100 backdrop-blur sm:p-6 dark:border-white/10 dark:bg-white/[0.08]">
            <div className="mb-5 flex items-center gap-4 rounded-3xl bg-school-mist p-4 dark:bg-white/10">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-school-navy text-school-gold dark:bg-school-gold dark:text-school-navy">
                <Send size={22} />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-school-blue dark:text-school-gold">Admission Enquiry</p>
                <p className="mt-1 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-200">Share your details and the office team will guide you.</p>
              </div>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-school-navy">Parent Name<input className="min-h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-school-blue focus:ring-4 focus:ring-school-blue/10" placeholder="Enter name" /></label>
              <label className="grid gap-2 text-sm font-bold text-school-navy">Phone Number<input className="min-h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-school-blue focus:ring-4 focus:ring-school-blue/10" placeholder="Enter phone" /></label>
              <label className="grid gap-2 text-sm font-bold text-school-navy">Class Interested<input className="min-h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-school-blue focus:ring-4 focus:ring-school-blue/10" placeholder="Example: L.K.G." /></label>
              <label className="grid gap-2 text-sm font-bold text-school-navy">Email<input className="min-h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-school-blue focus:ring-4 focus:ring-school-blue/10" placeholder="Optional" /></label>
              <label className="grid gap-2 text-sm font-bold text-school-navy sm:col-span-2">Message<textarea className="min-h-24 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-school-blue focus:ring-4 focus:ring-school-blue/10" placeholder="Write your enquiry" /></label>
            </div>
            <button type="button" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-school-navy px-6 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-school-blue hover:shadow-premium dark:bg-school-gold dark:text-school-navy">
              Send Enquiry
              <Send size={17} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

