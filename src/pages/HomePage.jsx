import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import BusinessCart from '../components/BusinessCart';
import Industries from '../components/Industries';

/* ------------------------------------------------------------------ */
/*  Icons (inline SVG — crisper + more premium than emoji)             */
/* ------------------------------------------------------------------ */
const Icon = {
  Bolt: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z" />
    </svg>
  ),
  Spark: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  ),
  Arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  Play: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  ),
  Check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  ),
  Cpu: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="6" y="6" width="12" height="12" rx="3" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1.2" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </svg>
  ),
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const PILLS = ['AI-Powered', 'Smart Automation', 'Ship Weekly'];

const PIPELINE = [
  { label: 'Discovery & Scoping', value: 100, done: true },
  { label: 'UI System · Zoraz AI', value: 82 },
  { label: 'Build & Integrations', value: 46 },
];

const LOGOS = ['NEXTPAY', 'ORBITAL', 'FLUXKIT', 'NORTHWIND', 'VANTA'];

const BUSINESS_CART_ITEMS = [
  {
    icon: 'cursor',
    problem: 'Customers Cannot Complete Important Actions Easily',
    solution:
      'Conversion-focused websites, portals and mobile experiences make it easier for customers to enquire, book, purchase or access the information they need.',
  },
  {
    icon: 'sheet',
    problem: 'Teams Rely on Spreadsheets and Repetitive Follow-Ups',
    solution:
      'Connected custom software and workflow automation reduce repetitive work, improve visibility and help teams manage everyday operations more efficiently.',
  },
  {
    icon: 'puzzle',
    problem: 'Existing Tools Do Not Match the Business Process',
    solution:
      'Purpose-built platforms, integrations and dashboards connect systems and support the way the business actually operates.',
  },
  {
    icon: 'rocket',
    problem: 'A Product Idea Needs to Become a Reliable MVP',
    solution:
      'Product strategy, UX design, development, testing and launch support help turn an early idea into a usable digital product.',
  },
];

/* ------------------------------------------------------------------ */

