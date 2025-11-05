import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, CreditCard, ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    console.log('Signup requested for:', email);
    alert("Thanks! We'll send you an invite soon.");
  };

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-sky-50 via-rose-50 to-emerald-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft gradient overlay to improve contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-white/10" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-20 text-center sm:pt-28 lg:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-3 py-1 text-xs text-gray-700 backdrop-blur">
          <Shield className="h-4 w-4 text-emerald-500" />
          PCI-ready infrastructure for modern fintech SaaS
        </div>
        <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          Launch your pastel-perfect fintech SaaS
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
          A clean, minimalist platform for digital banking and e‑commerce. Beautiful UI, secure auth, and usage-based pricing out of the box.
        </p>

        {/* Auth mini-CTA */}
        <form onSubmit={handleSignup} className="mt-8 flex w-full max-w-md items-center gap-2 rounded-2xl border border-gray-200 bg-white/80 p-2 shadow-sm backdrop-blur">
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="h-11 flex-1 rounded-xl border-0 bg-transparent px-4 text-gray-900 placeholder:text-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-400 to-sky-400 px-4 text-white shadow-sm transition hover:brightness-110"
          >
            <Rocket className="h-4 w-4" />
            Get Started
          </button>
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1">
            <CreditCard className="h-4 w-4 text-sky-500" /> No card required
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1">
            <ArrowRight className="h-4 w-4 text-rose-500" /> 3‑minute setup
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
