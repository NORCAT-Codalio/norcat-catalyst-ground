import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, MapPin, Users, DollarSign, Building2, Globe, Award, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { SuccessStory } from './SuccessStoryCard';
import circuitiqTeam from '@/assets/circuitiq-team.png';
import symxAiTeam from '@/assets/symx-ai-team.jpg';
import flosonicsFlopatch from '@/assets/flosonics-flopatch.jpg';
import jannatecProduct from '@/assets/jannatec-product.jpg';
import planaTeam from '@/assets/plana-team.jpg';
import maestroUnderground from '@/assets/maestro-underground.jpg';
import karenHastie from '@/assets/karen-hastie.jpg.asset.json';
import chamberPerksLogo from '@/assets/chamber-perks-logo.png.asset.json';
import codalioLogo from '@/assets/codalio-logo.png.asset.json';
import podcoDiscoveryLab from '@/assets/success-stories/podco-discovery-lab.jpg.asset.json';
import podcoLogo from '@/assets/logos/podco-logo.png.asset.json';
import medatechRaisePro from '@/assets/success-stories/medatech-raisepro-48t.png.asset.json';
import kinmetrixArc from '@/assets/success-stories/kinmetrix-arc.png.asset.json';
import waiveLogo from '@/assets/logos/waive.png.asset.json';
import iregainedLogo from '@/assets/logos/iregained.png.asset.json';
import rnaDiagnosticsLogo from '@/assets/logos/rna-diagnostics.png.asset.json';

interface StoryDetails extends SuccessStory {
  problem: string;
  breakthrough: {
    text: string;
    image?: string;
  };
  timeline: {
    year: string;
    event: string;
  }[];
  impactMetrics: {
    jobs: number;
    revenue?: string;
    capital: string;
    publicValuation?: string;
    patents?: number;
    pilots: number;
    markets: number;
  };
  founderQuote: {
    text: string;
    author: string;
    role: string;
  };
  currentStage: string;
  whatsNext: string;
  globalPresence?: string[];
  fullStory?: string;
}

