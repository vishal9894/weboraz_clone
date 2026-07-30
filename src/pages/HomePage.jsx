import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import BusinessCart from '../components/BusinessCart';
import Industries from '../components/Industries';
import ProductShowcase from '../components/ProductShowcase';
import home from '../assets/home.png';
import doctor from '../assets/doctor.png';

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

const SOLUTIONS = [
  {
    id: 'web-development',
    label: 'Web Development',
    title: 'Web Development',
    description:
      'Websites and web applications designed to build trust, generate enquiries and support business operations.',
    bullets: [
      'Business and service websites',
      'Web applications and portals',
      'Website redesign and modernization',
      'Responsive, performance-focused builds',
    ],
  },
  {
    id: 'mobile-app-development',
    label: 'Mobile App Development',
    title: 'Mobile App Development',
    description:
      'Mobile experiences that connect customers and employees with seamless workflows across iOS and Android.',
    bullets: [
      'Native and cross-platform apps',
      'B2C and enterprise mobile products',
      'Mobile-first experience design',
      'App store launch support',
    ],
  },
  {
    id: 'custom-software',
    label: 'Custom Software',
    title: 'Custom Software',
    description:
      'Purpose-built systems and automation platforms that match your operational processes and remove manual work.',
    bullets: [
      'Business process automation',
      'CRM, ERP and workflow systems',
      'Data-driven dashboards and reporting',
      'Scalable cloud-native architecture',
    ],
  },
  {
    id: 'ai-automation',
    label: 'AI Automation',
    title: 'AI Automation',
    description:
      'AI-powered solutions that automate routine work and deliver smarter customer experiences at scale.',
    bullets: [
      'GPT and conversational AI',
      'Process automation with intelligent workflows',
      'AI assistants for teams and customers',
      'Data-driven recommendation systems',
    ],
  },
  {
    id: 'digital-transformation',
    label: 'Digital Transformation',
    title: 'Digital Transformation',
    description:
      'Modern technology strategies that align people, process and platforms for faster growth.',
    bullets: [
      'Modernization of legacy systems',
      'Cloud migration and integration',
      'Improved team productivity',
      'Digital product strategy',
    ],
  },
  {
    id: 'seo-marketing',
    label: 'SEO and Marketing',
    title: 'SEO and Marketing',
    description:
      'Marketing and performance programs that increase visibility, traffic, and conversions for your digital products.',
    bullets: [
      'Technical SEO and content strategy',
      'Paid search and social campaigns',
      'Conversion-focused landing pages',
      'Analytics and growth optimization',
    ],
  },
];

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

const METHODOLOGY_STEPS = [
  {
    number: 'Step 1',
    title: 'Understand',
    description:
      'We examine the business problem, user journey, current systems and project objectives before recommending technology.',
  },
  {
    number: 'Step 2',
    title: 'Plan',
    description:
      'We define priorities, requirements, scope, milestones and the most practical technical approach.',
  },
  {
    number: 'Step 3',
    title: 'Design',
    description:
      'We create clear user flows, interfaces and solution structures before full development begins.',
  },
  {
    number: 'Step 4',
    title: 'Build',
    description:
      'Our team develops the approved solution using maintainable and suitable technologies.',
  },
  {
    number: 'Step 5',
    title: 'Validate',
    description:
      'Features are reviewed and tested against agreed requirements, user flows and quality expectations.',
  },
  {
    number: 'Step 6',
    title: 'Launch',
    description:
      'We prepare the product for deployment, handover and real-world use.',
  },
  {
    number: 'Step 7',
    title: 'Improve',
    description:
      'We support ongoing maintenance, feedback-based improvements and future development where required.',
  },
];

