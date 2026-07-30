import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import hero from '../assets/hero.png';

const SHOWCASE_ITEMS = [
  {
    title: 'RetailFlow POS & Inventory Management',
    category: 'Retail Software',
    status: 'Live Product Demo',
    description:
      'Grow your business with software that evolves alongside you — seamless customization as you scale.',
    image: hero,
    details: '/services/retail-flow-pos',
  },
  {
    title: 'Office Flow Management Platform',
    category: 'Management Software',
    status: 'Live Product Demo',
    description:
      'Your complete workplace management platform. From projects to tasks, payments, and staff management, all in one place.',
    image: hero,
    details: '/services/office-flow-management',
  },
  {
    title: 'Solar Design Platform',
    category: 'Energy & Solar Software',
    status: 'Concept in Development',
    description:
      'AI-assisted solar planning concept for panel placement, project visualization, customer review, and faster installation planning.',
    image: hero,
    details: '/services/solar-design',
  },
  {
    title: 'CRM & Sales Dashboard',
    category: 'Business Software',
    status: 'Concept in Development',
    description:
      'Custom CRM dashboard for lead tracking, customer records, follow-ups, sales pipelines, reporting, and team workflow visibility.',
    image: hero,
    details: '/services/crm-sales-dashboard',
  },
  {
    title: 'Restaurant Management App',
    category: 'Restaurant Technology',
    status: 'Concept in Development',
    description:
      'Restaurant technology solution for online ordering, digital menus, table booking, loyalty workflows, and operational dashboards.',
    image: hero,
    details: '/services/restaurant-management',
  },
  {
    title: 'Healthcare Patient Portal',
    category: 'Healthcare Software',
    status: 'Concept in Development',
    description:
      'Secure patient portal for appointment booking, communication, clinic workflows, records access, and admin dashboards.',
    image: hero,
    details: '/industries/healthcare',
  },
];

const ProductShowcase = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/2 h-[20rem] w-[20rem] -translate-y-1/2 rounded-full bg-[#ffedd5]/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-500">
            Our Work
          </p>
          <h2 className="mt-5 font-serif text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            Selected Product Demonstrations
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Explore concept solutions and internal demonstrations designed around practical business problems. Click any project to see the full details.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {SHOWCASE_ITEMS.map((item, index) => (
            <motion.article
              key={item.title}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_-48px_rgba(15,23,42,.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_-40px_rgba(15,23,42,.22)]"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-slate-900/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                  {item.category}
                </div>
                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-900 shadow-sm">
                  {item.status}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    to={item.details}
                    className="text-sm font-semibold text-orange-500 transition hover:text-orange-600"
                  >
                    View Details
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Request a Demo
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
