import { ContactForm } from "@/components/ContactForm";
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
          <ContactForm intro={contactPageContent.intro} />
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
