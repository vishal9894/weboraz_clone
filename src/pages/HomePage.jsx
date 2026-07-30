import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import BusinessCart from '../components/BusinessCart';
import Industries from '../components/Industries';
import home from '../assets/home.png'

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
    <div className="relative overflow-hidden bg-[#fcfcfd] font-sans antialiased">
      <div className="pointer-events-none absolute inset-0">
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
        <div
          className="absolute inset-0 opacity-[0.55]
            [background-image:linear-gradient(to_right,#0f172a0d_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0d_1px,transparent_1px)]
            [background-size:56px_56px]
            [mask-image:radial-gradient(ellipse_75%_60%_at_50%_40%,#000_35%,transparent_100%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,#ffffff_0%,transparent_55%)]" />
      </div>

      <section className="relative z-10 mx-auto w-full max-w-7xl px-5 py-2 sm:px-8 lg:px-12">
        <motion.div
          className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-xl">
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

          <motion.div variants={item} className="hidden lg:flex justify-cente lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="w-full max-w-[28rem]"
            >
              <div className="overflow-hidden ">
                <img
                  src={home}
                  alt="Hourglass with blue sand"
                  className="w-full h-auto object-contain -mt-3 "
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

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
