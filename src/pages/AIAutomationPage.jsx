import React from 'react';

const AIAutomationPage = () => {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <section className="space-y-6 text-slate-900">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
            AI Automation
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-5xl">
            Transform your business with intelligent automation.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            From AI chatbots and predictive workflows to custom GPT integrations, we design automation that makes your teams faster, your operations smarter,
            and your customers happier.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'AI Strategy',
              description: 'Define the right AI use cases, data flow, and automation path for your business goals.',
            },
            {
              title: 'AI Integrations',
              description: 'Connect AI to your CRM, workflows, support systems, and customer touchpoints.',
            },
            {
              title: 'AI Agents',
              description: 'Build custom assistants and intelligent experiences that act on behalf of your team.',
            },
          ].map((card) => (
            <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <h2 className="text-xl font-semibold text-slate-900">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 space-y-6">
        <div className="rounded-3xl bg-slate-950 px-8 py-10 text-white shadow-2xl sm:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-400">
              What we build
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              AI-driven automation for teams, customers, and growth.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              We create automation flows that reduce manual work, surface better decisions, and unlock new digital revenue streams.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Customer support bots and intelligent help desks',
              'Sales follow-up automation and lead scoring',
              'Workflow automation, task routing, and approvals',
              'GPT-powered content, summarization, and research tools',
              'Data automation and AI-powered reporting dashboards',
              'Custom AI agents for product and ops workflows',
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-slate-900/90 p-5">
                <p className="text-sm leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">How AI Automation works</h2>
          <ul className="mt-6 space-y-4 text-slate-600">
            <li className="rounded-2xl bg-slate-50 p-5">
              <strong className="block text-slate-900">Discover</strong>
              Identify the best automation opportunities, data sources, and customer outcomes.
            </li>
            <li className="rounded-2xl bg-slate-50 p-5">
              <strong className="block text-slate-900">Design</strong>
              Prototype AI workflows and build high-value automation for your core operations.
            </li>
            <li className="rounded-2xl bg-slate-50 p-5">
              <strong className="block text-slate-900">Deliver</strong>
              Launch AI integrations, monitor performance, and scale automation across your business.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Why choose AI automation</h2>
          <p className="mt-4 text-slate-600">
            Automation with AI is not just a feature — it is a way to reduce operating costs, improve service, and move faster than competitors while staying reliable.
          </p>
          <div className="mt-8 space-y-4">
            {[
              'Faster responses and happier customers',
              'Less manual work for repetitive tasks',
              'Data-driven decisions powered by AI',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-3xl bg-slate-50 p-4">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationPage;
