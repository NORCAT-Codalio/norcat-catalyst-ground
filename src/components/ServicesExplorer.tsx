import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  UserCheck,
  GraduationCap,
  Handshake,
  Users,
  Network,
  Building2,
  Check,
  type LucideIcon,
} from 'lucide-react';
import entrepreneurialCoursesImg from '@/assets/entrepreneurial-courses.png';

/* ── Audience tabs ── */
const audiences = ['Startup Support', 'Funding Support', 'Labs'] as const;
export type Audience = typeof audiences[number];

/* ── Category data per audience ── */
interface CategoryItem {
  icon: LucideIcon;
  title: string;
  headline: string;
  headlineItalic: string;
  description: string;
  features: string[];
  link?: string;
  linkText?: string;
  image?: string;
}

const categories: Record<Audience, CategoryItem[]> = {
  'Startup Support': [
    {
      icon: UserCheck,
      title: 'Venture Growth Team',
      headline: 'A dedicated team in',
      headlineItalic: 'your corner',
      description:
        'Every company is matched with a dedicated venture growth team who works alongside you on strategy, operations, and growth. Regular check-ins keep you accountable and moving forward.',
      features: ['Dedicated advisor relationship', 'Strategic planning support', 'Operational guidance', 'Leadership development'],
      link: '/programs/venture-growth-services',
      linkText: 'Learn More',
    },
    {
      icon: Users,
      title: 'Mentorship Services',
      headline: 'Tactical advice from those who\'ve',
      headlineItalic: 'been there',
      description:
        'Access 18+ experienced mentors across sectors including mining, technology, finance, operations, and more. Get tactical advice from domain experts who\'ve built it themselves.',
      features: ['Domain expert matching', 'Structured mentorship sessions', 'Ongoing relationship building', 'Peer mentor connections'],
      link: '/programs/mentorship-services',
      linkText: 'Learn More',
    },
    {
      icon: GraduationCap,
      title: 'Entrepreneurial Courses',
      headline: 'Learn from those who\'ve',
      headlineItalic: 'built it',
      description:
        'Structured curriculum covering everything from customer discovery to fundraising. Learn from practitioners who\'ve built and scaled companies themselves.',
      features: ['Workshop series & masterclasses', 'Fundraising preparation', 'Go-to-market strategies', 'On-demand courses'],
      image: entrepreneurialCoursesImg,
    },
    {
      icon: Handshake,
      title: 'Core5',
      headline: 'Mining innovation at',
      headlineItalic: 'the core',
      description:
        'A specialized program connecting mining companies with innovative technology solutions to solve critical industry challenges and drive operational excellence.',
      features: ['Mining tech matching', 'Pilot project facilitation', 'Industry challenge solving', 'Operational innovation'],
      link: '/mining/core5',
      linkText: 'Learn More',
    },
    {
      icon: Network,
      title: 'Critical Industrial Technologies Initiative',
      headline: 'Advancing critical',
      headlineItalic: 'technologies',
      description:
        'Supporting the development and commercialization of critical industrial technologies essential to Canada\'s economic security and industrial competitiveness.',
      features: ['Technology development funding', 'Commercialization support', 'Industry partnerships', 'Strategic sector focus'],
      link: '/mining/critical-industrial-tech',
      linkText: 'Learn More',
    },
    {
      icon: Building2,
      title: 'Rogers Cybersecure Catalyst',
      headline: 'Building cyber-resilient',
      headlineItalic: 'ventures',
      description:
        'A partnership with Rogers Cybersecure Catalyst providing startups with cybersecurity training, resources, and certification to build secure products from the ground up.',
      features: ['Cybersecurity training', 'Security assessment tools', 'Certification pathways', 'Industry best practices'],
      link: '/partners/rogers-cybersecure',
      linkText: 'Learn More',
    },
  ],
  'Funding Support': [
    {
      icon: Network,
      title: 'Regional AI Initiative',
      headline: 'Accelerate your AI-powered',
      headlineItalic: 'innovation',
      description:
        'A regional program designed to help companies leverage artificial intelligence to solve real-world problems, with dedicated funding and technical resources.',
      features: ['AI project funding', 'Technical mentorship', 'Data & compute resources', 'Go-to-market support'],
      link: '/funding/regional-ai-program',
      linkText: 'Learn More',
    },
    {
      icon: Handshake,
      title: 'Innovation Acceleration Program',
      headline: 'Fast-track your venture with',
      headlineItalic: 'targeted capital',
      description:
        'Designed for early-stage companies ready to accelerate, this program provides non-dilutive funding alongside hands-on advisory to hit key milestones.',
      features: ['Non-dilutive funding', 'Milestone-based support', 'Advisory services', 'Pitch preparation'],
      link: '/funding/innovation-acceleration-program',
      linkText: 'Learn More',
    },
    {
      icon: Building2,
      title: 'Sudbury Catalyst Fund',
      headline: 'Local capital for',
      headlineItalic: 'local impact',
      description:
        'A community-driven investment fund focused on backing high-potential ventures in Greater Sudbury and Northern Ontario to drive regional economic growth.',
      features: ['Seed-stage investment', 'Community-backed capital', 'Regional economic focus', 'Follow-on support'],
      link: '/funding/sudbury-catalyst-fund',
      linkText: 'Learn More',
    },
    {
      icon: Users,
      title: 'Northern Ontario Angels',
      headline: 'Connect with experienced',
      headlineItalic: 'angel investors',
      description:
        'A network of accredited angel investors from across Northern Ontario who provide early-stage capital, mentorship, and strategic connections to promising startups.',
      features: ['Angel investment access', 'Investor mentorship', 'Deal flow participation', 'Syndication opportunities'],
    },
    {
      icon: GraduationCap,
      title: 'AXION Fund',
      headline: 'Growth capital for',
      headlineItalic: 'scaling ventures',
      description:
        'A venture fund targeting companies that have demonstrated product-market fit and are ready to scale with significant growth capital and strategic guidance.',
      features: ['Growth-stage funding', 'Strategic board support', 'Portfolio network access', 'Follow-on investment'],
    },
    {
      icon: UserCheck,
      title: 'Capital Navigation Services',
      headline: 'Expert guidance through the',
      headlineItalic: 'funding landscape',
      description:
        'Our dedicated capital navigation team helps you identify, prepare for, and secure the right funding — from grants and loans to angel and venture capital.',
      features: ['Funding strategy development', 'Grant & loan identification', 'Investor readiness coaching', 'Application support'],
      link: '/programs/capital-navigation',
      linkText: 'Learn More',
    },
  ],
  'Labs': [
    {
      icon: Building2,
      title: 'NORCAT Underground Centre',
      headline: 'The world\'s first underground',
      headlineItalic: 'innovation hub',
      description:
        'A fully operational underground mine environment where companies can develop, test, and validate mining technologies in real-world conditions at depth.',
      features: ['Real-world underground testing', 'Technology validation at depth', 'Controlled mine environment', 'Industry-standard infrastructure'],
    },
    {
      icon: Handshake,
      title: 'Fortin Discovery Lab',
      headline: 'Where ideas become',
      headlineItalic: 'prototypes',
      description:
        'A state-of-the-art fabrication and prototyping lab equipped with tools and resources to help innovators bring their concepts to life quickly and affordably.',
      features: ['Rapid prototyping equipment', 'Fabrication tools & resources', 'Expert technical support', 'Concept-to-prototype pipeline'],
    },
    {
      icon: Building2,
      title: 'NORCAT Office Spaces',
      headline: 'Professional workspace for',
      headlineItalic: 'growing teams',
      description:
        'Dedicated office spaces designed for startups and scale-ups, located within NORCAT\'s innovation campus with access to shared amenities and community.',
      features: ['Private office suites', 'Meeting & boardrooms', 'Shared amenities', 'Innovation campus access'],
    },
    {
      icon: Network,
      title: 'NORCAT Surface Facility',
      headline: 'Above-ground testing and',
      headlineItalic: 'demonstration',
      description:
        'Surface-level facilities for technology testing, demonstrations, and training in a controlled environment before deploying underground.',
      features: ['Surface testing grounds', 'Demo & showcase space', 'Training facilities', 'Equipment staging area'],
    },
    {
      icon: Handshake,
      title: 'Shop-of-the-Future',
      headline: 'Reimagining retail through',
      headlineItalic: 'innovation',
      description:
        'An experiential retail innovation space where companies can pilot new technologies, customer experiences, and business models in a live environment.',
      features: ['Live retail testing', 'Customer experience pilots', 'Emerging tech showcases', 'Business model validation'],
    },
    {
      icon: Users,
      title: 'NORCAT Hot Desks',
      headline: 'Flexible workspace on',
      headlineItalic: 'your terms',
      description:
        'Drop-in coworking desks available for entrepreneurs, freelancers, and remote workers who want access to NORCAT\'s community without a dedicated office.',
      features: ['Flexible daily access', 'Community networking', 'High-speed connectivity', 'Campus amenity access'],
    },
  ],
};

