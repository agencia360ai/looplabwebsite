import { useEffect } from "react";
import { Link } from "react-router-dom";
import LegalLayout from "@/components/LegalLayout";

// Public store-listing privacy URL: looplab.gg/capymath/privacy.
// Text is published verbatim; edit wording only with sign-off.
export default function CapyMathPrivacy() {
  useEffect(() => {
    const previous = document.title;
    document.title = "CapyMath Privacy Notice";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <LegalLayout
      eyebrow="legal"
      title="CapyMath Privacy Notice"
      lastUpdated="October 28, 2026"
    >
      <p>
        CapyMath is a guided mathematics practice app for teens and adults
        aged 13 and older, provided by Five Bits, Inc. (“we”, “us”). This
        notice applies to the CapyMath mobile app. Our{" "}
        <Link to="/privacy" className="underline hover:no-underline text-ink">
          website
        </Link>{" "}
        and{" "}
        <Link
          to="/privacy#capypray"
          className="underline hover:no-underline text-ink"
        >
          CapyPray
        </Link>{" "}
        have separate privacy notices.
      </p>

      <Section title="At a glance">
        <ul className="list-disc pl-6 space-y-2">
          <li>No account or sign-in is required.</li>
          <li>
            Learner profiles, answers and learning progress are stored locally
            on your device.
          </li>
          <li>
            We use the Meta SDK to measure installations and app activity
            associated with our Facebook and Instagram campaigns. This involves
            information leaving your device.
          </li>
          <li>CapyMath does not display ads or offer public messaging.</li>
          <li>
            CapyMath does not request camera, microphone, contacts or
            precise-location access.
          </li>
          <li>Sharing a learning summary is optional and under your control.</li>
        </ul>
      </Section>

      <Section title="Learning information on your device">
        <p>
          CapyMath stores profile symbols, optional nicknames, activity
          responses, progress, milestones, visit preferences, and accessibility
          and audio settings locally. Up to four profiles can use one device. A
          nickname is optional; please avoid using your full name or contact
          details.
        </p>
        <p>
          We do not operate a cloud account or learning-progress sync service.
          CapyMath's campaign integration does not intentionally attach your
          nickname, math answers or learning records to Meta events. We cannot
          retrieve those local learning records from your device.
        </p>
      </Section>

      <Section title="Campaign measurement with Meta">
        <p>
          The native mobile app includes the Meta (Facebook) SDK. We use it to
          understand whether Facebook and Instagram campaigns lead to
          installations and use of CapyMath, and to evaluate those campaigns.
        </p>
        <p>
          The SDK can send Meta information about installation, app activation
          and sessions; device or app-instance identifiers; an advertising
          identifier when available under device settings and platform
          permissions; app and SDK versions; operating system, device model,
          language and time-zone information; and technical or diagnostic
          information. Meta also receives network information such as an IP
          address when the app contacts its services. This can indicate a
          general location; CapyMath does not request GPS access.
        </p>
        <p>
          Meta may process this information together with information it
          already holds, subject to its policies and your settings. Measurement
          involves sharing information with Meta even though CapyMath shows no
          ads. See the{" "}
          <ExternalLink href="https://www.facebook.com/privacy/policy/">
            Meta Privacy Policy
          </ExternalLink>{" "}
          for Meta's processing, retention and privacy controls.
        </p>

        <h3 className="text-ink text-lg md:text-xl font-semibold tracking-tight pt-3">
          When measurement runs and your controls
        </h3>
        <p>
          The current Android version enables the SDK and automatic app events
          at startup. It does not have a separate in-app measurement switch.
          Android's advertising-ID and privacy controls can limit availability
          of its advertising identifier; they do not necessarily stop all SDK
          communication.
        </p>
        <p>
          On iOS, CapyMath requests Apple's App Tracking Transparency
          permission during onboarding. You can decline, and you can change
          your choice in iOS Settings. Advertising-identifier access is subject
          to that permission and platform restrictions. Declining does not mean
          all app-event or technical communication with Meta is disabled.
        </p>
        <p>
          Deleting a local learner profile does not delete data already sent to
          Meta. Contact us about information we hold, and use Meta's privacy
          controls for requests concerning information Meta holds.
        </p>
      </Section>

      <Section title="Age and younger users">
        <p>
          CapyMath is intended for ages 13 and older and is not offered as a
          service for children under 13. We do not ask for a date of birth and
          do not operate an in-app age-verification service.
        </p>
        <p>
          If you believe someone under 13 has sent personal information to us
          through support, contact <SupportEmail />. We will investigate and
          delete it where appropriate. Parents and caregivers can contact us
          about privacy concerns involving a minor.
        </p>
      </Section>

      <Section title="Audio and device services">
        <p>
          Some guidance is bundled with the app. Where a recording is
          unavailable, the app can ask your device's text-to-speech service to
          read activity guidance. CapyMath does not listen to or record your
          voice. You can turn off spoken guidance and use the on-screen text.
        </p>
        <p>
          Device speech and backup services are controlled by your operating
          system and its settings and privacy practices.
        </p>
      </Section>

      <Section title="App updates and content delivery">
        <p>
          We use Expo services to deliver app updates. Update requests can
          include a randomly generated installation identifier, device
          operating system, app/update version and network information such as
          an IP address. Expo uses this information to deliver and manage
          updates. Hosted previews can also download voice and character assets
          from Expo Hosting. These requests do not intentionally include your
          nickname, math answers or learning progress. See the{" "}
          <ExternalLink href="https://expo.dev/privacy">
            Expo Privacy Policy
          </ExternalLink>{" "}
          for its processing and retention practices.
        </p>
        <p>
          Deleting a local profile does not delete technical records already
          received by update or hosting services. Contact <SupportEmail /> for
          help with a privacy request.
        </p>
      </Section>

      <Section title="Optional sharing">
        <p>
          You can preview a learning summary before sharing it through your
          device's share sheet. It can include your nickname and learning
          progress. It is sent to the app or recipient you choose, under that
          service's privacy practices. We do not receive a copy unless you send
          it to us.
        </p>
        <p>
          Review the preview and recipient before sharing. Sharing is never
          required to complete an activity.
        </p>
      </Section>

      <Section title="Support">
        <p>
          If you email <SupportEmail />, we receive your email address, message
          and any attachments you choose to send. We use them to answer your
          request and resolve support issues. Please avoid sensitive
          information and unnecessary details about minors.
        </p>
        <p>
          Our email provider processes correspondence to deliver this service.
          We may also disclose information when required by law.
        </p>
      </Section>

      <Section title="Retention, deletion and privacy requests">
        <p>
          Local progress remains until you delete a profile or remove the app's
          local data. Open the profile's Learning &amp; privacy area, choose
          Delete and confirm. Repeat for other profiles you want to remove.
          Uninstalling normally removes local data, but device backups may
          retain or restore it.
        </p>
        <p>
          We retain support correspondence only as long as needed to handle the
          request, maintain necessary support records and meet legal
          obligations. Meta handles data it receives under its own retention
          practices; local profile deletion does not erase it.
        </p>
        <p>
          Contact <SupportEmail /> to request access, correction or deletion of
          information you have sent us, or to exercise privacy rights available
          where you live, including applicable rights concerning
          advertising-related sharing. We may need information to verify and
          locate your request. We respond within applicable legal time limits.
          Meta also provides controls through its Privacy Policy and account
          settings.
        </p>
      </Section>

      <Section title="International processing and security">
        <p>
          Five Bits, Inc. is based in Panama. Local learning records stay on
          your device. Campaign measurement, update-delivery and support
          information may be processed in Panama, the United States and other
          countries where Meta or our service providers operate.
        </p>
        <p>
          Protect access to your device and its backups. No storage or
          communication method is completely secure. We limit access to support
          correspondence to those who need it to handle your request.
        </p>
      </Section>

      <Section title="Changes">
        <p>
          If our data practices change, we will update this notice and its
          date, provide additional notice where required, and obtain consent
          where required before introducing new practices.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Five Bits, Inc.
          <br />
          Avenida Samuel Lewis, Edificio Magel, Piso 2, Oficina C-1
          <br />
          Panama City, Panama
          <br />
          <SupportEmail />
        </p>
      </Section>
    </LegalLayout>
  );
}

function SupportEmail() {
  return (
    <a
      href="mailto:support@fivebits.gs"
      className="underline hover:no-underline text-ink"
    >
      support@fivebits.gs
    </a>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:no-underline text-ink"
    >
      {children}
    </a>
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
