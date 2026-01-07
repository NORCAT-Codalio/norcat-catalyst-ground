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
import lucRoyImg from '@/assets/mentors/luc-roy.jpg';
import cathyNadjiwonImg from '@/assets/mentors/cathy-nadjiwon.jpg';
import peterDalBiancoImg from '@/assets/mentors/peter-dal-bianco.jpg';
import jamieDewarImg from '@/assets/mentors/jamie-dewar.jpg';
import bernieAhoImg from '@/assets/mentors/bernie-aho.jpg';
import barbWardDagnonImg from '@/assets/mentors/barb-ward-dagnon.jpg';
import judyGougeonImg from '@/assets/mentors/judy-gougeon.jpg';
import jeffFullerImg from '@/assets/mentors/jeff-fuller.jpg';
import dennisReichImg from '@/assets/mentors/dennis-reich.jpg';

const mentors = [
  {
    name: 'Tom Fortin',
    image: tomFortinImg,
    tags: ['Electronics', 'Manufacturing'],
    bio: 'Tom is the owner of a Sudbury-based electronics design and manufacturing company, Ontrak Control Systems. Ontrak specializes in the design and manufacture of serial data acquisition interface devices used in industrial, medical and retail automation applications. After graduating from Cambrian in 1984, Tom started his career installing process control systems for paper machines. He is passionate about manufacturing in Canada and has helped start many technology companies producing medical devices, lasers, and automation products.',
    expertfile: 'http://expertfile.com/experts/tom.fortin',
  },
  {
    name: 'Luc Roy',
    image: lucRoyImg,
    tags: ['IT', 'Product Marketing'],
    bio: 'Luc is the Chief Information Officer for Laurentian University and co-owner of Old Rock Roastery. With a Bachelor of Computer Science from the University of Ottawa, Luc worked as Director of Product Marketing for Bay Networks and held VP positions at Chantry Networks, Siemens, Enterasys Networks, and BlueCat Networks. Old Rock Roastery has received many prizes including 2008 Start-Up of the Year by Sudbury Chamber of Commerce.',
    expertfile: 'http://expertfile.com/experts/luc.roy',
  },
  {
    name: 'Cathy Nadjiwon',
    image: cathyNadjiwonImg,
    tags: ['Mining', 'Business Development'],
    bio: 'Cathy is a surveyor and geomatics professional specializing in the mineral exploration and mining sectors. She is the president of UnderCover Innovations Inc., a product innovation and development company. She has consulted in business start-ups, financing, I.T., and strategic planning. Cathy was recognized as Entrepreneur of the Year by the Greater Sudbury Chamber of Commerce and as an Influential Woman of Northern Ontario.',
    expertfile: 'http://expertfile.com/experts/cathy.nadjiwon',
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
    name: 'Bernie Aho',
    image: bernieAhoImg,
    tags: ['Entrepreneurship', 'UI/UX'],
    bio: 'Bernie is the CEO and Co-Founder of TimeHero. He is a seasoned entrepreneur and UI/UX expert with extensive experience in venture capital and product management. Bernie brings deep expertise in building software products, user experience design, and scaling technology startups.',
    expertfile: 'http://expertfile.com/experts/bernie.aho',
  },
  {
    name: 'Barb Ward-Dagnon',
    image: barbWardDagnonImg,
    tags: ['Medical Research', 'Pharmaceuticals'],
    bio: 'Barb is the founder and owner of Medicor Research Inc. She is a specialist in medical research, clinical trials, and pharmaceutical branding. Barb has extensive experience navigating the healthcare industry and bringing medical innovations to market.',
    expertfile: 'http://expertfile.com/experts/barb.ward-dagnon',
  },
  {
    name: 'Judy Gougeon',
    image: judyGougeonImg,
    tags: ['Insurance', 'Risk Management'],
    bio: 'Judy is the President/CEO of Gougeon Insurance Brokers. With an MBA, she is an expert in risk management and innovative insurance programs. Judy brings deep expertise in business protection, risk mitigation strategies, and building successful service-based businesses.',
    expertfile: 'http://expertfile.com/experts/judy.gougeon',
  },
  {
    name: 'Jeff Fuller',
    image: jeffFullerImg,
    tags: ['Industrial', 'International Business'],
    bio: 'Jeff is the founder of Fuller Industrial. He is an expert in pipe fabrication, international business growth, and industrial manufacturing. Jeff has extensive experience in scaling manufacturing operations and expanding into international markets.',
    expertfile: 'http://expertfile.com/experts/jeff.fuller',
  },
  {
    name: 'Dennis Reich',
    image: dennisReichImg,
    tags: ['Healthcare', 'Medical Technology'],
    bio: 'Dennis is a practicing physician and principal investigator for medical research. He is the founder of multiple healthcare technology ventures including Chyma Systems. Dennis brings unique expertise at the intersection of medicine, research, and technology entrepreneurship.',
    expertfile: 'http://expertfile.com/experts/dennis.reich',
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
    title: 'Confidential & Judgment-Free',
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
  'Confidential, judgment-free guidance',
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
        className="card-modern p-5 cursor-pointer hover:shadow-glow transition-all duration-300"
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
            <div className="font-semibold text-sm truncate">{mentor.name}</div>
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
                className="bg-background rounded-3xl shadow-2xl max-w-md w-full p-8 relative"
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
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-5 shadow-lg"
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
              volunteers who provide confidential, judgment-free guidance at no cost.
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
                    { step: '03', title: 'Regular Sessions', desc: 'Meet monthly with your mentor team. You set the agenda based on your current challenges and opportunities.' },
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
              { number: '10', label: 'Active Mentors' },
              { number: '100+', label: 'Years Combined Experience' },
              { number: '100+', label: 'Sessions Per Year' },
              { number: '95%', label: 'Founder Satisfaction' },
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