/* ── Shared styles ── */
const glassCardStyle: React.CSSProperties = {
  background: 'linear-gradient(165deg, hsla(168, 25%, 78%, 0.3) 0%, hsla(168, 20%, 75%, 0.18) 50%, hsla(168, 15%, 82%, 0.1) 100%)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderTop: '1px solid hsla(168, 30%, 90%, 0.5)',
  borderLeft: '1px solid hsla(168, 25%, 85%, 0.35)',
  borderRight: '0.5px solid hsla(168, 20%, 75%, 0.15)',
  borderBottom: '0.5px solid hsla(168, 15%, 65%, 0.1)',
  boxShadow: 'inset 0 1px 1px 0 hsla(168, 30%, 95%, 0.25), inset 0 0 20px 0 hsla(168, 25%, 85%, 0.08), 0 8px 32px hsla(168, 20%, 30%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.03)',
};

const iconContainerStyle: React.CSSProperties = {
  background: 'linear-gradient(145deg, hsla(220, 15%, 88%, 0.6) 0%, hsla(220, 15%, 82%, 0.3) 100%)',
  border: '1.5px solid hsla(220, 15%, 100%, 0.5)',
  boxShadow: 'inset 0 2px 4px 0 hsla(220, 15%, 100%, 0.4), inset 0 -2px 4px 0 hsla(220, 15%, 50%, 0.08), 0 4px 12px hsla(220, 15%, 30%, 0.12), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
};

