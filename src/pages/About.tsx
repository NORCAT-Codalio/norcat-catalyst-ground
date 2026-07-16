import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Target, Rocket, Atom, Share2 } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import foundersImage from '@/assets/founders-collab.jpg';
import norcatBuilding from '@/assets/norcat-building.jpg.asset.json';
import signatureLines from '@/assets/signature-lines.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
import storyLake from '@/assets/story/story-lake.jpg.asset.json';
import storyMine from '@/assets/story/story-mine.jpg.asset.json';
import storyHorse from '@/assets/story/story-horse.jpg.asset.json';
import featuredIap from '@/assets/featured-iap.png.asset.json';
import featuredScf from '@/assets/featured-scf.png.asset.json';
import featuredRaii from '@/assets/featured-raii.png.asset.json';
import featuredCit from '@/assets/featured-cit.png.asset.json';
import featuredCore5 from '@/assets/featured-core5.png.asset.json';
import undergroundCentre from '@/assets/underground-centre-v3.png.asset.json';
import ventureNorthPitch from '@/assets/venture-north-pitch-returning.png.asset.json';
import stateOfSudbury from '@/assets/state-of-sudbury-impact-card.png.asset.json';
import { LocationsMap } from '@/components/LocationsMap';
import { team } from '@/data/team';

// Award badges
import awardBestPlace from '@/assets/award-best-place-to-work.png';
import awardInnovationEco from '@/assets/award-best-innovation-ecosystem.png';
import awardNasa from '@/assets/award-nasa-achievement.png';
import awardIndigenous from '@/assets/award-indigenous-partnership.png';
import awardExecutive from '@/assets/award-executive-of-the-year.png';
import awardBusinessGrowth from '@/assets/award-business-growth.png';

// Logos
import ontarioLogoAsset from '@/assets/logos/ontario-logo-wordmark.png';
import innovateonLogo from '@/assets/logos/innovateon.png';

// Partner logos
import fednorLogo from '@/assets/logos/fednor.png';
import sudburyLogo from '@/assets/logos/sudbury.png';
import ociLogo from '@/assets/logos/oci.png';
import nohfcLogo from '@/assets/logos/nohfc.png';

// ── Brand tokens (mirrors Home2) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const BORDER = 'rgba(255,255,255,0.10)';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const FONT = "'Open Sans', system-ui, sans-serif";

const partnerLogos = [
  { name: 'FedNor', logo: fednorLogo },
  { name: 'Ontario', logo: ontarioLogoAsset },
  { name: 'Ontario Centres of Innovation', logo: ociLogo },
  { name: 'Northern Ontario Heritage Fund Corporation', logo: nohfcLogo },
  { name: 'City of Greater Sudbury', logo: sudburyLogo },
];


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

