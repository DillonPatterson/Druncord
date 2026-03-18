"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { contactPageContent } from "@/content/pages/contact";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email.trim() || !message.trim()) {
      setError("Email and message are required.");
      return;
    }
    setSubmitted(true);
  }

  return (
    <>
      <PageHero title="Get in touch." description="Simple and direct." />
      <section className="bg-warm py-16 md:py-20">
        <div className="section-shell">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="max-w-2xl text-[15px] leading-[1.95] text-sub">
                {contactPageContent.intro}
              </p>
              <div className="mt-6 flex flex-wrap gap-5 text-sm">
                <Link href="/faq" className="font-mono text-[10px] uppercase tracking-[0.12em] text-amber hover:opacity-70">
                  Read the FAQ
                </Link>
                <Link href="/rules" className="font-mono text-[10px] uppercase tracking-[0.12em] text-amber hover:opacity-70">
                  Read the rules
                </Link>
              </div>
            </div>

            {submitted ? (
              <div className="surface-card flex flex-col justify-center gap-4 p-6 md:p-8">
                <p className="font-display text-3xl font-black tracking-tight text-text">
                  Message received.
                </p>
                <p className="text-[15px] leading-[1.85] text-sub">
                  Thanks. We will get back to you when we can. Fastest
                  response is always through the Discord server.
                </p>
                <Link
                  href="/join"
                  className="font-mono text-[10px] uppercase tracking-[0.12em] text-amber hover:opacity-70"
                >
                  Join the server
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="surface-card space-y-4 p-6 md:p-8"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.12em] text-sub"
                  >
                    Name (optional)
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-border-warm bg-bg px-4 py-3 text-text placeholder:text-sub focus:border-amber/50 focus:outline-none"
                    placeholder="How should we address you?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.12em] text-sub"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-border-warm bg-bg px-4 py-3 text-text placeholder:text-sub focus:border-amber/50 focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.12em] text-sub"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border border-border-warm bg-bg px-4 py-3 text-text placeholder:text-sub focus:border-amber/50 focus:outline-none"
                    placeholder="Say what you need to say."
                  />
                </div>
                {error ? (
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-amber">{error}</p>
                ) : null}
                <p className="text-[13px] leading-[1.75] text-sub">
                  Form submissions are not wired to a backend in v1.
                  Staff respond fastest inside the server.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-[3px] bg-amber px-5 py-2.5 font-mono text-[12px] font-bold uppercase tracking-[0.04em] text-bg transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
