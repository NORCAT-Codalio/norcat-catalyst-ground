import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ArrowRight, Cpu, Layers, DollarSign, TrendingUp, Rocket, CheckCircle, Compass } from 'lucide-react';
import signatureLines from '@/assets/signature-lines.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
import citPlaceholder from '@/assets/cit-loopx-wide.jpg.asset.json';
import core5Placeholder from '@/assets/core5-ev-charging.png.asset.json';

import featuredIap from '@/assets/featured-iap-photo.jpg.asset.json';
import featuredRaii from '@/assets/featured-raii-photo.png.asset.json';
import featuredScf from '@/assets/featured-scf-photo.jpg.asset.json';

import ociLogo from '@/assets/logos/oci-logo.png';
import ontarioLogo from '@/assets/logos/ontario-logo-wordmark.png';
import ovinLogoAsset from '@/assets/logos/ovin-logo.png.asset.json';
import canadaLogo from '@/assets/logos/government-of-canada.png';
import fednorFullLogo from '@/assets/logos/fednor-full.png';
import fednorLogo from '@/assets/logos/fednor.png';
import nickelBasinLogo from '@/assets/logos/nickel-basin.png';
import sudburyLogo from '@/assets/logos/sudbury-logo.png';

const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const FONT = "'Open Sans', system-ui, sans-serif";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
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

type ProgramTab = {
  key: string;
  shortName: string;
  name: string;
  eyebrow: string;
  description: string;
  benefits: string[];
  href: string;
  image: string;
  imagePosition?: string;
  partners: { logo: string; alt: string; height?: number }[];
};

const programTabs: ProgramTab[] = [
  {
    key: 'IAP',
    shortName: 'IAP',
    name: 'Innovation Acceleration Program',
    eyebrow: 'Non-dilutive Funding',
    description: 'Non-dilutive funding to accelerate market entry for high-growth ventures across Northern Ontario.',
    benefits: [
      'Up to $100K in non-dilutive capital',
      'Dedicated venture growth coaching',
      'Market validation and pilot matchmaking',
    ],
    href: '/funding/innovation-acceleration-program',
    image: featuredIap.url,
    partners: [
      { logo: canadaLogo, alt: 'Government of Canada' },
      { logo: fednorFullLogo, alt: 'FedNor' },
    ],
  },
  {
    key: 'RAII',
    shortName: 'RAII',
    name: 'Regional Artificial Intelligence Program',
    eyebrow: 'AI Ventures',
    description: 'Capital, compute, and support for AI-driven ventures scaling out of Northern Ontario.',
    benefits: [
      'AI compute credits and infrastructure access',
      'Technical and commercialization mentorship',
      'Connections to enterprise AI buyers',
    ],
    href: '/funding/regional-ai-program',
    image: featuredRaii.url,
    partners: [
      { logo: canadaLogo, alt: 'Government of Canada' },
      { logo: fednorFullLogo, alt: 'FedNor' },
    ],
  },
  {
    key: 'SCF',
    shortName: 'SCF',
    name: 'Sudbury Catalyst Fund',
    eyebrow: 'Seed Capital',
    description: '$3M early-stage fund co-investing up to $250K alongside qualified angel investors.',
    benefits: [
      'Co-investment up to $250K per deal',
      'Angel syndication and due diligence support',
      'Direct pathway to follow-on capital',
    ],
    href: '/funding/sudbury-catalyst-fund',
    image: featuredScf.url,
    imagePosition: 'left center',
    partners: [
      { logo: fednorLogo, alt: 'FedNor' },
      { logo: nickelBasinLogo, alt: 'Nickel Basin Federal Development Corporation' },
      { logo: sudburyLogo, alt: 'City of Greater Sudbury' },
    ],
  },
];

