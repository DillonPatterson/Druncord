"use client";

import Link from "next/link";
import { useState } from "react";
import { FinalCTA } from "@/components/FinalCTA";
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
      <section className="bg-wood-light py-16 md:py-20">
        <div className="section-shell">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="max-w-2xl text-lg leading-8 text-offwhite/80">
                {contactPageContent.intro}
              </p>
              <div className="mt-6 flex flex-wrap gap-5 text-sm">
                <Link href="/faq" className="text-amber hover:text-amber-hover">
                  Read the FAQ
                </Link>
                <Link href="/rules" className="text-amber hover:text-amber-hover">
                  Read the rules
                </Link>
              </div>
            </div>

            {submitted ? (
              <div className="surface-card flex flex-col justify-center gap-4 p-6 md:p-8">
                <p className="text-lg font-medium text-offwhite">
                  Message received.
                </p>
                <p className="text-base leading-7 text-offwhite/75">
                  Thanks. We will get back to you when we can. Fastest
                  response is always through the Discord server.
                </p>
                <Link
                  href="/join"
                  className="text-sm font-medium text-amber hover:text-amber-hover"
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
                    className="mb-2 block text-sm text-offwhite/75"
                  >
                    Name (optional)
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-amber/20 bg-wood px-4 py-3 text-offwhite placeholder:text-warmgray focus:border-amber/50 focus:outline-none"
                    placeholder="How should we address you?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-offwhite/75"
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
                    className="w-full rounded-xl border border-amber/20 bg-wood px-4 py-3 text-offwhite placeholder:text-warmgray focus:border-amber/50 focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-offwhite/75"
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
                    className="w-full rounded-xl border border-amber/20 bg-wood px-4 py-3 text-offwhite placeholder:text-warmgray focus:border-amber/50 focus:outline-none"
                    placeholder="Say what you need to say."
                  />
                </div>
                {error ? (
                  <p className="text-sm text-amber/90">{error}</p>
                ) : null}
                <p className="text-sm leading-6 text-warmgray">
                  Form submissions are not wired to a backend in v1.
                  Staff respond fastest inside the server.
                </p>
                <button
                  type="submit"
                  className="min-h-[3.25rem] rounded-lg bg-amber px-6 font-medium text-wood hover:bg-amber-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <FinalCTA
        title="Need the faster route?"
        description="Staff answer quickest inside the server."
        source="contact-page"
      />
    </>
  );
}
