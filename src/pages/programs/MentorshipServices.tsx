import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  CheckCircle,
  Shield,
  Target,
  Handshake,
  X,
  ExternalLink,
  Sparkles,
  ChevronRight,
  Quote,
} from 'lucide-react';

import signatureLines from '@/assets/signature-lines.png';
import linesTeal from '@/assets/lines-teal.png';
import mentoringGroup from '@/assets/mentoring-group.png';

// Mentor headshots
import tomFortinImg from '@/assets/mentors/tom-fortin.jpg';
import cathyNadjiwonImg from '@/assets/mentors/cathy-nadjiwon.jpg';
import peterDalBiancoImg from '@/assets/mentors/peter-dal-bianco.jpg';
import jamieDewarImg from '@/assets/mentors/jamie-dewar.jpg';
import bernieAhoImg from '@/assets/mentors/bernie-aho.jpg';
import barbWardDagnonImg from '@/assets/mentors/barb-ward-dagnon.jpg';
import jeffFullerImg from '@/assets/mentors/jeff-fuller.jpg';
import dennisReichImg from '@/assets/mentors/dennis-reich.jpg';
import donDuvalImg from '@/assets/mentors/don-duval.jpg';
import ianLaneImg from '@/assets/mentors/ian-lane.jpg';
import ehsanMirdamadiImg from '@/assets/mentors/ehsan-mirdamadi.jpg';
import emilyMantleImg from '@/assets/mentors/emily-mantle.jpg';
import sheriTomchickImg from '@/assets/mentors/sheri-tomchick.jpg';
import chadPallopsonImg from '@/assets/mentors/chad-pallopson.jpg';
import michaelDolinarImg from '@/assets/mentors/michael-dolinar.jpg';
import davidPasiekaImg from '@/assets/mentors/david-pasieka.jpg';