interface SuccessStoryModalProps {
  story: StoryDetails | null;
  open: boolean;
  onClose: () => void;
}

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    const duration = 2000;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOut * value));
      
      if (progress < 1) requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function SuccessStoryModal({ story, open, onClose }: SuccessStoryModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!open) setScrollProgress(0);
  }, [open]);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    setScrollProgress(scrollTop / (scrollHeight - clientHeight));
  };

  if (!story) return null;

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent 
        className="max-w-5xl h-[95vh] p-0 border-0 overflow-hidden [&>button]:hidden rounded-3xl shadow-2xl"
        style={{ backgroundColor: 'hsl(var(--background))' }}
      >
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-secondary z-50">
          <div 
            className="h-full bg-primary transition-all duration-150"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm shadow-lg hover:bg-background flex items-center justify-center transition-all hover:scale-105 border border-border"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Scrollable content */}
        <div 
          ref={containerRef}
          onScroll={handleScroll}
          className="h-full overflow-y-auto scroll-smooth"
        >
          {/* Hero Section */}
          <div className="relative h-[60vh] overflow-hidden">
            <img 
              src={story.image}
              alt={story.company}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full mb-4">
                {story.sector}
              </span>
              <h1 className="headline-hero text-white mb-4">
                {story.company}
              </h1>
              <p className="body-xl text-white/80 max-w-2xl">
                {story.tagline}
              </p>
            </div>
          </div>

          {/* Section 1: The Problem */}
          <section className="py-24 px-8 md:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-bold tracking-widest uppercase mb-6 block">
                The Problem
              </span>
              <p className="headline-lg text-white leading-tight">
                {story.problem}
              </p>
            </div>
          </section>

          {/* Section 2: The Breakthrough */}
          <section className="section-padding bg-background">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-bold tracking-widest uppercase mb-6 block">
                The Breakthrough
              </span>
              <p className="body-xl text-foreground mb-12">
                {story.breakthrough.text}
              </p>
              {story.breakthrough.image && (
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src={story.breakthrough.image} 
                    alt="Product" 
                    className="w-full"
                  />
                </div>
              )}
            </div>
          </section>

          {/* Section 3: The NORCAT Advantage - Timeline */}
          <section className="section-padding bg-secondary/30">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-bold tracking-widest uppercase mb-6 block">
                The NORCAT Advantage
              </span>
              <h2 className="headline-lg mb-16">
                Their Journey With Us
              </h2>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20" />

                {story.timeline.map((item, index) => (
                  <div 
                    key={index}
                    className="relative flex items-start gap-8 mb-12 last:mb-0"
                  >
                    <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                      <CheckCircle className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="pt-2">
                      <span className="text-primary text-sm font-bold">{item.year}</span>
                      <p className="headline-sm mt-1">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Impact Metrics */}
          <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="max-w-5xl mx-auto">
              <span className="text-primary text-sm font-bold tracking-widest uppercase mb-6 block text-center">
                Impact
              </span>
              <h2 className="headline-lg text-white mb-16 text-center">
                By The Numbers
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="stat-number text-4xl mb-2">
                    <AnimatedCounter value={story.impactMetrics.jobs} />
                  </div>
                  <p className="text-white/60 text-sm">Jobs Created</p>
                </div>

                {story.impactMetrics.revenue && (
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="stat-number text-4xl mb-2">
                      {story.impactMetrics.revenue}
                    </div>
                    <p className="text-white/60 text-sm">Revenue</p>
                  </div>
                )}

                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-amber-400" />
                  </div>
                  <div className="stat-number text-4xl mb-2">
                    {story.impactMetrics.publicValuation || story.impactMetrics.capital}
                  </div>
                  <p className="text-white/60 text-sm">
                    {story.impactMetrics.publicValuation ? 'Public Valuation' : 'Capital Raised'}
                  </p>
                </div>

                {story.impactMetrics.patents !== undefined && (
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-rose-500/20 flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-rose-400" />
                    </div>
                    <div className="stat-number text-4xl mb-2">
                      <AnimatedCounter value={story.impactMetrics.patents} />
                    </div>
                    <p className="text-white/60 text-sm">Patents</p>
                  </div>
                )}

                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="stat-number text-4xl mb-2">
                    <AnimatedCounter value={story.impactMetrics.pilots} />
                  </div>
                  <p className="text-white/60 text-sm">Pilots Completed</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-teal-500/20 flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-teal-400" />
                  </div>
                  <div className="stat-number text-4xl mb-2">
                    <AnimatedCounter value={story.impactMetrics.markets} />
                  </div>
                  <p className="text-white/60 text-sm">Markets Entered</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Founder Quote */}
          <section className="section-padding bg-background">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-8xl text-primary font-serif leading-none mb-8">"</div>
              <blockquote className="headline-md italic text-foreground leading-relaxed mb-8">
                {story.founderQuote.text}
              </blockquote>
              <div>
                <p className="font-semibold text-foreground">{story.founderQuote.author}</p>
                <p className="text-muted-foreground">{story.founderQuote.role}</p>
              </div>
            </div>
          </section>

          {/* Section 6: Where They Are Now */}
          <section className="section-padding-sm bg-primary">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-primary-foreground/70 text-sm font-bold tracking-widest uppercase mb-6 block">
                Where They Are Now
              </span>
              <h2 className="headline-lg text-primary-foreground mb-6">
                {story.currentStage}
              </h2>
              <p className="body-lg text-primary-foreground/80 mb-12">
                {story.whatsNext}
              </p>

              {story.globalPresence && story.globalPresence.length > 0 && (
                <div className="flex flex-wrap justify-center gap-3">
                  {story.globalPresence.map((location) => (
                    <span 
                      key={location}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm"
                    >
                      <MapPin className="w-4 h-4" />
                      {location}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="headline-lg text-white mb-6">
                Your Company Could Be Next
              </h2>
              <p className="body-lg text-white/70 mb-10">
                These aren't outliers. This is what happens when the right founders meet the right ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply" className="btn-primary-lg">
                  Apply to NORCAT Innovation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/programs/venture-growth-services" className="btn-outline-dark">
                  Explore Programs
                </Link>
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Sample detailed stories data
export const detailedStories: Record<string, StoryDetails> = {
  'circuitiq': {
    id: 'circuitiq',
    company: 'CircuitIQ',
    tagline: 'Wireless digital circuit mapping that turns hours of guesswork into moments of precision.',
    sector: 'Cleantech',
    stage: 'growth',
    status: 'scaling',
    metrics: { capitalRaised: '$4M', jobsCreated: 65, marketsReached: 2 },
    programs: ['SCF', 'Mentorship', 'VGS', 'IAP', 'RAI', 'UG Centre'],
    image: circuitiqTeam,
    founded: '2022',
    problem: `The foundational crisis that forged CircuitIQ occurred when founder and CEO Luke Begley's young son placed a dime behind a plugged-in phone charger, creating a blinding electrical arc. The near miss revealed a systemic safety flaw: most homeowners have no accurate information about which breaker feeds which outlet or switch, and the only thing between saving a house and it burning down is the right information.`,
    breakthrough: {
      text: `CircuitIQ's wireless multi-circuit plug-and-play smart tool digitally maps electrical systems in moments, converting hours of manual circuit tracing into precise, actionable data. The system produces circuit safety evaluation reports identifying overloaded circuits, unbalanced loads, and appliances needing dedicated breakers-while creating permanent digital records accessible via QR codes on every panel.`,
    },
    timeline: [
      { year: '2022', event: 'Luke Begley introduced CircuitIQ at PITCH 2022, winning both Judge\'s Choice and People\'s Choice Awards' },
      { year: '2023', event: 'Relocated to Greater Sudbury and secured $2M in seed funding from local investors' },
      { year: '2024', event: 'Grew team from 7 to 26 employees, expanded product line' },
      { year: '2025', event: 'Secured funding from Sudbury Catalyst Fund, FedNor, NOHFC, and angel investors' },
      { year: '2026', event: 'Team of 65 staff, 3 new patents published for mining innovation, mapped 400+ buildings across Canada and the USA' },
    ],
    impactMetrics: { jobs: 65, capital: '$4M', patents: 3, pilots: 3, markets: 2 },
    founderQuote: {
      text: "My first pitch with NORCAT Innovation was a night I'll never forget. Not only did I conquer my stage fright, but I also won! This unexpected victory caught the eye of a major investor-one who had never invested in a startup before. His investment of over $1 million, my largest yet, changed everything. Since that night in Sudbury, our company has taken off.",
      author: 'Luke Begley',
      role: 'Founder & CEO, CircuitIQ',
    },
    currentStage: 'Scaling Across North America',
    whatsNext: 'Expanding into critical facilities and underground infrastructure with the Live Powerline Mapping Tool, while modernizing public-sector buildings across Northern Ontario.',
    globalPresence: ['Greater Sudbury', 'Canada', 'USA'],
    fullStory: `The foundational crisis that forged CircuitIQ occurred in a flash within the living room of founder and CEO Luke Begley. He recounts a terrifying moment when his young son accidentally placed "a dime behind a plugged-in phone charger," an incident that resulted in a blinding electrical arc. Begley's wife described the event as looking "like the Fourth of July in our living room," and the near miss revealed a systemic safety flaw that most homeowners overlook. Begley explains that electrical fire is particularly perilous because "it heats up the lines that run through every wall in the house, and so very quickly, that becomes uncontrollable." This experience led him to the realization that "the only thing between saving your house and it burning down is the right information."\n\nThe urgent search for this information revealed a core revelation regarding modern infrastructure. Begley observed that "the challenge for homeowners is knowing which breaker feeds the outlets and switches throughout their homes," and when he checked his own panel, he discovered it was not labeled correctly. He concluded that "not only is the panel card really limited in the information it provides, but the actual information isn't accurate either." This sparked a homegrown solution that began with a clever technical hack. Begley realized he could trace circuits using a wireless router, noting that "when its network would go offline, I'd know which breaker it was." This rudimentary method was quickly validated by a veteran electrician with three decades of experience who told Begley he should patent the idea because "this is a problem that all electricians deal with." Following a patent application, Begley partnered with Travis Dunn to build the first prototype, an effort that eventually secured Jumpstart funding from the Accelerator Centre.\n\nWhile the journey began in Kitchener, it led to a profound regional transformation as the company relocated to Greater Sudbury. The core purpose of the CircuitIQ product, a wireless multi-circuit plug and play smart tool, is to digitally map electrical systems and resolve a universally confusing challenge. In any commercial building, industrial site, or residential structure, identifying the correct breaker can feel "more challenging than following a buried treasure map." The device eliminates this guesswork by automatically creating a complete digital map of the electrical panel, converting hours of manual labor into moments of precision.\n\nFor industry professionals, the technology represents a radical shift in efficiency and safety. The system reduces time spent on manual problem solving, allowing an electrician to "log into the app, see the tagged circuits, and fix the issue in minutes" rather than spending "hours tracking down a tripped circuit." This translates directly to reduced downtime and a minimized risk of accidental outages. Furthermore, the system provides a "circuit safety evaluation report identifying active electrical safety issues," such as "overloaded circuits, unbalanced loads, and also appliances or equipment that need to be placed on a dedicated breaker."\n\nThe impact of the product extends to mandatory safety compliance and regulatory changes. Begley highlights that amendments to regulations, such as the Canadian Electrical Code's "New Panel Modification Protocol," now obligate immediate updates to panel labeling whenever modifications occur. This amendment is significant because it is "one of only two 'retroactive' modifications in our regulations." CircuitIQ streamlines this burden by automating identification and ensuring all labeling "aligns seamlessly with the recorded data." The system creates a permanent digital record that is accessible instantly via "QR codes attached to every panel."\n\nOn a larger scale, CircuitIQ is positioned to modernize critical infrastructure across Northern Ontario and beyond. The company is currently moving "to the next level" through a repayable investment of $500,000 from FedNor to commercialize its Live Powerline Mapping Tool (LPMT). This technology is designed specifically for "critical facilities such as hospitals, utility stations, and transportation networks," giving staff "quick, accurate information about complex power systems while eliminating breaker cycling and shutdowns."\n\nThe company's success is already proven in the public sector through its partnership with the District School Board Ontario Northeast (DSB1), where it aims to modernize 28 aging school facilities. Director of Education Lesleigh Dye notes that "first and foremost, it's about safety. When I think about the staff coming into their buildings each day, our students, our families, knowing that we've done everything possible to ensure their safety is really beneficial and helpful." DSB1 is now the first district in Canada to have completed such a modernization. This expansion mirrors the growth of the Northern tech ecosystem itself, as CircuitIQ has grown "from five employees to nearly 40" in "just over two years."\n\nBegley's trajectory illustrates the power of the regional innovation community. His company's success is tied directly to the Venture North PITCH competition, an event he admits is "what really launched CircuitIQ." That launch led to the company relocating to Sudbury, doubling its workforce, and tripling its revenue. Completing this journey, Begley returned in 2025 as an expert judge for the competition, sitting alongside other successful founders from the region. This transformation from a necessity driven founder to a driving force in Northern Ontario innovation confirms his belief that the competition serves as a "catalytic launchpad for Greater Sudbury's new economic identity." Begley maintains that "we are excited to be part of the thriving entrepreneurial community in Northern Ontario," reflecting the belief that ingenuity forged in the region can deliver world class safety solutions globally.`,
  },
  'symx-ai': {
    id: 'symx-ai',
    company: 'SYMX.AI',
    tagline: 'Revolutionizing mining with AI, Industrial IoT, and predictive analytics.',
    sector: 'AI / Mining Tech',
    stage: 'growth',
    status: 'commercial',
    metrics: { capitalRaised: '$2M+', jobsCreated: 25, marketsReached: 8 },
    programs: ['UG Centre', 'Mentorship', 'VGS', 'IAP'],
    image: symxAiTeam,
    founded: '2008',
    problem: 'Mining operations lacked reliable real-time data gathering and communication underground, leading to unscheduled downtime, excessive fuel consumption, and siloed information between surface and underground teams.',
    breakthrough: {
      text: 'SYMX.AI built an integrated suite of AI-powered software and hardware solutions-X.Machines for real-time asset performance management, X.Parts for predictive maintenance, and X.Connect for resilient IoT mesh Wi-Fi-delivering measurable results including a 9% reduction in fuel consumption, 14% decrease in maintenance costs, and 50% reduction in unscheduled downtime.',
    },
    timeline: [
      { year: '2008', event: 'Founded by Kirk Petroski in Sudbury' },
      { year: '2015', event: 'Began testing and development at NORCAT Underground Centre' },
      { year: '2020', event: 'Rebranded to SYMX.AI, pivoting to AI and predictive analytics' },
      { year: '2022', event: 'Ash Agarwal appointed CEO; Kirk Petroski transitions to Executive Chairman' },
      { year: '2024', event: 'Strategic collaboration with LoopX, fusing Vision AI and LiDAR with X.Machines platform' },
      { year: '2025', event: 'Received $2M OCI investment for digital tire management platform with Yokohama and Fountain Tire' },
      { year: '2026', event: 'Centerpiece of Ontario innovation economy, deploying tire platform across global sites' },
    ],
    impactMetrics: { jobs: 25, capital: '$2M+', pilots: 3, markets: 8 },
    founderQuote: {
      text: "NORCAT Innovation has enabled SYMX.AI to be a global leader and innovator in underground communications and real-time data gathering technologies. NORCAT's ability and influence has allowed our company to access funding, market exposure, and grow into a leading-edge technology provider. Demonstrating products in an operating mine setting is an opportunity few others in the world have-it has played a key role in the development and success SYMX.AI enjoys today.",
      author: 'Kirk Petroski',
      role: 'Founder & Executive Chairman, SYMX.AI',
    },
    currentStage: 'Scaling Globally',
    whatsNext: 'Deploying a first-of-its-kind digital tire management platform with Yokohama and Fountain Tire across global mine sites, while continuing to serve as the "nervous system" of the modern mine.',
    globalPresence: ['Sudbury', 'Ontario', 'Canada', 'Global'],
    fullStory: "SYMX.AI's utilization of the NORCAT Underground Centre was like having access to an \"active laboratory.\" The Underground Centre, situated in Sudbury, is unique in the world and a key anchor that demonstrates the global eminence of the mining technology cluster. Beyond development and testing activities, the networking opportunities and exposure to investors and networks outside of Sudbury has allowed SYMX.AI to showcase, sell, and promote its digital mining solutions to a global audience.\n\nAs the industry shifted from \"getting data\" to \"using data,\" the company rebranded to SYMX.AI, reflecting a new focus on Artificial Intelligence and Predictive Analytics. During this period, Ash Agarwal stepped in as CEO while Founder Kirk Petroski transitioned to Executive Chairman, focusing on dismantling infrastructure silos and mentoring the next generation of innovators through programs like the Creative Destruction Lab (CDL).\n\nIn late 2024 and throughout 2025, SYMX.AI structured itself as the \"nervous system\" of the mine through a strategic collaboration with local founder Dr. Chao Yu of LoopX. Fusing LoopX's Vision AI and LiDAR with SYMX.AI's X.Machines platform, the partnership enabled legacy mining vehicles to achieve 360-degree situational awareness.\n\nIn late 2025, the company received a $2 million investment from the Ontario Centre of Innovation (OCI) to develop a first-of-its-kind digital tire management platform in collaboration with Yokohama and Fountain Tire. This platform is currently being deployed to reduce fuel waste and extend equipment life across global sites.",
  },
  'flosonics-medical': {
    id: 'flosonics-medical',
    company: 'FloSonics Medical',
    tagline: 'Wearable sensors improving clinical management of critically ill patients.',
    sector: 'Medtech',
    stage: 'growth',
    status: 'scaling',
    metrics: { capitalRaised: '$20M+ USD', jobsCreated: 40, marketsReached: 2 },
    programs: ['IAP', 'Mentorship'],
    image: flosonicsFlopatch,
    founded: '2015',
    problem: 'Critically ill patients in ICUs and emergency departments lacked continuous, non-invasive hemodynamic monitoring-forcing clinicians to rely on intermittent, invasive measurements for fluid resuscitation decisions.',
    breakthrough: {
      text: 'FloSonics developed the FloPatch, a wearable ultrasound sensor that enables real-time functional hemodynamic monitoring for patients requiring cardiopulmonary and fluid resuscitation. Clinical data from partner hospitals has shown that FloPatch use can help reduce sepsis mortality by up to 80% through precision fluid management.',
    },
    timeline: [
      { year: '2015', event: 'Four cofounders approached NORCAT Innovation with the FloPatch idea' },
      { year: '2016', event: 'Received initial funding through NORCAT\'s Innovation Acceleration Program for prototype development' },
      { year: '2017', event: 'Connected with Northern Ontario Angels (NOA) for successful pitch and proof-of-concept funding' },
      { year: '2024', event: 'Closed $20M USD Series C financing led by New Leaf Venture Partners' },
      { year: '2024', event: 'Honored as "Best in Class" at Digital Health Awards during HLTH conference in Las Vegas' },
      { year: '2025', event: 'Landmark adoption by The Mount Sinai Hospital in New York City' },
      { year: '2026', event: 'Secured major contract with Vizient, expanding to thousands of U.S. hospitals' },
    ],
    impactMetrics: { jobs: 40, capital: '$20M+ USD', pilots: 1, markets: 2 },
    founderQuote: {
      text: "NORCAT was a true partner; they were instrumental in launching our company. From prototyping to formal fundraising, the NORCAT Innovation team provided the experience, know how, and credibility we needed to develop a world-class start-up in the North.",
      author: 'Dr. Joe Eibl',
      role: 'CEO & Co-founder, FloSonics Medical',
    },
    currentStage: 'Scaling Across North America',
    whatsNext: 'FloPatch is now deployed in leading health systems across the continent, with widespread expansion within Sutter Health in California and a major Vizient contract cementing its presence in thousands of hospitals.',
    globalPresence: ['Sudbury', 'New York City', 'California', 'North America'],
    fullStory: "In the fall of 2015, FloSonics' four cofounders approached NORCAT Innovation with their idea for the FloPatch. The group worked together with NORCAT to validate the need for the FloPatch technology and subsequently received initial funding through NORCAT's Innovation Acceleration Program to support the planning, development and testing of the FloPatch prototype. The connection with NORCAT Innovation kindled a relationship with the Northern Ontario Angels (NOA), who coached the team to a successful pitch, aiding in the further development of a proof-of-concept device.\n\nIn March 2024, the company closed a $20 million USD Series C financing round led by New Leaf Venture Partners. This milestone allowed the company to scale its manufacturing and accelerate the adoption of FloPatch in emergency departments and ICUs across North America. By late 2024, FloSonics was honored as \"Best in Class\" at the Digital Health Awards during the HLTH conference in Las Vegas.\n\nAs of March 2026, the FloPatch is now deployed in leading health systems across the continent, including a landmark adoption by The Mount Sinai Hospital in New York City (2025) and a widespread expansion within Sutter Health in California.\n\nIn early 2026, FloSonics secured a major contract with Vizient, the largest member-driven healthcare performance improvement company in the U.S., further cementing its presence in thousands of hospitals.",
  },
  'jannatec': {
    id: 'jannatec',
    company: 'Jannatec Technologies',
    tagline: 'Leading wireless communication and safety solutions for mines worldwide.',
    sector: 'Mining Tech',
    stage: 'growth',
    status: 'commercial',
    metrics: { capitalRaised: '', jobsCreated: 30, marketsReached: 3 },
    programs: ['UG Centre', 'Mentorship'],
    image: jannatecProduct,
    founded: '2001',
    problem: 'Underground mines lacked reliable, lightweight communication and proximity detection systems-leaving miners vulnerable to collisions and communication blackouts in harsh environments.',
    breakthrough: {
      text: 'Jannatec developed uniquely designed cap lamps that are lightweight, longer-lasting, and incorporate two-way radio systems, RF identification tags, and collision avoidance technology that works with miners, heavy equipment, and vehicles. Their JAWS 2 (Jannatec Advanced Warning System) is an advanced proximity detection platform redefining underground safety.',
    },
    timeline: [
      { year: '2001', event: 'Founded as a mining communications company in Sudbury' },
      { year: '2010', event: 'Began testing and showcasing technology at NORCAT Underground Centre' },
      { year: '2022', event: 'Rey Boucher appointed President; company rebranded from communications to safety focus' },
      { year: '2023', event: 'Launched JAWS 2 advanced proximity detection platform' },
      { year: '2024', event: 'Opened permanent office at newly expanded NORCAT Underground Centre in Onaping Falls' },
      { year: '2025', event: 'Expanded into Nevada mining market through MineConnect partnership' },
    ],
    impactMetrics: { jobs: 30, capital: '25 yrs', pilots: 4, markets: 3 },
    founderQuote: {
      text: "From Jannatec's perspective, the best thing NORCAT Innovation has to offer us is their staff. From IT to administration, they've been extremely helpful to us in all our endeavors. They bend over backwards to assist us with showcasing our products and help to exhibit our company on the global stage.",
      author: 'Wayne Ablitt',
      role: 'Co-Founder & President, Jannatec Technologies',
    },
    currentStage: 'Commercial & Expanding',
    whatsNext: 'With a permanent engineering presence at the NORCAT Underground Centre and expansion into the Nevada market, Jannatec continues to redefine safety and communications for mines worldwide.',
    globalPresence: ['Sudbury', 'Ontario', 'Nevada', 'Global'],
    fullStory: "With 25 years of experience, Jannatec Technologies is leading the way as one of the preferred communication solution providers of total wireless networks to mines in Canada and throughout the world. Its Jannatec JET Lab and the Jannatec Edge of Technology house engineering staff, technologists, and technicians that are redefining communications in the mining industry.\n\nJannatec credits NORCAT's Underground Centre for allowing meaningful and practical testing and showcasing of its technology in an operating mine environment-a Centre situated in Sudbury that is unique to the global mining industry. Above ground at the NORCAT Centre, it's the cluster of informative individuals, mentors, and expertise under one roof that has supported Jannatec in their growth and development in new lines of products.\n\nIn late 2022, Jannatec underwent a significant leadership transition, appointing Rey Boucher as President to lead team development and commercial growth. During this period, the company pivotally rebranded its focus from communications company to a safety company and saw the launch of the JAWS 2 (Jannatec Advanced Warning System)-an advanced proximity detection platform.\n\nA major milestone occurred with the opening of a permanent office at the newly expanded NORCAT Underground Centre in Onaping Falls, placing Jannatec's engineering team directly within an active mining environment.\n\nThrough its association with MineConnect, located in NORCAT's Sudbury location, Jannatec has successfully expanded into the Nevada mining market.",
  },
  'plana-staffstat': {
    id: 'plana-staffstat',
    company: 'Plan A & StaffStat',
    tagline: 'People-first tech staffing strategy transforming senior care across Canada.',
    sector: 'Medtech / Health Tech',
    stage: 'growth',
    status: 'scaling',
    metrics: { capitalRaised: '', jobsCreated: 18, marketsReached: 1 },
    programs: ['Mentorship', 'VGS'],
    image: planaTeam,
    founded: '2012',
    problem: 'Long-term care homes in Canada had no reliable, modern way to fill nursing and PSW shifts-relying on cold calls at all hours, leading to chronic understaffing and burnout.',
    breakthrough: {
      text: 'Sheri Tomchick built StaffStat-a digital shift-filling platform that removes friction from frontline staffing. What started as a tool to get shifts to staff "stat" evolved into an intelligent workforce hub using AI to predict shift anomalies days or weeks in advance, measure staff engagement, and alert leaders when employees need more support.',
    },
    timeline: [
      { year: '2012', event: 'Sheri Tomchick founded Plan A staffing agency in Sudbury' },
      { year: '2014', event: 'Began developing StaffStat digital platform' },
      { year: '2016', event: 'Joined NORCAT Innovation; paired with mentor Peter Dal Bianco' },
      { year: '2020', event: 'StaffStat evolved into AI-powered workforce engagement hub' },
      { year: '2024', event: 'Expanded to support over 900 nursing homes across Canada' },
      { year: '2026', event: 'Team of 18 operating nationally from Greater Sudbury' },
    ],
    impactMetrics: { jobs: 18, capital: '900+', pilots: 2, markets: 1 },
    founderQuote: {
      text: "I got involved with NORCAT, and I was a really passionate business owner, but I needed help. I was running on a dream, a positive attitude, and a belief I was going to get this done. Once I was paired with Mr. Peter Dal Bianco, things really changed for my company. I don't think I'd be where I am today without somebody like Peter.",
      author: 'Sheri Tomchick',
      role: 'CEO & Co-founder, Plan A & StaffStat',
    },
    currentStage: 'Scaling Nationally',
    whatsNext: 'Supporting over 900 nursing homes across Canada with growing demand. StaffStat\'s AI-powered engagement analytics and predictive scheduling are setting a new standard for frontline healthcare staffing.',
    globalPresence: ['Greater Sudbury', 'Ontario', 'Canada'],
    fullStory: "Sheri's journey began with a dose of hard reality. After graduating from nursing and returning to Sudbury for her preceptorship, she quickly felt the cracks in the system. \"There was zero backup plan for nurses and PSWs in Sudbury,\" she says. \"I was ready to begin my career, but I just burned out really fast.\"\n\nThat fire began as a small staffing agency-Plan A. But Sheri hated cold-calling people, waking them up at all hours to fill shifts. She began developing what would become StaffStat-a digital shift-filling platform that would remove friction from frontline staffing.\n\nMentorship made the difference. \"Once I was paired with Mr. Peter Dal Bianco, things really changed for my company,\" Sheri says. The software evolved fast. What started as a shift-filling tool soon became an intelligent workforce hub.\n\nToday, StaffStat uses AI to predict shift anomalies days or weeks in advance. It measures staff engagement and alerts when employees are not engaged so leaders can act early.\n\nOn the ground, Mandy Gauthier is the human engine behind Plan A's national growth. \"I call Mandy the fairy godmother of long-term care,\" Sheri says. Their combined leadership has built a \"Small Giant\" in Canadian health tech.\n\n\"Nobody really understands all the magnificent things we're doing across Canada from Greater Sudbury… with an incredible team of 18,\" Sheri says proudly. Plan A now offers a full continuum of staffing services, from frontline recruitment to predictive scheduling to engagement analytics.\n\nPlan A and StaffStat now support over 900 nursing homes across Canada, with demand growing fast. \"There's nothing in the healthcare market that has as much impact on the front line as it does the bottom line as StaffStat.\"",
  },
  'maestro-digital-mine': {
    id: 'maestro-digital-mine',
    company: 'Maestro Digital Mine',
    tagline: 'IIoT environmental monitoring bringing clarity and safety underground.',
    sector: 'Mining Tech',
    stage: 'growth',
    status: 'commercial',
    metrics: { capitalRaised: '', jobsCreated: 50, marketsReached: 10 },
    programs: ['UG Centre', 'Mentorship'],
    image: maestroUnderground,
    founded: '2011',
    problem: "Underground mining is one of the few places on earth where every decision depends on real-time information-yet for years, it remained one of the last environments without it. In the early 2000s, modern digital systems and the Industrial Internet of Things were transforming nearly every sector except mining, which still relied on fragmented, analogue tools that offered limited visibility into air quality, environmental conditions, and worker safety. Drilling, blasting, heat, dust, vibration, darkness and narrow drifts made underground mines one of the harshest and least forgiving environments on earth for testing and deploying reliable networking technology.",
    breakthrough: {
      text: "Maestro built a suite of digital airflow, gas, particulate, and environmental monitoring systems purpose-built for underground work. Unlike traditional analogue sensors that offer isolated readings, Maestro's IIoT ecosystem provides context, diagnostics, and a connected understanding of underground conditions-showing whether ventilation is compromised, whether multiple sensors confirm the same trend, and whether a device is operating correctly. The result is an ecosystem that strengthens decision-making, reduces uncertainty, and empowers teams to anticipate problems instead of reacting to them.",
    },
    timeline: [
      { year: '2011', event: 'Founded by Michael Gribbons to bridge the digital gap in underground mining' },
      { year: '2014', event: 'Early concepts refined at the Tom Fortin Discovery Centre' },
      { year: '2016', event: 'One of the first companies to install technology at the NORCAT Underground Centre' },
      { year: '2022', event: 'Implemented full digital network for the inaugural Mining Transformed event in two weeks with two workers' },
      { year: '2025', event: 'Solutions deployed in mines around the world; 82% of workforce are newcomers to Canada' },
      { year: 'Feb 2026', event: 'Launched the PoE-enabled SuperBrite™ Marquee Display, delivering power and live environmental data over a single Ethernet cable' },
      { year: '2026', event: 'Confirmed as a featured technology exhibitor at Mining Transformed 2026 hosted by NORCAT' },
    ],
    impactMetrics: { jobs: 50, capital: 'Global', pilots: 6, markets: 10 },
    founderQuote: {
      text: "There was a significant gap between what mines had access to and what was possible. That's what we set out to solve. For decades, my father worked for mining companies with dangerous air quality and poor systems to measure the amounts of dangerous gasses he breathed in every day. These working conditions caused him severe lung damage. Maestro's core purpose was, and still is, to enhance lives by the pursuit of safety and productivity excellence.",
      author: 'Michael Gribbons',
      role: 'Founder & CEO, Maestro Digital Mine',
    },
    currentStage: 'Global Commercial Leader',
    whatsNext: "In February 2026, Maestro launched the PoE-enabled SuperBrite™ Marquee Display, eliminating the need for expensive high-voltage AC infrastructure by delivering both power and live environmental data over a single Ethernet cable. The company is confirmed as a featured technology exhibitor at Mining Transformed 2026, hosted by NORCAT.",
    globalPresence: ['Sudbury', 'Canada', 'Global'],
    fullStory: "Underground mining is one of the few places on earth where every decision depends on real-time information-yet for years, it remained one of the last environments without it. In the early 2000s, modern digital systems and the Industrial Internet of Things (IIoT) were transforming almost everything except mining operations. On the surface, factories, cities and transportation networks were becoming smarter by the year, while underground, mines still relied on fragmented, traditional tools that offered limited visibility.\n\nThat gap wasn't caused by a lack of demand-if anything, miners needed digital insight more urgently than any other industry-but by the very nature of the underground environment itself. Drilling, blasting, heat, dust, vibration, darkness and narrow drifts make underground mines one of the harshest and least forgiving environments on earth, especially for testing and deploying reliable networking technology.\n\nThis was the problem that caught the attention of Michael Gribbons and, in 2011, became the impetus for the founding of Maestro Digital Mine. \"There was a significant gap between what mines had access to and what was possible,\" Michael explains. \"That's what we set out to solve.\"\n\nWith a career that bridged mining and communications technology, Michael understood both the operational challenges and the technological barriers that had slowed progress underground. But he also carried a deeply personal understanding of what was at stake. \"For decades, my father worked for mining companies with dangerous air quality and poor systems to measure the amounts of dangerous and illness-causing gasses he breathed in every day,\" he says. \"These working conditions caused him severe lung damage and ultimately led to open-chest surgery.\"\n\nThis experience grounded Michael's belief that digitalization in mining didn't just mean modernizing equipment to improve productivity; it also meant giving mining operators the information they require to ensure their most important resources-their people-stay safe and healthy. \"Maestro's core purpose was, and still is, to enhance lives by the pursuit of safety and productivity excellence,\" he says.\n\nFrom the beginning, Michael envisioned a mine where workers, supervisors, and operators could finally know what was happening in the air around them and on the ground beneath them. To make that vision real, Maestro began developing a suite of digital airflow, gas, particulate, and environmental monitoring systems built specifically for the realities of underground work. A core principle drove that development: safety and productivity are inseparable.\n\nWhere traditional analogue systems offer isolated readings, Maestro's IIoT ecosystem provides context, diagnostics, and a connected understanding of underground conditions. An analogue sensor might report that dangerous carbon monoxide levels have risen-a single data point with no indication of why. An embedded digital system, by contrast, can show whether ventilation is compromised, whether multiple sensors are confirming the same trend, and whether the device itself is operating correctly. Instead of reacting to issues after the fact, operators can anticipate them.\n\nMaestro's relationship with NORCAT became a turning point in demonstrating that this vision was not only possible, but practical. Early support from Tom Fortin and the Tom Fortin Discovery Centre played a meaningful role by providing Maestro with the environment required to test, refine, and prove out the initial concepts. Subsequently, Maestro was one of the first companies invited to install its technology at the NORCAT Underground Centre, where the company had the rare opportunity to validate its hypothesis in a real mine environment.\n\nThis foundation led directly into Maestro's role in the inaugural Mining Transformed event in 2022, where the company was asked by NORCAT Technology Manager Greg Lajeunesse to implement a full digital network throughout the underground mine. \"We accepted the challenge and the result-accomplished in two weeks with only two workers who had two hours of training-was a clear demonstration of what integrated IIoT can accomplish,\" says Michael. \"Immediate visibility, simplified workflows, and faster decision-making in an environment that had historically offered little of it.\"\n\nThat momentum carried directly into Maestro's next chapter. In February 2026, the company launched the Power over Ethernet (PoE)-enabled SuperBrite™ Marquee Display, eliminating the need for expensive, high-voltage AC electrical infrastructure by delivering both power and live environmental data over a single Ethernet cable. Maestro has also been confirmed as a featured technology exhibitor at the Mining Transformed 2026 exhibition hosted by NORCAT.\n\nToday, Maestro Digital Mine's solutions are used around the world, bringing clarity and confidence to underground environments where they were once hard to achieve. Yet despite the company's growth and technical success, Michael has never measured progress solely through products. \"Today, around 82% of Maestro's workforce are newcomers to Canada,\" Michael explains. \"I've had the joy of watching them build new lives in Canada-securing permanent residency, purchasing their first home, getting married and having children. To me, that's the most meaningful measure of success.\"",
  },
  'chamber-perks': {
    id: 'chamber-perks',
    company: 'Chamber Perks App',
    tagline: 'What happens when local business gets the tech it deserves.',
    sector: 'SMB Tech',
    stage: 'growth',
    status: 'scaling',
    metrics: { capitalRaised: '', jobsCreated: 0, marketsReached: 1 },
    programs: ['VGS', 'Mentorship'],
    image: karenHastie.url,
    founded: '2020',
    problem: 'Local chambers of commerce and the small businesses they serve were stuck with outdated tools to deliver member value-paper coupons, PDF directories, and disconnected loyalty programs that no one actually used.',
    breakthrough: {
      text: 'Chamber Perks App gives chambers a modern, mobile-first platform that turns member benefits into a living, daily-use product-driving real foot traffic to local businesses and proving the value of chamber membership in a way members can see and measure.',
      image: chamberPerksLogo.url,
    },
    timeline: [
      { year: '2020', event: 'Karen Hastie founds Chamber Perks App to modernize how chambers deliver member value' },
      { year: '2022', event: 'First chambers onboarded; platform validated across multiple communities' },
      { year: '2024', event: 'Joined NORCAT Innovation programs to accelerate growth and product strategy' },
      { year: '2026', event: 'Scaling across chambers nationally, powering everyday support for local business' },
    ],
    impactMetrics: { jobs: 5, capital: 'Bootstrapped', pilots: 10, markets: 1 },
    founderQuote: {
      text: "Karen Hastie wasn't built for retirement. She was built to build-and Chamber Perks App is proof that when local business gets the technology it deserves, entire main streets come back to life.",
      author: 'Karen Hastie',
      role: 'Founder & CEO, Chamber Perks App',
    },
    currentStage: 'Scaling Nationally',
    whatsNext: 'Expanding to more chambers across Canada and continuing to build features that turn chamber membership into measurable, daily value for local businesses.',
    globalPresence: ['Sudbury', 'Canada'],
    fullStory: "Karen Hastie wasn't built for retirement. After decades of championing small business, she saw a gap that no one else was fixing: chambers of commerce-the original local-business networks-were running on tools that hadn't kept up with how people actually live, shop, and connect.\n\nChamber Perks App is her answer. It gives chambers a modern, mobile-first way to deliver member benefits, drive foot traffic to local businesses, and make the value of membership tangible. Instead of paper coupons and PDFs no one opens, members get a daily-use app that puts their community in their pocket.\n\nThrough NORCAT Innovation's Venture Growth Services and mentorship programs, Karen has sharpened her go-to-market, expanded the platform, and onboarded chambers across the country-proving that when local business gets the technology it deserves, the whole community wins.",
  },
  'codalio': {
    id: 'codalio',
    company: 'Codalio',
    tagline: 'AI-powered MVP builder solving the 70% problem for non-technical founders.',
    sector: 'AI & Automation',
    stage: 'growth',
    status: 'scaling',
    metrics: { capitalRaised: '$250K', jobsCreated: 8, marketsReached: 1 },
    programs: ['SCF', 'VGS', 'Mentorship', 'RAI'],
    image: codalioLogo.url,
    founded: '2023',
    problem: 'Building software is an expensive process-80-90% of early-stage capital is spent on tech development that often gets revamped multiple times. Generative AI tools get founders 70% of the way (UI and prototype), but the final 30%-logic, security, backend architecture, integration-hits a wall, leaving non-technical founders stranded with code they can\'t scale and a product they can\'t launch.',
    breakthrough: {
      text: 'Codalio is a true MVP-building tool that converts natural language into functional, enterprise-grade applications. Powered by the open-source Rhino platform and a proprietary AI core engine trained on best software practices, it handles the heavy lifting of the backend, solves the 70% problem, and hands over full code ownership-reducing development cost and time-to-market by up to 80%.',
      image: codalioLogo.url,
    },
    timeline: [
      { year: '1999', event: 'Ehsan Mirdamadi begins his career as a serial tech entrepreneur, later bootstrapping Canada\'s first and largest cloud computing company to a successful exit' },
      { year: '2023', event: 'Codalio founded to fix the MVP gap and the "70% Problem" facing non-technical founders' },
      { year: '2024', event: 'Codalio relocates to Sudbury; Sudbury Catalyst Fund invests $250,000 to accelerate the platform' },
      { year: '2025', event: 'Co-hosts hands-on MVP workshop with NORCAT Innovation; expands full-stack AI development platform across Canada' },
    ],
    impactMetrics: { jobs: 8, capital: '$250K', pilots: 0, markets: 1 },
    founderQuote: {
      text: "We're lying to founders about how easy it is to build software with AI. AI gets you 70% of the way there-the UI and the prototype. The final 30%-logic, security, backend, integration-is where founders get stranded. Codalio is the MVP builder that finishes the job and hands you full code ownership.",
      author: 'Ehsan Mirdamadi',
      role: 'Co-Founder & CEO, Codalio',
    },
    currentStage: 'Scaling',
    whatsNext: 'Scaling the Codalio platform nationally, expanding the Rhino open-source ecosystem, and deepening AI adoption support for Northern Ontario SMEs through the Regional AI Initiative.',
    globalPresence: ['Sudbury', 'Canada'],
    fullStory: "Ehsan Mirdamadi has spent more than two decades inside Canadian tech. A serial entrepreneur since 1999, he bootstrapped Canada's first and largest cloud computing company before exiting and turning his attention to a critical, frustrating gap in the country's innovation pipeline: the MVP gap.\n\nBuilding software is expensive. A staggering 80-90% of early-stage capital is burned on tech development that gets revamped multiple times. Generative AI was supposed to fix this-but Ehsan saw the catch immediately. \"We're lying to founders about how easy it is to build software with AI,\" he says. AI tools are incredible at getting you 70% of the way there-usually the UI and the prototype. The final 30%-the logic, security, backend architecture, and integration-hits a wall. Non-technical founders get stranded with code they can't scale and a product they can't launch.\n\nCodalio is his answer. A Sudbury-based, AI-powered SaaS startup, Codalio is built as a true MVP-building tool for non-technical founders. The platform converts natural language into functional applications, powered by the open-source Rhino platform-developed and owned by Codalio's founders-and a proprietary AI core engine trained on best software development practices and expert-designed infrastructure blueprints. The result: enterprise-grade full applications, not locked-in runtimes or limited code snippets. Codalio cuts development cost and time-to-market by up to 80%, and crucially, hands founders full code ownership.\n\nThe Sudbury Catalyst Fund invested $250,000 in Codalio to accelerate the platform. \"Their success reflects the innovation and entrepreneurial spirit thriving in our community,\" said Don Duval, CEO of NORCAT and co-managing partner of the SCF. \"Their decision to relocate to Sudbury reinforces this momentum.\" Codalio has co-hosted hands-on MVP workshops with NORCAT Innovation in Sudbury, teaching founders the frameworks, tools, and confidence to turn vision into reality-and is helping power FedNor's Regional AI Initiative, which is investing in AI adoption, integration, and commercialization across Northern Ontario SMEs.",
  },
  'podco': {
    id: 'podco',
    company: 'PodCo',
    tagline: 'From Prototype to Production, the PodCo Way.',
    sector: 'Mining Tech',
    stage: 'growth',
    status: 'commercial',
    metrics: { jobsCreated: 5, marketsReached: 1 },
    programs: ['UG Centre', 'Mentorship', 'IAP'],
    image: podcoDiscoveryLab.url,
    founded: '2017',
    problem: 'Mining technology demands holistic innovation: devices must be robust enough to survive deep underground for years under a "set-it-and-forget-it" mandate, while remaining affordable to manufacture. Uncontrolled water flow in underground mines creates dangerous inrush hazards that threaten infrastructure and lives, yet many promising prototypes fail because they are not designed for production.',
    breakthrough: {
      text: 'PodCo develops professional hardware solutions from concept to prototype through production, applying rigorous mechanical and electrical integration to create devices that survive hostile underground environments. Their work on the NORCAT Open Innovation Challenge with Vale produced a hardware solution to detect and mitigate uncontrolled water flow, moving from the Fortin Discovery Lab to the NORCAT Underground Centre and ultimately to a three-year pilot at Vale\'s Garson Mine.',
      image: podcoLogo.url,
    },
    timeline: [
      { year: '2017', event: 'Stephen Podrucky launches PodCo in Greater Sudbury after seven years at Jannatec Technologies' },
      { year: '2018', event: 'Sets up shop permanently in the Fortin Discovery Lab at the NORCAT Innovation Centre' },
      { year: '2019', event: 'Selected for the NORCAT Open Innovation Challenge with Vale to address underground inrush hazards' },
      { year: '2020', event: 'Begins iterative prototyping and field testing at the NORCAT Underground Centre' },
      { year: '2021', event: 'Launches three-year pilot project at Vale\'s Garson Mine' },
      { year: '2024', event: 'Collaborates with NORCAT CTO Ed Wisnewski on the FiAR augmented-reality fire extinguisher training device' },
      { year: '2026', event: 'Serves mining sector clients across Canada as a trusted prototype-to-production engineering partner' },
    ],
    impactMetrics: { jobs: 5, capital: 'Bootstrapped', pilots: 3, markets: 1 },
    founderQuote: {
      text: 'Everything is interconnected, and it\'s our job to make the necessary tweak to get products to market seamlessly. If you don\'t have that holistic approach, you risk creating a great prototype that\'s impossible to manufacture affordably.',
      author: 'Stephen Podrucky',
      role: 'Founder & CEO, PodCo Inc.',
    },
    currentStage: 'Prototype-to-Production Partner',
    whatsNext: 'PodCo continues to support clients across mining and beyond-including Maestro Digital Mine, SYMX.AI, Jannatec, CircuitIQ, and NORCAT\'s own Studio-while mentoring new entrepreneurs to engage with the local ecosystem.',
    globalPresence: ['Greater Sudbury', 'Ontario', 'Canada'],
    fullStory: `The sheer complexity of mining technology demands that innovators operate with a holistic mindset—not just inventing something clever but ensuring it is robust enough to survive deep underground. For Stephen Podrucky, Founder of PodCo Inc., achieving this seamless, complete vision became the central quest of his career, born from a desire to escape the narrow constraints of conventional engineering.

Stephen’s path began like that of many ambitious engineers: extensive academic study culminating in a Technologist Diploma, a Bachelor of Electrical Engineering, and a Master’s degree in Electrical Engineering. Yet, he found himself restless, describing the graduate research system as a “very strange setup,” where efforts were often organized solely around securing funding rather than solving real-world problems. He knew he didn’t want a “standard kind of engineering cubicle job” at a big firm. His ambition was simpler, yet fundamentally challenging: “I always just thought it would be cool to make real work contributions by inventing something,” and to pursue it.

Driven by a desire to get closer to hands-on product design and to leave behind the big-city life of Toronto, Stephen moved north to Greater Sudbury. After seven years at Jannatec Technologies, a Sudbury-based mining technology company, he launched PodCo—a firm focused on providing professional expertise from concept to prototype, right through to production.

PodCo’s early success was closely tied to the Fortin Discovery Lab, located within the NORCAT Innovation Centre. The lab provided the space, tools, and technical support—including 3D printers and CNC machines—necessary for prototyping and certification. The lab, the brainchild of local visionary Tom Fortin (whom Stephen considers a strong advocate and “unbelievable guy”), offered more than just equipment. After setting up shop permanently in the manufacturing lab, Stephen tapped into the wider innovation ecosystem. He received “a lot of fun references for work through Tom and also through NORCAT,” which he says proved to be “such strong support, especially first getting started.”

“Everything is interconnected, and it’s our job to make the necessary tweak to get products to market seamlessly,” Stephen explained. He stressed that pulling just one component risks failing the entire solution. “If you don’t have that holistic approach,”—considering price points, mechanical and electrical integration, and final fabrication costs—“you risk creating a great prototype that’s impossible to manufacture affordably.”

This philosophy was immediately put to the test when PodCo was selected for the NORCAT Open Innovation Challenge, in partnership with Vale. The problem was critical: uncontrolled water flow in underground mines, often leading to the dangerous “inrush of material”—a hazard that has caused damage to infrastructure and, tragically, the loss of life. It was exactly the kind of challenge PodCo had been waiting for. They began developing a hardware solution to detect and mitigate these conditions.

The unique requirement? The device had to survive underground, not just “a week, or a couple of weeks,” but under a “set-it-and-forget-it” mandate. Solving this real-world engineering challenge required extensive trial and error—from the workbench to field testing in the controlled but hostile environment of the NORCAT Underground Centre, and ultimately at Vale’s Garson Mine for a three-year pilot project. For Stephen, this was the essence of innovation: “realizing that no one has done this before, so how do we do it right?”

Today, PodCo exemplifies the agility and depth of talent in Northern Ontario’s innovation economy. The company supports clients across the mining sector and beyond, including Maestro Digital Mine, SYMX.AI, Jannatec, CircuitIQ, and even NORCAT’s own Studio, where Stephen collaborated with CTO Ed Wisnewski on the prototyping and development of the flagship FiAR—an augmented reality fire extinguisher training device.

Stephen encourages new entrepreneurs to “definitely connect with NORCAT, get involved with your local ecosystem,” and to tap into the unique resources and knowledge available. Sudbury’s innovation community is, in his words, “really unique” and continues to impress tech leaders nationally and internationally.

PodCo’s success story confirms that Greater Sudbury’s strength lies not only in the resources it extracts, but in the collaborative intelligence and human ingenuity it cultivates.

PodCo takes pride in striving to make every product “portable, strong, and right the first time.”`,
  },
  'medatech-raisepro': {
    id: 'medatech-raisepro',
    company: 'MEDATech RaisePro',
    tagline: 'Developing Safer Underground Drilling Technology.',
    sector: 'Mining Tech',
    stage: 'growth',
    status: 'commercial',
    metrics: { jobsCreated: 10, marketsReached: 1 },
    programs: ['UG Centre', 'Mentorship'],
    image: medatechRaisePro.url,
    founded: '2003',
    problem: 'Shaft sinking has historically relied on drilling and blasting, a cycle that is one of the most hazardous, expensive, and time-consuming operations in mining. While raise boring improved safety and efficiency, the market still faced a significant gap in equipment size—too large for some applications, too small for others. Mines needed a versatile ITH-raise drill that could operate safely across a wide range of diameters and depths.',
    breakthrough: {
      text: 'MEDATech developed the RaisePro-48T, a track-mounted In-The-Hole (ITH) raise drill capable of drilling 3.5” to 48” holes for production, maintenance, slot raises, and escapeways. The design and build were completed in approximately twelve months, and the drill was validated at the NORCAT Underground Centre before shipping to Vale\'s North Mine in Sudbury, where it reamed a 230-foot pilot hole from 9” to 42”.',
      image: medatechRaisePro.url,
    },
    timeline: [
      { year: '2003', event: 'MEDATech Engineering Services founded in Canada, specializing in heavy-duty mobile equipment design' },
      { year: 'Sep 2023', event: 'Detailed design of the RaisePro-48T begins, led by MEDATech owner Robert Rennie and Archer Mining\'s Steve Archer' },
      { year: 'Sep 2024', event: 'RaisePro-48T presented at Mine Expo after a rapid twelve-month design-and-build cycle' },
      { year: '2025', event: 'Intensive testing at the NORCAT Underground Centre with support from Boart Longyear operators' },
      { year: '2025', event: 'Drill shipped to Vale\'s North Mine in Sudbury for first operational hole, reaming 230 ft from 9” to 42”' },
      { year: '2026', event: 'RodBot robotic rod handler being evolved for underground ITH configuration; additional 48” and 60” capacity RaisePro variants in development' },
    ],
    impactMetrics: { jobs: 10, capital: 'Bootstrapped', pilots: 3, markets: 1 },
    founderQuote: {
      text: 'We saw a real gap in raise boring equipment size. Our goal was to build a safer, more efficient ITH-raise drill that gives mines the versatility they need without the years-long timelines of traditional shaft sinking.',
      author: 'Robert Rennie',
      role: 'President & CEO, MEDATech Engineering Services',
    },
    currentStage: 'Commercial Validation & Expansion',
    whatsNext: 'MEDATech is evolving the RodBot hydraulic robotic rod handler for underground ITH use, and developing additional RaisePro configurations including a 48-inch rubber-tired drill and larger 60-inch capacity models.',
    globalPresence: ['Greater Sudbury', 'Ontario', 'Canada'],
    fullStory: `Imagine a high-rise building under construction. Now remove the elevator shaft. Suddenly, every floor is isolated: no air, no materials, no movement of workers or tools. That’s what a mine without raises looks like underground.

Historically, shaft sinking was done using drilling and blasting. Miners would drill blast holes into the rock at the shaft bottom. Next, explosives would break the rock apart. Then, labouring crews would muck out (remove) the broken rock. The cycle would repeat, often taking years to reach deep ore bodies. Unquestionably, it’s one of the most hazardous and expensive mining operations.

The evolution of modern mechanised mining introduced raise boring, a safer, more efficient method that uses a machine set up on an upper level to drill a pilot hole, then pulls a large reamer head upwards to excavate the full-diameter hole. While raise boring has seen immense improvements—capable of drilling shafts up to 7.1 metres in diameter and over a kilometre deep—the market still faced a significant gap in equipment size.

This is the problem MEDATech stepped in to solve, driven by the vision of finding new efficiencies and safety improvements.

Robert Rennie, the owner of MEDATech, had extensive experience with ITH drilling from his previous roles at OEMs like MacLean’s and Cubex. Together with Steve Archer of Archer Mining, they realised the significance of this gap, and detailed design of the RaisePro began in September 2023.

The detailed design and build phase took approximately twelve months, resulting in the drill being presented at Mine Expo in September 2024—an impressively rapid turnaround compared to the typical multi-year development timeline for new, large equipment builds in the industry.

Despite the speed of development, the true test of this sophisticated piece of machinery could not happen on the shop floor. MEDATech had strong connections to Sudbury, thanks to Steve Archer and Robert Rennie’s history in the region, but for the buyers, there was a real need to “see it operate before they would commit to buying or renting the drill.”

The NORCAT Underground Centre (UGC) provided the perfect solution, and MEDATech brought their technology to the "active laboratory" in Onaping. Taylor Davies, Division Manager at MEDATech, said, “the plan for NORCAT was to be the first-time having mine air supply, having mine water supply, and being able to apply a torque against the top drive on the drill… because we weren’t going to drill into our shop floor prior to that.”

The testing period was intensive and collaborative, with MEDATech benefiting from Boart Longyear supplying five team members to operate the drill and provide feedback throughout the testing. Taylor elaborates, “when we\'re designing machines, you make a lot of assumptions... that you\'re going to have the perfect mine air pressure and mine air temperature [and] consistent mine water flow... to be in an area that demonstrated a mining environment was very good for testing and fine-tuning.” MEDATech generated a significant list of opportunities for improvement. “We knew we had about eight weeks from the drill returning to our facility... to work through [it] before it was going to be shipped to Vale for the first operational hole.”

The drill was shipped to Vale’s North Mine in Sudbury and reamed an existing pilot hole that was 230 feet long from 9” diameter to 42”. This demonstrates the drill’s varying capability to operate at wider diameters as well as production hole diameters down to 3.5”, both at significantly longer hole lengths than competing ITH drills.

The next major step is evolving the existing RodBot technology, a hydraulic robotic rod handler, into an underground ITH drilling configuration, for use with the RaisePro and other ITH drills. This is a necessity because the RaisePro drills large-diameter, deep holes, requiring heavy drill rods that can weigh up to 150 pounds. Manually handling these heavy rods is dangerous, and most mines are moving away from that practice. The new RodBot configuration, which includes a semi-automated path planning feature, will require testing at the UGC.

MEDATech will continue to develop additional configurations of the RaisePro, including a 48-inch capacity drill on rubber tires, and even larger 60-inch capacity drills.`,
  },
  'kinmetrix': {
    id: 'kinmetrix',
    company: 'Kinmetrix',
    tagline: 'Bringing Data to the Missing Link in Athlete Safety.',
    sector: 'Medtech',
    stage: 'growth',
    status: 'scaling',
    metrics: { capitalRaised: '$250K', jobsCreated: 8, marketsReached: 4 },
    programs: ['SCF', 'Mentorship', 'VGS', 'IAP'],
    image: kinmetrixArc.url,
    founded: '2019',
    problem: 'Sports medicine has long lacked objective, quantifiable data around neck strength, even though the neck connects the entire nervous system and plays a decisive role in force absorption, head control, and concussion resilience. Traditional neck training relied on manual resistance and subjective assessment, leaving athletes, coaches, and medical staff guessing about one of the body\'s most vulnerable areas.',
    breakthrough: {
      text: 'Kinmetrix blends robotics with sensor technology to create the Kinmetrix Arc, the first digital device that establishes baseline neck strength metrics and autonomously prescribes targeted cervical workouts. By replacing subjective manual resistance with precise, repeatable measurement, the Arc gives elite athletes, research facilities, and medical teams data they cannot get anywhere else in the world.',
      image: kinmetrixArc.url,
    },
    timeline: [
      { year: '2019', event: 'Kim Brouzes takes the reins as CEO of Kinmetrix, bringing decades of hands-on athletic therapy experience to the venture' },
      { year: '2020', event: 'Development begins on the Kinmetrix Arc, combining robotics and sensor technology for objective neck-strength assessment' },
      { year: '2022', event: 'Prototype validated with athletic therapists, sports teams, and early research partners in Sudbury' },
      { year: '2024', event: 'Secures $250,000 from the Sudbury Catalyst Fund with mentorship from Peter Dal Bianco' },
      { year: '2025', event: 'Expands into major leagues, college sports, the OHL, Formula 1, and the United States Department of Defense' },
      { year: '2026', event: 'Introduces the Kinmetrix Arc to Eric Lindros and deepens engagement with combat-sport and performance-institute partners' },
    ],
    impactMetrics: { jobs: 8, capital: '$250K', pilots: 5, markets: 4 },
    founderQuote: {
      text: 'Learn what your strengths are in every role that you take on, and integrate yourself into the support systems and community infrastructure of Greater Sudbury—where dedicated innovators become global leaders.',
      author: 'Kim Brouzes',
      role: 'Founder & CEO, Kinmetrix Inc.',
    },
    currentStage: 'Scaling Across Elite Sports & Research',
    whatsNext: 'Kinmetrix is expanding the Arc into combat-sport environments, including conversations with the UFC Performance Institute, while continuing to build the global data set around neck strength and concussion resilience.',
    globalPresence: ['Greater Sudbury', 'Canada', 'USA', 'Global'],
    fullStory: `The ingenuity forged in the rocks and refined in the industrial innovation of Sudbury has always possessed a singular focus: solving intractable problems to protect the well-being of people.

As we shift focus from the technological revolution underground to the innovations saving lives and improving health on the surface, the story of Kinmetrix Inc. is powerfully framed by the personal journey of its CEO, Kim Brouzes, whose wisdom and deep roots in Sudbury were instrumental in transitioning a crucial invention into a global solution.

Kim Brouzes’s path to leading a high-tech venture was unexpectedly rooted not in corporate strategy, but in decades of hands-on patient care. She established her reputation in Sudbury over 25 years as an Athletic Therapist with Active Therapy Plus. It was only recently, at the age of 51, that Kim had a moment of intense self-discovery. She realised her core competency wasn’t just physical therapy; it was her ability to connect and educate. “The value I have is somewhere between kindness and my ability to educate and teach,” she shared, adding, “I literally talk all day long.” Her people-first approach—building trust and communicating clearly—became her unexpected “superpower” as she stepped onto the global stage.

When entrepreneurial physician Dr. Dennis Reich asked Kim to take the reins as CEO of Kinmetrix, she admitted she had “no formal training as a CEO.” The shift required her to learn complex corporate terminology like “burn rates and COGS (Cost of Goods Sold),” a language she had “no idea” how to speak. From her medical background, Kim described the experience as having to learn “literally from the ground up.”

The technology she championed—the Kinmetrix Arc—addresses a critical gap in sports safety: the lack of objective, quantifiable data around neck strength. Traditionally, and even now, strengthening the neck—connecting the entire nervous system of the body—relied on subjective “manual resistance.” Physical resistance against the neck, pushing and pulling, is primal. Kinmetrix blends “robotics with sensor technology” to collect and establish data and metrics that illustrate a baseline that simply doesn’t exist “anywhere in the world.”

While Kim and Dennis Reich are the big picture “innovators,” she relied heavily on colleagues like Lisa Aho, the CFO/COO, who she calls the “brain with numbers… she grounds us.” Veteran entrepreneur Bernie Aho created some of the “best software the NFL has ever seen” for the Arc, allowing the machine to autonomously assess and prescribe workouts. “The Northern spirit is about the collective—utilising and leveraging each other’s strengths.”

Kinmetrix’s growth was profoundly accelerated by the Sudbury Catalyst Fund, securing a $250,000 seed funding round. Kim recalled being “so nervous” before her first pitch because she had “never had to present for money.” Peter Dal Bianco provided “beautiful mentoring” by taking her existing strengths and showing her how to apply them to pitching. This support was “an imperative piece” to their success, confirming their decision to “headquarter Kinmetrix here.”

Kim’s extensive network, honed over 25 years in the medical field, opened doors to major leagues, college sports teams, and influential performance centres. NHL ambassador Nick Foligno confirmed the significance, stating he is “excited and inspired by the work Kim, Bill, and the team have put into this amazing product,” believing that “strengthening the neck safely to eventually reduce concussion rates is crucial, now more than ever.” One particularly meaningful milestone came when Kim had the opportunity to introduce the Kinmetrix Arc to Eric Lindros. For her, it was a profound moment—Eric is the reason she has worked so hard on improving concussion outcomes across her 26-year career. They shared a great discussion, he offered remarkable insight, and the conversation opened the door to future collaborations.

Kim found herself doing podcasts with people she never thought she would share the stage with, including personnel from the NFL, UFC, and Formula One. She recounts the humorous shock of mistaking famed NFL agent Lee Steinberg for a homeless person due to his dishevelled attire at the NFL Combine—a conversation that led to an invitation to test athletes at a Super Bowl party.

This traction confirms the value of the unique pool of data Kinmetrix is gathering, sought after by research facilities, universities, the Ontario Hockey League, Formula 1, and, pending approval, the United States Department of Defense.

Combat sports have become an especially important frontier. UFC athletes are among the most complete high-performance athletes in the world—combining explosive power, reaction speed, endurance, mobility, and resilience. As modern MMA training becomes more data-driven and scientifically optimized, the role of neck strength and cervical stability deserves far more attention. The neck is central to force absorption, head control, striking mechanics, grappling posture, fatigue resistance, and potential concussion mitigation. That is precisely why the Kinmetrix Arc was built: to bring objective measurement and targeted cervical training into elite performance environments. As organizations like the UFC Performance Institute continue pushing sports science forward, Kinmetrix is excited to be part of the evolving conversation around athlete performance and protection.

She advises new entrepreneurs to embrace the “familial” and low-ego environment where people do things to “help more people as opposed to snubbing or discrediting.” She notes that having been successful in Sudbury, she now understands why other companies should move here: “It’s the community that embraces you, coupled with the affordability to live and the beautiful landscape.”

“Learn what your strengths are in every role that you take on,” she advises, and integrate yourself into the support systems and community infrastructure of Greater Sudbury—where dedicated innovators become global leaders.`,
  },
  'waive': {
    id: 'waive',
    company: 'Waive',
    tagline: 'Automating the Administrative Burden in Healthcare',
    sector: 'Medtech',
    stage: 'growth',
    status: 'scaling',
    metrics: { capitalRaised: '$250K', jobsCreated: 5, marketsReached: 3 },
    programs: ['SCF', 'Mentorship', 'VGS', 'IAP'],
    image: waiveLogo.url,
    founded: '2020',
    problem: 'Canadian clinics are drowning in administrative work while patients fall through the cracks of an overloaded system. Family doctors spend an average of 19 hours a week on administrative tasks, and 94 percent report feeling overwhelmed, leaving less time for actual care and creating dangerous delays for patients waiting in emergency rooms or chasing lost referrals.',
    breakthrough: {
      text: 'Waive is building AI administrators that work directly inside electronic medical record systems. Its Automated Task Manager handles patient outreach and form completion, while its Document Triaging Service reads and classifies the flood of daily faxes and emails, routing them accurately and triggering workflows so urgent information never sits idle over a weekend.',
      image: waiveLogo.url,
    },
    timeline: [
      { year: '2020', event: 'Waive launches as The Smart Waiting Room through Queen’s University QICSI, delivering predictive notifications to help patients arrive at appointments just in time' },
      { year: '2021', event: 'After clinic feedback reveals deeper administrative burnout, the company pivots toward AI tools that reduce the paperwork burden on physicians and staff' },
      { year: '2023', event: 'Wins Judges’ Choice at NORCAT’s Venture North PITCH, joining the local ecosystem and securing its first Sudbury-based angel investor' },
      { year: '2023', event: 'Relocates and expands to Greater Sudbury with a $250,000 investment from the Sudbury Catalyst Fund' },
      { year: '2024', event: 'Refines document triaging and workflow automation so clinics can process inbound files instantly, even after hours' },
      { year: '2025', event: 'Expands across Canada and begins moving into England and the United States' },
    ],
    impactMetrics: { jobs: 5, capital: '$250K', pilots: 5, markets: 3 },
    founderQuote: {
      text: "Clinics don't need to be buried under paperwork. We took a 15-part process and turned it into three.",
      author: 'Shreyansh Anand',
      role: 'Co-Founder & CEO, Waive',
    },
    currentStage: 'Scaling Across Canada and Into Global Markets',
    whatsNext: 'Waive is expanding its AI administrator platform across Canada and into England and the United States, helping more clinics eliminate the tedious work that keeps staff from focusing on patients.',
    globalPresence: ['Canada', 'England', 'United States'],
    fullStory: `The mission of WaiveTheWait, now known simply as Waive, is defined by a refusal to accept the chaos embedded within the Canadian health care system. Fuelled by personal frustration and transformed into a high-impact solution, the company is developing AI administrators for clinics.

For CEO and co-founder Shreyansh Anand, the idea was sparked by a troubling childhood memory. After his father suffered a serious accident, the family rushed him to the nearest hospital—only to “end up waiting about eight hours overnight before he finally got the help he needed.”

Anand became determined to make health care “more patient-focused and transparent,” with a vision rooted in “providing people peace of mind.” For COO and co-founder Tabassum Pasha, the problem hit just as personally. “I needed to see a specialist. My referral was never sent, and I waited almost two years before I got the care I needed.”

What began as two personal frustrations quickly revealed themselves to be systemic issues. “Thousands of patients fall through the cracks of our health care system because clinics are overwhelmed,” the pair realised. Their goal became clear: build tools that enable a future where “physicians are less overwhelmed, staff are happier, and patients are safer.”

Waive launched in May 2020 through Queen’s University’s QICSI (Centre for Entrepreneurship, Innovation & Social Impact) under the name The Smart Waiting Room, offering predictive notifications to help patients arrive at appointments just in time. But by May 2021, after gathering feedback from clinics, the founders identified a deeper issue: administrative burnout.

“We found that, on average, family doctors spend 19 hours a week on administrative tasks,” says Pasha, “and a staggering 94 per cent report they are overwhelmed.”

Family physician and Waive’s Chief Medical Officer Dr. Shane Teper echo this urgency. “There is such an influx of information coming into clinics now. It’s almost like a firehose of data landing in your electronic medical record,” he says. “Physicians are spending at least two hours a day just managing that inflow—not even doing the clinical work.”

Waive is addressing that challenge with two core AI tools:

The Automated Task Manager performs time-consuming tasks like patient outreach and form filling directly within the electronic medical record.

The Document Triaging Service uses AI to read and classify “hundreds of faxes and emails” clinics receive each day, labelling them accurately and routing them to the appropriate physician.

“This kind of automation eliminates the very tedious, time-sucking work,” Pasha says, “and frees up staff to focus on work that’s truly value-added.”

Waive is now advancing its AI models to trigger workflows from inbound documents, ensuring that when important information arrives—whether from a referral, a follow-up form, or test results—it doesn’t sit idle. “With this automation, clinics can process files that come in instantly, even on a Friday at 6 p.m.,” explains Pasha. “The system flags anything urgent, so by Monday, the appointment is already booked rather than just discovered.”

The company has focused on making its tools seamless. “We integrate directly with your clinical systems and workflows,” Pasha says. “There’s no need to log into a separate platform or retrain staff. Most automation tools assist—Waive fully handles the task.”

Since joining Sudbury’s innovation ecosystem, momentum has accelerated. Waive won Judges’ Choice at NORCAT’s 2023 Venture North Pitch (VNP) event, which also led to the company’s relocation and expansion to Greater Sudbury with support from a $250,000 investment from the Sudbury Catalyst Fund.

“Support from NORCAT was critical in our decision to relocate to Sudbury,” says Pasha. “VNP launched us into the ecosystem and led us to our first Sudbury-based angel investor.”

Now expanding across Canada and into England and the United States, Waive is proving that community-backed companies can deliver global solutions in health tech.

“Clinics don’t need to be buried under paperwork,” Anand says. “We took a 15-part process and turned it into three.”`,
  },
  'iregained': {
    id: 'iregained',
    company: 'IRegained',
    tagline: 'Rewiring the Brain to Regain the Hand',
    sector: 'Medtech',
    stage: 'growth',
    status: 'scaling',
    metrics: { capitalRaised: '$250K', jobsCreated: 8, marketsReached: 4 },
    programs: ['SCF', 'Mentorship', 'VGS', 'IAP', 'PITCH'],
    image: iregainedLogo.url,
    founded: '2018',
    problem: 'For stroke survivors, the loss of hand function can feel permanent. Years after injury, many patients are told they have plateaued, with few options to restore the dexterity that daily life requires. Existing rehabilitation tools are often inaccessible, impersonal, and unable to deliver the repeated, targeted stimulation the brain needs to rebuild lost pathways.',
    breakthrough: {
      text: 'IRegained developed the MyHand System, a patented digital neurotherapeutic device that uses gamified, progressively challenging tasks to harness neuroplasticity and rewire the brain. The portable, printer-sized system adapts to each user with custom grip positioning and adjustable resistance from 1 gram to 10 pounds, enabling meaningful recovery even a decade or more after injury.',
      image: iregainedLogo.url,
    },
    timeline: [
      { year: '2018', event: 'Vineet Johnson connects with Peter Dal Bianco at NORCAT and begins shaping the MyHand System concept' },
      { year: '2019', event: 'IRegained wins Judge’s Choice at the NORCAT PITCH competition and secures a $250,000 seed round led by NORCAT Innovation Angels and Northern Ontario Angels' },
      { year: '2020', event: 'Relocates to Greater Sudbury and begins building a team of Laurentian University engineering, biomedical, and computational talent' },
      { year: '2023', event: 'Clinical trials validate meaningful hand-function improvement in patients 10–15 years post-injury' },
      { year: '2024', event: 'Receives FDA, Health Canada, HSA Singapore, and CDSCO India approvals and launches a distribution partnership with Performance Health and UpCare across the United States and Canada' },
      { year: '2025', event: 'Surpasses $250,000 in revenue and expands into Asia-Pacific and the Middle East while exploring telemedicine capabilities' },
    ],
    impactMetrics: { jobs: 8, revenue: '$250K+', capital: '$250K', pilots: 5, markets: 4 },
    founderQuote: {
      text: "We're helping patients recover not just mobility, but dignity—and that's what drives us.",
      author: 'Vineet Johnson',
      role: 'Founder & CEO, IRegained Inc.',
    },
    currentStage: 'Commercial Launch & Global Expansion',
    whatsNext: 'IRegained is expanding into high-demand Asia-Pacific and Middle East markets, developing a telemedicine version of the MyHand System, and positioning the company for potential merger, acquisition, or IPO opportunities.',
    globalPresence: ['United States', 'Canada', 'Singapore', 'India'],
    fullStory: `The story of IRegained® Inc. exemplifies the commitment to proving that world-class medical innovation can be conceived and executed in the North—sustaining the entrepreneurial dream for generations to come.

IRegained®, a digital neurotherapeutics company, was founded by Vineet Johnson, who lived in Toronto when his venture sought crucial capital and mentorship in the health and life sciences space. With a background in “clinical, research and teaching,” Vineet quickly learned that entrepreneurship is a life “filled with uncertainties and risks every single day.” Running the company required him to “keep all your stuff inside your head” and “suck up all your ego” without complaining to clients or investors.

The company’s innovative approach, which helps stroke survivors regain lost hand function—immediately caught the attention of the Northern innovation ecosystem. This journey led them to the NORCAT PITCH competition in 2019, where IRegained® won the Judge’s Choice Award and secured a $250,000 seed investment round led by the NORCAT Innovation Angels and Northern Ontario Angels (NOA).

Vineet’s success was profoundly shaped by his relationship with mentor Mr. Peter Dal Bianco, Chair of the NORCAT Innovation Angels. Peter, known for having “no filter,” provided “brutally honest feedback,” which Vineet considered essential when leading a startup. He also offered crucial “credibility” with new investors, at times meeting with them on IRegained’s behalf to vouch for the company. Most importantly, he gave Vineet the space to “disagree and not get disrespected for it.”

That mentorship led to a transformative mandate: Peter and entrepreneurial physician Dr. Dennis Reich promised, “We’ll find your investment, provided you’re willing to move in here. Come to this town—the town will support you.” Vineet found that promise “very true,” contrasting Sudbury’s respectful environment with his previous experience at the RIC in Mississauga, where mentors would “talk down to you a lot.” The relocation enabled IRegained® to hire “eight incredible Laurentian University students,” and today approximately 60% of its staff are Laurentian alumni, bringing engineering, biomedical, and computational expertise.

When Vineet first met Peter in 2018, the medical device was still little more than “a paper” concept. The MyHand® System, co-founded by Vineet and Ranjit Stanley, is a scientifically proven, patented digital rehabilitation technology designed to “rewire” a stroke survivor’s brain through neuroplasticity. The portable, printer-sized device uses gamification to deliver progressively challenging tasks, training cognitive and muscle memory. It supports a wide range of users through custom grip positioning and adjustable resistance from 1 gram to 10 pounds.

The early investment from the NORCAT PITCH competition and local angels was formalized through the Sudbury Catalyst Fund, which Vineet describes as providing the “fuel to accelerate the commercialization of our MyHand® technology.” The fund continues to support companies that will drive future economic and social prosperity in the region.

Clinical trials have consistently validated the system’s effectiveness, showing meaningful improvement even for individuals with 10–15 years of post–injury. Clinical Research Lead Eric Dumais shared: “We have a chance to make a difference in people’s lives. Many of the patients we have served had almost no hope when we met them… when you can consistently deliver high quality care, it just feels awesome.” Clinical researcher Margot Shima noted that patients often progress from little to no hand function to being able to open their hands and, in some cases, lift weights.

IRegained® has since secured regulatory approvals from the FDA (U.S.), Health Canada, HSA (Singapore), and CDSCO in India. This enabled a major distribution deal with Performance Health USA) & UpCare (Canada) to deploy the MyHand® System in hospitals across the United States & Canada. Since launching in December 2024, the company generated over $250,000 in revenue and is on track to surpass $1 million by the end of 2026. As Eric Dumais highlighted, “we want to sell thousands of these things.” Beyond North America, IRegained® is expanding into high-demand markets across the Asia-Pacific and Middle East and is seeking capital to position itself for potential merger/acquisition or IPO opportunities.

Looking ahead, IRegained® hopes to launch the MyHand® System as a telemedicine so patients can connect remotely with a therapist. Vineet summarizes their purpose: “We’re helping patients recover not just mobility, but dignity—and that’s what drives us.” He reflects on their trajectory: “Fast isn’t the right word, but momentum is building. But you can’t expect to be fast—you must expect to do it right.”`,
  },
};
