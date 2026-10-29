import { Link } from "react-router-dom";
import LegalLayout from "@/components/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout
      eyebrow="legal"
      title="privacy policy."
      lastUpdated="October 29, 2026"
    >
      <aside className="rounded-2xl border border-cream-border bg-cream-elevated px-5 py-4 md:px-6 md:py-5 text-ink font-normal">
        Looking for CapyMath?{" "}
        <Link
          to="/capymath/privacy"
          className="font-semibold underline hover:no-underline"
        >
          Read the CapyMath Privacy Notice
        </Link>
        . The website and CapyPray notices describe separate services.
      </aside>

      <p>
        This Privacy Policy explains how <strong>Looplab Studio</strong>{" "}
        ("Looplab", "we", "us", or "our") collects, uses, and shares
        information when you visit our website at{" "}
        <strong>looplab.gg</strong> (the "Site") or interact with us by
        email.
      </p>

      <Section title="1. Information we collect">
        <p>
          <strong>Information you provide.</strong> When you contact us by
          email (for example at <em>hello@looplab.gg</em>), we receive the
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
          <em>hello@looplab.gg</em>. We will respond within the
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
            href="mailto:hello@looplab.gg"
            className="underline hover:no-underline text-ink"
          >
            hello@looplab.gg
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
            CapyPray Privacy Notice
          </h2>
          <p className="text-ink-muted text-sm tracking-wide">
            Effective date: October 23, 2026
          </p>
        </div>

        <p>
          CapyPray is a Christian prayer app for teens and adults, offered by
          Five Bits, Inc. ("we", "us"). This notice applies only to the
          CapyPray app. Our website practices are described separately on this
          page.
        </p>

        <NoticeSection title="Who CapyPray is for">
          <p>
            CapyPray is for people aged 13 and older. The app asks for your
            birth year (and, only when needed, your birth month) before
            anything else, and does not let anyone younger than 13 continue.
            The answer is stored only on your device. If we learn that we have
            information from someone under 13, we delete it.
          </p>
        </NoticeSection>

        <NoticeSection title="What stays on your device">
          <p>
            The app keeps the following only on your device. It is not sent
            to us:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>the name or nickname you give Capy (optional)</li>
            <li>your night-prayer time and reminder preference</li>
            <li>the names and notes you add for "prayer people"</li>
            <li>
              your prayer progress, streak, rewards, puzzle levels and settings
            </li>
            <li>the result of the age screen</li>
          </ul>
          <p>
            There are no accounts and no sign-in in this version. You can
            erase this information at any time in Settings → "Delete my data".
            Deleting the app also removes it.
          </p>
        </NoticeSection>

        <NoticeSection title="What we never collect">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We do not record or store your voice. The app does not use the
              microphone; saying a prayer out loud is optional.
            </li>
            <li>
              We do not collect photos, video, contacts, precise location or
              the content of your prayers.
            </li>
            <li>There are no ads inside CapyPray and no chat.</li>
          </ul>
        </NoticeSection>

        <NoticeSection title="Understanding how the app is used (Google Analytics)">
          <p>
            We use Google Analytics for Firebase, provided by Google, to
            understand how CapyPray is used so we can improve it: which screens
            are opened, which prayers and lessons are started and finished, how
            far people get in the welcome steps, when the subscription offer is
            viewed and when a purchase starts or succeeds, and basic technical
            data such as device model, operating system, app version, language,
            country and an app-instance identifier created by Firebase. It
            starts only after the age screen. It does not use your advertising
            identifier and is not used to personalize ads. Google processes
            this information under its own policies (
            <ExternalLink href="https://policies.google.com/privacy" />).
            Analytics data is kept for up to 14 months.
          </p>
        </NoticeSection>

        <NoticeSection title="Measuring our ads (Meta)">
          <p>
            We advertise CapyPray on Facebook and Instagram and use the Meta
            (Facebook) SDK to learn which ads lead people to install and
            subscribe. The SDK starts only after the age screen. It sends Meta:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              app events, such as installing and opening the app and finishing
              the welcome steps
            </li>
            <li>
              device and app information, such as device model, operating
              system, app version, language, time zone and IP address
            </li>
            <li>
              a device advertising identifier: on Android, your Advertising ID;
              on iPhone and iPad, your IDFA only if you allow tracking when the
              app asks (App Tracking Transparency). If you don't allow it, Meta
              uses Apple's privacy-preserving measurement instead.
            </li>
          </ul>
          <p>
            Meta uses this information under its own Data Policy (
            <ExternalLink href="https://www.facebook.com/privacy/policy" />) to
            measure and improve our ads, and may combine it with information it
            has about you to do so. You can limit this at any time: on iPhone
            and iPad, Settings → Privacy &amp; Security → Tracking; on Android,
            Settings → Google → Ads (delete or reset your Advertising ID); and
            in your Facebook or Instagram ad preferences.
          </p>
        </NoticeSection>

        <NoticeSection title="Subscriptions (RevenueCat)">
          <p>
            Purchases are processed by Apple or Google under their own privacy
            policies. We use RevenueCat, a subscription service provider, to
            confirm purchases, restore access and keep your subscription status
            current. RevenueCat receives purchase information (product, price,
            dates and store transaction details), a random identifier created
            for your installation, device identifiers (after the age screen)
            and basic technical data such as app version and platform. With the
            Meta anonymous identifier described above, RevenueCat also reports
            trials, purchases and renewals to Meta so we can measure which ads
            lead to subscriptions.
          </p>
        </NoticeSection>

        <NoticeSection title="Notifications">
          <p>
            If you turn on the night-prayer reminder, your device schedules it
            locally. No notification data is sent to us.
          </p>
        </NoticeSection>

        <NoticeSection title="Sharing and your choices">
          <p>
            We do not sell your personal information for money. Sharing device
            identifiers and app activity with Meta for ad measurement may count
            as "sharing" or "targeted advertising" under some U.S. state
            privacy laws. You can opt out with the device settings above, or by
            emailing us; we will honor opt-out requests and Global Privacy
            Control signals where the law requires.
          </p>
          <p>
            CapyPray is currently offered only in the United States. If we
            offer it elsewhere, we will update this notice first, including any
            consent the law there requires before ad measurement starts.
          </p>
        </NoticeSection>

        <NoticeSection title="Data retention">
          <p>
            Information on your device stays there until you delete it or
            delete the app. RevenueCat keeps subscription records while they
            are needed to provide and support your subscription and to meet
            legal and accounting obligations. Meta keeps information under its
            own policies. Apple and Google keep their own purchase records
            under their policies.
          </p>
        </NoticeSection>

        <NoticeSection title="Your requests">
          <p>
            To ask us about your information, opt out, or delete the
            subscription records our service providers keep, email us with
            your store order number so we can find them. We will respond within
            30 days, or sooner where the law requires.
          </p>
        </NoticeSection>

        <NoticeSection title="Changes">
          <p>
            If we change how CapyPray handles information, we will update this
            notice and its effective date before the change takes effect.
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

function ExternalLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:no-underline text-ink break-words"
    >
      {href}
    </a>
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
