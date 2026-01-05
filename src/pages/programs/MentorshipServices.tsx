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
  Linkedin
} from 'lucide-react';

const mentors = [
  {
    name: 'David Morrison',
    initials: 'DM',
    tags: ['Mining Tech', 'Operations'],
    bio: 'Former VP of Operations at a major mining company with 25+ years of experience in underground mining operations and technology adoption.',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Sarah Chen',
    initials: 'SC',
    tags: ['Finance', 'Fundraising'],
    bio: 'Angel investor and former CFO who has helped startups raise over $50M in venture capital. Specializes in financial modeling and investor relations.',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Michael Torres',
    initials: 'MT',
    tags: ['Sales', 'B2B'],
    bio: 'Serial entrepreneur with three successful exits. Expert in enterprise sales strategies and building high-performance sales teams.',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Jennifer Walsh',
    initials: 'JW',
    tags: ['Product', 'UX'],
    bio: 'Product leader who has built and scaled products at Fortune 500 companies and startups. Passionate about user-centered design.',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Robert Blackwood',
    initials: 'RB',
    tags: ['Hardware', 'Manufacturing'],
    bio: 'Mechanical engineer and entrepreneur who has brought multiple hardware products to market. Expert in prototyping and supply chain.',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Amanda Foster',
    initials: 'AF',
    tags: ['Marketing', 'Brand'],
    bio: 'CMO with experience at both startups and established brands. Specializes in go-to-market strategy and brand positioning.',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'James Liu',
    initials: 'JL',
    tags: ['AI/ML', 'Data'],
    bio: 'Data scientist and AI entrepreneur. Previously led machine learning teams at major tech companies. PhD in Computer Science.',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Catherine Reid',
    initials: 'CR',
    tags: ['Legal', 'IP'],
    bio: 'Corporate attorney specializing in startups, venture financing, and intellectual property. Has advised hundreds of early-stage companies.',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Thomas Bergeron',
    initials: 'TB',
    tags: ['Cleantech', 'Sustainability'],
    bio: 'Cleantech executive with deep experience in renewable energy and sustainable mining practices. Board member at several ESG-focused companies.',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Nicole Patel',
    initials: 'NP',
    tags: ['HR', 'Culture'],
    bio: 'People operations leader who has scaled teams from 5 to 500. Expert in building inclusive cultures and high-performing teams.',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Andrew Mitchell',
    initials: 'AM',
    tags: ['Strategy', 'Growth'],
    bio: 'Management consultant turned entrepreneur. Helps founders think strategically about market positioning and competitive advantage.',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Lisa Drummond',
    initials: 'LD',
    tags: ['Government', 'Grants'],
    bio: 'Former government innovation program director. Expert in navigating public funding programs and regulatory environments.',
    linkedin: 'https://linkedin.com/in/',
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
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-teal-600 text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
            {mentor.initials}
          </div>
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
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-teal-600 text-primary-foreground flex items-center justify-center font-bold text-2xl mx-auto mb-5 shadow-glow">
                    {mentor.initials}
                  </div>
                  
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
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A66C2] text-white font-medium hover:bg-[#004182] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
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
              { number: '12', label: 'Active Mentors' },
              { number: '50+', label: 'Years Combined Experience' },
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
