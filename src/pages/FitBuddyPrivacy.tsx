import { useEffect } from "react";
import { Link } from "react-router-dom";
import LegalLayout from "@/components/LegalLayout";

// Public store-listing privacy URL: looplab.gg/fitbuddy/privacy.
// The app's store name is still provisional: change APP_NAME (and keep this
// route working) when the commercial name is decided.
// Text is published verbatim; edit wording only with sign-off.
const APP_NAME = "Sporty";

export default function FitBuddyPrivacy() {
  useEffect(() => {
    const previous = document.title;
    document.title = `${APP_NAME} Privacy Notice`;
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <LegalLayout
      eyebrow="legal"
      title={`${APP_NAME} Privacy Notice`}
      lastUpdated="November 19, 2026"
    >
      <p>
        {APP_NAME} is a fitness and wellbeing companion app for adults: a
        virtual companion that suggests short routines, rest activities and
        healthy habits, and that you can chat with. It is provided by
        Looplab Studio (“Looplab”, “we”, “us”). This notice applies to the{" "}
        {APP_NAME} mobile app. Our{" "}
        <Link to="/privacy" className="underline hover:no-underline text-ink">
          website
        </Link>{" "}
        has a separate privacy notice.
      </p>

      <Section title="At a glance">
        <ul className="list-disc pl-6 space-y-2">
          <li>No account or sign-in is required.</li>
          <li>
            Your progress, routines, daily check-ins, meal log and your
            companion’s memories are stored on your device.
          </li>
          <li>
            When you chat with your companion, send a meal photo or talk to it,
            that content goes to our server and to AI model providers to produce
            the answer. Our server does not keep your messages, photos or
            recordings.
          </li>
          <li>
            The companion only remembers facts you confirm, and only while
            memory is turned on. You can edit or delete each memory.
          </li>
          <li>
            We use the Meta SDK to measure installations and app activity
            associated with our Facebook and Instagram campaigns. You can turn
            this off in Settings → Ad measurement.
          </li>
          <li>
            Subscriptions are purchased through Google Play or the App Store and
            managed with RevenueCat. We never receive your payment card details.
          </li>
          <li>
            The camera and microphone are used only when you choose to take a
            meal photo or hold the microphone button. {APP_NAME} does not show
            ads.
          </li>
        </ul>
      </Section>

      <Section title="Information on your device">
        <p>
          {APP_NAME} stores on your device your companion’s name and
          appearance, the answers you give when you first meet it (such as your
          favorite time of day or the music you like), your routines, sessions,
          streaks and rewards, daily check-ins and reflections, habit notes,
          meals you log with their estimated calories, reminder settings and,
          when memory is on, the facts you confirm and short summaries of past
          conversations.
        </p>
        <p>
          We do not operate a cloud account or a progress-sync service, and we
          cannot retrieve this information from your device.
        </p>
      </Section>

      <Section title="Our companion service">
        <p>
          To provide conversations, usage limits and subscriptions, the app
          registers with our server using a randomly generated device
          identifier. Our server keeps that identifier, your plan and
          subscription status, usage counters (messages, voice minutes and meal
          analyses) and the cost of the AI requests. To prevent abuse, it
          counts registrations per network using a one-way pseudonym of the IP
          address instead of the address itself. Technical logs record events
          such as errors and usage without the content of your messages and
          with a pseudonymous device identifier. The server is hosted by
          Railway in the United States.
        </p>
      </Section>

      <Section title="AI conversations, meal photos and voice">
        <p>
          When you send your companion a message, the app sends it together
          with the recent conversation, your companion’s name and tone, and
          context about your day that the app needs to answer (for example
          whether you checked in, your mission status, the time of day, the
          minutes and equipment you have for training and, when memory is on,
          the memories that are relevant). When you send a meal photo or a meal
          description, it is used to identify the dish and estimate its
          calories. When you hold the microphone button, the recording is sent
          to be transcribed into text.
        </p>
        <p>
          These requests are processed through OpenRouter by AI model
          providers. We configure them to use providers that do not use the
          content to train their models, and to transcribe voice only with
          providers that do not retain the audio. Our server uses the content
          only to produce the answer and does not store your messages, photos
          or recordings afterwards; it keeps only counts and costs.
        </p>
        <p>
          Please avoid sharing sensitive personal information you do not want
          processed this way. {APP_NAME} is not a medical service: calorie
          estimates are approximate and routines are general guidance.
        </p>
      </Section>

      <Section title="Camera, microphone and notifications">
        <p>
          The app asks for camera access the first time you take a meal photo
          and for microphone access the first time you hold the microphone
          button. It only records while you hold the button. Reminders are
          scheduled on your device as local notifications, and you can turn
          them off in Settings or in your device’s settings.
        </p>
      </Section>

      <Section title="Subscriptions">
        <p>
          {APP_NAME} Plus is purchased through Google Play or the App Store,
          which process the payment under their own terms and privacy
          practices; we do not receive your payment card details. We use
          RevenueCat to verify purchases and keep subscription status up to
          date. RevenueCat receives purchase and subscription information from
          the store together with the app’s random device identifier, and our
          server receives your subscription status. See the{" "}
          <ExternalLink href="https://www.revenuecat.com/privacy">
            RevenueCat Privacy Policy
          </ExternalLink>
          . You can manage or cancel your subscription in Google Play or in
          your Apple ID settings.
        </p>
      </Section>

      <Section title="Campaign measurement with Meta">
        <p>
          The Android app includes the Meta (Facebook) SDK. We use it to
          understand whether Facebook and Instagram campaigns lead to
          installations and use of {APP_NAME}, and to evaluate those
          campaigns. The app sends Meta a small set of events: app activation
          (which Meta uses to count installations), finishing the first
          meeting with your companion, completing a daily mission (training or
          rest) and the first mission, and paid subscription purchases. These
          events do not include your messages, memories, meals, check-ins or
          other health or wellbeing information.
        </p>
        <p>
          The SDK can also send Meta device or app-instance identifiers, an
          advertising identifier when available under device settings and
          platform permissions, app and SDK versions, operating system, device
          model, language and time-zone information, and technical or
          diagnostic information. Meta also receives network information such
          as an IP address when the app contacts its services, which can
          indicate a general location; {APP_NAME} does not request GPS access.
          Meta may process this information together with information it
          already holds, subject to its policies and your settings. See the{" "}
          <ExternalLink href="https://www.facebook.com/privacy/policy/">
            Meta Privacy Policy
          </ExternalLink>
          .
        </p>
        <h3 className="text-ink text-lg md:text-xl font-semibold tracking-tight pt-3">
          Your controls
        </h3>
        <p>
          Measurement is on by default. You can turn it off at any time in
          Settings → Ad measurement: from then on, the app does not start the
          Meta SDK or send it events. Android’s advertising-ID controls can also
          limit availability of the advertising identifier. The iOS version
          does not include the Meta SDK at this time. Turning measurement off
          does not delete data already sent to Meta; use Meta’s privacy
          controls for requests about information Meta holds.
        </p>
      </Section>

      <Section title="Age">
        <p>
          {APP_NAME} is intended for adults aged 18 and older and is not
          directed at children. We do not ask for a date of birth. If you
          believe a minor has sent personal information to us, contact{" "}
          <SupportEmail /> and we will delete it where appropriate.
        </p>
      </Section>

      <Section title="Support">
        <p>
          If you email <SupportEmail />, we receive your email address, message
          and any attachments you choose to send. We use them to answer your
          request and resolve support issues. Our email provider processes
          correspondence to deliver this service. We may also disclose
          information when required by law.
        </p>
      </Section>

      <Section title="Retention, deletion and privacy requests">
        <p>
          Information on your device remains until you delete it. You can
          delete individual memories from your companion’s screen, turn memory
          off, or erase everything from Settings → Delete my data. Uninstalling
          normally removes local data, but device backups may retain or restore
          it.
        </p>
        <p>
          We keep the device record, subscription status and usage counters on
          our server while you use the app. Contact <SupportEmail /> to request
          access to or deletion of information we hold, or to exercise privacy
          rights available where you live, including rights concerning
          advertising-related sharing. Because there are no accounts, we may
          need details such as your subscription receipt to locate your record.
          We respond within applicable legal time limits. Meta, RevenueCat and
          the app stores handle the data they receive under their own
          retention practices.
        </p>
      </Section>

      <Section title="International processing and security">
        <p>
          Looplab Studio operates from Panama City, Panama. Information may be processed in
          Panama, the United States and other countries where our service
          providers (Railway, OpenRouter and AI model providers, RevenueCat and
          Meta) operate. Connections to our server are encrypted. Protect
          access to your device and its backups; no storage or communication
          method is completely secure.
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
          Looplab Studio
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
      href="mailto:hello@looplab.gg"
      className="underline hover:no-underline text-ink"
    >
      hello@looplab.gg
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