const HomePage = () => {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { y: reduce ? 0 : 22, opacity: 0, filter: 'blur(6px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const float = (d = 4, y = 10, delay = 0) =>
    reduce
      ? {}
      : {
          animate: { y: [0, -y, 0] },
          transition: { duration: d, repeat: Infinity, ease: 'easeInOut', delay },
        };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fcfcfd] font-sans antialiased">
      {/* ---------------- Background ---------------- */}
      <div className="pointer-events-none absolute inset-0">
        {/* aurora blobs */}
        <motion.div
          className="absolute -top-40 -right-32 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_center,#ff3b00_0%,transparent_65%)] opacity-[0.18] blur-3xl"
          animate={reduce ? {} : { scale: [1, 1.12, 1], x: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-48 -left-32 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,#ff8a3d_0%,transparent_65%)] opacity-[0.16] blur-3xl"
          animate={reduce ? {} : { scale: [1, 1.18, 1], y: [0, -24, 0] }}
          transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* grid, masked to fade out */}
        <div
          className="absolute inset-0 opacity-[0.55]
            [background-image:linear-gradient(to_right,#0f172a0d_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0d_1px,transparent_1px)]
            [background-size:56px_56px]
            [mask-image:radial-gradient(ellipse_75%_60%_at_50%_40%,#000_35%,transparent_100%)]"
        />
        {/* fine noise / vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,#ffffff_0%,transparent_55%)]" />
      </div>

      {/* ---------------- Content ---------------- */}
      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 py-20 sm:px-8 lg:px-12">
        <motion.div
          className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* ============ LEFT ============ */}
          <div>
            {/* Badge */}
            <motion.div variants={item}>
              <div className="group inline-flex items-center gap-2.5 rounded-full border border-slate-900/[0.07] bg-white/80 py-1.5 pl-1.5 pr-4 shadow-[0_1px_2px_rgba(16,24,40,.06),0_8px_24px_-12px_rgba(255,59,0,.35)] backdrop-blur-xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff3b00] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  Weboraz
                </span>
                <span className="text-xs font-medium text-slate-600">
                  Delivery velocity with{' '}
                  <span className="font-semibold text-slate-900">Zoraz AI</span>
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={item}
              className="mt-7 text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.035em] text-slate-900 sm:text-6xl lg:text-[4.25rem]"
            >
              Transforming ideas
              <br />
              into{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#ff3b00] via-[#ff6a2b] to-[#ffa14a] bg-clip-text text-transparent">
                  digital reality
                </span>
                {/* hand-drawn underline */}
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-[#ff3b00]/35"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <motion.path
                    d="M2 8C60 3 120 2 180 5c40 2 80 4 118 2"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.9, duration: 1, ease: 'easeInOut' }}
                  />
                </svg>
              </span>
              <span className="text-[#ff3b00]">.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base"
            >
              <span className="font-semibold text-slate-900">
                Powered by AI, built by experts.
              </span>{' '}
              We pair senior product teams with Zoraz AI to design, build, automate
              and scale high-quality digital products — faster, smarter, and far
              more efficiently.
            </motion.p>

            {/* Checklist */}
            <motion.ul variants={item} className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5">
              {['Fixed weekly sprints', 'Senior-only team', 'Ship in 8 weeks'].map((t) => (
                <li key={t} className="flex items-center gap-2 text-[13px] font-medium text-slate-700">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ff3b00]/10 text-[#ff3b00]">
                    <Icon.Check className="h-2.5 w-2.5" />
                  </span>
                  {t}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.985 }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(255,59,0,.7)] transition-shadow hover:shadow-[0_16px_40px_-10px_rgba(255,59,0,.85)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff3b00] to-[#ff7a29] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative">Start your project</span>
                <Icon.Arrow className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.985 }}
                className="group inline-flex items-center gap-2.5 rounded-full border border-slate-900/10 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur-xl transition-colors hover:border-[#ff3b00]/40 hover:text-[#ff3b00]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff3b00]/10 text-[#ff3b00] transition-transform group-hover:scale-110">
                  <Icon.Play className="ml-[1px] h-2.5 w-2.5" />
                </span>
                Discover Zoraz AI
              </motion.button>
            </motion.div>

            {/* Social proof + stats */}
            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {['#ff3b00', '#f97316', '#0f172a', '#64748b'].map((c, i) => (
                    <span
                      key={i}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow-sm"
                      style={{ background: c }}
                    >
                      {['A', 'M', 'K', 'S'][i]}
                    </span>
                  ))}
                </div>
                <div className="text-[13px] leading-tight">
                  <p className="font-semibold text-slate-900">40+ teams shipping</p>
                  <p className="text-slate-500">with Weboraz</p>
                </div>
              </div>

              <div className="hidden h-9 w-px bg-slate-900/10 sm:block" />

              <div className="flex items-center gap-7">
                <Stat icon={<Icon.Bolt className="h-4 w-4" />} value="24" label="Sprints shipped" />
                <Stat
                  icon={<Icon.Spark className="h-4 w-4" />}
                  value={<>4.2<sup className="text-xs">x</sup></>}
                  label="Delivery velocity"
                />
              </div>
            </motion.div>
          </div>

          {/* ============ RIGHT ============ */}
          <motion.div variants={item} className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[26rem]">
              {/* glow behind card */}
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#ff3b00]/20 via-orange-300/10 to-transparent blur-2xl" />

              {/* gradient border wrapper */}
              <motion.div
                {...float(7, 10)}
                className="relative rounded-[1.75rem] bg-gradient-to-b from-white/90 to-white/40 p-px shadow-[0_30px_80px_-30px_rgba(15,23,42,.35)]"
              >
                <div className="relative overflow-hidden rounded-[1.7rem] bg-white/70 p-6 backdrop-blur-2xl">
                  {/* card header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff3b00] to-[#ff8a3d] text-white shadow-lg shadow-[#ff3b00]/30">
                        <Icon.Cpu className="h-5 w-5" />
                        <motion.span
                          className="absolute inset-0 rounded-2xl ring-2 ring-[#ff3b00]/40"
                          animate={reduce ? {} : { scale: [1, 1.35], opacity: [0.6, 0] }}
                          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Zoraz AI</p>
                        <p className="text-[11px] text-slate-500">Sprint co-pilot</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-600 ring-1 ring-emerald-500/15">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                      Live
                    </span>
                  </div>

                  {/* pipeline */}
                  <div className="mt-6 space-y-4">
                    {PIPELINE.map((row, i) => (
                      <div key={row.label}>
                        <div className="mb-1.5 flex items-center justify-between text-[11.5px]">
                          <span className="font-medium text-slate-700">{row.label}</span>
                          <span className={row.done ? 'font-semibold text-emerald-600' : 'text-slate-400'}>
                            {row.done ? 'Done' : `${row.value}%`}
                          </span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-900/[0.06]">
                          <motion.div
                            className={`h-full rounded-full ${
                              row.done
                                ? 'bg-emerald-500'
                                : 'bg-gradient-to-r from-[#ff3b00] to-[#ff9a4d]'
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: `${row.value}%` }}
                            transition={{ delay: 0.8 + i * 0.18, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* divider */}
                  <div className="my-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-900/10 to-transparent" />
                    <span className="text-[9.5px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                      Innovation
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-900/10 to-transparent" />
                  </div>

                  {/* pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {PILLS.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-[#ff3b00]/15 bg-[#ff3b00]/[0.06] px-2.5 py-1 text-[10.5px] font-medium text-[#d63200]"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  {/* mini stats */}
                  <div className="mt-5 grid grid-cols-2 gap-2.5">
                    <MiniStat value="8" label="Sprints in 8 weeks" />
                    <MiniStat value="4.2x" label="Faster delivery" accent />
                  </div>
                </div>
              </motion.div>

              {/* floating chips */}
              <motion.div
                {...float(5, 14)}
                className="absolute -left-5 top-16 hidden items-center gap-2 rounded-2xl border border-white/70 bg-white/80 px-3 py-2 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:flex"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#ff3b00]/10 text-[#ff3b00]">
                  <Icon.Bolt className="h-3.5 w-3.5" />
                </span>
                <div className="leading-tight">
                  <p className="text-[11px] font-semibold text-slate-900">Deploy passed</p>
                  <p className="text-[9.5px] text-slate-500">2m ago · main</p>
                </div>
              </motion.div>

              <motion.div
                {...float(6, 12, 0.8)}
                className="absolute -right-4 bottom-14 hidden items-center gap-2 rounded-2xl border border-white/70 bg-white/80 px-3 py-2 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:flex"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <Icon.Check className="h-3.5 w-3.5" />
                </span>
                <div className="leading-tight">
                  <p className="text-[11px] font-semibold text-slate-900">QA automated</p>
                  <p className="text-[9.5px] text-slate-500">128 checks</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* ---------------- Logo strip ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-16 border-t border-slate-900/[0.06] pt-7"
        >
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Human × Intelligence — trusted by product teams
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {LOGOS.map((l) => (
              <span
                key={l}
                className="text-sm font-bold tracking-[0.18em] text-slate-300 transition-colors hover:text-slate-500"
              >
                {l}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
      <BusinessCart
        className="mt-16"
        id="problems"
        eyebrow="Where Businesses Get Stuck"
        title={
          <>
            Technology Should Solve
            <br />
            a Business Problem,
            <br />
            Not Add Another Tool
          </>
        }
        subtitle="Businesses rarely need technology for its own sake. They need simpler customer journeys, more efficient operations and digital systems that support growth."
        items={BUSINESS_CART_ITEMS}
        accent="#ff3b00"
        columns={2}
        problemLabel="The Problem"
        solutionLabel="How Weboraz Helps"
        cta={{
          label: 'Talk to our team',
          href: '#contact',
          note: 'Recognise any of these?',
        }}
      />
      <Industries id="industries" />

    </div>
  );
};



/* ------------------------------------------------------------------ */
const Stat = ({ icon, value, label }) => (
  <div className="flex items-center gap-2.5">
    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#ff3b00]/15 bg-[#ff3b00]/[0.07] text-[#ff3b00]">
      {icon}
    </div>
    <div className="leading-tight">
      <p className="text-lg font-semibold tracking-tight text-slate-900">{value}</p>
      <p className="text-[11px] text-slate-500">{label}</p>
    </div>
  </div>
);

const MiniStat = ({ value, label, accent }) => (
  <div className="rounded-xl border border-slate-900/[0.06] bg-white/60 p-3 text-center backdrop-blur-sm">
    <p className={`text-lg font-semibold tracking-tight ${accent ? 'text-[#ff3b00]' : 'text-slate-900'}`}>
      {value}
    </p>
    <p className="text-[9.5px] text-slate-500">{label}</p>
    
  </div>
);

export default HomePage;
