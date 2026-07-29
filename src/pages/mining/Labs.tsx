import * as React from 'react';
import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Mountain,
  Building2,
  Users,
  Briefcase,
  FlaskConical,
  MapPin,
  CheckCircle2,
  Eye,
  X,
  Presentation,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import signatureLines from '@/assets/signature-lines.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
import norcatBuildingImg from '@/assets/norcat-building.jpg.asset.json';
import undergroundExteriorImg from '@/assets/underground/underground-1.jpg.asset.json';
import undergroundImg from '@/assets/mining-underground-hero.jpg';
import discoveryLabImg from '@/assets/fortin-discovery-lab.jpg.asset.json';
import surfaceExteriorImg from '@/assets/surface-exterior.jpg.asset.json';
import surfaceHubImg from '@/assets/surface-hub.jpg.asset.json';
import surfacePresentationImg from '@/assets/surface-presentation.jpg.asset.json';
import hotdeskImg from '@/assets/founders-collab.jpg';
import officesImg from '@/assets/cta-photo-3.jpg';
import meetingSpaceImg from '@/assets/meeting-space.jpg';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';

// ── Brand tokens (mirrors Home2 / About / OurTeam) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const BORDER = 'rgba(255,255,255,0.10)';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const FONT = "'Open Sans', system-ui, sans-serif";

