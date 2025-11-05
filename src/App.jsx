import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import BlogPreview from './components/BlogPreview';
import ContactSection from './components/ContactSection';
import { Rocket } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Simple pastel navbar */}
      <header className="sticky top-0 z-20 w-full border-b border-gray-100 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-rose-300 to-sky-300 text-white shadow-sm">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold">PastelPay</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 sm:flex">
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#blog" className="hover:text-gray-900">Blog</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
            <a href="#" className="rounded-xl bg-gray-900 px-3 py-2 text-white hover:bg-gray-800">Sign in</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Pricing />
        <BlogPreview />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-100 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} PastelPay. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#contact" className="hover:text-gray-700">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
