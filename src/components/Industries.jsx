import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/* ==================================================================
   THEME
   ================================================================== */
const ACCENT = '#f5a524';   // gold rule + arrow
const CTA = '#ff5a1f';      // orange CTA button
const EASE = [0.22, 1, 0.36, 1];

/* ==================================================================
   CONTENT
   Swap `image` for your own asset paths (/images/healthcare.jpg …).
   `query` is only used by the placeholder fallback below.
   ================================================================== */
const DEFAULT_ITEMS = [
  {
    title: 'Healthcare',
    description: 'Patient portals, automation, and systems that reduce admin work.',
    href: '/industries/healthcare',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
  },
  {
    title: 'E-commerce & Retail',
    description: 'Product catalogs, payments, inventory, order tracking, and loyalty.',
    href: '/industries/ecommerce-retail',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
  },
  {
    title: 'Real Estate',
    description: 'Lead capture, follow-ups, listings, and deal pipelines in one place.',
    href: '/industries/real-estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  },
  {
    title: 'Startups and SaaS',
    description: 'MVPs and product-development support for early-stage and growing technology businesses.',
    href: '/industries/startups-saas',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  },
  {
    title: 'Professional Services',
    description: 'Websites and workflow automation for consultants, accounting firms, and other professional service.',
    href: '/industries/professional-services',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
  },
  {
    title: 'Restaurants & Cafes',
    description: 'Ordering, reservations, loyalty, and customer engagement tools.',
    href: '/industries/restaurants-cafes',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
  },
  {
    title: 'Finance & Accounting',
    description: 'Client workflows, reporting, compliance, and secure dashboards.',
    href: '/industries/finance-accounting',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
  {
    title: 'Manufacturing',
    description: 'Production, inventory, and operations connected in one system.',
    href: '/industries/manufacturing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  },
  {
    title: 'Construction',
    description: 'Project tracking, team updates, and real-time operational visibility.',
    href: '/industries/construction',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
  },
  {
    title: 'Logistics & Transportation',
    description: 'Fleet tracking, dispatch workflows, updates, and customer visibility.',
    href: '/industries/logistics-transportation',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
  },
];

const ArrowUpRight = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);


/* ==================================================================
   Tile
   ================================================================== */
export const IndustryCard = ({
  title,
  description,
  image,
  href = '#',
  index = 0,
  accent = ACCENT,
  ratio = 'aspect-[3/4]',
}) => {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={href}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: (index % 5) * 0.07, ease: EASE }}
      whileHover={reduce ? {} : { y: -6 }}
      className={`group relative block ${ratio} overflow-hidden rounded-xl bg-slate-900 shadow-[0_1px_2px_rgba(16,24,40,.06)] transition-shadow duration-300 hover:shadow-[0_28px_60px_-24px_rgba(16,24,40,.45)]`}
    >
      {/* ---- photo ---- */}
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
      />

      {/* ---- scrims: base + deeper bottom, both deepen on hover ---- */}
      <div className="absolute inset-0 bg-slate-950/45 transition-colors duration-500 group-hover:bg-slate-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" />

      {/* ---- accent glow from the bottom on hover ---- */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `linear-gradient(to top, ${accent}26, transparent)` }}
      />

      {/* ---- arrow badge ---- */}
      <span
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:border-white/50 group-hover:bg-white/20"
        style={{ color: accent }}
      >
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>

      {/* ---- copy ---- */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        {/* gold rule */}
        <span
          className="mb-3 block h-[3px] w-7 rounded-full transition-all duration-500 group-hover:w-12"
          style={{ background: accent }}
        />

        <h3 className="text-[15px] font-semibold leading-tight text-white sm:text-base">
          {title}
        </h3>

        <p className="mt-1.5 text-[12px] leading-relaxed text-white/70 transition-colors duration-300 group-hover:text-white/90">
          {description}
        </p>
      </div>

      {/* ---- focus/hover ring ---- */}
      <span
        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/0 transition-all duration-300 group-hover:ring-white/20"
      />
    </motion.a>
  );
};

/* ==================================================================
   Section
   ================================================================== */
const Industries = ({
  eyebrow = 'Industries We Serve',
  title = 'Built Around Your Industry',
  subtitle = 'Every business has different workflows, customers, and constraints. We build systems that fit the way your industry actually operates.',
  items = DEFAULT_ITEMS,
  accent = ACCENT,
  ctaColor = CTA,
  footerNote = "Don't see your industry? We can still build around your model.",
  cta = { label: "Let's Talk About Your Business", href: '#contact' },
  className = '',
  id,
}) => {
  const reduce = useReducedMotion();

  return (
    <section
      id={id}
      className={`relative overflow-hidden bg-white py-20 sm:py-24 ${className}`}
    >
      {/* soft corner wash */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full opacity-[0.07] blur-3xl"
          style={{ background: `radial-gradient(circle, ${ctaColor} 0%, transparent 70%)` }}
        />
      </div>

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8">
        {/* ---------------- heading ---------------- */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: ctaColor }}
          >
            {eyebrow}
          </p>

          <h2 className="mt-5 font-serif text-[2.2rem] leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-[3rem]">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[14.5px] leading-relaxed text-slate-500">
            {subtitle}
          </p>
        </motion.div>

        {/* ---------------- grid ---------------- */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {items.map((it, i) => (
            <IndustryCard key={it.title} {...it} index={i} accent={it.accent || accent} />
          ))}
        </div>

        {/* ---------------- footer CTA ---------------- */}
        {(footerNote || cta) && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            {footerNote && (
              <p className="text-center text-[14.5px] font-medium text-slate-700">
                {footerNote}
              </p>
            )}

            {cta && (
              <a
                href={cta.href || '#'}
                className="group inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: ctaColor,
                  boxShadow: `0 12px 30px -12px ${ctaColor}`,
                }}
              >
                {cta.label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Industries;
