import React from 'react';

const BrandIdentity = () => (
  <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
    <div className="space-y-6 text-slate-900">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Design</p>
      <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Brand Identity</h1>
      <p className="text-lg leading-8 text-slate-600">
        Develop a consistent brand identity with a visual language, tone, and system that supports your market positioning.
      </p>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          'Brand positioning and visual system',
          'Logo, colors and typography',
          'Creative guidelines for consistency',
        ].map((item) => (
          <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BrandIdentity;
