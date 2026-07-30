import React from 'react';

const CustomWebsiteDevelopment = () => (
  <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
    <div className="space-y-6 text-slate-900">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Web Development</p>
      <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Custom Website Development</h1>
      <p className="text-lg leading-8 text-slate-600">
        Build a custom website tailored to your brand, customers, and conversion goals. From responsive layouts to performance optimization, we create modern digital experiences that work.
      </p>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          'Brand-centric website design',
          'Conversion-focused user journeys',
          'CMS and content management integration',
        ].map((item) => (
          <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CustomWebsiteDevelopment;
