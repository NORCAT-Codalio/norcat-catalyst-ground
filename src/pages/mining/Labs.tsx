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
import ugAditImg from '@/assets/underground/ug-adit-entrance.jpg.asset.json';
import ugAditNewImg from '@/assets/underground/ug-adit-entrance-new.png.asset.json';
import ugSafeboxImg from '@/assets/underground/ug-safebox-demo.jpg.asset.json';
import ugBoltingImg from '@/assets/underground/ug-bolting-sparks.jpg.asset.json';
import ugTourImg from '@/assets/underground/ug-tour-phone.jpg.asset.json';
import discoveryLabImg from '@/assets/fortin-discovery-lab.jpg.asset.json';
import surfaceExteriorImg from '@/assets/surface-exterior.jpg.asset.json';
import surfaceHubImg from '@/assets/surface-hub.jpg.asset.json';
import surfacePresentationImg from '@/assets/surface-presentation.jpg.asset.json';
import hotdeskImg from '@/assets/hot-desk-space.png.asset.json';
import lobbyImg from '@/assets/norcat-innovation-lobby.png.asset.json';
import meetingRoomImg from '@/assets/norcat-meeting-room.jpg.asset.json';
import meetingSignImg from '@/assets/norcat-meeting-sign.png.asset.json';
import atriumImg from '@/assets/norcat-innovation-atrium.png.asset.json';
import officesImg from '@/assets/cta-photo-3.jpg';
import presentationShowcaseImg from '@/assets/presentation-space-showcase.png.asset.json';
import presentationPodiumImg from '@/assets/presentation-space-podium.png.asset.json';
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
    place: 'Sudbury, ON',
    icon: Building2,
    image: lobbyImg.url,
    imageAlt: 'NORCAT Innovation lobby with blue feature wall and NORCAT signage',
    copy: 'Workspace, prototyping, collaboration and day-to-day operations for startups and technology companies.',
    best: 'Founders, startups, product development, team space',
    href: '/contact',
  },
  {
    name: 'NORCAT Underground Centre',
    place: 'Onaping, ON',
    icon: Mountain,
    image: ugAditNewImg.url,
    imageAlt: 'Adit 2 entrance to the NORCAT Underground Centre with robotic test vehicles',
    copy: 'Underground and surface environments for testing, validation and demonstration of mining technologies.',
    best: 'Mining technology, pilot projects, demonstrations, field validation',
    href: '/mining/norcat-underground',
  },
];


