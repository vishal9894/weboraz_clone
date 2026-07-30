import React from 'react';

const CRMDevelopment = () => (
  <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
    <div className="space-y-6 text-slate-900">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Software</p>
      <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">CRM Development</h1>
      <p className="text-lg leading-8 text-slate-600">
        Build CRM systems that manage customer relationships, sales pipelines, and support interactions in one trustworthy platform.
      </p>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          'Lead and contact management',
          'Automated sales workflows',
          'Integrated customer analytics',
        ].map((item) => (
          <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CRMDevelopment;
