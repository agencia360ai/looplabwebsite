import LegalLayout from "@/components/LegalLayout";

export default function Terms() {
  return (
    <LegalLayout
      eyebrow="legal"
      title="terms of service."
      lastUpdated="May 6, 2026"
    >
      <p>
        These Terms of Service ("Terms") govern your access to and use of the
        website at <strong>looplab.studio</strong> (the "Site"), operated by{" "}
        <strong>Looplab Studio</strong> ("Looplab", "we", "us", or "our"). By
        accessing or using the Site, you agree to these Terms.
      </p>

      <Section title="1. Acceptance of terms">
        <p>
          By using the Site you confirm that you have read, understood, and
          agree to be bound by these Terms. If you do not agree, please do
          not use the Site.
        </p>
      </Section>

      <Section title="2. Use of the site">
        <p>
          The Site is provided for informational purposes about Looplab and
          our products. You agree to use the Site only for lawful purposes
          and in a manner that does not infringe the rights of, restrict, or
          inhibit anyone else's use of the Site.
        </p>
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Attempt to interfere with the proper functioning of the Site,
            including by introducing malware or by attempting unauthorized
            access.
          </li>
          <li>
            Use automated systems (bots, scrapers, crawlers) to harvest
            content from the Site beyond what robots.txt permits.
          </li>
          <li>
            Misrepresent your identity or affiliation when contacting us.
          </li>
        </ul>
      </Section>

      <Section title="3. Intellectual property">
        <p>
          All content on the Site — including the Looplab name and logo,
          mascot illustrations, written copy, design, code, and the
          "self-rpg apps" concept — is owned by Looplab Studio or its
          licensors and is protected by applicable copyright, trademark, and
          other intellectual-property laws.
        </p>
        <p>
          You may not reproduce, distribute, modify, or create derivative
          works of Site content without our prior written permission, except
          for brief excerpts under fair-use principles with proper
          attribution.
        </p>
      </Section>

      <Section title="4. User submissions">
        <p>
          If you contact us by email or otherwise send us content,
          suggestions, or feedback, you grant Looplab a worldwide,
          royalty-free, perpetual license to use that content for the
          purpose of operating and improving our products. You are
          responsible for ensuring you have the right to share what you
          send.
        </p>
      </Section>

      <Section title="5. Third-party links">
        <p>
          The Site may contain links to third-party websites or services we
          do not control. We are not responsible for the content, policies,
          or practices of any third-party site. Your interactions with those
          sites are governed by their own terms and privacy policies.
        </p>
      </Section>

      <Section title="6. Disclaimers">
        <p>
          The Site is provided <strong>"as is"</strong> and{" "}
          <strong>"as available"</strong>, without warranties of any kind,
          either express or implied, including without limitation
          warranties of merchantability, fitness for a particular purpose,
          and non-infringement. We do not warrant that the Site will be
          uninterrupted, error-free, or free of harmful components.
        </p>
        <p>
          Any roadmap, app status (e.g., "almost ready", "in development",
          "in concept"), or forward-looking statement on the Site is
          aspirational and may change without notice. Nothing on the Site
          constitutes a binding commitment to ship a specific product on a
          specific timeline.
        </p>
      </Section>

      <Section title="7. Limitation of liability">
        <p>
          To the maximum extent permitted by law, Looplab Studio and its
          affiliates, employees, and partners will not be liable for any
          indirect, incidental, special, consequential, or punitive
          damages arising out of or related to your use of the Site, even
          if we have been advised of the possibility of such damages.
        </p>
      </Section>

      <Section title="8. Indemnification">
        <p>
          You agree to indemnify and hold Looplab Studio harmless from any
          claim, demand, or expense (including reasonable legal fees)
          arising from your misuse of the Site or violation of these Terms.
        </p>
      </Section>

      <Section title="9. Governing law">
        <p>
          These Terms are governed by the laws of the Republic of Panama,
          without regard to its conflict-of-laws provisions. Any dispute
          arising from these Terms or your use of the Site will be subject
          to the exclusive jurisdiction of the competent courts of Panama
          City, Panama.
        </p>
      </Section>

      <Section title="10. Changes to these Terms">
        <p>
          We may revise these Terms at any time by updating this page. The
          "Last updated" date at the top reflects the latest version.
          Continued use of the Site after a change indicates your
          acceptance of the revised Terms.
        </p>
      </Section>

      <Section title="11. Contact">
        <p>
          Questions about these Terms? Email{" "}
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
