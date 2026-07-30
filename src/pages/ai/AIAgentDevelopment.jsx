import React from 'react';

const AIAgentDevelopment = () => (
  <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
    <div className="space-y-6 text-slate-900">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">AI</p>
      <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">AI Agent Development</h1>
      <p className="text-lg leading-8 text-slate-600">
        Develop intelligent agents that automate tasks, coordinate workflows, and solve problems using AI. We build solutions that act on your behalf and improve productivity.
      </p>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          'Automation agent design',
          'Multi-step workflow orchestration',
          'Task automation with AI decisioning',
        ].map((item) => (
          <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AIAgentDevelopment;
