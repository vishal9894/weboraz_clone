import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';


// Use homepage accent colors
const BRAND = '#ff3b00';
const BRAND_2 = '#ff8a3d';

const NAV = [
  { id: 'home', label: 'Home', href: '#' },
  {
    id: 'services',
    label: 'Services',
    mega: true,
    width: 'w-[46rem]',
    columns: [
      {
        title: 'Web Development',
        items: [
          'Custom Website Development',
          'E-Commerce Development',
          'WordPress Development',
          'Web Application Development',
          'Website Redesign',
          'Website Maintenance',
        ],
      },
      {
        title: 'Mobile App Development',
        items: [
          'Android App Development',
          'iOS App Development',
          'Enterprise Mobile Applications',
          'E-Commerce Mobile Solutions',
          'Business Process Automation Apps',
          'App UI/UX Design',
        ],
      },
      {
        title: 'Software & Enterprise',
        items: [
          'Software Development',
          'Custom Software Development',
          'CRM Development',
          'ERP Solutions',
          'SaaS Product Development',
          'API Integration',
        ],
      },
      {
        title: 'Creative Experience',
        items: [
          'UI/UX Designing',
          'Product Design',
          'Graphics Designing',
          'Logo Designing',
          'Brand Identity',
          'Motion & Video Design',
        ],
      },
    ],
    footer: {
      title: 'SEO & Performance Marketing',
      items: [
        'Technical SEO',
        'Local SEO',
        'Enterprise SEO',
        'Google Ads',
        'FB & IG Ads',
        'YouTube Ads',
        'WhatsApp Ads',
        'Lead Generation',
      ],
    },
  },
  {
    id: 'ai',
    label: 'AI Automation',
    badge: 'New',
    width: 'w-[21rem]',
    columns: [
      {
        title: 'AI Solutions',
        items: [
          'AI Consulting',
          'AI Chatbots',
          'AI Agent Development',
          'AI + GPT Integration',
          'Workflow Automation',
          'Business Process Automation',
        ],
      },
    ],
    cta: {
      note: "Not sure where to start with AI? We'll find the highest-impact automation for your business.",
      label: 'Book a Free AI Audit',
    },
  },
  {
    id: 'industries',
    label: 'Industries',
    width: 'w-[22rem]',
    columns: [
      {
        title: 'Industry Solutions',
        items: [
          { name: 'Healthcare', desc: 'Patient Leads' },
          { name: 'E-Commerce', desc: 'Revenue Growth' },
          { name: 'Real Estate', desc: 'Qualified Leads' },
          { name: 'Education', desc: 'Enrollment Growth' },
          { name: 'FinTech', desc: 'Faster Acquisition' },
          { name: 'Startups & SaaS', desc: 'Delivery Velocity' },
          { name: 'Professional Services', desc: 'Global Markets' },
          { name: 'Retail & Ecommerce', desc: 'Other Industries' },
        ],
      },
    ],
    cta: { label: 'View All Industries' },
  },
  { id: 'about', label: 'About', href: '#' },
  { id: 'insights', label: 'Insights', href: '#' },
  { id: 'contact', label: 'Contact', href: '#' },
];