const industryTracks: ProgramTab[] = [
  {
    key: 'CIT',
    shortName: 'CIT',
    name: 'Critical Industrial Technologies',
    eyebrow: 'Ontario Mining & Industrial Tough-Tech',
    description: 'Build, test, and validate hard-tech for the mining and industrial sector with access to funding, facilities, and buyers.',
    benefits: [
      'Non-dilutive project funding',
      'Real-world testing in the Underground Centre',
      'Direct pathways to mining OEMs',
    ],
    href: '/mining/critical-industrial-tech',
    image: citPlaceholder.url,
    partners: [
      { logo: ociLogo, alt: 'Ontario Centre of Innovation' },
      { logo: ontarioLogo, alt: 'Government of Ontario' },
    ],
  },
  {
    key: 'Core5',
    shortName: 'Core5',
    name: 'Core5',
    eyebrow: 'BEV / EV Ventures Across Northern Ontario',
    description: 'The OVIN Northern Regional Technology Development Site supporting SMEs across the full EV value chain.',
    benefits: [
      'Startup & SME funding support',
      'Access to R&D and testing facilities',
      'Buyer / builder matchmaking',
    ],
    href: '/mining/core5',
    image: core5Placeholder.url,
    partners: [
      { logo: ovinLogoAsset.url, alt: 'Ontario Vehicle Innovation Network' },
      { logo: ontarioLogo, alt: 'Government of Ontario' },
    ],
  },
];

const impactStats = [
  { number: '$92M', label: 'Capital Invested', sub: 'Deployed across the ecosystem' },
  { number: '187', label: 'Active Companies', sub: 'Funded and supported ventures' },
  { number: '2,000+', label: 'Jobs Created', sub: 'Across Ontario innovation economy' },
  { number: '$48M', label: 'Export Revenue', sub: 'Generated by portfolio ventures' },
];

