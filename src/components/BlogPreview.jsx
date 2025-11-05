import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Designing pastel fintech interfaces that feel effortless',
    excerpt: 'A practical guide to creating calm, trustworthy UI for banking and e‑commerce experiences.',
    tag: 'Design',
  },
  {
    title: 'Modern auth in 2025: passkeys, magic links, and more',
    excerpt: 'We explore frictionless authentication patterns to keep users secure without sacrificing UX.',
    tag: 'Security',
  },
  {
    title: 'Pricing strategies for SaaS: value metrics that work',
    excerpt: 'From API calls to seats and revenue, here’s how to pick a metric that scales with customers.',
    tag: 'Growth',
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="w-full bg-gradient-to-b from-white to-sky-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-gray-600">Insights on building secure, beautiful fintech products.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <span className="inline-block rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700">{post.tag}</span>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-rose-600">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
              <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-700">
                Read more <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
