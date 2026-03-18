"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type ContactFormProps = {
  intro: string;
};

export function ContactForm({ intro }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!message.trim()) {
      setError("Message is required.");
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  return (
    <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="max-w-2xl text-lg leading-8 text-offwhite/80">{intro}</p>
        <div className="mt-6 flex flex-wrap gap-5 text-sm">
          <Link href="/faq" className="text-amber hover:text-amber-hover">
            Read the FAQ
          </Link>
          <Link href="/rules" className="text-amber hover:text-amber-hover">
            Read the rules
          </Link>
          <Link href="/join" className="text-amber hover:text-amber-hover">
            Join Druncord
          </Link>
        </div>
      </div>
      {submitted ? (
        <div className="surface-card p-6 md:p-8">
          <p className="text-lg leading-8 text-offwhite/80">
            Thanks. We will get back to you when we can. Fastest response is
            always through the Discord server.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="surface-card space-y-4 p-6 md:p-8">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-offwhite/75">
              Name (optional)
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-xl border border-amber/20 bg-wood px-4 py-3 text-offwhite placeholder:text-warmgray"
              placeholder="How should we address you?"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-offwhite/75">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-amber/20 bg-wood px-4 py-3 text-offwhite placeholder:text-warmgray"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-offwhite/75">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full rounded-xl border border-amber/20 bg-wood px-4 py-3 text-offwhite placeholder:text-warmgray"
              placeholder="Say what you need to say."
            />
          </div>
          {error ? <p className="text-sm text-amber">{error}</p> : null}
          <p className="text-sm leading-6 text-warmgray">
            Note: form submissions are not wired to a backend in v1. Staff respond
            fastest inside the server.
          </p>
          <button
            type="submit"
            className="min-h-[3.25rem] rounded-lg bg-amber px-6 font-medium text-wood hover:bg-amber-hover"
          >
            Send message
          </button>
        </form>
      )}
    </div>
  );
}
