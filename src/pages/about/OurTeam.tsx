import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ArrowUpRight, Mail } from 'lucide-react';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
import signatureLines from '@/assets/signature-lines.png';

const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const FONT = "'Open Sans', system-ui, sans-serif";

const Eyebrow = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5 ${className}`}
     style={{ fontFamily: FONT, color: TEAL }}>
    <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
    {children}
  </p>
);

const Display = ({ children, className = '', as: As = 'h2' as any }: any) => (
  <As className={`font-black uppercase leading-[0.95] tracking-tight text-white ${className}`}
     style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
    {children}
  </As>
);

export default function OurTeam() {
  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>
        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden flex items-center py-16 md:py-24">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }} />
          <div
            className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.15 }}
          />
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
          }} />
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl">
              <Eyebrow className="text-lg !text-white">THE INNOVATION TEAM</Eyebrow>
              <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                EXPERTISE TO HELP<br />YOU <span style={{ color: TEAL }}>MOVE FORWARD</span>
              </Display>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Whether it's your first time jotting a business idea down on the back of a napkin or you're scaling and ready to demonstrate your technology to global operators, we are here to help.
              </p>
            </div>
          </div>
        </section>


        {/* ───── GET IN TOUCH ───── */}
        <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: PAPER }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 80% 10%, rgba(0,179,152,0.12), transparent 40%), radial-gradient(circle at 10% 90%, rgba(0,61,165,0.10), transparent 45%)`,
          }} />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-2xl">
                <Eyebrow>START THE CONVERSATION</Eyebrow>
                <h2 className="font-black uppercase leading-[0.9] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-5"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em', color: NAVY }}>
                  GET IN <span style={{ color: TEAL }}>TOUCH.</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed" style={{ color: '#475068' }}>
                  Have a question, partnership idea, or just want to learn more about how we can help? Reach out — we'd love to hear from you.
                </p>
              </div>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold transition-transform hover:scale-[1.02] whitespace-nowrap"
                style={{ background: TEAL, color: NAVY, fontFamily: FONT }}
              >
                <Mail className="w-5 h-5" />
                Contact Us
                <span className="inline-flex items-center justify-center size-8 rounded-full" style={{ background: NAVY, color: 'white' }}>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
