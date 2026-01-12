import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  Lightbulb, 
  MessageCircle, 
  Calendar,
  CheckCircle,
  Shield,
  Target,
  Handshake,
  X,
  ExternalLink
} from 'lucide-react';

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
import mentoringGroupImg from '@/assets/mentoring-group.png';

const mentors = [
  // EIR - First position
  {
    name: 'Don Duval',
    image: donDuvalImg,
    tags: ['Entrepreneur in Residence', 'Leadership'],
    bio: 'Don is the CEO of NORCAT and serves as Entrepreneur in Residence. He is an expert in turnaround strategies, entrepreneurship, innovation strategy, and leadership. Don has led NORCAT\'s transformation into a world-class innovation hub and brings deep experience in organizational leadership and strategic planning.',
    expertfile: 'http://expertfile.com/experts/don.duval',
  },
  // Alphabetical by last name
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

interface MentorCardProps {
  mentor: typeof mentors[0];
  isExpanded: boolean;
  onToggle: () => void;
}

function MentorCard({ mentor, isExpanded, onToggle }: MentorCardProps) {
  return (
    <>
      <motion.div
        className="bg-white rounded-2xl border border-gray-100 shadow-md p-5 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        onClick={onToggle}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-4">
          <img 
            src={mentor.image} 
            alt={mentor.name}
            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
          />
          <div className="min-w-0">
            <div className="font-semibold text-sm text-foreground truncate">{mentor.name}</div>
            <div className="flex flex-wrap gap-1 mt-1">
              {mentor.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onToggle}
            />
            
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-background rounded-3xl shadow-2xl max-w-2xl w-full p-10 relative max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={onToggle}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>

                <div className="text-center">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-lg"
                  />
                  
                  <h3 className="headline-sm mb-1">{mentor.name}</h3>
                  <div className="flex flex-wrap gap-2 justify-center mb-5">
                    {mentor.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="body-md text-left mb-6">
                    {mentor.bio}
                  </p>

                  <a
                    href={mentor.expertfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Full Profile
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

const MentorshipServices = () => {
  const [expandedMentor, setExpandedMentor] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-50" />
        <div className="orb orb-teal w-96 h-96 -top-48 -right-48" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 badge-dark mb-8">
              <Users className="w-4 h-4" />
              Venture Mentoring Service
            </div>
            <h1 className="headline-hero text-white mb-6 max-w-4xl">
              Team-Based<br />
              <span className="text-gradient">Mentorship</span>
            </h1>
            <p className="body-xl text-white/70 max-w-2xl mb-10">
              A proven mentoring model that pairs founders with teams of experienced 
              volunteers who provide confidential, inclusive guidance at no cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-primary-lg">
                <Link to="/apply">
                  Apply for Mentoring
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild className="btn-outline-dark">
                <Link to="/apply">
                  Become a Mentor
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="headline-lg mb-4">A Different Kind of Mentoring</h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Our Venture Mentoring Service is built on principles that put founders first 
                and create lasting, meaningful relationships.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-modern p-6 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="body-md text-sm">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mentoring Principles with Image */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <ScrollReveal direction="left">
              <div>
                <h2 className="headline-lg mb-4">Built for Founders</h2>
                <p className="body-lg text-muted-foreground mb-8">
                  Every aspect of our mentoring program is designed with your success in mind.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {principles.map((item, i) => (
                    <div key={i} className="card-modern p-5">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                      <p className="body-md text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right side - Image */}
            <ScrollReveal direction="right">
              <div className="flex items-center justify-center h-full">
                <img 
                  src={mentoringGroupImg} 
                  alt="Mentors and founders collaborating" 
                  className="max-w-full h-auto object-contain"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="headline-lg mb-6">How It Works</h2>
                <p className="body-lg mb-8">
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
                      <div className="text-primary font-bold text-lg">{item.step}</div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="body-md text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="card-modern p-8">
                <h3 className="headline-sm mb-6">What You Get</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="body-md">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '18', label: 'Active Mentors' },
              { number: '1000+', label: 'Hours Mentored in 2025' },
              { number: '100', label: 'NPS Score' },
              { number: '$0', label: 'To Access Mentorship' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="stat-number mb-2">{stat.number}</div>
                <p className="body-md text-muted-foreground">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="headline-lg mb-4">Meet Our Mentors</h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Our volunteer mentors are accomplished entrepreneurs, executives, and experts 
                who are passionate about helping the next generation succeed.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mentors.map((mentor) => (
              <ScrollReveal key={mentor.name} delay={0.05}>
                <MentorCard
                  mentor={mentor}
                  isExpanded={expandedMentor === mentor.name}
                  onToggle={() => setExpandedMentor(
                    expandedMentor === mentor.name ? null : mentor.name
                  )}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="headline-lg text-white mb-6">Ready to Get Started?</h2>
            <p className="body-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Join our Venture Mentoring Service and get matched with experienced mentors 
              who can help you navigate the challenges of building a successful company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-primary-lg">
                <Link to="/apply">
                  Apply for Mentoring
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild className="btn-outline-dark">
                <Link to="/apply">
                  Become a Mentor
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default MentorshipServices;