const mentors = [
  {
    name: 'Don Duval',
    image: donDuvalImg,
    tags: ['Entrepreneur in Residence', 'Leadership'],
    bio: 'Don is the CEO of NORCAT and serves as Entrepreneur in Residence. He is an expert in turnaround strategies, entrepreneurship, innovation strategy, and leadership. Don has led NORCAT\'s transformation into a world-class innovation hub and brings deep experience in organizational leadership and strategic planning.',
    expertfile: 'http://expertfile.com/experts/don.duval',
  },
  {
    name: 'Bernie Aho',
    image: bernieAhoImg,
    tags: ['Entrepreneurship', 'UI/UX'],
    bio: 'Bernie is the CEO and Co-Founder of TimeHero. He is a seasoned entrepreneur and UI/UX expert with extensive experience in venture capital and product management. Bernie brings deep expertise in building software products, user experience design, and scaling technology startups.',
    expertfile: 'http://expertfile.com/experts/bernie.aho',
  },
  {
    name: 'Peter Dal Bianco',
    image: peterDalBiancoImg,
    tags: ['Retail', 'Franchising'],
    bio: 'Peter is the founder of Bianco\'s group of companies. He is an award-winning entrepreneur with 38+ years of experience in retail and franchising. Peter brings extensive knowledge in building and scaling retail businesses, franchise development, and entrepreneurial leadership.',
    expertfile: 'http://expertfile.com/experts/peter.dalbianco',
  },
  {
    name: 'Jamie Dewar',
    image: jamieDewarImg,
    tags: ['Marketing', 'Marine Industry'],
    bio: 'Jamie is the Marketing Manager and General Manager of Legend Boats. He is an expert in marine industry marketing and business achievement, bringing extensive experience in brand building, market positioning, and business growth strategies within the recreational boating sector.',
    expertfile: 'http://expertfile.com/experts/jamie.dewar',
  },
  {
    name: 'Michael Dolinar',
    image: michaelDolinarImg,
    tags: ['Software', 'Product Development'],
    bio: 'Michael is a technology leader with extensive experience in software engineering and product development. He brings deep expertise in building technology products, leading development teams, and scaling software solutions for growing companies.',
    expertfile: 'http://expertfile.com/experts/michael.dolinar',
  },
  {
    name: 'Tom Fortin',
    image: tomFortinImg,
    tags: ['Electronics', 'Manufacturing'],
    bio: 'Tom is the owner of a Sudbury-based electronics design and manufacturing company, Ontrak Control Systems. Ontrak specializes in the design and manufacture of serial data acquisition interface devices used in industrial, medical and retail automation applications. After graduating from Cambrian in 1984, Tom started his career installing process control systems for paper machines. He is passionate about manufacturing in Canada and has helped start many technology companies producing medical devices, lasers, and automation products.',
    expertfile: 'http://expertfile.com/experts/tom.fortin',
  },
  {
    name: 'Jeff Fuller',
    image: jeffFullerImg,
    tags: ['Industrial', 'International Business'],
    bio: 'Jeff is the founder of Fuller Industrial. He is an expert in pipe fabrication, international business growth, and industrial manufacturing. Jeff has extensive experience in scaling manufacturing operations and expanding into international markets.',
    expertfile: 'http://expertfile.com/experts/jeff.fuller',
  },
  {
    name: 'Ian Lane',
    image: ianLaneImg,
    tags: ['Angel Investing', 'Strategic Planning'],
    bio: 'Ian is the Executive Director of Northern Ontario Angels. With a diverse career, he enjoys fostering connections between entrepreneurs and angel investors across Northern Ontario. He has experience in policy development, grant writing, and health innovation, having worked with Health Sciences North Research Institute and the Northern Ontario Health Innovation Cluster.',
    expertfile: 'http://expertfile.com/experts/ian.lane',
  },
  {
    name: 'Emily Mantle',
    image: emilyMantleImg,
    tags: ['Business Strategy', 'Legal'],
    bio: 'Emily brings expertise in business strategy and legal advisory within the innovation ecosystem. She helps startups navigate complex business decisions, legal compliance, and strategic planning to build sustainable companies.',
    expertfile: 'http://expertfile.com/experts/emily.mantle',
  },
  {
    name: 'Ehsan Mirdamadi',
    image: ehsanMirdamadiImg,
    tags: ['SaaS', 'Venture Capital'],
    bio: 'Ehsan is a serial entrepreneur and investor with a strong track record in technology sectors, particularly software and AI. He brings extensive experience in scaling technology companies, venture capital, and helping founders navigate growth challenges.',
    expertfile: 'http://expertfile.com/experts/ehsan.mirdamadi',
  },
  {
    name: 'Cathy Nadjiwon',
    image: cathyNadjiwonImg,
    tags: ['Mining', 'Business Development'],
    bio: 'Cathy is a surveyor and geomatics professional specializing in the mineral exploration and mining sectors. She is the president of UnderCover Innovations Inc., a product innovation and development company. She has consulted in business start-ups, financing, I.T., and strategic planning. Cathy was recognized as Entrepreneur of the Year by the Greater Sudbury Chamber of Commerce and as an Influential Woman of Northern Ontario.',
    expertfile: 'http://expertfile.com/experts/cathy.nadjiwon',
  },
  {
    name: 'Chad Pallopson',
    image: chadPallopsonImg,
    tags: ['Technology', 'Project Management'],
    bio: 'Chad is an expert in technology integration, project management, and industrial innovation. He helps startups and growing companies implement technology solutions and manage complex projects to drive operational efficiency.',
    expertfile: 'http://expertfile.com/experts/chad.pallopson',
  },
  {
    name: 'David Pasieka',
    image: davidPasiekaImg,
    tags: ['Utilities', 'Digital Transformation'],
    bio: 'David is an experienced executive with a background in corporate transformation, utilities, and startup mentorship. He has served as President and COO of Liberty Utilities and Chief Transformation Officer at Algonquin Power & Utilities Corp. David holds an MBA from the Schulich School of Business and is a Chartered Director, bringing expertise in strategy, customer experience, and organizational growth.',
    expertfile: 'http://expertfile.com/experts/david.pasieka',
  },
  {
    name: 'Dennis Reich',
    image: dennisReichImg,
    tags: ['Healthcare', 'Medical Technology'],
    bio: 'Dennis is a practicing physician and principal investigator for medical research. He is the founder of multiple healthcare technology ventures including Chyma Systems. Dennis brings unique expertise at the intersection of medicine, research, and technology entrepreneurship.',
    expertfile: 'http://expertfile.com/experts/dennis.reich',
  },
  {
    name: 'Sheri Tomchick',
    image: sheriTomchickImg,
    tags: ['Healthcare', 'Recruitment'],
    bio: 'Sheri is the founder of Plan A Long Term Care Staffing and Recruitment. She is recognized as a leader in healthcare staffing solutions and entrepreneurship in Northern Ontario, with expertise in scaling operations and building successful service businesses.',
    expertfile: 'http://expertfile.com/experts/sheri.tomchick',
  },
  {
    name: 'Barb Ward-Dagnon',
    image: barbWardDagnonImg,
    tags: ['Medical Research', 'Pharmaceuticals'],
    bio: 'Barb is the founder and owner of Medicor Research Inc. She is a specialist in medical research, clinical trials, and pharmaceutical branding. Barb has extensive experience navigating the healthcare industry and bringing medical innovations to market.',
    expertfile: 'http://expertfile.com/experts/barb.ward-dagnon',
  },
];

