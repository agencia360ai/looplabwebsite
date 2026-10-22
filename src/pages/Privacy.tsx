import LegalLayout from "@/components/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout
      eyebrow="legal"
      title="privacy policy."
      lastUpdated="October 22, 2026"
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
        <p>
          Our CapyPray app is directed to children and is covered by its own
          notice — see the{" "}
          <a href="#capypray" className="underline hover:no-underline text-ink">
            CapyPray Privacy Notice
          </a>{" "}
          below.
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

      {/* App-specific notice. Linkable as /privacy#capypray for the App
          Store / Google Play privacy-policy URL. */}
      <section
        id="capypray"
        className="scroll-mt-32 border-t border-cream-border pt-12 space-y-6"
      >
        <div>
          <h2 className="text-ink text-2xl md:text-3xl font-bold tracking-tight mb-2">
            CapyPray (kids app) Privacy Notice
          </h2>
          <p className="text-ink-muted text-sm tracking-wide">
            Effective date: October 22, 2026
          </p>
        </div>

        <p>
          CapyPray is a Christian prayer app for children ages 4–8 and their
          families, offered by Five Bits, Inc. ("we", "us"). This notice
          applies only to the CapyPray app. Our website practices are
          described separately on this page, and the statement that our
          website is not directed to children under 13 does not apply to
          CapyPray.
        </p>
        <p>
          CapyPray is directed to children. We designed it to comply with the
          Children's Online Privacy Protection Act (COPPA), Apple's App Store
          Kids Category rules and Google Play's Families policy.
        </p>

        <NoticeSection title="What stays on your device">
          <p>
            The app keeps the following only on your device. It is not sent
            to us or to anyone else:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              a nickname for your child (optional; please use a nickname, not
              a full name)
            </li>
            <li>your bedtime and reminder preference</li>
            <li>the names or notes you add for "prayer people"</li>
            <li>prayer progress, rewards, game levels and settings</li>
          </ul>
          <p>
            There are no accounts, no sign-in and no cloud backup in this
            version. Because we never receive this information, we cannot see
            it, restore it or delete it for you. A parent can erase it at any
            time in Parent Corner → "Delete my child's data". Deleting the app
            also removes it.
          </p>
        </NoticeSection>

        <NoticeSection title="What we never collect">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We do not record or store your child's voice. The app does not
              use the microphone; saying a prayer out loud is optional and
              stays in the room.
            </li>
            <li>We do not collect photos, video, contacts or location.</li>
            <li>
              There are no ads, no chat, no social features and no links a
              child can open without a grown-up.
            </li>
            <li>
              We do not use analytics, advertising or tracking tools, and we
              do not sell or share personal information.
            </li>
          </ul>
        </NoticeSection>

        <NoticeSection title="Subscriptions (for grown-ups)">
          <p>
            Purchases happen only behind a parental gate and are processed by
            Apple or Google under their own privacy policies. We use
            RevenueCat, a subscription service provider, to confirm purchases,
            restore access and keep the subscription status current.
          </p>
          <p>
            For that purpose only, RevenueCat receives purchase information
            (such as the product, purchase date and store transaction
            details), a random identifier created for the app installation,
            and the basic technical data needed to deliver its service (such
            as app version and platform). The identifier is not linked to your
            child's name, prayers or progress, and the app has device
            identifier collection turned off. Under COPPA, we use this
            persistent identifier solely to support the internal operations of
            the app (processing and maintaining a subscription), not to contact
            anyone, build a profile or show advertising.
          </p>
        </NoticeSection>

        <NoticeSection title="Notifications">
          <p>
            If a parent turns on the bedtime reminder, the device schedules it
            locally. No notification data is sent to us.
          </p>
        </NoticeSection>

        <NoticeSection title="Data retention">
          <p>
            Information on the device stays there until a parent deletes it
            or deletes the app. Subscription records held by RevenueCat are
            kept while they are needed to provide and support the subscription
            and to meet legal and accounting obligations. Apple and Google keep
            their own purchase records under their policies.
          </p>
        </NoticeSection>

        <NoticeSection title="Parents' choices and rights">
          <p>
            You can review and delete your child's information in Parent
            Corner at any time. You can also ask us to delete the subscription
            records our service provider keeps for your purchase: email us
            with the store order number so we can find them. We will respond
            within 30 days. Please do not include sensitive information about
            your child in messages to us.
          </p>
        </NoticeSection>

        <NoticeSection title="Changes">
          <p>
            If we change how CapyPray handles information, we will update this
            notice and its effective date before the change takes effect. If a
            future version collects new personal information from children, we
            will obtain verifiable parental consent first, as COPPA requires.
          </p>
        </NoticeSection>

        <NoticeSection title="Contact">
          <p>
            Five Bits, Inc.
            <br />
            Avenida Samuel Lewis, Edificio Magel, Piso 2, Oficina C-1, Panama
            City, Panama
            <br />
            <a
              href="mailto:support@fivebits.gs"
              className="underline hover:no-underline text-ink"
            >
              support@fivebits.gs
            </a>
          </p>
        </NoticeSection>
      </section>
    </LegalLayout>
  );
}

function NoticeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-2">
      <h3 className="text-ink text-lg md:text-xl font-semibold tracking-tight mb-3">
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </section>
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
