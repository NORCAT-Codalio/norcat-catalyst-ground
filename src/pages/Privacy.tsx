import { Layout } from '@/components/Layout';

const TEAL = '#00B398';
const BLUE = '#003DA5';
const FONT = "'Open Sans', system-ui, sans-serif";

export default function Privacy() {
  return (
    <Layout>
      <section
        className="relative overflow-hidden pt-16 pb-16 md:pt-24 md:pb-20"
        style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${TEAL} 100%)` }}
      >
        <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-6 md:px-10">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4 text-white/80">
            LEGAL
          </p>
          <h1
            className="font-black uppercase leading-[0.9] tracking-tight text-4xl sm:text-5xl md:text-6xl text-white"
            style={{ fontFamily: FONT }}
          >
            PRIVACY POLICY
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-6 md:px-10 space-y-8 text-[15px] leading-relaxed" style={{ color: '#334155' }}>
          <p>NORCAT Innovation ("we", "us", "our") respects your privacy. This policy describes how we collect, use, and safeguard the information you provide when interacting with our website, programs, and services.</p>

          <div>
            <h2 className="text-xl font-bold mb-2" style={{ color: BLUE, fontFamily: FONT }}>Information We Collect</h2>
            <p>When you contact us or apply to a program, we collect the details you submit — such as your name, email, phone number, company, and message content — so that we can respond and provide the requested service.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2" style={{ color: BLUE, fontFamily: FONT }}>How We Use Your Information</h2>
            <p>We use your information to reply to inquiries, deliver programming, share relevant updates you've opted into, and improve our services. We do not sell your personal information.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2" style={{ color: BLUE, fontFamily: FONT }}>Data Storage & Security</h2>
            <p>Submissions are stored securely in our managed backend with access limited to authorized NORCAT staff. We retain information only as long as needed to fulfill the purpose it was collected for.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2" style={{ color: BLUE, fontFamily: FONT }}>Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal information at any time by emailing <a href="mailto:info@norcat.org" className="underline" style={{ color: TEAL }}>info@norcat.org</a>.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2" style={{ color: BLUE, fontFamily: FONT }}>Contact</h2>
            <p>Questions about this policy? Contact us at <a href="mailto:info@norcat.org" className="underline" style={{ color: TEAL }}>info@norcat.org</a> or 705-521-6600.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
