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
        aged 13 and older, provided by Five Bits, Inc. (“we”, “us”). It offers
        interactive activities in mathematics, including a review of
        foundational skills. This notice applies to the CapyMath mobile app.
        Our{" "}
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
          <li>Learner profiles and learning progress stay on your device.</li>
          <li>
            The app has no ads, advertising identifiers, analytics or
            third-party tracking SDKs.
          </li>
          <li>
            The app does not access your camera, microphone, contacts or
            location.
          </li>
          <li>Sharing a learning summary is optional and under your control.</li>
        </ul>
      </Section>

      <Section title="Information stored on your device">
        <p>
          CapyMath stores profile symbols, optional nicknames, activity
          responses, learning progress, rewards, visit preferences, and
          accessibility and audio settings locally. Up to four learner profiles
          can use one device. A nickname is optional; please do not use your
          full name or enter contact details.
        </p>
        <p>
          The app does not send these learning records to us and does not
          operate a cloud account or progress-sync service. We cannot retrieve
          your progress from your device.
        </p>
      </Section>

      <Section title="Age and younger users">
        <p>
          CapyMath is intended for ages 13 and older. It is not offered as a
          service for children under 13. There are no social profiles, public
          messaging, advertising or cross-app tracking.
        </p>
        <p>
          If you believe someone under 13 has sent personal information to us
          through support, please contact <SupportEmail />. We will
          investigate and delete it where appropriate. Parents and caregivers
          can contact us about privacy concerns involving a minor.
        </p>
      </Section>

      <Section title="Audio and device services">
        <p>
          Some spoken guidance is bundled with the app. Where a recording is
          not available, the app can ask the device's text-to-speech service to
          read the activity guidance. CapyMath does not listen to or record
          your voice. You can turn off spoken guidance in Settings and use the
          on-screen text.
        </p>
        <p>
          Device speech and backup services are controlled by your operating
          system and its settings and privacy policy.
        </p>
      </Section>

      <Section title="Optional sharing">
        <p>
          You can preview a learning summary before choosing to share it
          through your device's share sheet. The summary can include your
          profile nickname and learning progress. It is sent only to the app or
          recipient you select, under that service's privacy practices. We do
          not receive a copy unless you explicitly send it to us.
        </p>
        <p>
          Review the preview and recipient before sharing. Sharing is never
          required to complete an activity.
        </p>
      </Section>

      <Section title="Support messages">
        <p>
          If you email <SupportEmail />, we receive your email address, message
          and any attachments you choose to send. We use them to answer your
          request and resolve support issues, not for advertising. Please avoid
          sending sensitive information or unnecessary details about minors.
        </p>
        <p>
          Our email provider processes correspondence to deliver this service.
          We may also disclose information when required by law. We do not
          sell personal information or share it for targeted advertising.
        </p>
      </Section>

      <Section title="Retention, deletion and your choices">
        <p>
          Local progress remains until you delete a profile or remove the
          app's local data. Open the profile's learning and privacy area,
          choose Delete and confirm. Repeat for any other profiles you want to
          remove.
        </p>
        <p>
          Uninstalling the app normally removes local app data. Device backups
          may retain or restore it according to your Apple or Google backup
          settings.
        </p>
        <p>
          We retain support correspondence only as long as needed to handle the
          request, maintain necessary support records and meet legal
          obligations. You can contact us to request access, correction or
          deletion of information you have sent us, or exercise other privacy
          rights available where you live. We respond within applicable legal
          time limits.
        </p>
      </Section>

      <Section title="International use and security">
        <p>
          Five Bits, Inc. is based in Panama. Local learning data stays on your
          device. If you contact support, correspondence may be processed in
          Panama and where our email service providers operate. Applicable
          privacy rights remain available regardless of where a request is
          handled.
        </p>
        <p>
          Protect access to your device and its backups. No storage or
          communication method is completely secure. We limit access to support
          correspondence to the people and service providers who need it to
          handle your request.
        </p>
      </Section>

      <Section title="Changes to this notice">
        <p>
          If the app's data practices change, we will update this notice and
          its date, provide any additional notice required, and obtain consent
          when required before introducing new practices. The current app has
          no advertising, analytics or subscription SDK integration.
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
          <strong className="font-semibold">
            <SupportEmail />
          </strong>
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
