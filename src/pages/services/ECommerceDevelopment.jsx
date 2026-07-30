import React from 'react';

const ECommerceDevelopment = () => (
  <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
    <div className="space-y-6 text-slate-900">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">E-Commerce</p>
      <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">E-Commerce Development</h1>
      <p className="text-lg leading-8 text-slate-600">
        Launch a high-converting online store with secure checkout, product catalogs, payment integrations, and fast performance across desktop and mobile devices.
      </p>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          'Custom shopping experience design',
          'Payment gateway and cart setup',
          'Inventory and order tracking',
        ].map((item) => (
          <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ECommerceDevelopment;