const Eyebrow = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p
    className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5 ${className}`}
    style={{ fontFamily: FONT, color: TEAL }}
  >
    <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
    {children}
  </p>
);

const Display = ({ children, className = '', as: As = 'h2' as any }: any) => (
  <As
    className={`font-black uppercase leading-[0.95] tracking-tight text-white ${className}`}
    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}
  >
    {children}
  </As>
);

const locations = [
  {
    name: 'NORCAT Innovation',
    place: 'Downtown Sudbury, ON',
    copy: 'Our innovation hub featuring the Fortin Discovery Lab, coworking spaces, and private offices.',
    best: 'Prototyping, day-to-day operations, team workspace, and community connection.',
    exteriorImage: norcatBuildingImg,
    exteriorImageAlt: 'Exterior of the NORCAT Innovation building in downtown Sudbury',
  },
  {
    name: 'NORCAT Underground Centre',
    place: 'Onaping, ON',
    copy: 'Located approximately 40 minutes from Sudbury. Home to our underground testing facility and surface support infrastructure.',
    best: 'Technology testing, validation, demonstrations, and pilot projects in real mining conditions.',
    exteriorImage: undergroundExteriorImg,
    exteriorImageAlt: 'Exterior of the NORCAT Underground Centre in Onaping',
  },
];

const facilities = [
  {
    id: 'hotdesk',
    icon: Users,
    name: 'Hot Desk Space',
    location: 'NORCAT Innovation, Sudbury',
    description:
      'Flexible coworking space perfect for early-stage founders and remote workers. Drop in when you need focused workspace with access to the innovation community.',
    image: hotdeskImg,
    imageAlt: 'Founders collaborating in the NORCAT Innovation coworking space',
    features: [
      'Flexible day-use access',
      'High-speed internet',
      'Meeting room booking',
      'Coffee and amenities',
      'Networking opportunities',
      'Community events access',
    ],
  },
  {
    id: 'offices',
    icon: Briefcase,
    name: 'Private Office Spaces',
    location: 'NORCAT Innovation, Sudbury',
    description:
      'Dedicated private offices for growing teams who need their own space while staying connected to the innovation ecosystem and support services.',
    image: officesImg,
    imageAlt: 'Professional private office spaces at NORCAT Innovation',
    features: [
      'Private, lockable offices',
      'Various sizes available',
      '24/7 building access',
      'Shared amenities access',
      'Professional business address',
      'On-site programming and events',
    ],
  },
  {
    id: 'meeting-presentation-space',
    icon: Presentation,
    name: 'Meeting & Presentation Space',
    location: 'NORCAT Innovation, Sudbury',
    description:
      'Professional boardrooms, meeting rooms, and presentation spaces equipped for client pitches, team sessions, video calls, and hosted events — with on-site tech support when you need it.',
    image: meetingSpaceImg,
    imageAlt: 'Modern boardroom and presentation setup at NORCAT Innovation',
    features: [
      'Boardrooms and flexible meeting rooms',
      'TV displays and presentation setups',
      'Video conferencing equipment',
      'Space for pitches, demos, and hosted events',
      'On-site tech support',
      'Flexible booking options',
      'Professional hosting environment',
    ],
  },
  {
    id: 'discovery-lab',
    icon: FlaskConical,
    name: 'Fortin Discovery Lab',
    location: 'NORCAT Innovation, Sudbury',
    description:
      'A state-of-the-art prototyping and fabrication lab equipped with advanced tools for rapid prototyping, electronics development, and hardware innovation.',
    image: discoveryLabImg.url,
    imageAlt: 'Advanced prototyping and fabrication equipment in the Fortin Discovery Lab',
    features: [
      '3D printing and additive manufacturing',
      'Electronics workbenches and tools',
      'Prototyping equipment',
      'Collaboration workspace',
      'Technical mentorship access',
      'Startup-friendly access model',
    ],
  },
  {
    id: 'underground',
    icon: Mountain,
    name: 'Underground Facility',
    location: 'NORCAT Underground Centre, Onaping',
    description:
      "The world's first underground centre for mining innovation. A fully operational underground mine environment for testing, validating, and demonstrating new technologies in real mining conditions.",
    image: ugAditImg.url,
    imageAlt: 'Adit 2 entrance to the NORCAT Underground Centre with robotic test vehicles',
    features: [
      '1.5 km of underground development',
      'Active mining environment with real conditions',
      'Multiple test zones for different applications',
      'Connectivity infrastructure (WiFi, LTE)',
      'Compressed air, water, and ventilation',
      'Safe, controlled access for demonstrations',
    ],
    gallery: [
      { src: ugExhibitorMapImg.url, alt: 'Underground exhibitor map signage along a drift at the NORCAT Underground Centre' },
      { src: ugSafeboxImg.url, alt: 'Technology demonstration of an underground safety isolation system' },
      { src: ugBoltingImg.url, alt: 'Ground support work underground with sparks flying at the NORCAT Underground Centre' },
      { src: ugTourImg.url, alt: 'Visitor capturing an underground technology demonstration on a phone' },
    ],
  },
  {
    id: 'surface',
    icon: Building2,
    name: 'Surface Facility',
    location: 'NORCAT Underground Centre, Onaping',
    description:
      'Purpose-built surface facility at the Underground Centre providing workspace, meeting rooms, and staging areas for companies conducting underground testing and demonstrations.',
    image: surfaceExteriorImg.url,
    imageAlt: 'Exterior of the NORCAT surface facility at the Underground Centre',
    features: [
      'Meeting and presentation spaces',
      'Equipment staging areas',
      'Networking infrastructure',
      'On-site support services',
      'Visitor hosting capabilities',
      'Direct access to underground',
    ],
    gallery: [
      { src: surfaceHubImg.url, alt: 'Open collaboration and coworking area inside the NORCAT surface facility' },
      { src: surfacePresentationImg.url, alt: 'Presentation and event space in use at the NORCAT surface facility' },
    ],
  },
] as {
  id: string;
  icon: any;
  name: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  gallery?: { src: string; alt: string }[];
}[];

const Labs = () => {
  const [lightbox, setLightbox] = React.useState<{
    images: { src: string; alt: string }[];
    index: number;
  } | null>(null);

  const current = lightbox ? lightbox.images[lightbox.index] : null;
  const step = (dir: number) =>
    setLightbox((lb) =>
      lb ? { ...lb, index: (lb.index + dir + lb.images.length) % lb.images.length } : lb,
    );

  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>
        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden flex items-center py-16 md:py-24">
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }}
          />
          <div
            className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.15 }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
            }}
          />
          <img
            src={signatureLines}
            alt=""
            aria-hidden="true"
            className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay"
          />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl">
              <Eyebrow className="!text-white">Infrastructure &amp; Facilities</Eyebrow>

              <Display as="h1" className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                Innovation Space.<br />
                <span style={{ color: TEAL }}>Built to Build In.</span>
              </Display>

              <p
                className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                From underground testing facilities to labs, hot desks and private offices - NORCAT
                provides the infrastructure startups need to develop, test, and scale their
                innovations.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/apply"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                  style={{
                    fontFamily: FONT,
                    background: TEAL,
                    color: NAVY,
                    boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)',
                  }}
                >
                  Access Our Facilities <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/mining/norcat-underground"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/5"
                  style={{ fontFamily: FONT, color: 'white', border: `2px solid ${TEAL}` }}
                >
                  Explore Underground Centre
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ───── LOCATIONS (light) ───── */}
        <section className="py-16 md:py-24" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-10 md:mb-14">
              <Eyebrow>Where We Work</Eyebrow>
              <h2
                className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-5"
                style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
              >
                TWO LOCATIONS,<br />
                <span style={{ color: TEAL }}>ENDLESS POSSIBILITIES.</span>
              </h2>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                Our facilities span Northern Ontario, offering unique environments for every stage of
                your innovation journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl overflow-hidden h-full"
                  style={{ background: 'white', border: '1px solid #d9dde5' }}
                >
                  {/* Exterior building photo */}
                  <div className="relative h-52 sm:h-60 w-full overflow-hidden">
                    <img
                      src={loc.exteriorImage.url}
                      alt={loc.exteriorImageAlt}
                      className="w-full h-full object-cover"
                    />
                    <span
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, ${NAVY} 0%, transparent 60%)`,
                      }}
                    />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <MapPin className="w-4 h-4 shrink-0" style={{ color: TEAL }} />
                      <span
                        className="text-xs font-bold uppercase tracking-[0.14em]"
                        style={{ color: 'white' }}
                      >
                        {loc.place}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 md:p-8">
                    <h3
                      className="font-black uppercase text-lg md:text-xl mb-3"
                      style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}
                    >
                      {loc.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: '#475068' }}>
                      {loc.copy}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#475068' }}>
                      <strong style={{ color: NAVY }}>Best for:</strong> {loc.best}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── BRIDGE: separates the two light sections ───── */}
        <section className="relative overflow-hidden py-12 md:py-16" style={{ background: NAVY }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,179,152,0.16), transparent 45%), radial-gradient(circle at 85% 50%, rgba(47,111,214,0.14), transparent 45%)`,
            }}
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
              <p
                className="max-w-2xl text-lg md:text-xl lg:text-2xl font-semibold leading-snug"
                style={{ color: 'rgba(255,255,255,0.95)' }}
              >
                From downtown Sudbury to an active mine site — infrastructure built for every stage of
                innovation.
              </p>
              <div className="flex gap-10 md:gap-14 shrink-0">
                <div>
                  <p className="text-3xl md:text-4xl font-black" style={{ color: TEAL }}>6</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] mt-1" style={{ color: 'rgba(255,255,255,0.72)' }}>Facilities</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black" style={{ color: TEAL }}>2</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] mt-1" style={{ color: 'rgba(255,255,255,0.72)' }}>Locations</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black" style={{ color: TEAL }}>1.5km</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] mt-1" style={{ color: 'rgba(255,255,255,0.72)' }}>Underground</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── FACILITIES (white to contrast PAPER above) ───── */}
        <section
          className="py-16 md:py-24 relative overflow-hidden"
          style={{ background: '#FFFFFF', color: NAVY }}
        >
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <Eyebrow>Our Facilities</Eyebrow>
              <h2
                className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
              >
                World-class space<br />
                <span style={{ color: TEAL }}>at every stage.</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#475068' }}>
                Infrastructure designed to support technology companies from first prototype to
                commercial deployment.
              </p>
            </div>

            <div className="grid gap-5 md:gap-6">
              {facilities.map((facility, i) => (
                <motion.article
                  key={facility.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                  style={{ background: 'white', border: '1px solid #d9dde5' }}
                >
                  <div className="grid lg:grid-cols-[1.1fr_1.9fr]">
                    {/* Image */}
                    <button
                      type="button"
                      onClick={() =>
                        setLightbox({
                          images: [
                            { src: facility.image, alt: facility.imageAlt },
                            ...(facility.gallery ?? []),
                          ],
                          index: 0,
                        })
                      }
                      className="relative block w-full h-56 sm:h-64 lg:h-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-inset"
                      aria-label={`View larger image of ${facility.name}`}
                    >
                      <img
                        src={facility.image}
                        alt={facility.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r" />
                      <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-sm border border-white/30 transition-opacity group-hover:bg-black/70">
                        <Eye className="w-3.5 h-3.5" />
                        {facility.gallery?.length
                          ? `View images (${facility.gallery.length + 1})`
                          : 'View image'}
                      </span>
                    </button>

                    {/* Content */}
                    <div className="p-6 md:p-8 lg:p-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: 'rgba(0,179,152,0.10)', border: `1px solid ${TEAL}33` }}
                        >
                          <facility.icon className="w-5 h-5" style={{ color: TEAL }} />
                        </div>
                        <div>
                          <h3
                            className="font-black uppercase text-lg md:text-xl"
                            style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}
                          >
                            {facility.name}
                          </h3>
                          <p
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] mt-1"
                            style={{ color: TEAL }}
                          >
                            <MapPin className="w-3.5 h-3.5" />
                            {facility.location}
                          </p>
                        </div>
                      </div>

                      <p className="text-base leading-relaxed mb-6" style={{ color: '#475068' }}>
                        {facility.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                        {facility.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: TEAL }} />
                            <span className="text-sm leading-relaxed font-medium" style={{ color: '#2d3342' }}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>

                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Lightbox */}
          <Dialog open={!!lightbox} onOpenChange={(open) => !open && setLightbox(null)}>
            <DialogContent
              className="max-w-5xl w-[calc(100%-2rem)] p-0 border-0 bg-transparent overflow-hidden shadow-2xl"
              style={{ background: 'transparent' }}
            >
              <DialogTitle className="sr-only">{current?.alt || 'Facility image'}</DialogTitle>
              {current && lightbox && (
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setLightbox(null)}
                    className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                    aria-label="Close image"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {lightbox.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => step(-1)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => step(1)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  <img
                    src={current.src}
                    alt={current.alt}
                    className="w-full max-h-[75vh] object-contain rounded-lg bg-black/90"
                  />
                  <p className="mt-3 text-sm text-white/80 text-center px-4">{current.alt}</p>

                  {lightbox.images.length > 1 && (
                    <div className="mt-3 flex justify-center gap-2">
                      {lightbox.images.map((shot, idx) => (
                        <button
                          key={shot.src}
                          type="button"
                          onClick={() => setLightbox({ ...lightbox, index: idx })}
                          className="w-16 h-12 rounded-md overflow-hidden transition-opacity"
                          style={{
                            border: idx === lightbox.index ? `2px solid ${TEAL}` : '2px solid transparent',
                            opacity: idx === lightbox.index ? 1 : 0.6,
                          }}
                          aria-label={`View image ${idx + 1}`}
                        >
                          <img src={shot.src} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </DialogContent>
          </Dialog>
        </section>

        {/* ───── CTA (light) ───── */}
        <section className="py-16 md:py-24" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div
              className="rounded-3xl p-9 md:p-14 relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 55%, ${TEAL} 100%)` }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 15% 20%, rgba(0,179,152,0.22), transparent 40%), radial-gradient(circle at 85% 80%, rgba(47,111,214,0.18), transparent 45%)`,
                }}
              />
              <div className="relative max-w-3xl">
                <Eyebrow className="!text-white">Get Started</Eyebrow>
                <Display className="text-3xl sm:text-4xl md:text-5xl">
                  Ready to build<br />
                  <span style={{ color: TEAL }}>something great?</span>
                </Display>
                <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: FG_MUTED }}>
                  Whether you need to test underground, prototype in the lab, or find your team's home
                  base, we have the space for you.
                </p>
                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/apply"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                    style={{
                      fontFamily: FONT,
                      background: TEAL,
                      color: NAVY,
                      boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)',
                    }}
                  >
                    Get Started <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/5"
                    style={{ fontFamily: FONT, color: 'white', border: `2px solid ${TEAL}` }}
                  >
                    Contact Us
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Labs;