/* Placeholder gradient backgrounds for each category */
const placeholderImages: Record<Audience, string[]> = {
  'Startup Support': [
    'linear-gradient(135deg, hsla(168,60%,70%,0.4) 0%, hsla(200,50%,75%,0.3) 50%, hsla(168,40%,85%,0.2) 100%)',
    'linear-gradient(135deg, hsla(200,60%,70%,0.4) 0%, hsla(168,50%,75%,0.3) 50%, hsla(220,40%,85%,0.2) 100%)',
    'linear-gradient(135deg, hsla(168,50%,65%,0.4) 0%, hsla(190,60%,75%,0.3) 50%, hsla(168,30%,80%,0.2) 100%)',
    'linear-gradient(135deg, hsla(190,55%,68%,0.4) 0%, hsla(168,45%,72%,0.3) 50%, hsla(200,35%,82%,0.2) 100%)',
    'linear-gradient(135deg, hsla(210,48%,66%,0.4) 0%, hsla(168,52%,70%,0.3) 50%, hsla(190,38%,80%,0.2) 100%)',
    'linear-gradient(135deg, hsla(168,56%,62%,0.4) 0%, hsla(200,46%,74%,0.3) 50%, hsla(220,32%,84%,0.2) 100%)',
  ],
  'Funding Support': [
    'linear-gradient(135deg, hsla(210,50%,65%,0.4) 0%, hsla(168,50%,75%,0.3) 50%, hsla(200,40%,80%,0.2) 100%)',
    'linear-gradient(135deg, hsla(168,60%,60%,0.4) 0%, hsla(220,40%,70%,0.3) 50%, hsla(168,30%,85%,0.2) 100%)',
    'linear-gradient(135deg, hsla(190,55%,65%,0.4) 0%, hsla(168,50%,70%,0.3) 50%, hsla(210,40%,80%,0.2) 100%)',
    'linear-gradient(135deg, hsla(200,52%,62%,0.4) 0%, hsla(168,48%,72%,0.3) 50%, hsla(220,36%,82%,0.2) 100%)',
    'linear-gradient(135deg, hsla(168,58%,58%,0.4) 0%, hsla(200,44%,68%,0.3) 50%, hsla(190,34%,80%,0.2) 100%)',
    'linear-gradient(135deg, hsla(220,46%,64%,0.4) 0%, hsla(168,54%,70%,0.3) 50%, hsla(200,38%,78%,0.2) 100%)',
  ],
  'Labs': [
    'linear-gradient(135deg, hsla(220,50%,60%,0.4) 0%, hsla(168,40%,70%,0.3) 50%, hsla(200,30%,80%,0.2) 100%)',
    'linear-gradient(135deg, hsla(168,45%,65%,0.4) 0%, hsla(210,50%,70%,0.3) 50%, hsla(168,30%,80%,0.2) 100%)',
    'linear-gradient(135deg, hsla(200,55%,60%,0.4) 0%, hsla(168,45%,72%,0.3) 50%, hsla(220,35%,82%,0.2) 100%)',
    'linear-gradient(135deg, hsla(190,50%,62%,0.4) 0%, hsla(168,42%,68%,0.3) 50%, hsla(210,38%,78%,0.2) 100%)',
    'linear-gradient(135deg, hsla(168,55%,58%,0.4) 0%, hsla(200,48%,72%,0.3) 50%, hsla(190,32%,82%,0.2) 100%)',
    'linear-gradient(135deg, hsla(210,48%,64%,0.4) 0%, hsla(168,52%,68%,0.3) 50%, hsla(200,36%,80%,0.2) 100%)',
  ],
};