export default function About() {
  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden min-h-[70vh] flex items-center pt-8 pb-8 md:pt-12 md:pb-12">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }} />

          {/* logo background (matches Home2 hero) */}
          <div
            className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.15 }}
          />

          {/* radial glow (matches Home2 hero) */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
          }} />

          {/* signature lines */}
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl xl:max-w-4xl">
              <Eyebrow className="text-lg !text-white">ABOUT NORCAT INNOVATION</Eyebrow>
              <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                OUR <span style={{ color: TEAL }}>STORY.</span>
              </Display>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Since 2014, we have been passionate about driving the growth of Northern Ontario's innovation ecosystem in Greater Sudbury and beyond.
              </p>
            </div>
          </div>
        </section>


        {/* ───── IMPACT STATS ───── */}
        <section className="py-10 md:py-12" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { number: '150+', label: 'Startups Supported' },
                { number: '500+', label: 'Ecosystem Members' },
                { number: '2,000+', label: 'Sector-Diverse Jobs Created' },
                { number: '$50M+', label: 'Capital Raised' },
              ].map((s) => (
                <div key={s.label} className="pl-4" style={{ borderLeft: `2px solid ${TEAL}` }}>
                  <p className="font-black text-3xl md:text-4xl" style={{ fontFamily: FONT, color: NAVY }}>{s.number}</p>
                  <p className="text-xs mt-1 font-bold uppercase tracking-[0.16em]" style={{ color: '#5b6478' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ───── STORY OF NORCAT (dark, vertical timeline) ───── */}
        <section className="py-10 md:py-16 relative overflow-hidden"
                 style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 15% 20%, rgba(0,179,152,0.22), transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.08), transparent 45%)`,
          }} />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">

            {/* Alternating image + text timeline */}
            <div className="relative">
              {/* Center rail (desktop) / left rail (mobile) */}
              <div className="absolute top-0 bottom-0 w-px hidden md:block left-1/2 -translate-x-1/2" style={{ background: 'rgba(0,179,152,0.35)' }} />
              <div className="absolute top-0 bottom-0 w-px md:hidden left-4" style={{ background: 'rgba(0,179,152,0.35)' }} />

              <div className="space-y-8 md:space-y-12">
                {[
                  { year: '2014', title: 'The Innovation Mill', desc: "NORCAT officially launches Sudbury's Regional Innovation Centre, laying the groundwork for tech startup mentorship and hosting the first PITCH competition to connect local founders with early investment networks.", image: storyLake.url },
                  { year: '2016', title: 'Innovation Acceleration Program (IAP) Launch', desc: 'NORCAT secures federal funding from FedNor to send $10,000 micro-grants straight to tech ventures for product prototyping and testing.', image: featuredIap.url },
                  { year: '2017', title: 'UNDERGROUND CENTRE EXPANSION', desc: 'An injection of nearly $1 million in joint public funding helps NORCAT overhaul the ventilation and electrical systems at the Underground Centre, creating live testing labs for international technology builders.', image: undergroundCentre.url },
                  { year: '2018', title: 'IAP PHASE II ADVANCES MANUFACTURING', desc: "An additional $305,000 federal investment expands the hub's physical toolset, launching phase two of the micro-grant program and adding industrial injection molding machines to the Fortin Discovery Lab.", image: featuredCore5.url },
                  { year: '2019', title: 'LAUNCH OF THE SUDBURY CATALYST FUND', desc: 'The ecosystem hits its stride, supporting the creation of over 100 tech jobs, bringing in more than $35M in equity capital, and launching the $5M Sudbury Catalyst Fund.', image: featuredScf.url, cta: { label: 'View the SCF Recipients!', href: '/funding/sudbury-catalyst-fund' } },
                  { year: '2022', title: 'Mining Transformed', desc: "NORCAT debuts the world's only technology exhibition held inside an active underground mine, putting developers of autonomous and electric systems in direct contact with global buyers.", image: storyMine.url },
                  { year: '2024', title: 'Venture North PITCH', desc: "NORCAT and the Northern Ontario Angels merge their flagship events, bringing the region's top startup talent and a massive network of Accredited Angel Investors together on a single, high-stakes stage.", image: ventureNorthPitch.url },
                  { year: '2025', title: 'FUNDING GROWTH & ARTIFICIAL INTELLIGENCE', desc: 'NORCAT launches the Regional Artificial Intelligence Initiative (RAII) and renews the Innovation Acceleration Program, boosting micro-grants to $20,000 to help small businesses build and scale emerging tech.', image: featuredRaii.url },
                  { year: '2026', title: 'Digital & AI Expansion', desc: 'NORCAT expands the demonstration spaces at the Underground Centre, rolls out hands-on AI workshops, and overhauls its tech startup services to better support modern businesses.', image: featuredCit.url },
                  { year: 'TODAY', title: 'GLOBAL INNOVATION', desc: 'Today, NORCAT Innovation stands as a premier hub of Northern innovation and is a catalyst for turning rugged, regional ideas into globally scalable technologies. We bridge the gap between creative founders, local industry, and international investors, anchoring world-class tech development right here in the North.', image: stateOfSudbury.url },
                ].map((event, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <div key={event.year + idx} className="relative">
                      {/* Node dot */}
                      <div className="absolute top-0 md:top-1 z-10 size-4 rounded-full ring-4 md:left-1/2 md:-translate-x-1/2 left-4 -translate-x-1/2"
                           style={{ background: TEAL, boxShadow: `0 0 0 6px rgba(0,179,152,0.15)`, ['--tw-ring-color' as string]: NAVY } as React.CSSProperties} />

                      <div className={`grid md:grid-cols-2 gap-4 md:gap-8 items-start ${isLeft ? '' : 'md:[&>*:first-child]:order-2'}`}>
                        {/* Image side */}
                        <div className={`pl-10 md:pl-0 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                          <div className="overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-2xl aspect-[16/10] max-h-[200px] max-w-[380px] ml-auto mr-auto">
                            <img src={event.image} alt={event.title} className="w-full h-full object-cover" loading="lazy" />
                          </div>
                        </div>
                        {/* Text side */}
                        <div className={`pl-10 md:pl-0 ${isLeft ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-1"
                             style={{ color: TEAL, fontFamily: FONT }}>
                            {event.year}
                          </p>
                          <h3 className="font-black uppercase text-lg md:text-xl lg:text-2xl mb-2 text-white"
                              style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>
                            {event.title}
                          </h3>
                          <p className="text-sm md:text-base leading-snug mb-3" style={{ color: FG_MUTED }}>
                            {event.desc}
                          </p>
                          {event.cta && (
                            <Link
                              to={event.cta.href}
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-transform hover:scale-[1.02] group"
                              style={{ background: TEAL, color: NAVY, fontFamily: FONT }}
                            >
                              {event.cta.label}
                              <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
                                <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                              </span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>


        {/* ───── TEAM TEASER ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-stretch justify-between gap-8 mb-12 md:mb-16">
              <div className="flex-1 flex flex-col justify-center">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                   style={{ fontFamily: FONT, color: TEAL }}>
                  <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                  THE INNOVATION TEAM
                </p>
                <h2 className="font-black uppercase leading-[0.9] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  MEET THE INNOVATION TEAM!<br /><span style={{ color: TEAL }}>&nbsp;</span>
                </h2>
              </div>
              <p className="flex-1 flex items-center text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-relaxed lg:leading-relaxed"
                 style={{ color: '#5b6478' }}>
                Whether it's your first time jotting a business idea down on the back of a napkin 
                or you're scaling and ready to demonstrate your technology to the world, 
                we are here to help you scale success!&nbsp;
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#475068' }}>
                  The people behind the programs. Our innovation team works closely with founders to provide mentorship, capital navigation, and venture growth support.
                </p>
                <Link
                  to="/about/our-team"
                  className="group inline-flex items-center gap-3 pl-7 pr-2 py-2.5 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                  style={{ background: TEAL, color: NAVY, fontFamily: FONT }}
                >
                  Meet the Team
                  <span className="inline-flex items-center justify-center size-8 rounded-full" style={{ background: NAVY, color: 'white' }}>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                  </span>
                </Link>
              </div>

              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="flex -space-x-4">
                  {team.map((member) => (
                    <div
                      key={member.name}
                      className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-4 overflow-hidden"
                      style={{ borderColor: PAPER, background: NAVY }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── VALUES (blue to teal gradient) ───── */}
        <section className="py-20 md:py-28 relative overflow-hidden"
                 style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 15% 20%, rgba(0,179,152,0.22), transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.08), transparent 45%)`,
          }} />
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute bottom-0 left-0 w-auto h-1/3 object-contain object-left-bottom opacity-30 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl mb-12 md:mb-16">
              <Eyebrow>What We Stand For</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Our <span style={{ color: TEAL }}>Values.</span>
              </Display>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {[
                {
                  icon: Target,
                  title: 'Quality, Results and Impact',
                  desc: 'Our impact is measured by the success of our customers, partners, and community stakeholders. Achieving excellence demands we define a path of continuous improvement. We listen, learn, build, measure, and repeat.',
                },
                {
                  icon: Zap,
                  title: 'Agile and Adaptive',
                  desc: 'We celebrate creativity, innovation, and challenging constraints. We are bold. We move fast. We are open. We recognize that day one will never look like day two - and we thrive in that environment. Many people dislike change, but remember - change is the only thing that has brought progress.',
                },
                {
                  icon: ShieldCheck,
                  title: "Do What's Right",
                  desc: 'Trust is the belief and confidence in integrity, reliability and fairness. Without integrity, nothing else matters. We always pause, reflect, and ask: what is the right thing to do? Then we do it and we do it proudly.',
                },
                {
                  icon: Users2,
                  title: 'Teamwork and Collaboration',
                  desc: 'We must collaborate to compete and winning must always be celebrated as a team. We can do hard things and we must do them together.',
                },
              ].map((v) => (
                <div key={v.title}
                     className="rounded-2xl p-7 md:p-8 transition hover:-translate-y-1"
                     style={{ background: 'rgba(255,255,255,0.10)', border: `1px solid ${BORDER}`, backdropFilter: 'blur(8px)' }}>
                  <div className="inline-flex items-center justify-center size-12 rounded-xl mb-5"
                       style={{ background: `${TEAL}22`, color: TEAL, border: `1px solid ${TEAL}55` }}>
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-black uppercase text-xl md:text-2xl mb-3 text-white"
                      style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>
                    {v.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: FG_MUTED }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 md:mt-14 flex justify-center">
              <Link
                to="/insights/success-stories"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm md:text-base transition-transform hover:scale-[1.02]"
                style={{ background: 'white', color: NAVY, fontFamily: FONT }}
              >
                Success Stories
                <span className="inline-flex items-center justify-center size-8 rounded-full transition-colors"
                      style={{ background: TEAL, color: 'white' }}>
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ───── AWARDS BANNER (light) ───── */}
        <section className="py-20 md:py-24" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-4"
                 style={{ fontFamily: FONT, color: TEAL }}>
                <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                Recognition
              </p>
              <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl"
                  style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                Awards & <span style={{ color: TEAL }}>Accolades.</span>
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                Recognized nationally and globally for building a world-class innovation ecosystem in the North.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-end">
              {[
                { title: 'Best Place to Work', org: 'Bell Business Awards', img: awardBestPlace },
                { title: 'Best Innovation Ecosystem', org: 'Bell Business Awards', img: awardInnovationEco },
                { title: 'NASA Group Achievement Award', org: 'NASA', img: awardNasa },
                { title: 'Indigenous Partnership Award', org: 'De Beers', img: awardIndigenous },
                { title: 'Executive of the Year Award', org: 'Industry Recognition', img: awardExecutive },
                { title: 'Consistent Business Growth', org: 'Academy of Extended Reality (AIXR)', img: awardBusinessGrowth },
              ].map((a) => (
                <div key={a.title} className="group flex flex-col items-center text-center transition hover:-translate-y-1">
                  <img
                    src={a.img}
                    alt={`${a.title} - ${a.org}`}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="w-full h-auto max-w-[180px] drop-shadow-sm"
                  />
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: TEAL }}>
                    {a.org}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── PARTNERS - Powered by ───── */}

        <section className="pt-20 md:pt-24 pb-10 md:pb-12" style={{ background: PAPER }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="text-center mb-10 md:mb-12">
              <p className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-4"
                 style={{ fontFamily: FONT, color: TEAL }}>
                <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                Our Partners
              </p>
              <h2 className="font-black uppercase leading-[0.95] tracking-tight text-2xl sm:text-3xl md:text-4xl"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
                Friends who open doors.
              </h2>
              <p className="mt-4 text-sm md:text-base max-w-2xl mx-auto" style={{ color: '#5b6478' }}>
                The operators, builders, and organizations who show up, make intros, and help founders win.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
              {partnerLogos.map((p) => (
                <div key={p.name}
                     className="aspect-[3/2] rounded-lg flex items-center justify-center transition hover:-translate-y-0.5 p-5"
                     style={{ background: 'white', border: '1px solid #e3e6ec' }}>
                  <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ───── FINAL CTA (dark, Home2 pattern) ───── */}
        <section className="py-20 md:py-28 relative overflow-hidden"
                 style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.15), transparent 45%)`,
          }} />
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/2 object-contain object-right-top opacity-50 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-6 md:px-10 text-center">
            <Eyebrow className="justify-center">Your move</Eyebrow>
            <Display className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Ready to join<br /><span style={{ color: TEAL }}>our community?</span>
            </Display>
            <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: FG_MUTED }}>
              Whether you're just starting out or ready to scale, we're here to help you build something extraordinary.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply"
                    className="group inline-flex items-center gap-2 pl-6 pr-2 py-3 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                    style={{ fontFamily: FONT, background: TEAL, color: NAVY }}>
                Apply to NORCAT Innovation
                <span className="inline-flex items-center justify-center size-8 rounded-full" style={{ background: NAVY, color: 'white' }}>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </span>
              </Link>
              <Link to="/ecosystem/sudbury"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-colors"
                    style={{ background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', fontFamily: FONT }}>
                Explore the Ecosystem
              </Link>
            </div>
          </div>
        </section>

        {/* ───── RIC NETWORK (light) ───── */}
        <section className="pb-10 md:pb-16" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
              <div>
                <img src={innovateonLogo} alt="InnovateON - Regional Innovation Centre Network"
                     className="h-8 object-contain mb-4" />
                <p className="text-base leading-relaxed" style={{ color: '#475068' }}>
                  We're part of Ontario's 17-centre RIC Network, connecting entrepreneurs
                  with resources, mentorship, and funding to start and scale businesses.
                </p>
              </div>

              <div>
                <img src={ontarioLogoAsset} alt="Government of Ontario" className="h-16 object-contain mb-4" />
                <p className="text-base leading-relaxed" style={{ color: '#475068' }}>
                  Funded by the <strong style={{ color: NAVY }}>Ministry of Economic Development, Job Creation and Trade</strong>,
                  enabling free and subsidized services for Northern Ontario entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