const WHY_BUSINESSES = [
  {
    title: 'Business-Focused Discovery',
    description:
      'We begin by understanding the business problem, user needs and operational context before recommending technology.',
  },
  {
    title: 'Healthcare-Informed Insight',
    description:
      'Selected healthcare projects benefit from strategic input informed by real clinical experience.',
    highlight: true,
  },
  {
    title: 'Transparent Scope and Milestones',
    description:
      'Projects are organized around defined requirements, responsibilities, deliverables and review stages.',
  },
  {
    title: 'Human-Reviewed Work',
    description:
      'AI-assisted outputs and development work are reviewed by responsible team members before delivery.',
  },
  {
    title: 'US–India Collaboration',
    description:
      'Weboraz combines a US business presence with India-based product and development execution.',
  },
  {
    title: 'Code and Documentation Handover',
    description:
      'Project handover can include source code, approved documentation and relevant access details according to the contract.',
  },
  {
    title: 'Post-Launch Support Options',
    description:
      'Maintenance, monitoring, updates and continued development can be provided through clearly defined support arrangements.',
  },
  {
    title: 'Delivery with Practical Rhythm',
    description:
      'Weekly sprints, regular reviews and clear accountability mean the project stays aligned with business priorities.',
  },
];

const HomePage = () => {
  const reduce = useReducedMotion();
  const methodologyRef = useRef(null);
  const pauseAutoScroll = useRef(false);
  const [activeSolution, setActiveSolution] = useState(SOLUTIONS[0].id);

  useEffect(() => {
    if (reduce) return;
    const container = methodologyRef.current;
    if (!container) return;

    let direction = 1;
    let animationFrame;
    let lastTimestamp = 0;
    const maxScroll = () => container.scrollWidth - container.clientWidth;
    const step = (timestamp) => {
      if (!container) return;
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      if (!pauseAutoScroll.current && delta >= 16) {
        const max = maxScroll();
        if (container.scrollLeft >= max - 1) direction = -1;
        if (container.scrollLeft <= 0) direction = 1;
        container.scrollLeft += 3.5 * direction;
        lastTimestamp = timestamp;
      }
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [reduce]);

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
      {/* Background Elements */}
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

      {/* ===== SECTION 1: HERO ===== */}
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

          <motion.div variants={item} className="hidden lg:flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="w-full max-w-[28rem]"
            >
              <div className="overflow-hidden">
                <img
                  src={home}
                  alt="Hourglass with blue sand"
                  className="w-full h-auto object-contain -mt-3"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <BusinessCart
        className="relative z-10 mt-16"
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
        subtitle="Businesses rarely need technology for their own sake. They need simpler customer journeys, more efficient operations and digital systems that support growth."
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

      {/* ===== SECTION 3: CAPABILITIES ===== */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 mt-16"
      >
        <div className="rounded-[2rem] border border-slate-900/[0.08] bg-white/90 p-6 shadow-[0_30px_80px_-42px_rgba(15,23,42,.35)] sm:p-8 lg:p-10">
          <div className="mb-10 text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">
              Capabilities you can count on
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-4xl">
              Digital Solutions Designed Around Real Business Needs
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              From customer-facing experiences to internal operational systems, Weboraz designs and develops digital solutions based on clearly defined business requirements.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            <div className="space-y-3 rounded-3xl border border-slate-900/[0.06] bg-slate-50/80 p-4 shadow-sm sm:p-5">
              {SOLUTIONS.map((solution) => (
                <button
                  key={solution.id}
                  type="button"
                  onClick={() => setActiveSolution(solution.id)}
                  className={`w-full rounded-3xl px-4 py-4 text-left text-sm font-medium transition-all ${
                    activeSolution === solution.id
                      ? 'bg-slate-900 text-white shadow-[0_10px_30px_-18px_rgba(15,23,42,.45)]'
                      : 'text-slate-700 hover:bg-slate-900/5 hover:text-slate-900'
                  }`}
                >
                  {solution.label}
                </button>
              ))}
            </div>

            <div className="grid gap-6">
              <div className="rounded-3xl border border-slate-900/[0.08] bg-white p-8 shadow-[0_10px_30px_-18px_rgba(15,23,42,.12)]">
                {(() => {
                  const solution = SOLUTIONS.find((item) => item.id === activeSolution);
                  return (
                    <>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
                        {solution.label}
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-slate-900">
                        {solution.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {solution.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {solution.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3 text-sm text-slate-700">
                            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <button
                        type="button"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        Learn more
                        <Icon.Arrow className="h-4 w-4" />
                      </button>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ===== SECTION 4: INDUSTRIES ===== */}
      <Industries id="industries" className="relative z-10 mt-16" />

      {/* ===== SECTION 5: HEALTHCARE ===== */}
      <section className="relative z-10 overflow-hidden bg-[#f8fafc] py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-500">
                Healthcare Specialization
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.035em] text-slate-900 sm:text-5xl">
                Healthcare Technology
                <br />
                Informed by Real
                <br />
                Clinical Experience
              </h2>
              <p className="max-w-xl text-base leading-8 text-slate-600">
                With strategic input from a Weboraz co-founder who brings real clinical healthcare experience, Weboraz designs connected healthcare platforms that bring pharmacies, diagnostic labs and doctors together in one place — built for 24×7 accessibility, with home blood sample collection, rider-based medicine delivery and online doctor consultations alongside modern clinic websites and patient communication tools.
              </p>

              <Link
                to="/industries/healthcare"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Explore Healthcare Solutions
                <Icon.Arrow className="h-4 w-4" />
              </Link>
            </div>

            <div className="overflow-hidden">
              <img
                src={doctor}
                alt="Healthcare technology preview"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: OUR WORK ===== */}
      <ProductShowcase className="relative z-10" />

      {/* ===== SECTION 7: DELIVERY METHODOLOGY ===== */}
      <section className="relative overflow-hidden bg-slate-950 text-slate-100 py-20 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-amber-300">
              Our delivery methodology
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              The Zoraz Method: Human-Led, AI-Assisted Delivery
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Approved AI tools assist our team with research, documentation, test planning and repetitive development tasks. Weboraz professionals remain responsible for requirements, architecture, implementation, security review and final quality.
            </p>
          </div>

          <div
            ref={methodologyRef}
            onMouseEnter={() => { pauseAutoScroll.current = true; }}
            onMouseLeave={() => { pauseAutoScroll.current = false; }}
            className="mt-14 overflow-hidden pb-4 scroll-smooth "
          >
            <div className="flex min-w-[88rem] gap-5">
              {METHODOLOGY_STEPS.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ x: index % 2 === 0 ? 120 : -120, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex min-w-[16rem] flex-col rounded-[1.75rem] border border-slate-800/70 bg-slate-900/95 p-6 shadow-[0_24px_80px_-50px_rgba(15,23,42,.45)]"
                >
                  <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-center rounded-[2rem] border border-amber-400/15 bg-white/5 p-6 text-sm text-slate-300 shadow-[0_18px_60px_-30px_rgba(15,23,42,.55)] sm:p-8">
            <p className="max-w-3xl text-center font-semibold  text-amber-100">
              AI supports selected tasks within the process. Strategic decisions, technical accountability and final approval remain with the Weboraz team.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: WHY WEBORAZ ===== */}
      <section className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-orange-500">
            Why Weboraz
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-5xl">
            Why Businesses Work With Weboraz
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {WHY_BUSINESSES.map((item) => (
            <div
              key={item.title}
              className={`rounded-[1.75rem] border p-6 transition shadow-sm ${item.highlight ? 'border-orange-200/70 bg-orange-50/70 ring-1 ring-orange-100' : 'border-slate-200 bg-white'}`}
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 shadow-sm">
                <Icon.Check className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 9: READY WHEN YOU ARE ===== */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-20 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-orange-300">
                Ready when you are
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Tell Us What Is Slowing Your Business Down
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                Share the customer journey, manual process or product idea you want to improve. We will help identify a practical first step.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
                >
                  Request a Discovery Call
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Send Us a Message
                </Link>
              </div>

              <p className="mt-5 text-sm text-slate-400">
                No generic sales presentation. We will begin by understanding the problem, current process and desired outcome.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_-40px_rgba(0,0,0,.35)]">
              <img
                src={doctor}
                alt="Team discussing technology"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
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