/* ── Audience Tabs (standalone) ── */
export function AudienceTabs({ active, onChange }: { active: Audience; onChange: (a: Audience) => void }) {
  return (
    <div
      className="inline-flex rounded-full p-1.5"
      style={{
        background: 'linear-gradient(145deg, hsla(220, 15%, 95%, 0.8) 0%, hsla(220, 15%, 90%, 0.5) 100%)',
        border: '1px solid hsla(220, 15%, 100%, 0.6)',
        boxShadow: 'inset 0 2px 4px 0 hsla(220, 15%, 50%, 0.06), 0 2px 8px hsla(0, 0%, 0%, 0.04)',
      }}
    >
      {audiences.map((audience) => (
        <button
          key={audience}
          onClick={() => onChange(audience)}
          className="relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
          style={{ color: active === audience ? 'hsl(168, 40%, 25%)' : 'hsl(220, 15%, 45%)' }}
        >
          {active === audience && (
            <motion.div
              layoutId="audience-pill"
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(145deg, hsla(168, 25%, 85%, 0.5) 0%, hsla(168, 20%, 80%, 0.25) 100%)',
                border: '1.5px solid hsla(168, 30%, 90%, 0.5)',
                boxShadow: 'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 12px hsla(168, 20%, 30%, 0.12)',
              }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{audience}</span>
        </button>
      ))}
    </div>
  );
}

export function ServicesExplorer({ activeAudience }: { activeAudience: Audience }) {
  const [activeCategory, setActiveCategory] = useState(0);

  const currentCategories = categories[activeAudience];
  const activeItem = currentCategories[Math.min(activeCategory, currentCategories.length - 1)];
  const Icon = activeItem.icon;

  // Reset category when audience changes
  const effectiveCategory = Math.min(activeCategory, currentCategories.length - 1);
  if (effectiveCategory !== activeCategory) setActiveCategory(effectiveCategory);

  return (
    <div>

      {/* ── Main Layout: Category sidebar (left) + Image & Content (right) ── */}
      <div className="grid lg:grid-cols-[240px_1fr] gap-8 mt-10">
        {/* Left — Category list */}
        <div className="rounded-[20px] p-5 self-start" style={glassCardStyle}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeAudience}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-1"
            >
              {currentCategories.map((cat, i) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveCategory(i)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3.5 rounded-2xl text-left transition-all duration-200"
                  style={{
                    background: activeCategory === i
                      ? 'linear-gradient(145deg, hsla(168, 25%, 85%, 0.45) 0%, hsla(168, 20%, 82%, 0.2) 100%)'
                      : 'transparent',
                    border: activeCategory === i
                      ? '1px solid hsla(168, 30%, 90%, 0.5)'
                      : '1px solid transparent',
                    boxShadow: activeCategory === i
                      ? 'inset 0 1px 2px 0 hsla(168, 30%, 95%, 0.3), 0 2px 8px hsla(168, 20%, 30%, 0.08)'
                      : 'none',
                  }}
                >
                  <span
                    className="text-sm font-semibold"
                    style={{
                      color: activeCategory === i ? 'hsl(168, 40%, 25%)' : 'hsl(220, 15%, 40%)',
                    }}
                  >
                    {cat.title}
                  </span>
                  <div
                    className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                    style={{
                      background: activeCategory === i ? 'hsl(168, 100%, 35%)' : 'hsla(220, 15%, 80%, 0.5)',
                      boxShadow: activeCategory === i ? '0 0 8px hsl(168 100% 35% / 0.4)' : 'none',
                    }}
                  />
                </button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right — Image + Content detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeAudience}-${activeCategory}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="rounded-[20px] overflow-hidden"
            style={glassCardStyle}
          >
            {/* Image area */}
            <div
              className="w-full h-64 md:h-80 relative overflow-hidden"
              style={{
                background: activeItem.image ? undefined : placeholderImages[activeAudience][activeCategory],
              }}
            >
              {activeItem.image ? (
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: 'hsla(0, 0%, 100%, 0.15)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid hsla(0, 0%, 100%, 0.2)',
                    }}
                  >
                    <Icon className="w-10 h-10" style={{ color: 'hsla(0, 0%, 100%, 0.6)' }} />
                  </div>
                </div>
              )}
              {/* Bottom fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-20"
                style={{
                  background: 'linear-gradient(to top, hsla(168, 15%, 82%, 0.4) 0%, transparent 100%)',
                }}
              />
            </div>

            {/* Content area */}
            <div className="p-8 md:p-10">
              {/* Icon + headline */}
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={iconContainerStyle}
                >
                  <Icon className="w-5 h-5" style={{ color: 'hsl(168, 100%, 35%)' }} />
                </div>
                <h3
                  className="text-xl md:text-2xl leading-tight"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 500,
                    color: 'hsl(220, 15%, 20%)',
                  }}
                >
                  {activeItem.headline}{' '}
                  <span
                    className=""
                    style={{
                      color: 'hsl(168, 100%, 28%)',
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {activeItem.headlineItalic}
                  </span>
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-base font-light leading-relaxed mb-7 max-w-2xl"
                style={{ color: 'hsl(220, 20%, 10%)' }}
              >
                {activeItem.description}
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-2.5 mb-8">
                {activeItem.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'hsl(168, 100%, 35%)' }} />
                    <span className="text-sm" style={{ color: 'hsl(220, 15%, 30%)' }}>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                {activeItem.link && (
                  <Link
                    to={activeItem.link}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                    style={{
                      background: 'linear-gradient(145deg, hsla(168, 25%, 85%, 0.5) 0%, hsla(168, 20%, 80%, 0.25) 100%)',
                      border: '1.5px solid hsla(168, 30%, 90%, 0.5)',
                      color: 'hsl(168, 40%, 25%)',
                      boxShadow: 'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 16px hsla(168, 20%, 30%, 0.15)',
                    }}
                  >
                    {activeItem.linkText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                <Link
                  to="/apply"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    background: 'linear-gradient(145deg, hsla(220, 15%, 20%, 0.9) 0%, hsla(220, 15%, 15%, 0.95) 100%)',
                    border: '1px solid hsla(220, 15%, 30%, 0.5)',
                    color: 'white',
                    boxShadow: '0 4px 16px hsla(220, 15%, 10%, 0.25), 0 1px 3px hsla(0, 0%, 0%, 0.1)',
                  }}
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
