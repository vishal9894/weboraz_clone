import React from 'react';
import hero from '../../assets/hero.png';

const features = [
  'Connected pharmacy, lab and doctor network',
  '24×7 accessible appointment and service booking',
  'Home blood sample collection',
  'Home medicine delivery via dedicated riders',
  'Online doctor consultations',
];

const Healthcare = () => (
  <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div className="space-y-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">Healthcare Specialization</p>
        <div className="space-y-5">
          <h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-slate-900 sm:text-5xl">
            Healthcare Technology
            <br />
            Informed by Real
            <br />
            Clinical Experience
          </h1>
          <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            With strategic input from a Weboraz co-founder who brings real clinical healthcare experience, Weboraz designs connected healthcare platforms that bring pharmacies, diagnostic labs and doctors together in one place — built for 24×7 accessibility, with home blood sample collection, rider-based medicine delivery and online doctor consultations alongside modern clinic websites and patient communication tools.
          </p>
        </div>

        <div className="space-y-4">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-slate-900">{feature}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Explore Healthcare Solutions
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-[0_20px_80px_-48px_rgba(15,23,42,.16)]">
        <img src={hero} alt="Healthcare product preview" className="h-full w-full object-cover" />
      </div>
    </div>
  </div>
);

export default Healthcare;
