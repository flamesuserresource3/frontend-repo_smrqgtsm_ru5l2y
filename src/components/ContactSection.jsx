import React from 'react';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log('Contact form submitted:', data);
    alert('Thanks for reaching out! We\'ll get back to you shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-sky-700">
            <Mail className="h-4 w-4" /> Contact us
          </div>
          <h2 className="mt-4 text-3xl font-semibold text-gray-900 sm:text-4xl">We'd love to hear from you</h2>
          <p className="mt-2 text-gray-600">Questions about pricing, security, or features? Send us a message.</p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 grid max-w-2xl gap-4 rounded-3xl border border-gray-200 bg-gradient-to-b from-rose-50 to-sky-50 p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-gray-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-200" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-200" />
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-700">Message</label>
            <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500">We respond within 1 business day.</p>
            <button type="submit" className="rounded-xl bg-gray-900 px-5 py-2.5 text-white transition hover:bg-gray-800">Send message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
