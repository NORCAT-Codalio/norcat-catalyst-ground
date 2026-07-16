import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Linkedin, X, Target, Zap, ShieldCheck, Users2, Trophy, Sparkles } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// Award badges
import awardBestPlace from '@/assets/award-best-place-to-work.png';
import awardInnovationEco from '@/assets/award-best-innovation-ecosystem.png';
import awardNasa from '@/assets/award-nasa-achievement.png';
import awardIndigenous from '@/assets/award-indigenous-partnership.png';
import awardExecutive from '@/assets/award-executive-of-the-year.png';
import awardBusinessGrowth from '@/assets/award-business-growth.png';

// Team headshots
import brendanImage from '@/assets/team/brendan.png';
import shashankImage from '@/assets/team/shashank.png';
import bartImage from '@/assets/team/bart.png';
import jieImage from '@/assets/team/jie-new.png';

// Logos
import ontarioLogoAsset from '@/assets/logos/ontario-logo-wordmark.png.asset.json';
import innovateonLogo from '@/assets/logos/innovateon.png';

// Partner logos
import fednorLogo from '@/assets/logos/fednor.png';
import norcatLogo from '@/assets/logos/norcat.png';
import sudburyLogo from '@/assets/logos/sudbury.png';
import tedcLogo from '@/assets/logos/tedc.png';

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
  { name: 'Ontario', logo: ontarioLogoAsset.url },
  { name: 'NORCAT', logo: norcatLogo },
  { name: 'City of Greater Sudbury', logo: sudburyLogo },
  { name: 'TEDC', logo: tedcLogo },
];