const principles = [
  {
    icon: Users,
    title: 'Team-Based Mentoring',
    description: 'Work with a team of 2-4 mentors who bring diverse perspectives and expertise to help you tackle complex challenges.',
  },
  {
    icon: Shield,
    title: 'Confidential & Inclusive',
    description: 'All sessions are confidential. Mentors provide guidance without judgment, creating a safe space to discuss challenges.',
  },
  {
    icon: Handshake,
    title: 'No Equity, No Fees',
    description: 'Our mentors volunteer their time. They take no equity and charge no fees—their only motivation is helping you succeed.',
  },
  {
    icon: Target,
    title: 'Founder-Driven Agenda',
    description: 'You set the agenda for each session. Mentors are here to support your goals, not impose their own.',
  },
];

const benefits = [
  'Access to experienced entrepreneurs and industry executives',
  'Diverse perspectives from a team of mentors',
  'Confidential, inclusive guidance',
  'Flexible scheduling that works for you',
  'Long-term relationships, not one-off advice',
  'Connections to our broader network of investors and partners',
];

// Shared glassmorphic card style
const glassCardStyle = {
  background: 'linear-gradient(165deg, hsla(168, 25%, 78%, 0.3) 0%, hsla(168, 20%, 75%, 0.18) 50%, hsla(168, 15%, 82%, 0.1) 100%)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderTop: '1px solid hsla(168, 30%, 90%, 0.5)',
  borderLeft: '1px solid hsla(168, 25%, 85%, 0.35)',
  borderRight: '0.5px solid hsla(168, 20%, 75%, 0.15)',
  borderBottom: '0.5px solid hsla(168, 15%, 65%, 0.1)',
  boxShadow: 'inset 0 1px 1px 0 hsla(168, 30%, 95%, 0.25), inset 0 0 20px 0 hsla(168, 25%, 85%, 0.08), 0 8px 32px hsla(168, 20%, 30%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.03)',
};

// Neumorphic icon container style
const iconContainerStyle = {
  background: 'linear-gradient(145deg, hsla(220, 15%, 88%, 0.6) 0%, hsla(220, 15%, 82%, 0.3) 100%)',
  border: '1.5px solid hsla(220, 15%, 100%, 0.5)',
  boxShadow: 'inset 0 2px 4px 0 hsla(220, 15%, 100%, 0.4), inset 0 -2px 4px 0 hsla(220, 15%, 50%, 0.08), 0 4px 12px hsla(220, 15%, 30%, 0.12), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
};

