import React from 'react';

const LocalSEO = () => (
  <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
    <div className="space-y-6 text-slate-900">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Marketing</p>
      <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Local SEO</h1>
      <p className="text-lg leading-8 text-slate-600">
        Attract local customers with search strategies built for local visibility, business listings, and geographic relevance.
      </p>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          'Google Business Profile optimization',
          'Local citation management',
          'Location-specific keyword targeting',
        ].map((item) => (
          <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default LocalSEO;