const facilities = [
  {
    id: 'hotdesk',
    icon: Users,
    name: 'Meeting & Hot Desk Space',
    location: 'NORCAT Innovation, Sudbury',
    description:
      'Flexible coworking and meeting space perfect for early-stage founders and remote workers. Drop in when you need focused workspace with access to the innovation community.',
    image: lobbyImg.url,
    imageAlt: 'NORCAT Innovation lobby with blue feature wall and NORCAT signage',
    gallery: [
      { src: meetingRoomImg.url, alt: 'Meeting room at NORCAT Innovation with boardroom table and whiteboard' },
      { src: meetingSignImg.url, alt: 'Virtual meeting in progress sign on a meeting room table' },
      { src: hotdeskImg.url, alt: 'Bright coworking space at NORCAT Innovation with the "Be bold. Do hard things." wall graphic' },
    ],
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
    image: atriumImg.url,
    imageAlt: 'NORCAT Innovation atrium lounge with NORCAT wall signage and tenant seating area',
    gallery: [
      { src: officesImg, alt: 'Professional private office spaces at NORCAT Innovation' },
    ],
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
    id: 'presentation-space',
    icon: Presentation,
    name: 'Presentation Space',
    location: 'NORCAT Innovation, Sudbury',
    description:
      'Professional presentation space equipped for client pitches, team sessions, video calls, and hosted events — with on-site tech support when you need it.',
    image: presentationShowcaseImg.url,
    imageAlt: 'Audience watching a presentation on the video wall at NORCAT Innovation',
    features: [
      'Large-format video wall displays',
      'Presentation and AV setups',
      'Video conferencing equipment',
      'Space for pitches, demos, and hosted events',
      'On-site tech support',
      'Flexible booking options',
      'Professional hosting environment',
    ],
    gallery: [
      { src: presentationPodiumImg.url, alt: 'Speaker presenting at the podium in front of the video wall at NORCAT Innovation' },
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
    image: ugAditNewImg.url,
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
      { src: ugAditImg.url, alt: 'Adit 2 entrance to the NORCAT Underground Centre with robotic test vehicles' },
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

const blurbs: Record<string, string> = {
  hotdesk: 'Flexible coworking and meeting space ideal for early-stage teams.',
  offices: 'Dedicated private offices for growing teams that need their own space.',
  'presentation-space': 'Professional presentation space equipped for pitches, demos and events.',
  'discovery-lab': 'Prototyping and fabrication lab with tools and tech support when you need it.',
  underground: 'Access to underground mine environments for testing and validation in real-world conditions.',
  surface: 'Purpose-built surface facility for testing, staging and demonstrations with infrastructure support.',
};

const sudburyFacilities = facilities.filter((f) => f.location.includes('Sudbury'));
const onapingFacilities = facilities.filter((f) => f.location.includes('Onaping'));



const Labs = () => {
  const [lightbox, setLightbox] = React.useState<{
    images: { src: string; alt: string }[];
    index: number;
  } | null>(null);
  const [detail, setDetail] = React.useState<(typeof facilities)[number] | null>(null);
  const [detailIndex, setDetailIndex] = React.useState(0);

  const detailImages = detail
    ? [{ src: detail.image, alt: detail.imageAlt }, ...(detail.gallery ?? [])]
    : [];

  const openDetail = (facility: (typeof facilities)[number]) => {
    setDetail(facility);
    setDetailIndex(0);
  };

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
                Spaces to build,<br />
                <span style={{ color: TEAL }}>test and grow.</span>
              </Display>

              <p
                className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                Access the facilities, infrastructure and real-world environments that help technology
                companies move from development to demonstration and deployment.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <a
                  href="#facilities"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                  style={{
                    fontFamily: FONT,
                    background: TEAL,
                    color: NAVY,
                    boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)',
                  }}
                >
                  Explore Our Facilities <ArrowUpRight className="w-4 h-4" />
                </a>

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

        {/* ───── LOCATIONS (white) ───── */}
        <section className="py-16 md:py-24" style={{ background: '#FFFFFF', color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl mb-10 md:mb-14">
              <Eyebrow>Two Locations</Eyebrow>
              <h2
                className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
              >
                One connected ecosystem.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                Our facilities span Northern Ontario, giving companies access to the space, tools and
                environments needed to prototype, collaborate, test and validate new technologies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl overflow-hidden h-full flex flex-col"
                  style={{ background: 'white', border: '1px solid #d9dde5' }}
                >
                  <img
                    src={loc.image}
                    alt={loc.imageAlt}
                    className="w-full h-52 sm:h-60 object-cover"
                    loading="lazy"
                  />
                  <div className="p-7 md:p-8 flex flex-col flex-1">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: 'rgba(0,179,152,0.10)', border: `1px solid ${TEAL}33` }}
                    >
                      <loc.icon className="w-5 h-5" style={{ color: TEAL }} />
                    </div>
                    <h3
                      className="font-black text-lg md:text-xl"
                      style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}
                    >
                      {loc.name}
                    </h3>
                    <p className="text-sm font-bold mb-4" style={{ color: TEAL }}>
                      {loc.place}
                    </p>
                    <p className="text-sm md:text-base leading-relaxed mb-3" style={{ color: '#475068' }}>
                      {loc.copy}
                    </p>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: '#475068' }}>
                      <strong style={{ color: NAVY }}>Best for:</strong> {loc.best}
                    </p>
                    <Link
                      to={loc.href}
                      className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold"
                      style={{ color: TEAL }}
                    >
                      Learn More <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── FACILITIES ───── */}
        <section
          id="facilities"
          className="py-16 md:py-24 relative overflow-hidden scroll-mt-24"
          style={{ background: PAPER, color: NAVY }}
        >
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl mb-12 md:mb-16">
              <Eyebrow>Our Facilities</Eyebrow>
              <h2
                className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
              >
                The right space at every stage.
              </h2>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#475068' }}>
                From meeting and office space to prototyping labs and underground testing environments,
                NORCAT Innovation offers flexible infrastructure to support the full innovation journey.
              </p>
            </div>

            {/* Sudbury */}
            <p
              className="text-sm font-bold uppercase tracking-[0.18em] mb-5"
              style={{ fontFamily: FONT, color: TEAL }}
            >
              Sudbury Facilities
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14 md:mb-16">
              {sudburyFacilities.map((facility, i) => (
                <motion.article
                  key={facility.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg"
                  style={{ background: 'white', border: '1px solid #d9dde5' }}
                >
                  <div className="overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.imageAlt}
                      loading="lazy"
                      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3
                      className="font-bold text-base mb-2"
                      style={{ fontFamily: FONT, color: NAVY }}
                    >
                      {facility.name}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: '#475068' }}>
                      {blurbs[facility.id] ?? facility.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => openDetail(facility)}
                      className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold self-start"
                      style={{ color: TEAL }}
                    >
                      Learn More <ArrowUpRight className="w-4 h-4" />
                    </button>

                  </div>
                </motion.article>
              ))}
            </div>

            {/* Onaping */}
            <p
              className="text-sm font-bold uppercase tracking-[0.18em] mb-5"
              style={{ fontFamily: FONT, color: TEAL }}
            >
              Onaping Facilities
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {onapingFacilities.map((facility, i) => (
                <motion.article
                  key={facility.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-2xl overflow-hidden grid sm:grid-cols-2 transition-all duration-300 hover:shadow-lg"
                  style={{ background: 'white', border: '1px solid #d9dde5' }}
                >
                  <img
                    src={facility.image}
                    alt={facility.imageAlt}
                    loading="lazy"
                    className="w-full h-48 sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-6 flex flex-col">
                    <h3 className="font-bold text-base mb-2" style={{ fontFamily: FONT, color: NAVY }}>
                      {facility.name}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: '#475068' }}>
                      {blurbs[facility.id] ?? facility.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => openDetail(facility)}
                      className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold self-start"
                      style={{ color: TEAL }}
                    >
                      Learn More <ArrowUpRight className="w-4 h-4" />
                    </button>

                  </div>
                </motion.article>
              ))}
            </div>
          </div>


          {/* Facility detail modal */}
          <Dialog open={!!detail} onOpenChange={(open) => !open && setDetail(null)}>
            <DialogContent
              className="max-w-4xl w-[calc(100%-2rem)] p-0 border-0 overflow-hidden max-h-[92vh] overflow-y-auto rounded-2xl"
              style={{ background: 'white' }}
            >
              <DialogTitle className="sr-only">{detail?.name || 'Facility details'}</DialogTitle>
              {detail && (
                <div>
                  <div className="relative">
                      <img
                        src={detailImages[detailIndex]?.src}
                        alt={detailImages[detailIndex]?.alt}
                        className="w-full h-64 sm:h-96 object-cover"
                      />
                    <button
                      type="button"
                      onClick={() => setDetail(null)}
                      className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    {detailImages.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setDetailIndex((i) => (i - 1 + detailImages.length) % detailImages.length)
                          }
                          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setDetailIndex((i) => (i + 1) % detailImages.length)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {detailImages.length > 1 && (
                    <div className="flex gap-2 px-8 sm:px-10 pt-5 flex-wrap">
                      {detailImages.map((shot, idx) => (
                        <button
                          key={shot.src}
                          type="button"
                          onClick={() => setDetailIndex(idx)}
                          className="w-16 h-12 rounded-md overflow-hidden transition-opacity"
                          style={{
                            border: idx === detailIndex ? `2px solid ${TEAL}` : '2px solid transparent',
                            opacity: idx === detailIndex ? 1 : 0.6,
                          }}
                          aria-label={`View image ${idx + 1}`}
                        >
                          <img src={shot.src} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="p-10 md:p-12" style={{ color: NAVY }}>
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-4 h-4 shrink-0" style={{ color: TEAL }} />
                      <span
                        className="text-xs font-bold uppercase tracking-[0.14em]"
                        style={{ color: TEAL }}
                      >
                        {detail.location}
                      </span>
                    </div>
                    <h3
                      className="font-black text-2xl md:text-3xl mb-5"
                      style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}
                    >
                      {detail.name}
                    </h3>
                    <p className="text-base leading-relaxed mb-7" style={{ color: '#475068' }}>
                      {detail.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                      {detail.features.map((feature) => (
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
              )}
            </DialogContent>
          </Dialog>

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