// Sage badge style
const sageBadgeStyle = {
  background: 'linear-gradient(145deg, hsla(168, 25%, 85%, 0.5) 0%, hsla(168, 20%, 80%, 0.25) 100%)',
  border: '1.5px solid hsla(168, 30%, 90%, 0.5)',
  color: 'hsl(168, 40%, 30%)',
  boxShadow: 'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 12px hsla(168, 20%, 30%, 0.12), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
};
// No separate MentorCard component — inline expand is handled in the grid below

const MentorshipServices = () => {
  const [expandedMentor, setExpandedMentor] = useState<string | null>(null);

  return (
    <Layout>
      {/* ══════════════ DARK HERO ══════════════ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden" style={{ background: 'hsl(220, 20%, 7%)' }}>
        {/* Ambient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-[15%] right-[20%] w-[700px] h-[700px] rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.15) 0%, hsl(168 100% 35% / 0.05) 40%, transparent 70%)' }}
            animate={{ scale: [1, 1.4, 1], x: [0, 80, 0], y: [0, -50, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[20%] left-[10%] w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(168 80% 45% / 0.1) 0%, transparent 70%)' }}
            animate={{ scale: [1.2, 0.9, 1.2], x: [0, -60, 0], y: [0, 30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(hsl(168 100% 50% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(168 100% 50% / 0.4) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat', backgroundSize: '128px 128px' }}
        />

        {/* Signature lines */}
        <img
          src={signatureLines}
          alt=""
          aria-hidden="true"
          className="absolute top-0 right-0 w-auto h-2/3 object-contain object-right-top opacity-80 pointer-events-none select-none mix-blend-overlay"
        />

        {/* Hero content */}
        <div className="container mx-auto px-6 relative z-10 py-32">
          <div className="max-w-5xl">
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white/90 mb-8 liquid-glass-btn">
                <Sparkles className="h-4 w-4 icon-glow" style={{ color: 'hsl(168, 100%, 35%)' }} />
                Venture Mentoring Service
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium text-white mb-8 tracking-tight leading-[0.92]"
              style={{ fontFamily: "'Open Sans', sans-serif", textShadow: '0 0 80px hsl(168 100% 35% / 0.15), 0 4px 16px hsl(220 25% 4% / 0.4)' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Team-Based
              <span className="block italic" style={{ fontFamily: "'Open Sans', sans-serif", color: 'hsl(168, 100%, 35%)', textShadow: '0 0 60px hsl(168 100% 35% / 0.4), 0 0 120px hsl(168 100% 35% / 0.15)', fontSize: '1.15em', fontWeight: 700 }}>
                Mentorship.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-xl md:text-2xl text-white leading-relaxed mb-10 max-w-2xl font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              A proven mentoring model that pairs founders with teams of experienced 
              volunteers who provide confidential, inclusive guidance at no cost.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link to="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]" style={{
                background: 'linear-gradient(145deg, hsla(168, 100%, 35%, 0.3) 0%, hsla(168, 100%, 35%, 0.15) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                color: 'white',
                border: '0.5px solid hsla(168, 100%, 50%, 0.4)',
                boxShadow: 'inset 0 1px 0 0 hsla(168, 100%, 60%, 0.3), inset 0 -1px 0 0 hsla(0, 0%, 0%, 0.1), 0 4px 16px hsla(168, 100%, 20%, 0.3), 0 8px 32px hsla(168, 100%, 20%, 0.15)',
              }}>
                Apply for Mentoring
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]" style={{
                background: 'linear-gradient(145deg, hsla(0, 0%, 100%, 0.2) 0%, hsla(0, 0%, 100%, 0.1) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                color: 'white',
                border: '0.5px solid hsla(0, 0%, 100%, 0.35)',
                boxShadow: 'inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4), inset 0 -1px 0 0 hsla(0, 0%, 0%, 0.1), 0 4px 16px hsla(168, 100%, 20%, 0.3), 0 8px 32px hsla(168, 100%, 20%, 0.15)',
              }}>
                Become a Mentor
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ IMPACTFUL STATEMENT ═══ */}
      <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, hsla(220, 15%, 80%, 0.4) 0%, transparent 70%)' }} />
          <img src={signatureLines} alt="" className="absolute top-0 right-0 w-[400px] opacity-[0.07]" style={{ filter: 'sepia(1) saturate(3) hue-rotate(120deg) brightness(0.8)' }} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <p className="text-2xl md:text-3xl leading-relaxed" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
                Our mentors share the drive of our founders. They've challenged convention, 
                built real businesses, and expanded what's possible through{' '}
                <span style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontStyle: 'italic' }}>experience.</span>
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="rounded-[20px] p-8" style={glassCardStyle}>
                <Quote className="w-8 h-8 mb-4 opacity-40" style={{ color: 'hsl(168, 100%, 35%)' }} />
                <p className="text-lg italic font-light leading-relaxed mb-6" style={{ color: 'hsl(220, 15%, 30%)' }}>
                  "Client testimonial quote placeholder — Add a powerful quote from a founder 
                  about their mentorship experience here."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={iconContainerStyle}>
                    <span style={{ color: 'hsl(168, 100%, 35%)' }} className="text-lg font-bold">?</span>
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: 'hsl(220, 15%, 20%)' }}>Client Name</p>
                    <p className="text-sm font-light" style={{ color: 'hsl(220, 15%, 40%)' }}>Company Name, Role</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ WHAT MAKES IT DIFFERENT ═══ */}
      <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsla(168, 15%, 85%, 0.3) 0%, transparent 70%)' }} />
        <img src={linesTeal} alt="" className="absolute bottom-0 right-0 w-[60%] opacity-[0.15] pointer-events-none" style={{ transform: 'scaleY(-1)' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-6" style={sageBadgeStyle}>
                <Users className="w-3.5 h-3.5" />
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
                A Different Kind of{' '}
                <span className="text-4xl md:text-5xl lg:text-6xl" style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontStyle: 'italic' }}>Mentoring.</span>
              </h2>
              <p className="font-light max-w-2xl mx-auto" style={{ color: 'hsl(220, 15%, 40%)' }}>
                Our Venture Mentoring Service is built on principles that put founders first 
                and create lasting, meaningful relationships.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="rounded-[20px] p-7 h-full hover:scale-[1.03] transition-transform duration-300" style={glassCardStyle}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={iconContainerStyle}>
                    <item.icon className="w-6 h-6" style={{ color: 'hsl(168, 100%, 35%)' }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'hsl(220, 15%, 20%)' }}>{item.title}</h3>
                  <p className="text-sm font-light" style={{ color: 'hsl(220, 15%, 40%)' }}>{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsla(168, 100%, 35%, 0.06) 0%, transparent 60%)' }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-6" style={sageBadgeStyle}>
                  Process
                </span>
                <h2 className="text-3xl md:text-4xl mb-6" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
                  How It{' '}
                  <span className="text-4xl md:text-5xl" style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontStyle: 'italic' }}>Works.</span>
                </h2>
                <p className="font-light text-lg leading-relaxed mb-8" style={{ color: 'hsl(220, 15%, 40%)' }}>
                  Our structured approach ensures you get the most out of every mentoring session 
                  while building long-term relationships with your mentors.
                </p>
                
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Apply & Match', desc: 'Tell us about your venture and goals. We carefully match you with 2-4 mentors whose experience aligns with your needs.' },
                    { step: '02', title: 'Orientation', desc: 'Meet your mentor team and establish ground rules. Learn how to make the most of your sessions.' },
                    { step: '03', title: 'Regular Sessions', desc: 'Organize flexible recurring meetings with your mentor team. You set the agenda based on your current challenges and opportunities.' },
                    { step: '04', title: 'Grow & Evolve', desc: 'As your needs change, your mentor team can evolve. Access our full network of mentors and resources.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="text-lg font-bold" style={{ color: 'hsl(168, 100%, 35%)' }}>{item.step}</div>
                      <div>
                        <h4 className="font-semibold mb-1" style={{ color: 'hsl(220, 15%, 20%)' }}>{item.title}</h4>
                        <p className="text-sm font-light" style={{ color: 'hsl(220, 15%, 40%)' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="rounded-[20px] p-8" style={glassCardStyle}>
                <h3 className="text-xl font-bold mb-6" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Space Grotesk', sans-serif" }}>What You Get</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'hsl(168, 100%, 35%)' }} />
                      <span className="text-sm font-light" style={{ color: 'hsl(220, 15%, 30%)' }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '18', label: 'Active Mentors' },
              { number: '1000+', label: 'Hours Mentored in 2025' },
              { number: '100', label: 'NPS Score' },
              { number: '$0', label: 'To Access Mentorship' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="rounded-[20px] p-8 text-center hover:scale-[1.03] transition-transform duration-300" style={glassCardStyle}>
                  <div className="text-3xl md:text-4xl font-black mb-2" style={{ color: 'hsl(220, 15%, 20%)' }}>{stat.number}</div>
                  <p className="text-sm font-light" style={{ color: 'hsl(220, 15%, 40%)' }}>{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MENTORS GRID ═══ */}
      <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(220 10% 80% / 0.3) 0%, transparent 70%)' }} />
        </div>
        <img src={linesTeal} alt="" className="absolute top-0 right-0 w-[60%] opacity-[0.15] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-6" style={sageBadgeStyle}>
                <Users className="w-3.5 h-3.5" />
                Our Network
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
                Meet Our{' '}
                <span className="text-4xl md:text-5xl lg:text-6xl" style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontStyle: 'italic' }}>Mentors.</span>
              </h2>
              <p className="font-light max-w-2xl mx-auto" style={{ color: 'hsl(220, 15%, 40%)' }}>
                Our volunteer mentors are accomplished entrepreneurs, executives, and experts 
                who are passionate about helping the next generation succeed.
              </p>
            </div>
          </ScrollReveal>

          <motion.div layout className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mentors.map((mentor) => {
              const isExpanded = expandedMentor === mentor.name;
              return (
                <motion.div
                  key={mentor.name}
                  layout
                  transition={{ layout: { type: 'spring', stiffness: 350, damping: 30 } }}
                  className={`cursor-pointer ${isExpanded ? 'sm:col-span-2 md:col-span-3 lg:col-span-4' : ''}`}
                  style={{ zIndex: isExpanded ? 10 : 1 }}
                  onClick={() => setExpandedMentor(isExpanded ? null : mentor.name)}
                >
                  <motion.div
                    layout
                    className="rounded-[20px] overflow-hidden"
                    style={glassCardStyle}
                    animate={{
                      scale: expandedMentor && !isExpanded ? 0.92 : 1,
                      opacity: expandedMentor && !isExpanded ? 0.5 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  >
                    {/* Collapsed state */}
                    {!isExpanded && (
                      <motion.div className="p-5" layout="position">
                        <div className="flex items-center gap-4">
                          <img 
                            src={mentor.image} 
                            alt={mentor.name}
                            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                          />
                          <div className="min-w-0">
                            <div className="font-semibold text-sm truncate" style={{ color: 'hsl(220, 15%, 20%)' }}>{mentor.name}</div>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {mentor.tags.map((tag) => (
                                <span 
                                  key={tag} 
                                  className="text-xs px-2 py-0.5 rounded-full"
                                  style={{
                                    background: 'hsl(168 100% 35% / 0.1)',
                                    color: 'hsl(168, 100%, 28%)',
                                    border: '0.5px solid hsl(168 100% 35% / 0.15)',
                                  }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Expanded state */}
                    {isExpanded && (
                      <motion.div
                        className="p-8 md:p-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15, duration: 0.3 }}
                      >
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                          <div className="flex flex-col items-center md:items-start shrink-0">
                            <img 
                              src={mentor.image} 
                              alt={mentor.name}
                              className="w-28 h-28 rounded-2xl object-cover shadow-lg mb-4"
                            />
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                              {mentor.tags.map((tag) => (
                                <span 
                                  key={tag} 
                                  className="text-xs px-3 py-1 rounded-full"
                                  style={{
                                    background: 'hsl(168 100% 35% / 0.1)',
                                    color: 'hsl(168, 100%, 28%)',
                                    border: '0.5px solid hsl(168 100% 35% / 0.2)',
                                  }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="text-2xl font-bold" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Space Grotesk', sans-serif" }}>{mentor.name}</h3>
                              <button
                                onClick={(e) => { e.stopPropagation(); setExpandedMentor(null); }}
                                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 ml-4 transition-colors"
                                style={{
                                  background: 'hsla(220, 15%, 50%, 0.1)',
                                  border: '1px solid hsla(220, 15%, 80%, 0.3)',
                                }}
                              >
                                <X className="w-4 h-4" style={{ color: 'hsl(220, 15%, 40%)' }} />
                              </button>
                            </div>
                            <p className="text-sm font-light leading-relaxed mb-6" style={{ color: 'hsl(220, 15%, 35%)' }}>
                              {mentor.bio}
                            </p>
                            <a
                              href={mentor.expertfile}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                              style={{
                                background: 'linear-gradient(135deg, hsl(172, 100%, 30%) 0%, hsl(168, 100%, 35%) 50%, hsl(164, 70%, 55%) 100%)',
                                color: 'white',
                                border: '0.5px solid hsla(168, 100%, 50%, 0.4)',
                                boxShadow: 'inset 0 1px 0 0 hsla(168, 100%, 60%, 0.3), inset 0 -1px 0 0 hsla(0, 0%, 0%, 0.1), 0 4px 15px hsla(168, 100%, 35%, 0.3)',
                              }}
                            >
                              <ExternalLink className="w-4 h-4" />
                              View Full Profile
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="pt-24 md:pt-32 pb-24 md:pb-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(168 100% 28%) 0%, hsl(168 80% 22%) 100%)' }}>
        <img 
          src={signatureLines} 
          alt="" 
          aria-hidden="true"
          className="absolute top-0 right-0 h-1/2 w-auto object-contain object-right opacity-50 pointer-events-none select-none mix-blend-overlay"
          style={{ transform: 'scaleX(-1)' }}
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              Ready to Get{' '}
              <span style={{ color: 'hsla(0, 0%, 100%, 0.85)' }}>Started?</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10 text-white/60">
              Join our Venture Mentoring Service and get matched with experienced mentors 
              who can help you navigate the challenges of building a successful company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]" style={{
                background: 'linear-gradient(145deg, hsla(0, 0%, 100%, 0.2) 0%, hsla(0, 0%, 100%, 0.1) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                color: 'white',
                border: '0.5px solid hsla(0, 0%, 100%, 0.35)',
                boxShadow: 'inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4), inset 0 -1px 0 0 hsla(0, 0%, 0%, 0.1), 0 4px 16px hsla(168, 100%, 20%, 0.3), 0 8px 32px hsla(168, 100%, 20%, 0.15)',
              }}>
                Apply for Mentoring
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]" style={{
                background: 'linear-gradient(145deg, hsla(0, 0%, 100%, 0.2) 0%, hsla(0, 0%, 100%, 0.1) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                color: 'white',
                border: '0.5px solid hsla(0, 0%, 100%, 0.35)',
                boxShadow: 'inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4), inset 0 -1px 0 0 hsla(0, 0%, 0%, 0.1), 0 4px 16px hsla(168, 100%, 20%, 0.3), 0 8px 32px hsla(168, 100%, 20%, 0.15)',
              }}>
                Become a Mentor
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default MentorshipServices;
