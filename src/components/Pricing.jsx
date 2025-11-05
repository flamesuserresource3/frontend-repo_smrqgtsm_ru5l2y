import React from 'react';
import { Check, Shield, Sparkles } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    highlight: 'For early projects',
    features: ['Up to 1K monthly API calls', 'Email signup & magic links', 'Community support'],
    cta: 'Start free',
    gradient: 'from-sky-200 to-emerald-200',
  },
  {
    name: 'Growth',
    price: '$29',
    period: '/mo',
    highlight: 'Best for teams',
    features: ['100K monthly API calls', 'SAML SSO & OAuth', 'Priority support'],
    cta: 'Upgrade',
    gradient: 'from-rose-200 to-sky-200',
    featured: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    highlight: 'For regulated fintech',
    features: ['Unlimited usage', 'Dedicated VPC', 'Compliance assistance'],
    cta: 'Contact sales',
    gradient: 'from-amber-200 to-rose-200',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
            <Shield className="h-4 w-4" /> Transparent pricing
          </div>
          <h2 className="mt-4 text-3xl font-semibold text-gray-900 sm:text-4xl">Flexible plans that scale with you</h2>
          <p className="mt-2 text-gray-600">Start free and grow without limits. Switch plans anytime.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl border ${
                tier.featured ? 'border-rose-300 bg-rose-50' : 'border-gray-200 bg-gray-50'
              } p-6 shadow-sm`}
            >
              {tier.featured && (
                <div className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-rose-400 to-sky-400 px-2 py-1 text-xs text-white shadow">
                  <Sparkles className="h-3 w-3" /> Popular
                </div>
              )}
              <div className={`h-2 w-full rounded-full bg-gradient-to-r ${tier.gradient}`} />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{tier.name}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                <span className="mb-1 text-gray-500">{tier.period}</span>
              </div>
              <p className="mt-1 text-sm text-gray-600">{tier.highlight}</p>
              <ul className="mt-4 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-emerald-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-gray-900 px-4 py-2.5 text-white transition hover:bg-gray-800">
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
