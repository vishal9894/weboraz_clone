import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/* ==================================================================
   Icons — keyed by name so `items` stays serialisable (CMS-friendly)
   ================================================================== */
export const CartIcons = {
  cursor: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 3.5 19 11l-6.4 1.9L9.7 19 4 3.5Z" />
      <path d="M14.5 14.5 20 20" />
    </svg>
  ),
  sheet: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="4" y="3" width="16" height="18" rx="2.5" />
      <path d="M4 9h16M4 15h16M10 3v18" />
    </svg>
  ),
  puzzle: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M10 3.5a1.8 1.8 0 0 1 3.6 0V5h2.9a1 1 0 0 1 1 1v2.9h1.5a1.8 1.8 0 0 1 0 3.6H17.5V16a1 1 0 0 1-1 1h-2.9v1.5a1.8 1.8 0 0 1-3.6 0V17H7a1 1 0 0 1-1-1v-3.5H4.5a1.8 1.8 0 0 1 0-3.6H6V6a1 1 0 0 1 1-1h3V3.5Z" />
    </svg>
  ),
  rocket: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M13.5 3.5c3.5 0 7 3.5 7 7 0 4.2-4.6 8-6.4 9.3a1 1 0 0 1-1.2 0C11 18.5 6.5 14.7 6.5 10.5c0-3.5 3.5-7 7-7Z" transform="rotate(45 12 12)" />
      <circle cx="12" cy="9.5" r="2.2" />
      <path d="M8.5 15.5c-1.5.6-2.3 2-2.5 4 2-.2 3.4-1 4-2.5" />
    </svg>
  ),
  target: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  ),
  clock: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  ),
  check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.2 2.4 2.4 4.6-4.9" />
    </svg>
  ),
  arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
};

const EASE = [0.22, 1, 0.36, 1];

/* ==================================================================
   Default content
   ================================================================== */
const DEFAULT_ITEMS = [
  {
    icon: 'cursor',
    tag: 'Customer Experience',
    problem: 'Customers Cannot Complete Important Actions Easily',
    solution:
      'Conversion-focused websites, portals and mobile experiences make it easier for customers to enquire, book, purchase or access the information they need.',
    metric: { value: '2.4x', label: 'conversion lift' },
  },
  {
    icon: 'sheet',
    tag: 'Operations',
    problem: 'Teams Rely on Spreadsheets and Repetitive Follow-Ups',
    solution:
      'Connected custom software and workflow automation reduce repetitive work, improve visibility and help teams manage everyday operations more efficiently.',
    metric: { value: '18h', label: 'saved per week' },
  },
  {
    icon: 'puzzle',
    tag: 'Systems',
    problem: 'Existing Tools Do Not Match the Business Process',
    solution:
      'Purpose-built platforms, integrations and dashboards connect systems and support the way the business actually operates.',
    metric: { value: '100%', label: 'process fit' },
  },
  {
    icon: 'rocket',
    tag: 'Product',
    problem: 'A Product Idea Needs to Become a Reliable MVP',
    solution:
      'Product strategy, UX design, development, testing and launch support help turn an early idea into a usable digital product.',
    metric: { value: '8 wks', label: 'idea to launch' },
  },
];

/* ==================================================================
   Card
   ================================================================== */
