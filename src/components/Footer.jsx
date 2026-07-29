import React, { useState } from 'react';
import { motion } from 'framer-motion';

/* ==================================================================
   THEME
   ================================================================== */
const BRAND = '#ff3b00';
const BRAND_2 = '#ff8a3d';

/* ==================================================================
   CONTENT — edit here, JSX stays generic
   ================================================================== */
const COLUMNS = [
  {
    title: 'Company',
    links: [
      'About Us', 'Portfolio', 'Case Studies', 'Client Testimonials',
      'Pricing Guide', 'Blogs', 'Careers', 'Support', 'FAQs', 'Contact Us',
    ],
  },
  {
    title: 'Resources',
    links: [
      'Zoraz AI', 'Free Consultation', 'Technology Stack',
      'Privacy Policy', 'Terms of Service', 'Sitemap',
    ],
  },
  {
    title: 'Services',
    links: [
      'Web Development', 'Mobile App Development', 'Custom Software',
      'AI Automation', 'Digital Transformation',
    ],
  },
  {
    title: 'Industries',
    links: [
      'Healthcare', 'Startups and SaaS',
      'Professional Services', 'Retail and Ecommerce',
    ],
  },
];

const PHONES = [
  { flag: '🇺🇸', label: 'USA', number: '+1 (248) 821-2345', href: 'tel:+12488212345' },
  { flag: '🇮🇳', label: 'India', number: '+91 9219-344-585', href: 'tel:+919219344585' },
];

const OFFICES = [
  {
    flag: '🇺🇸',
    title: 'USA Office',
    address: '2430 N. ST. Helen Road Suite B, ST. HELEN, MI 48656',
  },
  {
    flag: '🇮🇳',
    title: 'India Office',
    address: '3rd Floor, Rajpushpa Business Center, Opp: Google, Kondapur, Hyderabad, Telangana 500084',
  },
];

const SOCIALS = [
  { name: 'LinkedIn', d: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C21.4 8.65 22 11 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21h-4V9Z' },
  { name: 'X', d: 'M17.5 3h3.1l-6.8 7.8L21.8 21h-6.3l-4.9-6.4L4.9 21H1.8l7.3-8.3L2.5 3h6.4l4.4 5.8L17.5 3Zm-1.1 16.2h1.7L7.7 4.7H5.9l10.5 14.5Z' },
  { name: 'Instagram', d: 'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .49 1.4.9.4.4.68.8.9 1.4.17.4.36 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2a3.9 3.9 0 0 1-.9 1.4c-.4.4-.8.68-1.4.9-.4.17-1 .36-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42a3.9 3.9 0 0 1-1.4-.9 3.9 3.9 0 0 1-.9-1.4c-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.22-.6.49-1 .9-1.4.4-.4.8-.68 1.4-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 3.15A6.65 6.65 0 1 0 18.65 12 6.65 6.65 0 0 0 12 5.35Zm0 10.97A4.32 4.32 0 1 1 16.32 12 4.32 4.32 0 0 1 12 16.32Zm6.9-11.2a1.55 1.55 0 1 1-1.56-1.56 1.55 1.55 0 0 1 1.55 1.55Z' },
  { name: 'GitHub', d: 'M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z' },
  { name: 'YouTube', d: 'M23 12s0-3.5-.44-5.17a2.8 2.8 0 0 0-1.97-1.98C18.9 4.4 12 4.4 12 4.4s-6.9 0-8.59.45A2.8 2.8 0 0 0 1.44 6.83C1 8.5 1 12 1 12s0 3.5.44 5.17a2.8 2.8 0 0 0 1.97 1.98c1.69.45 8.59.45 8.59.45s6.9 0 8.59-.45a2.8 2.8 0 0 0 1.97-1.98C23 15.5 23 12 23 12ZM9.75 15.27V8.73L15.5 12l-5.75 3.27Z' },
];

const BADGES = ['ISO 27001 Aligned', 'GDPR Ready', 'NDA Protected'];

/* ==================================================================
   Small icon set
   ================================================================== */
const Ico = {
  Phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  ),
  Mail: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2.5" />
      <path d="m2.5 6.5 8.4 5.6a2 2 0 0 0 2.2 0l8.4-5.6" />
    </svg>
  ),
  Pin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20 10.4c0 5.2-8 12.1-8 12.1s-8-6.9-8-12.1a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10.2" r="2.9" />
    </svg>
  ),
  Arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  Chevron: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  Up: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  ),
};

/* ================================================================== */