const team = [
  { name: 'Brendan Skiffington', role: 'Manager', image: brendanImage, bio: 'Brendan leads the innovation team with a focus on helping startups navigate the early stages of growth. With extensive experience in venture development and ecosystem building, he connects founders with the resources they need to succeed.', linkedin: 'https://linkedin.com/in/' },
  { name: 'Shashank Mehta', role: 'Coordinator', image: shashankImage, bio: 'Shashank coordinates programs and events that bring together founders, mentors, and investors. His passion for community building helps create meaningful connections within the innovation ecosystem.', linkedin: 'https://linkedin.com/in/' },
  { name: 'Bart Streppel', role: 'Content Specialist', image: bartImage, bio: 'Bart crafts compelling narratives that showcase the impact of NORCAT Innovation and its portfolio companies. He helps startups tell their stories effectively to customers, investors, and media.', linkedin: 'https://linkedin.com/in/' },
  { name: 'Jie Chen', role: 'Associate', image: jieImage, bio: 'Jie supports founders through research, analysis, and program delivery. Her attention to detail and commitment to excellence ensures startups receive the highest quality support.', linkedin: 'https://linkedin.com/in/' },
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

function TeamModal({ member, onClose }: { member: typeof team[0] | null; onClose: () => void }) {
  if (!member) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      >
        <motion.div
          className="rounded-2xl max-w-md w-full p-8 relative"
          style={{ background: 'white', border: '1px solid #d9dde5' }}
          initial={{ scale: 0.95, y: 10 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 10 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose}
                  className="absolute top-4 right-4 size-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: PAPER, color: NAVY }}>
            <X className="w-4 h-4" />
          </button>
          <div className="text-center">
            <img src={member.image} alt={member.name}
                 className="w-24 h-24 rounded-full object-cover mx-auto mb-5"
                 style={{ border: `3px solid ${TEAL}` }} />
            <h3 className="text-2xl font-black uppercase mb-1" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>
              {member.name}
            </h3>
            <p className="text-xs font-bold uppercase tracking-[0.18em] mb-5" style={{ color: TEAL, fontFamily: FONT }}>
              {member.role}
            </p>
            <p className="text-left leading-relaxed mb-7 text-sm" style={{ color: '#475068' }}>
              {member.bio}
            </p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
               className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
               style={{ background: TEAL, color: NAVY, fontFamily: FONT }}>
              <Linkedin className="w-4 h-4" /> Connect on LinkedIn
              <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
              </span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function About() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

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
              <Eyebrow className="text-lg">About NORCAT Innovation</Eyebrow>
              <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                <span style={{ color: TEAL }}>The Innovation Engine</span><br />of the North.
              </Display>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Designed by-and-for the builders of innovative technology and scientific discovery, NORCAT Innovation provides you with the Sudbury Advantage: land, resources, talent, capital, and an unparalleled appeal to wanting to see others succeed.
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

        {/* ───── MISSION (light, text left / video right) ───── */}
        <section className="py-20 md:py-28" style={{ background: '#f4f6fa', color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                   style={{ fontFamily: FONT, color: TEAL }}>
                  <span className="size-1.5 rounded-full inline-block mr-2 align-middle" style={{ background: TEAL }} />
                  Our Mission
                </p>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-6"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  About <span style={{ color: TEAL }}>NORCAT Innovation.</span>
                </h2>
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  NORCAT Innovation is a non-profit Regional Innovation Centre built on a simple mission:
                  keep talented founders and builders in the North by giving them the resources, mentorship,
                  and capital access they need to grow. We believe innovation thrives when community comes first,
                  safety and integrity are non-negotiable, and bold ideas are met with real support. Everything we do is designed to help entrepreneurs turn local potential into global impact.
                </p>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="rounded-2xl overflow-hidden aspect-video shadow-xl"
                     style={{ border: '1px solid #d9dde5' }}>
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="About NORCAT Innovation"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── STORY OF NORCAT (dark, vertical timeline) ───── */}
        <section className="py-20 md:py-28 relative overflow-hidden"
                 style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 15% 20%, rgba(0,179,152,0.22), transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.08), transparent 45%)`,
          }} />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl mb-16">
              <Eyebrow>Our Story</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                The NORCAT <span style={{ color: TEAL }}>Innovation Timeline.</span>
              </Display>
              <p className="mt-6 text-base sm:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Since 2014, NORCAT Innovation has been the launchpad for Northern founders, turning regional expertise into globally competitive technology ventures.
              </p>
            </div>

            {/* Alternating image + text timeline */}
            <div className="relative">
              {/* Center rail (desktop) / left rail (mobile) */}
              <div className="absolute top-0 bottom-0 w-px hidden md:block left-1/2 -translate-x-1/2" style={{ background: 'rgba(0,179,152,0.35)' }} />
              <div className="absolute top-0 bottom-0 w-px md:hidden left-4" style={{ background: 'rgba(0,179,152,0.35)' }} />

              <div className="space-y-14 md:space-y-24">
                {[
                  { year: '2014', title: 'The Innovation Mill', desc: "NORCAT officially launches Sudbury's Regional Innovation Centre, laying the groundwork for tech startup mentorship and hosting the first PITCH competition to connect local founders with early investment networks.", image: storyLake.url },
                  { year: '2016', title: 'Innovation Acceleration Program (IAP) Launch', desc: 'NORCAT secures federal funding from FedNor to send $10,000 micro-grants straight to tech ventures for product prototyping and testing.', image: featuredIap.url },
                  { year: '2017', title: 'UNDERGROUND CENTRE EXPANSION', desc: 'An injection of nearly $1 million in joint public funding helps NORCAT overhaul the ventilation and electrical systems at the Underground Centre, creating live testing labs for international technology builders.', image: undergroundCentre.url },
                  { year: '2018', title: 'IAP PHASE II ADVANCES MANUFACTURING', desc: "An additional $305,000 federal investment expands the hub's physical toolset, launching phase two of the micro-grant program and adding industrial injection molding machines to the Fortin Discovery Lab.", image: featuredCore5.url },
                  { year: '2019', title: 'LAUNCHING THE CATALYST FUND', desc: 'The ecosystem hits its stride, supporting the creation of over 100 tech jobs, bringing in more than $35M in equity capital, and launching the $5M Sudbury Catalyst Fund.', image: featuredScf.url, cta: { label: 'View the SCF Recipients!', href: '/funding/sudbury-catalyst-fund' } },
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
                      <div className="absolute top-6 md:top-8 z-10 size-4 rounded-full ring-4 md:left-1/2 md:-translate-x-1/2 left-4 -translate-x-1/2"
                           style={{ background: TEAL, boxShadow: `0 0 0 6px rgba(0,179,152,0.15)`, ['--tw-ring-color' as string]: NAVY } as React.CSSProperties} />

                      <div className={`grid md:grid-cols-2 gap-6 md:gap-12 items-center ${isLeft ? '' : 'md:[&>*:first-child]:order-2'}`}>
                        {/* Image side */}
                        <div className={`pl-10 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                          <div className="overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-2xl aspect-[4/3]">
                            <img src={event.image} alt={event.title} className="w-full h-full object-cover" loading="lazy" />
                          </div>
                        </div>
                        {/* Text side */}
                        <div className={`pl-10 md:pl-0 ${isLeft ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
                             style={{ color: TEAL, fontFamily: FONT }}>
                            {event.year}
                          </p>
                          <h3 className="font-black uppercase text-xl md:text-2xl lg:text-3xl mb-4 text-white"
                              style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>
                            {event.title}
                          </h3>
                          <p className="text-sm md:text-base leading-relaxed" style={{ color: FG_MUTED }}>
                            {event.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>


        {/* ───── TEAM (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
              <div className="max-w-2xl">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                   style={{ fontFamily: FONT, color: TEAL }}>
                  <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                  Our Team
                </p>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  Meet the<br /><span style={{ color: TEAL }}>Innovation Team.</span>
                </h2>
              </div>
              <p className="text-sm md:text-base md:max-w-sm leading-relaxed" style={{ color: '#5b6478' }}>
                Our dedicated team works closely with founders to provide the support,
                resources, and connections needed to build successful companies.
              </p>
            </div>

            <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-5 items-start">
              {team.map((member) => {
                const isExpanded = expandedMember === member.name;
                return (
                  <motion.div
                    key={member.name}
                    layout
                    onClick={() => setExpandedMember(isExpanded ? null : member.name)}
                    transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                    whileHover={isExpanded ? undefined : { y: -6 }}
                    className="group text-left rounded-2xl overflow-hidden cursor-pointer relative"
                    style={{ background: 'white', border: '1px solid #d9dde5' }}
                  >
                    <motion.div layout className={isExpanded ? 'p-6' : ''}>
                      <motion.div
                        layout
                        className={`relative overflow-hidden ${
                          isExpanded
                            ? 'w-24 h-24 sm:w-28 sm:h-28 rounded-full flex-shrink-0'
                            : 'w-full aspect-square'
                        }`}
                        style={isExpanded ? { border: `3px solid ${TEAL}` } : undefined}
                      >
                        <motion.img
                          layout
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {!isExpanded && (
                          <div className="absolute inset-0"
                               style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(0,26,77,0.15) 100%)' }} />
                        )}
                      </motion.div>

                      <motion.div layout className={isExpanded ? 'flex-1 min-w-0' : 'p-5'}>
                        <motion.h3 layout className="font-black uppercase text-base md:text-lg mb-1"
                            style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>
                          {member.name}
                        </motion.h3>
                        <motion.p layout className="text-xs font-bold uppercase tracking-[0.18em]"
                           style={{ color: TEAL, fontFamily: FONT }}>
                          {member.role}
                        </motion.p>

                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: 0.1 }}
                          >
                              <p className="mt-4 leading-relaxed text-sm" style={{ color: '#475068' }}>
                                {member.bio}
                              </p>
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="mt-5 group/btn inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                                style={{ background: TEAL, color: NAVY, fontFamily: FONT }}
                              >
                                <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                                <span className="inline-flex items-center justify-center size-7 rounded-full"
                                      style={{ background: NAVY, color: 'white' }}>
                                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover/btn:rotate-[360deg]" />
                                </span>
                              </a>
                          </motion.div>
                        )}
                      </motion.div>

                      {isExpanded && (
                        <button
                          onClick={(e) => { e.stopPropagation(); setExpandedMember(null); }}
                          className="absolute top-4 right-4 size-9 rounded-full flex items-center justify-center transition-colors"
                          style={{ background: PAPER, color: NAVY }}
                          aria-label="Close"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
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
                <img src={ontarioLogoAsset.url} alt="Government of Ontario" className="h-16 object-contain mb-4" />
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
