import Link from "next/link";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { SchemaOrg } from "@/components/SchemaOrg";
import { contactPageContent } from "@/content/pages/contact";
import { createBreadcrumbSchema, createPageMetadata } from "@/content/site";

export const metadata = createPageMetadata({
  title: "Contact | Druncord 18+ Discord",
  description:
    "Get in touch with Druncord staff through Discord or send a note through the site's simple contact form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SchemaOrg
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
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
            <form
              action={`mailto:${contactPageContent.email}`}
              method="post"
              encType="text/plain"
              className="surface-card space-y-4 p-6 md:p-8"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-offwhite/75">
                  Name (optional)
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
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
                  required
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
                  required
                  rows={6}
                  className="w-full rounded-xl border border-amber/20 bg-wood px-4 py-3 text-offwhite placeholder:text-warmgray"
                  placeholder="Say what you need to say."
                />
              </div>
              <p className="text-sm leading-6 text-warmgray">
                This form is not wired to a backend in v1. Submitting opens your mail app as a fallback.
              </p>
              <button
                type="submit"
                className="min-h-[3.25rem] rounded-lg bg-amber px-6 font-medium text-wood hover:bg-amber-hover"
              >
                Send message
              </button>
            </form>
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