const Footer = () => {
  const [openCol, setOpenCol] = useState(null);   // mobile accordion
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const year = new Date().getFullYear();

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 3200);
  };

  return (
    <footer className="relative overflow-hidden bg-[#12161c] text-slate-300">
      {/* ---------- ambient glows ---------- */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full opacity-[0.14] blur-3xl"
          style={{ background: `radial-gradient(circle, ${BRAND} 0%, transparent 65%)` }}
        />
        <div
          className="absolute -right-32 top-1/3 h-[26rem] w-[26rem] rounded-full opacity-[0.10] blur-3xl"
          style={{ background: 'radial-gradient(circle, #10b981 0%, transparent 65%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]
            [background-image:linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
            [background-size:64px_64px]
            [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_20%,transparent_90%)]"
        />
      </div>

      {/* ---------- top hairline ---------- */}
      <div
        className="h-px w-full"
        style={{ background: `linear-gradient(90deg, transparent, ${BRAND}66, #10b98155, transparent)` }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ============ CTA / NEWSLETTER ============ */}
        <div className="flex flex-col gap-6 border-b border-white/[0.07] py-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">
              Ready to build something exceptional?
            </h3>
            <p className="mt-1.5 text-sm text-slate-400">
              Get delivery tips and Zoraz AI updates. One email a month, no noise.
            </p>
          </div>

          <form onSubmit={submit} className="flex w-full max-w-md items-center gap-2">
            <div className="relative flex-1">
              <Ico.Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                aria-label="Email address"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-white/25 focus:bg-white/[0.07]"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ y: -1.5 }}
              whileTap={{ scale: 0.97 }}
              className="flex shrink-0 items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white"
              style={{
                background: `linear-gradient(135deg, ${BRAND}, ${BRAND_2})`,
                boxShadow: `0 10px 28px -12px ${BRAND}`,
              }}
            >
              {sent ? 'Subscribed' : 'Subscribe'}
              {!sent && <Ico.Arrow className="h-4 w-4" />}
            </motion.button>
          </form>
        </div>

        {/* ============ MAIN GRID ============ */}
        <div className="grid gap-10 py-12 lg:grid-cols-[1.35fr_repeat(4,minmax(0,1fr))] lg:gap-8">

          {/* ---------- Brand / contact column ---------- */}
          <div className="lg:pr-6">
            {/* logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg">
                <span
                  className="bg-clip-text text-lg font-bold text-transparent"
                  style={{ backgroundImage: `linear-gradient(135deg, ${BRAND}, #6C5CE7)` }}
                >
                  W
                </span>
              </div>
              <div className="leading-none">
                <p className="text-[1.4rem] font-semibold tracking-[-0.02em] text-white">Weboraz</p>
                <p className="mt-1.5 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Web Solutions
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-[13.5px] leading-relaxed text-slate-400">
              Weboraz helps businesses transform ideas into powerful digital products through web
              development, mobile applications, custom software, and AI automation.
            </p>
            <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-slate-400">
              Weboraz delivers digital services through human expertise enhanced by{' '}
              <a href="#" className="font-semibold hover:underline" style={{ color: BRAND_2 }}>
                Zoraz AI
              </a>
              .
            </p>

            {/* contact rows */}
            <div className="mt-6 space-y-2.5">
              {PHONES.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  className="group flex items-center gap-2.5 text-[13.5px] text-slate-400 transition-colors hover:text-white"
                >
                  <span className="text-sm leading-none">{p.flag}</span>
                  <span>
                    {p.label}:{' '}
                    <span className="text-slate-300 transition-colors group-hover:text-white">
                      {p.number}
                    </span>
                  </span>
                </a>
              ))}
              <a
                href="mailto:contact@weboraz.com"
                className="group flex items-center gap-2.5 text-[13.5px] text-slate-400 transition-colors hover:text-white"
              >
                <Ico.Mail className="h-4 w-4 shrink-0" style={{ color: BRAND_2 }} />
                contact@weboraz.com
              </a>
            </div>

            {/* office cards */}
            <div className="mt-6 space-y-3">
              {OFFICES.map((o) => (
                <motion.div
                  key={o.title}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition-colors hover:border-white/[0.16] hover:bg-white/[0.055]"
                >
                  <span
                    className="absolute inset-y-0 left-0 w-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: `linear-gradient(${BRAND}, ${BRAND_2})` }}
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-xs leading-none">{o.flag}</span>
                    <h4 className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-slate-200">
                      {o.title}
                    </h4>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <Ico.Pin className="mt-px h-3.5 w-3.5 shrink-0 text-slate-500" />
                    <p className="text-[12.5px] leading-relaxed text-slate-400">{o.address}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ---------- Link columns ---------- */}
          {COLUMNS.map((col) => {
            const open = openCol === col.title;
            return (
              <div key={col.title} className="border-b border-white/[0.07] pb-2 lg:border-0 lg:pb-0">
                {/* mobile: accordion button / desktop: static heading */}
                <button
                  onClick={() => setOpenCol(open ? null : col.title)}
                  className="flex w-full items-center justify-between py-3 text-left lg:pointer-events-none lg:py-0"
                >
                  <h4 className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-slate-200">
                    {col.title}
                  </h4>
                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-slate-500 lg:hidden"
                  >
                    <Ico.Chevron className="h-4 w-4" />
                  </motion.span>
                </button>

                <ul
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:!max-h-none lg:!opacity-100 ${
                    open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
                  } space-y-2.5 lg:mt-5`}
                >
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="group inline-flex items-center gap-0 text-[13.5px] text-slate-400 transition-colors hover:text-white"
                      >
                        <span
                          className="mr-0 h-px w-0 transition-all duration-300 group-hover:mr-2 group-hover:w-3"
                          style={{ background: BRAND_2 }}
                        />
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* ============ TRUST BADGES + SOCIAL ============ */}
        <div className="flex flex-col gap-5 border-t border-white/[0.07] py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {BADGES.map((b) => (
              <span
                key={b}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[10.5px] font-medium text-slate-400"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {SOCIALS.map((s) => (
              <motion.a
                key={s.name}
                href="#"
                aria-label={s.name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.94 }}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.d} />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>

        {/* ============ BOTTOM BAR ============ */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] py-6 sm:flex-row">
          <p className="text-[12.5px] text-slate-500">
            © {year} Weboraz. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {['Privacy Policy', 'Terms of Service', 'Cookies', 'Sitemap'].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[12.5px] text-slate-500 transition-colors hover:text-slate-200"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[12px] text-slate-500">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              All systems operational
            </span>

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.94 }}
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-colors hover:border-white/20 hover:text-white"
            >
              <Ico.Up className="h-3.5 w-3.5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* ---------- giant wordmark watermark ---------- */}
      <div className="pointer-events-none relative select-none overflow-hidden">
        <p
          className="translate-y-[28%] text-center text-[19vw] font-bold leading-none tracking-[-0.05em] text-white/[0.028]"
        >
          WEBORAZ
        </p>
      </div>
    </footer>
  );
};

export default Footer;
