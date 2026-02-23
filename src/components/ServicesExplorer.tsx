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

/* ── Audience tabs ── */
const audiences = ['Startups', 'Scale-ups', 'Enterprises'] as const;
type Audience = typeof audiences[number];

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
}

const categories: Record<Audience, CategoryItem[]> = {
  Startups: [
    {
      icon: UserCheck,
      title: 'Advisor Support',
      headline: 'A dedicated advisor in',
      headlineItalic: 'your corner',
      description:
        'Every company is matched with a dedicated venture advisor who works alongside you on strategy, operations, and growth. Regular check-ins keep you accountable and moving forward.',
      features: [
        'Dedicated advisor relationship',
        'Schedule flexible sessions',
        'Strategic planning support',
        'Leadership development',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Founder Education',
      headline: 'Learn from those who\'ve',
      headlineItalic: 'built it',
      description:
        'Structured curriculum covering everything from customer discovery to fundraising. Learn from practitioners who\'ve built and scaled companies themselves.',
      features: [
        'Workshop series & masterclasses',
        'Fundraising preparation',
        'Go-to-market strategies',
        'On-Demand Courses',
      ],
    },
    {
      icon: Handshake,
      title: 'Customer Pairing',
      headline: 'Your first customers,',
      headlineItalic: 'delivered',
      description:
        'We actively connect you with potential customers, pilot partners, and early adopters from our extensive industry network to accelerate your path to revenue.',
      features: [
        'Strategic network building',
        'Pilot project facilitation',
        'Industry partner matching',
        'Feedback loop integration',
      ],
    },
  ],
  'Scale-ups': [
    {
      icon: Users,
      title: 'Mentorship Network',
      headline: 'Tactical advice from those who\'ve',
      headlineItalic: 'been there',
      description:
        'Access 18+ experienced mentors across sectors including mining, technology, finance, operations, and more. Get tactical advice from domain experts.',
      features: [
        'Domain expert matching',
        'Structured mentorship sessions',
        'Ongoing relationship building',
        'Peer mentor connections',
      ],
      link: '/programs/mentorship-services',
      linkText: 'Explore Mentorship Services',
    },
    {
      icon: Network,
      title: 'Network Access',
      headline: 'The right introduction at the',
      headlineItalic: 'right time',
      description:
        'Tap into our ecosystem of investors, corporate partners, government agencies, and fellow founders. The right introduction at the right time can change everything.',
      features: [
        'Investor introductions',
        'Corporate partnership opportunities',
        'Government funding connections',
        'Founder peer network',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Growth Strategy',
      headline: 'From traction to',
      headlineItalic: 'scale',
      description:
        'Work with our team on growth metrics, team building, and fundraising preparation. We help you transition from early-stage hustle to structured, repeatable growth.',
      features: [
        'Growth metrics frameworks',
        'Team hiring playbooks',
        'Series A readiness',
        'Board advisory support',
      ],
    },
  ],
  Enterprises: [
    {
      icon: Building2,
      title: 'Innovation Partnerships',
      headline: 'Co-create with high-potential',
      headlineItalic: 'ventures',
      description:
        'Connect with emerging startups building solutions for your industry. We facilitate pilot programs, co-development partnerships, and technology scouting.',
      features: [
        'Startup scouting & matching',
        'Pilot program facilitation',
        'Co-development frameworks',
        'Innovation pipeline access',
      ],
    },
    {
      icon: Network,
      title: 'Ecosystem Integration',
      headline: 'Embed into a thriving',
      headlineItalic: 'ecosystem',
      description:
        'Join a tight-knit community of ambitious founders building category-defining companies. Shared experiences, mutual support, and lifelong connections.',
      features: [
        'NORCAT Community access',
        'Industry event participation',
        'Research institution connections',
        'Government relations support',
      ],
    },
    {
      icon: Handshake,
      title: 'Talent & Technology',
      headline: 'Access emerging talent and',
      headlineItalic: 'cutting-edge tech',
      description:
        'Leverage our network of skilled founders, engineers, and researchers. Access breakthrough technologies emerging from Northern Ontario\'s innovation ecosystem.',
      features: [
        'Talent pipeline access',
        'Technology showcases',
        'Underground testing facilities',
        'Applied R&D collaboration',
      ],
    },
  ],
};

/* ── Shared styles ── */
const glassCardStyle = {
  background:
    'linear-gradient(165deg, hsla(168, 25%, 78%, 0.3) 0%, hsla(168, 20%, 75%, 0.18) 50%, hsla(168, 15%, 82%, 0.1) 100%)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderTop: '1px solid hsla(168, 30%, 90%, 0.5)',
  borderLeft: '1px solid hsla(168, 25%, 85%, 0.35)',
  borderRight: '0.5px solid hsla(168, 20%, 75%, 0.15)',
  borderBottom: '0.5px solid hsla(168, 15%, 65%, 0.1)',
  boxShadow:
    'inset 0 1px 1px 0 hsla(168, 30%, 95%, 0.25), inset 0 0 20px 0 hsla(168, 25%, 85%, 0.08), 0 8px 32px hsla(168, 20%, 30%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.03)',
};

const iconContainerStyle = {
  background:
    'linear-gradient(145deg, hsla(220, 15%, 88%, 0.6) 0%, hsla(220, 15%, 82%, 0.3) 100%)',
  border: '1.5px solid hsla(220, 15%, 100%, 0.5)',
  boxShadow:
    'inset 0 2px 4px 0 hsla(220, 15%, 100%, 0.4), inset 0 -2px 4px 0 hsla(220, 15%, 50%, 0.08), 0 4px 12px hsla(220, 15%, 30%, 0.12), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
};

export function ServicesExplorer() {
  const [activeAudience, setActiveAudience] = useState<Audience>('Startups');
  const [activeCategory, setActiveCategory] = useState(0);

  const currentCategories = categories[activeAudience];
  const activeItem = currentCategories[activeCategory];
  const Icon = activeItem.icon;

  const handleAudienceChange = (audience: Audience) => {
    setActiveAudience(audience);
    setActiveCategory(0);
  };

  return (
    <div>
      {/* ── Audience Tabs ── */}
      <div
        className="inline-flex rounded-full p-1.5 mb-10"
        style={{
          background:
            'linear-gradient(145deg, hsla(220, 15%, 95%, 0.8) 0%, hsla(220, 15%, 90%, 0.5) 100%)',
          border: '1px solid hsla(220, 15%, 100%, 0.6)',
          boxShadow:
            'inset 0 2px 4px 0 hsla(220, 15%, 50%, 0.06), 0 2px 8px hsla(0, 0%, 0%, 0.04)',
        }}
      >
        {audiences.map((audience) => (
          <button
            key={audience}
            onClick={() => handleAudienceChange(audience)}
            className="relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
            style={{
              color:
                activeAudience === audience
                  ? 'hsl(168, 40%, 25%)'
                  : 'hsl(220, 15%, 45%)',
            }}
          >
            {activeAudience === audience && (
              <motion.div
                layoutId="audience-pill"
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'linear-gradient(145deg, hsla(168, 25%, 85%, 0.5) 0%, hsla(168, 20%, 80%, 0.25) 100%)',
                  border: '1.5px solid hsla(168, 30%, 90%, 0.5)',
                  boxShadow:
                    'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 12px hsla(168, 20%, 30%, 0.12)',
                }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{audience}</span>
          </button>
        ))}
      </div>

      {/* ── Main Layout: Sidebar + Content ── */}
      <div className="grid lg:grid-cols-[280px_1fr] gap-8">
        {/* Left Sidebar — Category list */}
        <div
          className="rounded-[20px] p-5 self-start"
          style={glassCardStyle}
        >
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
                    background:
                      activeCategory === i
                        ? 'linear-gradient(145deg, hsla(168, 25%, 85%, 0.45) 0%, hsla(168, 20%, 82%, 0.2) 100%)'
                        : 'transparent',
                    border:
                      activeCategory === i
                        ? '1px solid hsla(168, 30%, 90%, 0.5)'
                        : '1px solid transparent',
                    boxShadow:
                      activeCategory === i
                        ? 'inset 0 1px 2px 0 hsla(168, 30%, 95%, 0.3), 0 2px 8px hsla(168, 20%, 30%, 0.08)'
                        : 'none',
                  }}
                >
                  <span
                    className="text-sm font-semibold"
                    style={{
                      color:
                        activeCategory === i
                          ? 'hsl(168, 40%, 25%)'
                          : 'hsl(220, 15%, 40%)',
                    }}
                  >
                    {cat.title}
                  </span>
                  {/* Active indicator dot */}
                  <div
                    className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                    style={{
                      background:
                        activeCategory === i
                          ? 'hsl(168, 100%, 35%)'
                          : 'hsla(220, 15%, 80%, 0.5)',
                      boxShadow:
                        activeCategory === i
                          ? '0 0 8px hsl(168 100% 35% / 0.4)'
                          : 'none',
                    }}
                  />
                </button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Content — Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeAudience}-${activeCategory}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="rounded-[20px] p-8 md:p-10"
            style={glassCardStyle}
          >
            {/* Icon + headline */}
            <div className="flex items-start gap-5 mb-6">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                style={iconContainerStyle}
              >
                <Icon
                  className="w-6 h-6"
                  style={{ color: 'hsl(168, 100%, 35%)' }}
                />
              </div>
              <div>
                <h3
                  className="text-2xl md:text-3xl leading-tight"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 500,
                    color: 'hsl(220, 15%, 20%)',
                  }}
                >
                  {activeItem.headline}{' '}
                  <span
                    className="text-3xl md:text-4xl"
                    style={{
                      color: 'hsl(168, 100%, 28%)',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 700,
                      fontStyle: 'italic',
                    }}
                  >
                    {activeItem.headlineItalic}
                  </span>
                </h3>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl"
              style={{ color: 'hsl(220, 20%, 10%)' }}
            >
              {activeItem.description}
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {activeItem.features.map((feature, j) => (
                <div key={j} className="flex items-start gap-2.5">
                  <Check
                    className="w-4 h-4 mt-0.5 shrink-0"
                    style={{ color: 'hsl(168, 100%, 35%)' }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: 'hsl(220, 15%, 30%)' }}
                  >
                    {feature}
                  </span>
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
                    background:
                      'linear-gradient(145deg, hsla(168, 25%, 85%, 0.5) 0%, hsla(168, 20%, 80%, 0.25) 100%)',
                    border: '1.5px solid hsla(168, 30%, 90%, 0.5)',
                    color: 'hsl(168, 40%, 25%)',
                    boxShadow:
                      'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 16px hsla(168, 20%, 30%, 0.15)',
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
                  background:
                    'linear-gradient(145deg, hsla(220, 15%, 20%, 0.9) 0%, hsla(220, 15%, 15%, 0.95) 100%)',
                  border: '1px solid hsla(220, 15%, 30%, 0.5)',
                  color: 'white',
                  boxShadow:
                    '0 4px 16px hsla(220, 15%, 10%, 0.25), 0 1px 3px hsla(0, 0%, 0%, 0.1)',
                }}
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
