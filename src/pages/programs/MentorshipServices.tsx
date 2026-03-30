import { Layout } from '@/components/Layout';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
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
import tomFortinImg from '@/assets/mentors/tom-fortin.png';
import cathyNadjiwonImg from '@/assets/mentors/cathy-nadjiwon.png';
import peterDalBiancoImg from '@/assets/mentors/peter-dal-bianco.png';
import jamieDewarImg from '@/assets/mentors/jamie-dewar.png';
import bernieAhoImg from '@/assets/mentors/bernie-aho.png';
import barbWardDagnonImg from '@/assets/mentors/barb-ward-dagnon.png';
import jeffFullerImg from '@/assets/mentors/jeff-fuller.png';
import dennisReichImg from '@/assets/mentors/dennis-reich.jpg';
import donDuvalImg from '@/assets/mentors/don-duval.jpg';
import ianLaneImg from '@/assets/mentors/ian-lane.png';
import ehsanMirdamadiImg from '@/assets/mentors/ehsan-mirdamadi.png';
import emilyMantleImg from '@/assets/mentors/emily-mantle.png';
import sheriTomchickImg from '@/assets/mentors/sheri-tomchick.png';
import chadPallopsonImg from '@/assets/mentors/chad-pallopson.png';
import michaelDolinarImg from '@/assets/mentors/michael-dolinar.png';
import davidPasiekaImg from '@/assets/mentors/david-pasieka.png';
import peyvandMelatiImg from '@/assets/mentors/peyvand-melati.png';