export const ProblemCard = ({
  icon = 'target',
  tag,
  problem,
  solution,
  metric,
  problemLabel = 'The Problem',
  solutionLabel = 'How Weboraz Helps',
  accent = '#ff3b00',
  index = 0,
}) => {
  const reduce = useReducedMotion();
  const IconCmp = CartIcons[icon] || CartIcons.target;
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.09, ease: EASE }}
      whileHover={reduce ? {} : { y: -5 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-900/[0.07] bg-white shadow-[0_1px_2px_rgba(16,24,40,.04)] transition-shadow duration-300 hover:shadow-[0_24px_60px_-28px_rgba(16,24,40,.32)]"
    >
      {/* accent bar wipes in on hover */}
      <span
        className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: `linear-gradient(90deg, ${accent}, ${accent}55, transparent)` }}
      />

      {/* watermark number */}
      <span
        className="pointer-events-none absolute -right-3 -top-5 select-none font-serif text-[6rem] leading-none text-slate-900/[0.035] transition-colors duration-500"
        style={{ color: undefined }}
        aria-hidden="true"
      >
        {num}
      </span>

      {/* ---- problem ---- */}
      <div className="relative flex-1 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105"
            style={{ background: `${accent}14`, color: accent }}
          >
            <IconCmp className="h-[19px] w-[19px]" />
          </div>

          {tag && (
            <span className="rounded-full border border-slate-900/[0.07] bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-500">
              {tag}
            </span>
          )}
        </div>

        <p
          className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em]"
          style={{ color: accent }}
        >
          {problemLabel}
        </p>

        <h3 className="mt-2.5 font-serif text-[19px] leading-snug tracking-[-0.01em] text-slate-900 sm:text-xl">
          {problem}
        </h3>
      </div>

      {/* ---- solution ---- */}
      <div className="relative border-t border-slate-900/[0.06] bg-slate-50/70 p-6 sm:p-7">
        <div className="flex gap-3.5">
          <span
            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
            style={{ background: `${accent}12`, color: accent }}
          >
            <CartIcons.check className="h-3.5 w-3.5" />
          </span>

          <div className="min-w-0 flex-1">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.16em]"
              style={{ color: accent }}
            >
              {solutionLabel}
            </p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">
              {solution}
            </p>

            {metric && (
              <div className="mt-4 flex items-baseline gap-2 border-t border-slate-900/[0.06] pt-3.5">
                <span
                  className="font-serif text-2xl leading-none tracking-tight"
                  style={{ color: accent }}
                >
                  {metric.value}
                </span>
                <span className="text-[11px] uppercase tracking-[0.1em] text-slate-500">
                  {metric.label}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* ==================================================================
   Section
   ================================================================== */
const BusinessCart = ({
  eyebrow = 'Where Businesses Get Stuck',
  title = (
    <>
      Technology Should Solve
      <br />
      a Business Problem,
      <br />
      Not Add Another Tool
    </>
  ),
  subtitle = 'Businesses rarely need technology for its own sake. They need simpler customer journeys, more efficient operations and digital systems that support growth.',
  items = DEFAULT_ITEMS,
  accent = '#ff3b00',
  columns = 2,
  problemLabel,
  solutionLabel,
  cta,
  className = '',
  id,
}) => {
  const reduce = useReducedMotion();

  const gridCols =
    columns === 3
      ? 'md:grid-cols-2 lg:grid-cols-3'
      : columns === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : 'md:grid-cols-2';

  return (
    <section
      id={id}
      className={`relative overflow-hidden bg-[#f5f5f4] py-20 sm:py-24 ${className}`}
    >
      {/* ---------------- ambience ---------------- */}
      <div className="pointer-events-none absolute inset-0">
        {/* warm wash behind the heading */}
        <div
          className="absolute left-1/2 top-0 h-80 w-[46rem] -translate-x-1/2 rounded-full opacity-[0.07] blur-3xl"
          style={{ background: `radial-gradient(circle, ${accent} 0%, transparent 70%)` }}
        />
        {/* faint grid, masked so it fades out */}
        <div
          className="absolute inset-0 opacity-[0.6]
            [background-image:linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)]
            [background-size:60px_60px]
            [mask-image:radial-gradient(ellipse_70%_55%_at_50%_35%,#000_20%,transparent_85%)]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* ---- heading ---- */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/[0.07] bg-white px-3.5 py-1.5 shadow-[0_1px_2px_rgba(16,24,40,.04)]">
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ background: accent }}
              />
              <span
                className="relative inline-flex h-1.5 w-1.5 rounded-full"
                style={{ background: accent }}
              />
            </span>
            <span
              className="text-[10px] font-bold uppercase tracking-[0.18em]"
              style={{ color: accent }}
            >
              {eyebrow}
            </span>
          </div>

          <h2 className="mt-6 font-serif text-[2rem] leading-[1.12] tracking-[-0.02em] text-slate-900 sm:text-[2.6rem]">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[14.5px] leading-relaxed text-slate-500">
            {subtitle}
          </p>

          {/* small divider flourish */}
          <div className="mt-7 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-slate-300" />
            <span
              className="h-1 w-1 rotate-45"
              style={{ background: `${accent}66` }}
            />
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-slate-300" />
          </div>
        </motion.div>

        {/* ---- cards ---- */}
        <div className={`mt-12 grid gap-5 ${gridCols}`}>
          {items.map((it, i) => (
            <ProblemCard
              key={it.problem}
              {...it}
              index={i}
              accent={it.accent || accent}
              problemLabel={it.problemLabel || problemLabel}
              solutionLabel={it.solutionLabel || solutionLabel}
            />
          ))}
        </div>

        {/* ---- CTA ---- */}
        {cta && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {cta.note && <p className="text-sm text-slate-500">{cta.note}</p>}
            <a
              href={cta.href || '#'}
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(135deg, ${accent}, #ff8a3d)`,
                boxShadow: `0 10px 28px -12px ${accent}`,
              }}
            >
              {cta.label}
              <CartIcons.arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BusinessCart;
