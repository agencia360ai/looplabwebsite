import LegalLayout from "@/components/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout
      eyebrow="legal"
      title="privacy policy."
      lastUpdated="May 6, 2026"
    >
      <p>
        This Privacy Policy explains how <strong>Looplab Studio</strong>{" "}
        ("Looplab", "we", "us", or "our") collects, uses, and shares
        information when you visit our website at{" "}
        <strong>looplab.studio</strong> (the "Site") or interact with us by
        email.
      </p>

      <Section title="1. Information we collect">
        <p>
          <strong>Information you provide.</strong> When you contact us by
          email (for example at <em>hello@looplab.studio</em>), we receive the
          contents of your message and any contact details you choose to
          share.
        </p>
        <p>
          <strong>Information collected automatically.</strong> When you visit
          the Site, our hosting provider and analytics tools may collect
          standard log information including your IP address, browser type and
          version, device type, the pages you view, referring URLs, and the
          dates and times of visits.
        </p>
        <p>
          <strong>Cookies and similar technologies.</strong> The Site uses
          essential cookies required for the page to function and may use
          analytics cookies to understand aggregate usage. You can configure
          your browser to refuse cookies; the Site will still function but
          some features may be limited.
        </p>
      </Section>

      <Section title="2. How we use information">
        <ul className="list-disc pl-6 space-y-2">
          <li>To operate, maintain, and improve the Site.</li>
          <li>To respond to your messages and inquiries.</li>
          <li>
            To understand how visitors use the Site (aggregate, non-personal
            analytics).
          </li>
          <li>To comply with legal obligations and protect our rights.</li>
        </ul>
      </Section>

      <Section title="3. How we share information">
        <p>We do not sell your personal information. We share information only:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            With trusted service providers (hosting, analytics, email)
            strictly to operate the Site, under appropriate data-protection
            obligations.
          </li>
          <li>
            If required by law, regulation, legal process, or governmental
            request.
          </li>
          <li>
            In connection with a merger, acquisition, or sale of assets, with
            notice to affected users where required.
          </li>
        </ul>
      </Section>

      <Section title="4. Data retention">
        <p>
          We retain personal information only as long as necessary for the
          purposes set out in this Policy, or as required by law. Email
          correspondence is retained for our records and to provide
          continuity when you contact us again.
        </p>
      </Section>

      <Section title="5. Your rights">
        <p>
          Depending on your jurisdiction (for example, the EU/EEA, UK, or
          California), you may have rights to access, correct, delete, port,
          or restrict processing of your personal information, and to object
          to certain processing. To exercise these rights, email us at{" "}
          <em>hello@looplab.studio</em>. We will respond within the
          time-frames required by applicable law.
        </p>
      </Section>

      <Section title="6. Children's privacy">
        <p>
          The Site is not directed to children under 13 (or the equivalent
          minimum age in your jurisdiction). We do not knowingly collect
          personal information from children. If you believe a child has
          provided us with personal information, please contact us and we
          will delete it.
        </p>
      </Section>

      <Section title="7. International transfers">
        <p>
          Looplab Studio operates from Panama City, Panama. By using the Site
          you understand your information may be processed in Panama and in
          countries where our service providers operate.
        </p>
      </Section>

      <Section title="8. Changes to this Policy">
        <p>
          We may update this Policy from time to time. The "Last updated"
          date at the top reflects the latest version. Material changes will
          be communicated by updating the date and, where appropriate, by a
          prominent notice on the Site.
        </p>
      </Section>

      <Section title="9. Contact us">
        <p>
          Questions about this Policy or our practices? Email{" "}
          <a
            href="mailto:hello@looplab.studio"
            className="underline hover:no-underline text-ink"
          >
            hello@looplab.studio
          </a>
          .
        </p>
      </Section>
    </LegalLayout>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-2">
      <h2 className="text-ink text-xl md:text-2xl font-semibold tracking-tight mb-3">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