const Chevron = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);   
  const [openMobile, setOpenMobile] = useState(null);       
  const [scrolled, setScrolled] = useState(false);

  const hoverTimeout = useRef(null);   
  const headerRef = useRef(null);
  const reduce = useReducedMotion();

  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  
  useEffect(() => () => clearTimeout(hoverTimeout.current), []);

  const openNow = useCallback((id) => {
    clearTimeout(hoverTimeout.current);
    setOpenDropdown(id);
  }, []);

  const closeSoon = useCallback(() => {
    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setOpenDropdown(null), 160);
  }, []);


  const toggleMobile = useCallback(
    (id) => setOpenMobile((cur) => (cur === id ? null : id)),
    []
  );

  const panel = {
    hidden: { opacity: 0, y: -8, scale: 0.98, filter: 'blur(4px)' },
    visible: {
      opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
      transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0, y: -8, scale: 0.98, filter: 'blur(4px)',
      transition: { duration: 0.15 },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -6 },
    visible: (i) => ({
      opacity: 1, x: 0,
      transition: { delay: reduce ? 0 : i * 0.02, duration: 0.25 },
    }),
  };

  return (
    <>
     
      <AnimatePresence>
        {openDropdown && (
          <motion.div
            className="fixed inset-0 z-40 hidden bg-slate-900/20 backdrop-blur-[2px] lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-slate-900/[0.06] bg-white/80 shadow-[0_8px_30px_-12px_rgba(16,24,40,.15)] backdrop-blur-2xl'
            : 'border-b border-transparent bg-white/40 backdrop-blur-xl'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? 'h-16' : 'h-16 md:h-20'
            }`}
          >
           
            <a href="#" className="group flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: -6, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="relative flex h-10 w-10 items-center justify-center rounded-[0.9rem] text-white shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${BRAND}, ${BRAND_2})`,
                  boxShadow: `0 8px 24px -8px ${BRAND}99`,
                }}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.5l2.1 5.9 5.9 2.1-5.9 2.1-2.1 5.9-2.1-5.9L4 10.5l5.9-2.1L12 2.5Z" />
                </svg>
              </motion.div>
              <div className="leading-none">
                <span className="text-[1.15rem] font-semibold tracking-[-0.02em] text-slate-900">
                  Nova<span style={{ color: BRAND }}>Core</span>
                </span>
                <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  Digital Solutions
                </p>
              </div>
            </a>

           
            <nav className="hidden items-center gap-1 lg:flex">
              {NAV.map((n) =>
                n.href ? (
                  <a
                    key={n.id}
                    href={n.href}
                    className="relative rounded-lg px-3.5 py-2 text-[13.5px] font-medium text-slate-600 transition-colors hover:text-slate-900"
                  >
                    <span className="relative z-10">{n.label}</span>
                    <span className="absolute inset-0 scale-90 rounded-lg bg-slate-900/[0.04] opacity-0 transition-all duration-200 hover:scale-100 hover:opacity-100" />
                  </a>
                ) : (
                  <div
                    key={n.id}
                    className="relative"
                    onMouseEnter={() => openNow(n.id)}
                    onMouseLeave={closeSoon}
                  >
                    <button
                      aria-haspopup="true"
                      aria-expanded={openDropdown === n.id}
                      onClick={() =>
                        setOpenDropdown((c) => (c === n.id ? null : n.id))
                      }
                      className={`relative flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                        openDropdown === n.id
                          ? 'text-slate-900'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {n.label}
                      {n.badge && (
                        <span
                          className="rounded-full px-1.5 py-px text-[9px] font-bold uppercase tracking-wide text-white"
                          style={{ background: BRAND }}
                        >
                          {n.badge}
                        </span>
                      )}
                      <motion.span
                        animate={{ rotate: openDropdown === n.id ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-slate-400"
                      >
                        <Chevron className="h-3 w-3" />
                      </motion.span>
                      {openDropdown === n.id && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-lg bg-slate-900/[0.05]"
                          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {openDropdown === n.id && (
                        <motion.div
                          variants={panel}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          onMouseEnter={() => openNow(n.id)}
                          onMouseLeave={closeSoon}
                          className={`absolute left-0 top-full mt-2.5 origin-top-left overflow-hidden rounded-2xl border border-slate-900/[0.07] bg-white/95 shadow-[0_24px_70px_-20px_rgba(16,24,40,.35)] backdrop-blur-2xl ${n.width} ${
                            n.mega ? '-translate-x-24' : ''
                          }`}
                        >
                          {/* accent hairline */}
                          <div
                            className="h-[3px] w-full"
                            style={{ background: `linear-gradient(90deg, ${BRAND}, ${BRAND_2}, transparent)` }}
                          />

                          <div
                            className={`p-5 ${
                              n.mega ? 'grid grid-cols-2 gap-x-8 gap-y-5' : ''
                            }`}
                          >
                            {n.columns.map((col) => (
                              <div key={col.title}>
                                <h4 className="mb-2.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-slate-400">
                                  {col.title}
                                </h4>
                                <ul className="space-y-0.5">
                                  {col.items.map((it, i) => {
                                    const name = typeof it === 'string' ? it : it.name;
                                    const desc = typeof it === 'string' ? null : it.desc;
                                    return (
                                      <motion.li
                                        key={name}
                                        custom={i}
                                        variants={listItem}
                                        initial="hidden"
                                        animate="visible"
                                      >
                                        <a
                                          href="#"
                                          className="group flex items-center justify-between gap-3 rounded-lg px-2.5 py-1.5 text-[13px] text-slate-600 transition-colors hover:bg-slate-900/[0.035] hover:text-slate-900"
                                        >
                                          <span className="flex items-center gap-2.5">
                                            <span
                                              className="h-1 w-1 rounded-full transition-all duration-200 group-hover:h-1.5 group-hover:w-1.5"
                                              style={{ background: BRAND, opacity: 0.35 }}
                                            />
                                            {name}
                                          </span>
                                          {desc && (
                                            <span className="text-[10px] text-slate-400">{desc}</span>
                                          )}
                                        </a>
                                      </motion.li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ))}
                          </div>

                          {n.footer && (
                            <div className="border-t border-slate-900/[0.06] bg-slate-50/70 px-5 py-4">
                              <h4 className="mb-2.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-slate-400">
                                {n.footer.title}
                              </h4>
                              <div className="grid grid-cols-4 gap-x-4 gap-y-1.5">
                                {n.footer.items.map((it) => (
                                  <a
                                    key={it}
                                    href="#"
                                    className="text-[12px] text-slate-600 transition-colors hover:text-slate-900"
                                  >
                                    {it}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}

                          {n.cta && (
                            <div className="border-t border-slate-900/[0.06] bg-slate-50/70 p-5">
                              {n.cta.note && (
                                <p className="mb-3 text-[11.5px] leading-relaxed text-slate-500">
                                  {n.cta.note}
                                </p>
                              )}
                              <button
                                className="w-full rounded-xl px-4 py-2.5 text-[13px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                                style={{
                                  background: `linear-gradient(135deg, ${BRAND}, ${BRAND_2})`,
                                  boxShadow: `0 8px 24px -10px ${BRAND}`,
                                }}
                              >
                                {n.cta.label}
                              </button>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              )}
            </nav>

            
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="hidden rounded-full px-4 py-2 text-[13.5px] font-medium text-slate-600 transition-colors hover:text-slate-900 xl:block"
              >
                Sign in
              </a>
              <motion.button
                whileHover={{ y: -1.5 }}
                whileTap={{ scale: 0.97 }}
                className="hidden items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-semibold text-white lg:flex"
                style={{
                  background: `linear-gradient(135deg, ${BRAND}, ${BRAND_2})`,
                  boxShadow: `0 10px 28px -10px ${BRAND}`,
                }}
              >
                Book Consultation
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </motion.button>

              {/* burger */}
              <button
                onClick={() => setIsMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-slate-900/5 lg:hidden"
              >
                <div className="flex h-4 w-5 flex-col justify-between">
                  <motion.span className="block h-[2px] rounded-full" style={{ background: BRAND }}
                    animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 7 : 0 }}
                    transition={{ duration: 0.25 }} />
                  <motion.span className="block h-[2px] rounded-full" style={{ background: BRAND }}
                    animate={{ opacity: isMenuOpen ? 0 : 1, x: isMenuOpen ? -8 : 0 }}
                    transition={{ duration: 0.2 }} />
                  <motion.span className="block h-[2px] rounded-full" style={{ background: BRAND }}
                    animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -7 : 0 }}
                    transition={{ duration: 0.25 }} />
                </div>
              </button>
            </div>
          </div>
        </div>

        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-slate-900/[0.06] bg-white/95 backdrop-blur-2xl lg:hidden"
            >
              <div className="max-h-[calc(100vh-4rem)] space-y-0.5 overflow-y-auto px-4 py-4">
                {NAV.map((n) =>
                  n.href ? (
                    <a
                      key={n.id}
                      href={n.href}
                      className="block rounded-xl px-4 py-3 text-[14px] font-medium text-slate-700 transition-colors hover:bg-slate-900/[0.04]"
                    >
                      {n.label}
                    </a>
                  ) : (
                    <div key={n.id}>
                      <button
                        onClick={() => toggleMobile(n.id)}
                        aria-expanded={openMobile === n.id}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[14px] font-medium text-slate-700 transition-colors hover:bg-slate-900/[0.04]"
                      >
                        <span className="flex items-center gap-2">
                          {n.label}
                          {n.badge && (
                            <span className="rounded-full px-1.5 py-px text-[9px] font-bold uppercase text-white"
                              style={{ background: BRAND }}>
                              {n.badge}
                            </span>
                          )}
                        </span>
                        <motion.span
                          animate={{ rotate: openMobile === n.id ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-slate-400"
                        >
                          <Chevron className="h-4 w-4" />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {openMobile === n.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 space-y-3 border-l border-slate-900/[0.07] py-2 pl-3">
                              {n.columns.map((col) => (
                                <div key={col.title}>
                                  <p className="mb-1 px-2 text-[9.5px] font-bold uppercase tracking-[0.16em] text-slate-400">
                                    {col.title}
                                  </p>
                                  {col.items.map((it) => {
                                    const name = typeof it === 'string' ? it : it.name;
                                    const desc = typeof it === 'string' ? null : it.desc;
                                    return (
                                      <a
                                        key={name}
                                        href="#"
                                        className="flex items-center justify-between rounded-lg px-2 py-1.5 text-[13px] text-slate-600 transition-colors hover:bg-slate-900/[0.035] hover:text-slate-900"
                                      >
                                        <span>{name}</span>
                                        {desc && <span className="text-[10px] text-slate-400">{desc}</span>}
                                      </a>
                                    );
                                  })}
                                </div>
                              ))}

                              {n.footer && (
                                <div>
                                  <p className="mb-1 px-2 text-[9.5px] font-bold uppercase tracking-[0.16em] text-slate-400">
                                    {n.footer.title}
                                  </p>
                                  {n.footer.items.map((it) => (
                                    <a key={it} href="#"
                                      className="block rounded-lg px-2 py-1.5 text-[13px] text-slate-600 hover:bg-slate-900/[0.035] hover:text-slate-900">
                                      {it}
                                    </a>
                                  ))}
                                </div>
                              )}

                              {n.cta && (
                                <div className="px-2 pt-1">
                                  {n.cta.note && (
                                    <p className="mb-2 text-[11.5px] leading-relaxed text-slate-500">
                                      {n.cta.note}
                                    </p>
                                  )}
                                  <button
                                    className="w-full rounded-xl px-4 py-2.5 text-[13px] font-semibold text-white"
                                    style={{ background: `linear-gradient(135deg, ${BRAND}, ${BRAND_2})` }}
                                  >
                                    {n.cta.label}
                                  </button>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                )}

                <div className="flex items-center gap-2 pt-3">
                  <a href="#"
                    className="flex-1 rounded-full border border-slate-900/10 px-5 py-3 text-center text-[13.5px] font-semibold text-slate-700">
                    Sign in
                  </a>
                  <button
                    className="flex-1 rounded-full px-5 py-3 text-[13.5px] font-semibold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${BRAND}, ${BRAND_2})`,
                      boxShadow: `0 10px 28px -10px ${BRAND}`,
                    }}
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