const Funding = () => {
  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        {/* HERO */}
        <section className="relative overflow-hidden flex items-center py-16 md:py-24">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }} />
          <div className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
               style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.15 }} />
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
          }} />
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl xl:max-w-4xl">
              <Eyebrow><DollarSign className="w-3.5 h-3.5" />Capital & Funding Programs</Eyebrow>
              <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                Funding for<br /><span style={{ color: TEAL }}>Northern Innovators.</span>
              </Display>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Non-dilutive grants, seed capital, and dedicated programs for mining, industrial, and EV ventures scaling out of Ontario. One front door to the region's most active funding streams.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/apply"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                      style={{ background: TEAL, color: NAVY }}>
                  Become a Client <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/programs/capital-navigation"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-white/25 text-white hover:bg-white/10">
                  Explore Capital Navigation <Compass className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMS OVERVIEW */}
        <section className="py-20 md:py-28" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl mb-20">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-6" style={{ color: TEAL }}>Funding Programs</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase leading-[0.95]" style={{ letterSpacing: '-0.02em' }}>
                Choose your <span style={{ color: TEAL }}>capital path.</span>
              </h2>
              <p className="mt-5 text-base md:text-lg" style={{ color: 'rgba(0,26,77,0.72)' }}>
                Three flagship pathways designed for different stages, sectors, and outcomes. Each one is a direct link to the team, funding, and support you need.
              </p>
            </div>

            {/* Individual Program Cards */}
            <div className="space-y-8">
              {programTabs.map((program, idx) => {
                const imageLeft = idx % 2 === 0;
                return (
                  <div key={program.key} className="rounded-3xl overflow-hidden bg-white border border-black/5 shadow-lg">
                    <div className="grid lg:grid-cols-2">
                      <div className={`relative h-56 sm:h-72 lg:h-auto min-h-[280px] lg:min-h-[420px] hidden lg:block ${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                        <img
                          src={program.image}
                          alt={program.name}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ objectPosition: (program as { imagePosition?: string }).imagePosition ?? 'center' }}
                        />
                      </div>
                      <div className={`p-8 md:p-10 lg:p-12 flex flex-col justify-center ${imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                        <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: TEAL }}>
                          {program.eyebrow}
                        </p>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase leading-[0.95] mb-4" style={{ color: NAVY, letterSpacing: '-0.02em' }}>
                          {program.name}
                        </h3>
                        <div className="w-16 h-1.5 mb-6" style={{ background: TEAL }} />
                        <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: 'rgba(0,26,77,0.72)' }}>
                          {program.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                          {program.benefits.map((b) => (
                            <li key={b} className="flex items-start gap-3 text-sm md:text-base" style={{ color: 'rgba(0,26,77,0.85)' }}>
                              <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: `${TEAL}15`, color: TEAL }}>
                                <CheckCircle className="w-3.5 h-3.5" />
                              </span>
                              {b}
                            </li>
                          ))}
                        </ul>
                        <Link
                          to={program.href}
                          className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90"
                          style={{ background: TEAL }}
                        >
                          View This Program <ArrowRight className="w-4 h-4" />
                        </Link>

                        <div className="mt-8 pt-6 border-t border-black/10 hidden md:block">
                          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: 'rgba(0,26,77,0.5)' }}>
                            Delivered in partnership with
                          </p>
                          <div className="flex flex-wrap items-center justify-start gap-4 sm:gap-5">
                            {program.partners.map((partner) => {
                              const isCanada = partner.alt === 'Government of Canada';
                              const isFednor = partner.alt === 'FedNor';
                              const isOntario = partner.alt === 'Government of Ontario';
                              return (
                                <div key={partner.alt} className="flex items-center justify-start rounded-lg py-1">
                                  <img
                                    src={partner.logo}
                                    alt={partner.alt}
                                    loading="lazy"
                                    width={160}
                                    height={48}
                                    className={`w-auto object-contain ${
                                      isCanada
                                        ? 'h-9 sm:h-10 md:h-11 max-w-[180px] sm:max-w-[200px]'
                                        : isFednor
                                        ? 'h-8 sm:h-9 md:h-10 max-w-[160px] sm:max-w-[180px]'
                                        : isOntario
                                        ? 'h-7 sm:h-8 md:h-9 max-w-[140px] sm:max-w-[160px]'
                                        : 'h-7 sm:h-8 md:h-9 max-w-[130px] sm:max-w-[150px]'
                                    }`}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* INDUSTRY TRACKS */}
        <section className="pt-10 pb-16 md:pt-14 md:pb-24" style={{ background: `linear-gradient(180deg, ${PAPER} 0%, white 100%)`, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl mb-14 md:mb-16">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-6" style={{ color: TEAL }}>Industry Tracks</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase leading-[0.95]" style={{ letterSpacing: '-0.02em' }}>
                Built for <span style={{ color: TEAL }}>Ontario's sectors.</span>
              </h2>
              <p className="mt-4 text-base md:text-lg" style={{ color: 'rgba(0,26,77,0.72)' }}>
                Sector-specific funding and facilities for mining, industrial, and battery-electric ventures scaling across the North.
              </p>
            </div>

            <div className="space-y-8">
              {industryTracks.map((program, idx) => {
                const imageLeft = idx % 2 === 0;
                return (
                  <div key={program.key} className="rounded-3xl overflow-hidden bg-white border border-black/5 shadow-lg">
                    <div className="grid lg:grid-cols-2">
                      <div className={`relative h-56 sm:h-72 lg:h-auto min-h-[280px] lg:min-h-[420px] ${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                        <img
                          src={program.image}
                          alt={program.name}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ objectPosition: (program as { imagePosition?: string }).imagePosition ?? 'center' }}
                        />
                      </div>
                      <div className={`p-8 md:p-10 lg:p-12 flex flex-col justify-center ${imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                        <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: TEAL }}>
                          {program.eyebrow}
                        </p>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase leading-[0.95] mb-4" style={{ color: NAVY, letterSpacing: '-0.02em' }}>
                          {program.name}
                        </h3>
                        <div className="w-16 h-1.5 mb-6" style={{ background: TEAL }} />
                        <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: 'rgba(0,26,77,0.72)' }}>
                          {program.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                          {program.benefits.map((b) => (
                            <li key={b} className="flex items-start gap-3 text-sm md:text-base" style={{ color: 'rgba(0,26,77,0.85)' }}>
                              <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: `${TEAL}15`, color: TEAL }}>
                                <CheckCircle className="w-3.5 h-3.5" />
                              </span>
                              {b}
                            </li>
                          ))}
                        </ul>
                        <Link
                          to={program.href}
                          className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90"
                          style={{ background: TEAL }}
                        >
                          View This Program <ArrowRight className="w-4 h-4" />
                        </Link>

                        <div className="mt-8 pt-6 border-t border-black/10">
                          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: 'rgba(0,26,77,0.5)' }}>
                            Delivered in partnership with
                          </p>
                          <div className="flex flex-wrap items-center justify-start gap-4 sm:gap-5">
                            {program.partners.map((partner) => {
                              const isCanada = partner.alt === 'Government of Canada';
                              const isFednor = partner.alt === 'FedNor';
                              const isOntario = partner.alt === 'Government of Ontario';
                              return (
                                <div key={partner.alt} className="flex items-center justify-start rounded-lg py-1">
                                  <img
                                    src={partner.logo}
                                    alt={partner.alt}
                                    loading="lazy"
                                    width={160}
                                    height={48}
                                    className={`w-auto object-contain ${
                                      isCanada
                                        ? 'h-9 sm:h-10 md:h-11 max-w-[180px] sm:max-w-[200px]'
                                        : isFednor
                                        ? 'h-8 sm:h-9 md:h-10 max-w-[160px] sm:max-w-[180px]'
                                        : isOntario
                                        ? 'h-7 sm:h-8 md:h-9 max-w-[140px] sm:max-w-[160px]'
                                        : 'h-7 sm:h-8 md:h-9 max-w-[130px] sm:max-w-[150px]'
                                    }`}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* IMPACT STATS */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 10% 20%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 90% 80%, rgba(47,111,214,0.22), transparent 45%)`,
          }} />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl mb-20">
              <Eyebrow><TrendingUp className="w-3.5 h-3.5" />Funding Impact</Eyebrow>
              <Display className="text-3xl md:text-5xl">
                Capital that <span style={{ color: TEAL }}>compounds.</span>
              </Display>
              <p className="mt-5 text-base md:text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Real numbers from a track record of building, funding, and scaling ventures in Northern Ontario.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {impactStats.map((s) => (
                <div key={s.label} className="rounded-2xl p-6 md:p-8 border border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: TEAL, letterSpacing: '-0.02em' }}>{s.number}</div>
                  <div className="text-sm md:text-base font-semibold text-white mb-1">{s.label}</div>
                  <div className="text-xs md:text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: PAPER, color: NAVY }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(0,179,152,0.10), transparent 45%), radial-gradient(circle at 80% 80%, rgba(47,111,214,0.10), transparent 45%)`,
          }} />
          <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-6 md:px-10 text-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
               style={{ fontFamily: FONT, color: TEAL }}>
              <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
              <Rocket className="w-3.5 h-3.5" />Ready to raise?
            </p>
            <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl md:text-5xl lg:text-6xl"
                style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
              Let's find your <span style={{ color: TEAL }}>capital fit.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'rgba(0,26,77,0.72)' }}>
              Become a client to unlock program eligibility, or work directly with our Capital Navigation team to map your funding path.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/apply"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                    style={{ background: TEAL, color: 'white' }}>
                Become a Client <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/programs/capital-navigation"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border text-white hover:bg-white/10"
                    style={{ borderColor: NAVY, color: NAVY, background: 'transparent' }}>
                Explore Capital Navigation <Compass className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Funding;