const mentors = [
  {
    name: 'Don Duval',
    image: donDuvalImg,
    tags: ['Entrepreneur in Residence', 'Leadership'],
    bio: 'Don brings more than two decades of leadership experience across Canada\'s innovation ecosystem. He is currently Principal, Head of Mining at Evok Innovations, and serves as NORCAT\'s Entrepreneur in Residence. Previously, Don served as CEO of NORCAT, where he advanced mining innovation, technology adoption, and industry–academic collaboration. Earlier in his career, he held senior roles at MaRS Discovery District, supporting the growth and commercialization of technology-based ventures. He is also an active mentor in the Creative Destruction Lab Minerals program. A former tech entrepreneur and engineering adjunct professor, Don is an active angel investor and was a Top 40 under 40 recipient and two-time TEDx speaker. He holds degrees from Queen\'s University and the University of Toronto.',
    expertfile: 'http://expertfile.com/experts/don.duval',
  },
  {
    name: 'Bernie Aho',
    image: bernieAhoImg,
    tags: ['Product Development', 'UX Design'],
    bio: 'Bernie has over 18 years of entrepreneurship experience in leading tech industry businesses. Currently, he is the driving force behind the look and feel of Critiq and provides business insight, strategy, and leadership across all teams. An avid photographer, designer, and gamer, Bernie previously co-founded TimeHero and the award-winning cloud-based annotation and marketing review tool ConceptShare which quickly became a leader in Creative Operations management.',
    expertfile: 'http://expertfile.com/experts/bernie.aho',
  },
  {
    name: 'Peter Dal Bianco',
    image: peterDalBiancoImg,
    tags: ['Branding', 'Franchising'],
    bio: 'Born in Italy, Peter emigrated to Canada at age six and graduated as a Civil Technologist in 1967. In 1975, he started his business career in Sudbury and by 1986 helped take National Video public on Nasdaq—at the time the largest franchised video rental chain in North America. The Bianco\'s brand has evolved to become one of the North\'s top recognized brands. With BMCG, Peter has spent the last ten years deeply involved as NORCAT Innovation\'s Entrepreneur-in-Residence, mentoring and coaching clients. He has helped raise millions of dollars in startup capital, with a major highlight culminating recently with the establishment of the Axion North Initiative in collaboration with The Axion Fund/Archangel Network of Funds. Peter has been the recipient of the Entrepreneur of the Year award for both the Northern Ontario Business and Bell Business Excellence Awards.',
    expertfile: 'http://expertfile.com/experts/peter.dalbianco',
  },
  {
    name: 'Jamie Dewar',
    image: jamieDewarImg,
    tags: ['Marketing', 'Strategic Thinking'],
    bio: 'Jamie graduated from Wilfrid Laurier University in 2005 with dual degrees in Business and Physics and Computing and has combined his two passions to grow his family business, Legend Boats. Since joining the company, Jamie has helped Legend grow into one of the best-known aluminum boat brands in Canada, now distributing through nearly 60 dealers across the country and selling direct through 3 of their own retail stores. His strategic vision has played a pivotal role in establishing strong partnerships and expanding the company\'s reach into new markets. Jamie is also an active Angel Investor who has had the pleasure of working with over 20 different startups including Storefront, BoatSetter, Videopixie, SeamlessDocs, Plastiq and PageCloud.',
    expertfile: 'http://expertfile.com/experts/jamie.dewar',
  },
  {
    name: 'Michael Dolinar',
    image: michaelDolinarImg,
    tags: ['Software Development', 'Product Development'],
    bio: 'Michael Dolinar brings 25 years of technical expertise from the financial, defense and industrial sectors. In 2014, Michael successfully launched a Sudbury-based software firm to service Silicon Valley, Europe and Asia by providing specialized software development services. Today, Michael manages the innovative SafeBox project: a revolutionary industrial safety product invented in Sudbury. At the same time, he leads the technology team at IRegained Inc, a medical innovation company developing next-generation medical equipment.',
    expertfile: 'http://expertfile.com/experts/michael.dolinar',
  },
  {
    name: 'Tom Fortin',
    image: tomFortinImg,
    tags: ['Manufacturing', 'Engineering & Design'],
    bio: 'Tom is the owner of Ontrak Control Systems, a Sudbury-based electronics design and manufacturing company specializing in serial data acquisition interface devices used in industrial, medical and retail automation applications. After graduating from Cambrian in 1984, Tom started his career installing process control systems for paper machines in Northern Ontario. He also taught electronics technology at Cambrian College for 12 years. Tom is passionate about manufacturing in Canada and has helped start many technology companies producing medical devices, lasers, and automation products. The Fortin Foundation, created in 2004, promotes efforts by youth in manufacturing through free consultation and sponsorship of events such as the annual Ontrak 2X4 Innovation Design Challenge.',
    expertfile: 'http://expertfile.com/experts/tom.fortin',
  },
  {
    name: 'Jeff Fuller',
    image: jeffFullerImg,
    tags: ['Entrepreneurial Leadership', 'Business Development'],
    bio: 'With his heritage deeply and proudly in Northern Ontario, Jeff Fuller has tapped his entrepreneurial spirit and Northern roots to expand and grow his business internationally. With an Honors Commerce Degree from Laurentian University, Jeff started Fuller Industrial in 2004 to provide carbon steel rubber lined fittings to the world. Since opening their doors, Fuller has shipped pipe to every continent and boasts the most advanced pipe fabrication facility in North America with patented leak detection technology and industry-leading project management intellectual property. Jeff is Past President of SAMSSA and currently serves on the Board of Directors of the Yves Landry Foundation.',
    expertfile: 'http://expertfile.com/experts/jeff.fuller',
  },
  {
    name: 'Ian Lane',
    image: ianLaneImg,
    tags: ['Angel Investment', 'Fundraising'],
    bio: 'Ian Lane is the Executive Director of the Northern Ontario Angels. With a diverse career, he enjoys fostering connections between entrepreneurs and Angel investors across Northern Ontario. Previously, Ian was Manager of Policy Development and Settlement with the Government of Prince Edward Island, and Manager of Research Capacity and Health Innovation at Health Sciences North Research Institute where he helped facilitate the attraction of over $10 million in external funding. He was also appointed Project Manager for the Northern Ontario Health Innovation Cluster. Ian holds an MA from Ryerson University, a BA from the University of Prince Edward Island, and a Diploma in Commercial Music from Humber College.',
    expertfile: 'http://expertfile.com/experts/ian.lane',
  },
  {
    name: 'Emily Mantle',
    image: emilyMantleImg,
    tags: ['Financial Reporting', 'Canadian Taxation'],
    bio: 'Named one of Sudbury\'s Top 40 under Forty by Northern Ontario Business, Emily holds an Honours Bachelor of Commerce degree (cum laude) from Laurentian University, the Chartered Accountant and Chartered Professional Accountant designations, and a post-designation specialization in Canadian income taxation through CPA Canada. She primarily works with owner-managed private businesses to provide accounting, business, and taxation advice. Emily has authored many articles on individual and corporate taxation, led internal and public seminars, and appeared as a guest on television to discuss tax issues. She continuously strives to be a forward-thinking thought leader, trusted business advisor and compliance master.',
    expertfile: 'http://expertfile.com/experts/emily.mantle',
  },
  {
    name: 'Peyvand Melati',
    image: peyvandMelatiImg,
    tags: ['Angel Investing', 'AI/IIoT'],
    bio: 'Peyvand is a highly accomplished entrepreneur and angel investor who has successfully launched multiple businesses. He is an expert in the commercialization and growth of companies in major industries, focusing on AI, IoT, CleanTech, and MedTech. He is a seasoned veteran in the start-up process from initial inception to launch. Peyvand has a particular knack for setting priorities, developing strategies, and building teams to scale ventures.',
    expertfile: 'http://expertfile.com/experts/peyvand.melati',
  },
  {
    name: 'Ehsan Mirdamadi',
    image: ehsanMirdamadiImg,
    tags: ['Investor Relations', 'AI'],
    bio: 'Ehsan is an experienced professional with a proven track record in cloud computing, IoT, and IT infrastructure industries. With a B.Sc in Computer Science from York University, Ehsan possesses a deep understanding of the industry\'s dynamics. His skillset extends to effective team management, strategic planning, technology development, venture establishment, and coaching high-tech startups. Ehsan has consistently demonstrated the ability to navigate complex technology landscapes and drive innovative solutions to success.',
    expertfile: 'http://expertfile.com/experts/ehsan.mirdamadi',
  },
  {
    name: 'Cathy Nadjiwon',
    image: cathyNadjiwonImg,
    tags: ['Business Development', 'Strategic Planning'],
    bio: 'Cathy is a surveyor and geomatics professional specializing in the mineral exploration and mining sectors. Currently president of UnderCover Innovations Inc., she previously co-owned and operated two GIS services and spatial application development companies and recently retired as Business Development Manager for CAE Mining Canada. She was recognized as the first ever Entrepreneur of the Year (1-50 Employees) by the Greater Sudbury Chamber of Commerce, as an Influential Woman of Northern Ontario by NOB, and has received a Professional Leadership Award. Cathy has served on many volunteer boards including the Laurentian University Board of Governors and was appointed the first ever female Treasurer of the Ontario Trillium Foundation, overseeing a $100M+ annual budget.',
    expertfile: 'http://expertfile.com/experts/cathy.nadjiwon',
  },
  {
    name: 'Chad Pallopson',
    image: chadPallopsonImg,
    tags: ['Finance', 'US Markets'],
    bio: 'Chad Pallopson has over 20 years of capital markets experience at some of Wall Street\'s largest firms including J.P. Morgan, Lazard, and SVB Leerink. Chad has also been a Managing Partner and Portfolio Manager at a Connecticut-based long/short equity hedge fund. After more than 2 decades in the New York City area, Chad recently moved back home to Canada. He is currently a Partner with Archangel-Axion Fund and a consultant for the Northern Ontario Angels group. He is a member of the NORCAT mentor advisory board and serves on the board of directors for IRegained Inc. He is a graduate of the Wharton School of the University of Pennsylvania.',
    expertfile: 'http://expertfile.com/experts/chad.pallopson',
  },
  {
    name: 'David Pasieka',
    image: davidPasiekaImg,
    tags: ['M&A', 'Cybersecurity'],
    bio: 'David is a C-Suite executive with deep Technology, Operations, Innovation, Regulatory, Safety, IT, Risk and M&A background. With extensive Renewable Power and Utility experience, his teams completed over 40 Utility acquisitions in Gas, Water and Electricity throughout North America. Other industry sector expertise includes Financial Services, Start-up, Innovation, Sustainability, Telecom and Enterprise Software. David has served on the Board of several private, public and municipal owned companies and is a graduate of McMaster University\'s Director College. He was the founding chair of Algonquin\'s Diversity and Inclusion council. David recently completed programs at Royal Roads University in Executive Coaching, at the University of Oxford in Sustainability, and at Harvard in Cybersecurity.',
    expertfile: 'http://expertfile.com/experts/david.pasieka',
  },
  {
    name: 'Sheri Tomchick',
    image: sheriTomchickImg,
    tags: ['Leadership', 'Scalability'],
    bio: 'Sheri Tomchick is the Founder and President of both Plan A and StaffStat. Together her companies make up a groundbreaking staffing strategy for seniors\' care across Canada. Under Sheri\'s leadership, the company has grown to over 50 locations across Canada and has helped countless senior care organizations improve their operations and provide better care for their residents. Her passion for improving the lives of seniors and frontline workers has been the driving force behind Plan A\'s and StaffStat\'s success. Her commitment to excellence and belief in the power of people and culture have made Plan A an industry leader.',
    expertfile: 'http://expertfile.com/experts/sheri.tomchick',
  },
  {
    name: 'Gideon Uchihara',
    image: dennisReichImg,
    tags: ['AI/ML', 'Quantum'],
    bio: 'Gideon is an experienced professional with expertise in healthcare and medical technology. He brings valuable insights to startups navigating the healthcare industry and developing innovative medical solutions.',
    expertfile: 'http://expertfile.com/experts/gideon.uchihara',
  },
  {
    name: 'Barb Ward-Dagnon',
    image: barbWardDagnonImg,
    tags: ['Clinical Trials', 'Regulatory Compliance'],
    bio: 'Barb Ward-Dagnon is the founder and owner of Medicor Research Inc. Within three years of starting Medicor, Barb gained global recognition among several top pharmaceutical companies for excellence in clinical research. She has set the standard for quality and compliance among North American clinical research sites and received outstanding feedback from the FDA for her work in vaccine development. Barb\'s flair for sales, marketing and branding have allowed her to build her customer base to over sixty pharmaceutical and academic clients. Her background is in both business administration and nursing, bringing the two careers together to form a successful medical research company.',
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
              <span className="block" style={{ fontFamily: "'Open Sans', sans-serif", color: 'hsl(168, 100%, 35%)', textShadow: '0 0 60px hsl(168 100% 35% / 0.4), 0 0 120px hsl(168 100% 35% / 0.15)', fontWeight: 700 }}>
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
               <p className="text-2xl md:text-3xl leading-relaxed" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 500 }}>
                Our mentors share the drive of our founders. They've challenged convention, 
                built real businesses, and expanded what's possible through{' '}
                <span style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>experience.</span>
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <TestimonialCarousel glassCardStyle={glassCardStyle} iconContainerStyle={iconContainerStyle} />
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
               <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 500 }}>
                A Different Kind of{' '}
                <span className="text-4xl md:text-5xl lg:text-6xl" style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>Mentoring.</span>
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
                <h2 className="text-3xl md:text-4xl mb-6" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 500 }}>
                  How It{' '}
                  <span className="text-4xl md:text-5xl" style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>Works.</span>
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
                <h3 className="text-xl font-bold mb-6" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Open Sans', sans-serif" }}>What You Get</h3>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 500 }}>
                Meet Our{' '}
                <span className="text-4xl md:text-5xl lg:text-6xl" style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>Mentors.</span>
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
                              <h3 className="text-2xl font-bold" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Open Sans', sans-serif" }}>{mentor.name}</h3>
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
      <section className="pt-24 md:pt-32 pb-24 md:pb-32 relative overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6" style={{ color: 'hsl(220, 15%, 20%)' }}>
              Ready to get{' '}
              <span style={{ color: 'hsl(168, 100%, 28%)' }}>started?</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10" style={{ color: 'hsl(220, 15%, 40%)' }}>
              Join our Venture Mentoring Service and get matched with experienced mentors 
              who can help you navigate the challenges of building a successful company.
            </p>
            <Link 
              to="/apply" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: 'linear-gradient(145deg, hsla(168, 25%, 85%, 0.5) 0%, hsla(168, 20%, 80%, 0.25) 100%)',
                border: '1.5px solid hsla(168, 30%, 90%, 0.5)',
                color: 'hsl(168, 40%, 25%)',
                boxShadow: 'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 16px hsla(168, 20%, 30%, 0.15), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
              }}
            >
              Apply for Mentoring
              <ArrowRight className="h-5 w-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default MentorshipServices;
