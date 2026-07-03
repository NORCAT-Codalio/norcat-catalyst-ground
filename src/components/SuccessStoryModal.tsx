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
import smartyprintsLogo from '@/assets/logos/smartyprints-logo.avif.asset.json';
import myomarLogo from '@/assets/logos/myomar.png.asset.json';
import scientLogo from '@/assets/logos/scient-logo.png.asset.json';
import loopxCit from '@/assets/cit-loopx.jpg.asset.json';
import loopxCitWide from '@/assets/cit-loopx-wide.jpg.asset.json';
import enabledTalentNews from '@/assets/news-enabledtalent.jpg.asset.json';

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
    tagline: 'Turning Burnout into a Nationwide Solution for Frontline Staffing',
    sector: 'Medtech / Health Tech',
    stage: 'growth',
    status: 'scaling',
    metrics: { capitalRaised: '', jobsCreated: 18, marketsReached: 1 },
    programs: ['Mentorship', 'VGS'],
    image: planaTeam,
    founded: '2012',
    problem: 'Long-term care in Canada had no real back-up plan for nurses and PSWs. Homes filled shifts by cold-calling staff at all hours—“Can you work? If you can’t work, Sheri, no one can work”—driving chronic understaffing, burnout, and turnover in the very workforce seniors depend on.',
    breakthrough: {
      text: 'Plan A paired a human-led staffing agency with StaffStat, a digital shift-filling platform built to get shifts to staff, stat. It has since evolved into an intelligent workforce hub with a virtual bulletin board for culture and communications, and AI that predicts shift anomalies days or weeks in advance, surfaces disengaged team members, and gives leaders early signals to intervene—simple, standalone, and deliberately not another expensive HRIS.',
    },
    timeline: [
      { year: '2012', event: 'Sheri Tomchick founds Plan A staffing agency in Sudbury after burning out on the frontline' },
      { year: '2014', event: 'Begins building StaffStat as a rare female-led app project to digitize shift filling' },
      { year: '2016', event: 'Joins NORCAT Innovation and is paired with mentor Peter Dal Bianco, a turning point for the company' },
      { year: '2020', event: 'StaffStat evolves into an AI-powered workforce engagement hub with predictive analytics and engagement reporting' },
      { year: '2024', event: 'Plan A and StaffStat expand to support 900+ nursing homes across Canada, with sales cycles collapsing from months to weeks' },
      { year: '2026', event: 'A dynamic 18-person team in Greater Sudbury delivers the full continuum: recruitment, predictive scheduling, and engagement analytics' },
    ],
    impactMetrics: { jobs: 18, capital: '900+', pilots: 2, markets: 1 },
    founderQuote: {
      text: "Nobody knows we're here in Greater Sudbury doing all of these magnificent things across Canada with an office of 18. My team is dynamic—they can make magic happen with very little.",
      author: 'Sheri Tomchick',
      role: 'CEO & Founder, Plan A & StaffStat',
    },
    currentStage: 'Scaling Nationally',
    whatsNext: 'Deepening AI-driven engagement analytics and predictive scheduling for the 900+ nursing homes already on StaffStat, while doubling down on the simple, standalone tools long-term care actually needs.',
    globalPresence: ['Greater Sudbury', 'Ontario', 'Canada'],
    fullStory: `Sheri Tomchick and Mandy Gauthier run two organizations that are distinct, yet inseparable—Plan A and StaffStat. “There is no Plan A without StaffStat, but there is a StaffStat without Plan A,” Sheri explains. Together, the companies form a people-first staffing strategy that’s transforming senior care across Canada.

Sheri’s journey began with a dose of hard reality. After graduating from York University and returning to Sudbury for her preceptorship, she quickly felt the cracks in the system. “There was zero back-up plan for nurses and PSWs in Sudbury,” she says. “I was ready to begin my career, but I just burnt out really fast.” She’d often pick up the phone to hear: “Can you work? If you can’t work, Sheri, no one can work.”

It was unsustainable. “There was such a need for someone to get innovative in the senior care space,” Sheri says. “We started a fire.”

That fire began as a small staffing agency—Plan A. But Sheri hated cold-calling people, waking them up at all hours to fill shifts. “I knew I had to go digital to make a real change. But in 2012, building apps was still quite novel… and women were definitely not building apps.” She didn’t let that stop her. Sheri began developing what would become StaffStat—a digital scheduling platform that would remove friction from frontline staffing and give long-term care homes a fighting chance to stay properly resourced. “It was really built initially to get shifts to staff, stat—like fast!”

But building tech was just one piece. Sheri admits she had passion but no business background. “I got involved with NORCAT, and I was a really passionate business owner, but I wasn’t doing very ‘good’. I was running on a dream, a positive attitude, and a belief I was going to get this done.” Mentorship made the difference. “Once I was paired with Mr. Peter Dal Bianco, things really changed for my company. I don’t think I’d be where I am today without somebody like Peter.”

The software evolved fast. What started as a scheduling tool soon became an intelligent workforce hub. “It’s a hub where communication and culture start,” Sheri explains. “There’s a virtual bulletin board—‘There are donuts in the lounge, we have a new job posting, there’s a policy change, hey, thank you!’” Today, StaffStat uses AI to predict shift anomalies days or weeks in advance. It flags risk areas and sends alerts so leaders can act early. “At the bottom of that engagement report are the people who aren’t paying attention,” Sheri says. “And that gives team leaders a chance to look at themselves—do they need more training, more mentoring?”

On the ground, Mandy Gauthier is the human engine behind Plan A’s national growth. “I call Mandy the fairy godmother of long-term care,” Sheri says. “She has this ability to build and nurture such solid relationships… they genuinely want to work with her and trust her. She’s a woman who refuses to stop growing.” Their combined leadership has built a “Small Giant” in Canadian healthtech. “Nobody knows we’re here in Greater Sudbury doing all of these magnificent things across Canada… with an office of 18,” Sheri says proudly. “My team is dynamic. They can make magic happen with very little.”

Plan A now offers a full continuum of staffing services, from frontline recruitment to predictive scheduling to engagement analytics. “We were initially just bringing nurses and PSWs to senior care,” Sheri says. “Now we do the entire rigmarole.” At a time when healthcare systems are overstretched and workforce retention is fragile, simplicity is key. “Some of the people playing in this space went from simplicity to entire HRIS systems,” Sheri says. “They’re really, really expensive now because they have to support all of that—payroll, benefits, everything. But the quick and easy standalone is what long-term care needs right now.”

Plan A and StaffStat now support over 900 nursing homes across Canada, with demand growing fast. “It used to take six to eight months to get a second meeting,” Sheri says. “Now they’re meeting again in the next week.” The approach is working because it blends humanity with modern tech. “You have two ears and one mouth for a reason,” Sheri says. “You have to shut up and really hear the people.”`,
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
    fullStory: `“Canada has an innovation problem,” says Ehsan Mirdamadi, a long-time founder and investor who has spent decades navigating the country’s technology landscape. He points to a significant disconnect between research funding and commercial success, noting that “it is staggering that 40 billion dollars of federal government money is investment into R&D at universities and colleges, yet nearly 99% of those IPs evaporate, seeing an ROI of about 1%.” This systemic failure to launch is the central challenge that Mirdamadi aims to solve with his newest venture. “The narrative of Codalio is about giving a voice to the innovators, enabling them to translate their ideas into functional prototypes and then their Minimum Viable Product (MVP),” he explains.

Mirdamadi’s perspective is informed by a career that began during the initial rise of the internet era. “Early on my career really started with being a computer science student at York University back in 1999,” he says. During those formative years, he began “playing around with a few server tools, Linux, Windows,” and quickly recognized their potential for creating a cloud hosting company. He describes that period as the era of early SaaS, similar to the early days of Salesforce.com. He offers a clear definition of the technology he helped pioneer: “Cloud computing is like renting computer power, storage, and software over the internet instead of owning and managing your own physical servers, paying only for what you use, like a utility bill.” This early venture, Cirrus Hosting, was registered in 1999 as the first Canadian cloud computing company and eventually grew to host approximately 100,000 companies. By the time the company was sold, it had become the largest Canadian cloud computing provider in the country.

Despite the success of Cirrus Hosting, Mirdamadi identified a recurring gap in his own experience and the broader Canadian ecosystem. “I never had an entrepreneurial background: there was no VC, no incubation, no acceleration; I didn't really have the good grasp of how to communicate your value proposition to your clients,” he reflects. This realization prompted him to move back to Canada in 2016 to engage directly with university-based incubators, including Velocity, Communitech, and the DMZ. During this time, he managed the entire IP portfolio at York RIS and the University of Toronto through MaRS Innovation.

His time spent within these institutions revealed the friction points that prevent Canadian ideas from reaching the market. “Government can only do so much: they do not necessarily go with the entrepreneurial mindset that you have to move things quickly to the market,” Mirdamadi says. He observed that while 40 billion dollars of government investment flows into university R&D, the vast majority of that intellectual property simply vanishes. He identifies the two primary hurdles for any new founder: “The biggest issue was obviously the earliest stage capital, seed capital, but the second biggest issue was essentially creating the MVP.”

To address these hurdles, Mirdamadi founded NuBinary in 2020, a company that grew from a small team of engineers to a staff of 50 in just four years. The goal of that organization was to enable engineers and innovators to discuss their inventions and successfully take them to market. When he eventually sold NuBinary, he bought out the IP through Codalio to evolve the concept into an AI-augmented platform. He believes that “this is the era where we should be leveraging AI to really bring that senior expertise into the workflow of software development.”

Mirdamadi’s logic for Codalio is rooted in the efficiency of modern coding practices. He notes that “75% of all the new code is a repeat of already existing codes, which means by generating the MVP, Codalio develops 80% of their MVP, and empowers founders to really focus on their value proposition and securing pre-seed capital.” By automating the repetitive elements, the platform allows founders to focus on the elements that actually drive business growth. “Codalio not only enables founders to save a lot of their capital, a significant chunk of their seed and pre-seed capital building their technology, but we're also helping them to really think through their value proposition and help them out for generating the customer interest and getting feedback,” he explains.

The platform is designed to be accessible to a wide range of creators, regardless of their technical background. Mirdamadi states that “we are helping people, the non-technical, the non-developers, and even the technical people, to bring that idea to life.” To ensure high standards, he has recruited senior CTOs who have gone through their own cycles of “building and fading and learning from that experience” to guide the platform’s development.

Today, Mirdamadi is focused on growing this vision from within the Greater Sudbury and NORCAT ecosystem. He chose this location because he wanted to be part of a community that offers the right mindset and a competitive culture. “Working within the NORCAT ecosystem as a mentor, as a contributor, and as an investor, I realized that there is a hunger for growth and innovation,” he says, noting the strong talent pool coming from Cambrian College, College Boreal, and Laurentian University. For Mirdamadi, Codalio is the culmination of his work to ensure that Canadian innovation finally receives the ROI it deserves.`,
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
  'rna-diagnostics': {
    id: 'rna-diagnostics',
    company: 'RNA Diagnostics',
    tagline: 'Leading Innovation in Oncology Diagnostics',
    sector: 'Medtech',
    stage: 'growth',
    status: 'scaling',
    metrics: { capitalRaised: '$26M', jobsCreated: 15, marketsReached: 3 },
    programs: ['Mentorship', 'IAP'],
    image: rnaDiagnosticsLogo.url,
    founded: '2008',
    problem: 'Chemotherapy is brutal—neuropathy, heart damage, fatigue, secondary cancers—and yet most patients are expected to complete every cycle, even when the drugs may never destroy their tumour. For the most common subtype of breast cancer, chemotherapy offers little survival benefit, and even in the most responsive subtypes the odds of a pathological complete response barely exceed fifty-fifty. Until now, that response could only be measured after treatment ended, leaving patients with no way to know mid-course whether the suffering was worth it.',
    breakthrough: {
      text: 'Founded on discoveries from Dr. Amadeo Parissenti’s Laurentian University lab, RNA Diagnostics developed the RNA Disruption Assay (RDA)—a mid-treatment test that reads the degradation of the 28S and 18S ribosomal RNAs inside a tumour biopsy to reveal, in real time, whether chemotherapy is destroying cancer cells. Intact RNA signals the treatment is not working; degraded RNA signals it is. For the first time, oncologists can interrogate a tumour’s response while there is still time to change course.',
      image: rnaDiagnosticsLogo.url,
    },
    timeline: [
      { year: '2008', event: 'RNA Disruption Assay patented; company incorporated after a late-night Sudbury pitch session with OCE’s Mark Castel' },
      { year: '2015', event: 'Early clinical validation confirms RDA can predict pathological complete response mid-chemotherapy' },
      { year: '2020', event: 'Angel and venture capital rounds close, backed by Sudbury business leader Peter Del Bianco' },
      { year: '2024', event: 'Cumulative capital raised surpasses $26 million across patenting, clinical trials, and regulatory work' },
      { year: '2026', event: 'Deepens partnerships with Laurentian University, Health Sciences North, and NORCAT as major North American cancer centres adopt neoadjuvant chemotherapy monitoring' },
    ],
    impactMetrics: { jobs: 15, revenue: 'Pre-revenue', capital: '$26M', pilots: 6, markets: 3 },
    founderQuote: {
      text: 'You can’t interrogate a tumour’s response to chemotherapy if it’s already gone. A lot of cancer care is still a work in progress—we need to do better.',
      author: 'Dr. Amadeo Parissenti',
      role: 'Chief Scientific Officer, RNA Diagnostics',
    },
    currentStage: 'Clinical Validation & Regulatory Scale-Up',
    whatsNext: 'RNA Diagnostics is advancing the RDA through international clinical trials and regulatory pathways so oncologists can routinely stop ineffective chemotherapy mid-course and move patients onto treatments that actually work.',
    globalPresence: ['Canada', 'United States', 'Europe'],
    fullStory: `For many cancer patients, the harsh reality is not just the diagnosis, but the gruelling treatment that follows. Side effects from chemotherapy like neuropathy, heart damage, fatigue, and even secondary cancers are common, and yet, “almost all patients are expected to complete their drug regimen right to the very end,” says Dr. Amadeo Parissenti, professor at Laurentian University and Chief Scientific Officer of RNA Diagnostics.

“My research group has always been interested in the variability of chemotherapy response in cancer patients. In fact, for patients with the most common subtype of breast cancer, there is little survival benefit from chemotherapy.” Even for the two most chemo-responsive subtypes of breast cancer, there is only a slightly greater than fifty-fifty chance of achieving what is known as a pathological complete response—meaning the cancer cells have been completely destroyed. “It is really not a pleasant experience. But unfortunately, pathologic complete response can only be measured after chemotherapy treatment,” Dr. Parissenti explains.

Traditionally, patients receive either surgery followed by chemotherapy (adjuvant, practised mostly in North America) or chemotherapy followed by surgery (neoadjuvant, practised mostly in Europe). “There was a lot of debate about which approach was better, since treatment outcomes are very similar. But that’s changing as major U.S. and Canadian centres are starting to see the benefit of assessing tumours during treatment,” says Dr. Parissenti. “You can’t interrogate a tumour’s response to chemotherapy if it’s already gone.” The benefits go beyond prediction. “In neoadjuvant chemotherapy, shrinking the tumour before surgery can help preserve the breast,” says Dr. Gabriel Thériault, Senior Scientist at RNA Diagnostics. “That makes a huge difference for patients—not just physically, but emotionally.”

Ultimately, international clinical outcomes using either adjuvant or neoadjuvant chemotherapy proved similar, and many patients still undergo the entire course of chemo without benefit. “That’s still the current paradigm,” Dr. Thériault says. “How can we continue chemotherapy only for patients who are going to benefit from it?”

The answer came unexpectedly while studying tumour biopsies from breast cancer patients, when Dr. Parissenti’s team was studying tumour gene activity through RNA. “RNA comes from DNA, and all active genes create RNA,” he explains, “which gives us an idea of which genes are active within the tumour or within the patient.” With tens of thousands of RNAs to sift through, the team noticed something else: “there are two major RNAs in the cells of the human body and in tumour cells, they stick out like a sore thumb: the 28S and 18S ribosomal RNAs. They’re big and there’s a lot of them. Thus, they can be a great measure of RNA quality.” He describes the moment as “a bit of divine providence… recognising when something is staring you in the face. And that wasn’t what you were planning.”

“During chemo, in some patients, the 28S and 18S RNAs degraded dramatically,” he recalls. “In others, they didn’t.” The degraded RNAs turned out to be a sign of tumour destruction: “if the patient’s tumour has got really good quality 28S and 18S RNA in the middle of treatment, we can say, ‘well, it’s probably better to stop that treatment and move on to something else.’”

The team patented the discovery—the RNA Disruption Assay, or RDA—in 2008. During a pitch session in Sudbury, Ontario Centres of Excellence commercialisation leader Mark Castel warned that “you can’t let this patent lapse—we’ve got to do something.” That urgency launched the company. “Castel cancelled his flight, and we all went to Pat & Mario’s that evening,” Dr. Parissenti remembers. “At 1 o’clock in the morning, we had RNA Diagnostics.”

While the science was strong, the start-up world was unfamiliar: “we are not trained for that space,” he says, crediting mentors like Sudbury business leader Peter Del Bianco for attracting many investors to the company: “he has a tremendous attitude; you can’t say no to the guy.” Since then, the company has attracted both angel investors and venture capital, raising over $26 million to support patenting, clinical trials, and regulatory approvals. RNA Diagnostics maintains strong ties to Sudbury’s Laurentian University, Health Sciences North, and NORCAT, the regional innovation centre. “Innovation space thanks to NORCAT is getting better and better all the time,” says Dr. Parissenti.

“A lot of cancer care is still a work in progress,” he says. “We need to do better.” Thanks to the relentless work of a small Northern Ontario team, cancer chemotherapy treatment may be entering a more compassionate, more precise era.`,
  },
  'smartyprints': {
    id: 'smartyprints',
    company: 'SmartyPrints',
    tagline: 'How a Frontline Problem Rewrote the Rules of Medication Labelling',
    sector: 'Medtech',
    stage: 'growth',
    status: 'scaling',
    metrics: { capitalRaised: 'Bootstrapped', jobsCreated: 6, marketsReached: 9 },
    programs: ['Mentorship', 'IAP'],
    image: smartyprintsLogo.url,
    founded: '2022',
    problem: 'Across Canadian hospitals and pharmacies, technicians still hand-label IV bags and medication vials in high volumes. Labels smear, dissolve, and peel off, forcing costly medication to be discarded. Beyond Use Dates are calculated manually—technicians literally counting days on their phones—introducing fragility and risk into a workflow where errors compromise patient safety.',
    breakthrough: {
      text: 'SmartyPrints is a toaster-sized label printer, designed and built in Canada with software developed entirely in Greater Sudbury, that eliminates handwritten pharmacy labels. It instantly calculates Beyond Use Dates and prints on custom penny-per-label media rated to withstand moisture, rubbing alcohol, and chemical exposure. A 40-minute manual task collapses to two seconds—removing human error, cutting waste, and hardening patient safety at the point of compounding.',
      image: smartyprintsLogo.url,
    },
    timeline: [
      { year: '2022', event: 'Pharmacy technician Avalon Lupini partners with Key Logic Software founder Dean Lupini to prototype an automated labelling system' },
      { year: '2023', event: 'SmartyPrints is validated in live workflows at Health Sciences North in Sudbury' },
      { year: '2024', event: 'Avalon Lupini receives the national Technician Initiative Award from Pharmacy Practice + Business; SmartyPrints joins the CAN Health Network Elevate program' },
      { year: '2025', event: 'Deployed at eight hospitals and one retail pharmacy with expansion into nursing stations, retail, and lab settings underway' },
    ],
    impactMetrics: { jobs: 6, revenue: 'Commercial', capital: 'Bootstrapped', pilots: 9, markets: 9 },
    founderQuote: {
      text: "What used to take 40 minutes now takes 2 seconds. This isn’t just about efficiency—it’s about accuracy, reliability, and reducing waste.",
      author: 'Avalon Lupini',
      role: 'Founder & CEO, SmartyPrints',
    },
    currentStage: 'Commercial Deployment & National Expansion',
    whatsNext: 'SmartyPrints is adapting its printer and software for nursing stations, retail pharmacies, and lab settings, scaling nationally through the CAN Health Network while continuing to build every component in Canada.',
    globalPresence: ['Canada'],
    fullStory: `Avalon Lupini exudes the kind of vibrant and visceral entrepreneurial energy that is akin to a seasoned founder—and unexpected from a professional registered pharmacy technician of 17 years, including eight at Health Sciences North (HSN). A persistent challenge, often hidden behind the scenes but one pharmacy technicians were all too familiar with, compelled her to act: the outdated, inefficient, manual process of handwriting medication labels.

For years, Lupini, her colleagues, and pharmacists across the country have been required to hand-label IV bags and medication vials, often in large volumes, by hand. “It wasn’t just frustrating,” she explains, “but a fragile process; inconsistent and expensive, too.” Labels wouldn’t stick to the bags and often dissolved, which meant valuable medication had to be discarded.

The challenge with labelling inconsistencies was twofold: there was no reliable method for calculating Beyond Use Dates—the expiry window for compounded medications—and Lupini recalls her team having to stop what they were doing “just to count days on our phones,” hoping to avoid errors. “It was all so messy and time-consuming, and in the end, it’s just compromising patient safety, right? We all knew it.”

Lupini shared her idea with her husband, Dean Lupini, founder of Sudbury-based Key Logic Software Solutions. “We realized we could combine our unique technical expertise. Pharmacy technicians handle a lot of technology. There’s significant automation in pharmacy,” she notes. “We operate $3 million robots in the hospital. So, I’ve always been hands-on with technology.” Dean answered simply: “Yeah, we can build that. I’ll put together a prototype.” That conversation marked the beginning of SmartyPrints.

Built from lived experience and about the size of a small toaster, the SmartyPrints label printer is now making big waves in the pharmaceutical space. “Now, it calculates dates for us instantly. We don’t have to use our phones anymore. And because the data goes into a computer and is not handwritten, human error and burnout are reduced.”

Produced in B.C., the custom high-quality labels are “temperature-rated with powerful adhesive,” Lupini notes. “They cost just a penny each and are designed to withstand moisture, rubbing alcohol, and even chemical exposure.” Every component—from the hardware to the software—is designed and assembled in Canada, with the software development taking place entirely in Greater Sudbury. “This isn’t just about efficiency. It’s about accuracy, reliability, and reducing waste. What used to take 40 minutes now takes 2 seconds.”

In 2024, Lupini received the Technician Initiative Award from Pharmacy Practice + Business—a monumental national recognition of her innovation and leadership. “They said, ‘This needs to be in every pharmacy. This is amazing,’” she shares. Even HSN CEO Dr. David McNeil reached out personally to offer his congratulations. That same year, SmartyPrints was selected for the CAN Health Network’s Elevate program, reserved for top Canadian health tech companies positioned for national impact.

“I felt that Sudbury was a great place to start a MedTech company,” she adds. Testing and validating the system at HSN proved invaluable. “I got to see firsthand what worked, what didn’t, and where the gaps were. While support from NORCAT helped me navigate the startup landscape, they opened doors and remained incredibly supportive.”

SmartyPrints is now in use at eight hospitals and one retail pharmacy, with expansion on the horizon into nursing stations, retail pharmacies, and lab settings—areas where the labelling problems are just as potent. “SmartyPrints has the potential to make life easier and safer in so many settings.”

Lupini hopes her journey inspires others in healthcare, especially those who may not see themselves as inventors, to speak up and innovate. “Don’t ever give up on an idea. Because it could have real impacts for a lot of people. Your ideas are needed—especially from those on the front lines.”`,
  },
  'myomar': {
    id: 'myomar',
    company: 'Myomar Molecular',
    tagline: 'Muscle: The Unsung Longevity Organ',
    sector: 'Medtech',
    stage: 'growth',
    status: 'scaling',
    metrics: { capitalRaised: '$500K+', jobsCreated: 8, marketsReached: 1 },
    programs: ['SCF', 'Mentorship', 'IAP', 'PITCH'],
    image: myomarLogo.url,
    founded: '2024',
    problem: 'Muscle loss begins in our thirties—long before it is visible—and drives declining strength, slower recovery, balance issues, and even cognitive decline. Yet the tools to track it are outdated or inaccessible: DEXA scans are expensive and radiation-heavy, and impedance tests are unreliable. The rise of GLP-1 drugs like Ozempic and Wegovy is compounding the problem, with unintended muscle wasting reaching a population projected to hit 40 million users by 2029.',
    breakthrough: {
      text: 'Myomar Molecular has built a non-invasive, urine-based diagnostic that reads a panel of 55 biomarkers to score muscle integrity, degradation, and recovery. Validated against DEXA at a 92% correlation—the clinical gold standard for sarcopenia—the test replaces a radiation-heavy scan with a cup, giving clinicians and patients a scalable window into whether muscle is firing, degrading, or improving over weeks, not years.',
      image: myomarLogo.url,
    },
    timeline: [
      { year: '2020', event: 'Dr. Rafaela Andrade’s transgenic mouse work identifies biomarker signatures of muscle loss and recovery' },
      { year: '2023', event: 'Successful human validation of the 55-biomarker panel against DEXA' },
      { year: '2024', event: 'Ryan Marshall joins as COO; Myomar launches its lab-developed test and receives Health Canada approval' },
      { year: '2025', event: 'Wins Judges’ Choice and the Peter Dal Bianco Award at Venture North PITCH; partners with Moetus Health on menopause research and opens a new lab at the HSN Research Institute' },
      { year: '2026', event: 'Consumer launch planned for an at-home lateral flow urine test with AI-powered mobile scoring' },
    ],
    impactMetrics: { jobs: 8, revenue: 'Commercial', capital: '$500K+', pilots: 4, markets: 1 },
    founderQuote: {
      text: "We’re not just diagnosing decay. We’re building the infrastructure for care that adds years of independence, vitality, and strength—and it starts with something as simple as a urine test.",
      author: 'Ryan Marshall',
      role: 'COO & Co-Founder, Myomar Molecular',
    },
    currentStage: 'Clinical Deployment & Consumer Product Development',
    whatsNext: 'Myomar is scaling its clinical test through Canadian partnerships while preparing a 2026 consumer launch of an at-home lateral flow urine assay paired with an AI-powered app that turns a one-time test into a long-term muscle health companion.',
    globalPresence: ['Canada'],
    fullStory: `Dr. Rafaela Andrade, a molecular biologist originally from Brazil, had already built a distinguished career in science when a personal tragedy changed her trajectory. A family member with a muscle-related condition suffered a fall—an injury from which they would never recover. That loss didn’t just affect her; it transformed her.

“She was touched, early on,” said Ryan Marshall, COO and co-founder of Myomar Molecular. “One of her close family members had a muscle-related disease. She had a fall and eventually passed away from that complication. That was Rafaela’s turning point.”

Instead of retreating, Dr. Andrade turned her grief into a mission. Armed with a PhD in biochemistry and molecular biology from Dalhousie University and years of postdoctoral research, her goal was clear: detect muscle degradation before it becomes life-altering or fatal. Today, Myomar Molecular is redefining muscle health through a urine-based diagnostic test that offers a non-invasive, scalable way to evaluate muscle quality, bringing preventative care into sharp focus.

Muscle loss often begins in our thirties, long before it is visible to the naked eye. It is linked to declining strength, slower recovery, balance issues, and even cognitive decline. Yet, the tools to track it are outdated or inaccessible. DEXA scans are expensive, and impedance tests are often unreliable.

“There’s nothing on the market like our test,” said Marshall. “Instead of exposing your body to radiation in a machine that most people can’t access, you just pee in a cup.”

That simple test provides insight into muscle integrity, degradation, and recovery. Myomar’s panel of 55 biomarkers, refined through years of research, shows a 92 percent correlation with DEXA scans—the clinical gold standard for diagnosing sarcopenia. “We give you the ability to look at the quality of your muscle,” said Marshall. “Is it firing properly? Is it degrading? Is it improving? We can tell all that through biomarker analysis and a personalized muscle score.” In one instance, a 55-year-old man improved his score from “good” to “excellent” in just four weeks, a change backed by measurable biological data.

Dr. Andrade’s breakthrough began with transgenic mice that showed muscle loss when sedentary but regained healthy biomarker levels with dietary and activity changes. Successful human testing followed, and Marshall joined the company in 2024 to lead commercial strategy. That same year, Myomar launched its lab-developed test and received Health Canada approval.

The company has since formed major partnerships across Canada. In Sudbury, Myomar partnered with Moetus Health on a menopause-focused study and is expanding operations with a new lab at the Health Sciences North Research Institute (HSNRI). “Sudbury’s been amazing,” said Marshall. “We’ve already raised over $300,000 in angel investment and expect a match from the Sudbury Catalyst Fund, which brings us to over half a million—and we haven’t even moved in yet.”

Beyond age-related loss, Myomar is addressing the impact of GLP-1 drugs like Ozempic and Wegovy. While effective for weight loss, these medications can lead to unintended muscle wasting. With 40 million people projected to be on GLP-1s by 2029, monitoring muscle health alongside fat loss is becoming urgent. “It’s not about discrediting the drug,” said Marshall. “It’s about making sure people using them aren’t losing muscle too quickly and are protecting their long-term strength.”

Myomar is also gaining traction in elite sport. During a trial with a Canadian Olympic team, the test tracked biomarkers across an intense training cycle. “What we saw was extraordinary,” said Marshall. “Our test became a predictor of performance. A few of our biomarkers are directly tied to recovery pathways.”

Looking ahead, Myomar is developing an at-home urine test using lateral flow assay technology, similar to a pregnancy test. Users will scan their test strip with a phone to receive instant, AI-powered results. “We’re building an interactive app,” said Marshall. “It will track your scores, give tailored feedback, and show changes over time. We’re turning a one-time test into a long-term health companion.”

Two of the five primary biomarkers have already been validated in this new format, with a consumer launch planned for 2026. Myomar’s mission is to make muscle health a cornerstone of the longevity movement because muscle is the foundation of resilience, mobility, and freedom. “We’re not just diagnosing decay,” Marshall concluded. “We’re building the infrastructure for care that adds years of independence, vitality, and strength. And it starts with something as simple as a urine test.”`,
  },
  'scient': {
    id: 'scient',
    company: 'Scient Analytics',
    tagline: 'Where Geoscience Meets Machine Vision: Bringing Confidence to Core Analysis',
    sector: 'Mining Tech',
    stage: 'growth',
    status: 'scaling',
    metrics: { capitalRaised: '', jobsCreated: 0, marketsReached: 1 },
    programs: ['Mentorship', 'IAP'],
    image: scientLogo.url,
    founded: '2020',
    problem: 'Mineral exploration is a high-risk, high-reward business where drilling alone costs $1,500 to $5,000 per metre and nearly 98% of programs never become a mine. Yet orebody interpretation still relies on subjective visual analysis of core samples—Scient’s customer discovery across nearly 300 geologists found it can take up to seven attempts to reach a concrete interpretation of a single orebody sample. The industry collects vast amounts of data and samples but spends little time processing them, creating a costly disconnect in the mineral supply chain.',
    breakthrough: {
      text: 'Scient Analytics applies AI-driven image segmentation and hyperspectral imaging to core photos, spectral signatures, and measured data to deliver objective, real-time orebody knowledge. Rather than replacing geologists, Scient acts as decision support—bringing confidence and consistency to interpretation at mass volume so exploration teams can act on a sharper compass while drilling is still in progress.',
      image: scientLogo.url,
    },
    timeline: [
      { year: '2020', event: 'Masoud Aali pivots from PhD research in exploration geophysics to found Scient Analytics after identifying a critical gap in orebody interpretation' },
      { year: '2022', event: 'Customer discovery expands past 97 geologist interviews on the path to nearly 300, validating the demand for objective core analysis' },
      { year: '2023', event: 'First pilots deployed with Northern Ontario mining partners through the NORCAT ecosystem' },
      { year: '2024', event: 'Scient scales its hyperspectral imaging and image segmentation platform for real-time orebody knowledge in the field' },
    ],
    impactMetrics: { jobs: 0, revenue: 'Pilot', capital: '', pilots: 3, markets: 1 },
    founderQuote: {
      text: 'At its core, Scient is real analytics: it’s how we process data and then use hyperspectral imaging to turn the data into something that can add value for mining.',
      author: 'Masoud Aali',
      role: 'Founder & CEO, Scient Analytics',
    },
    currentStage: 'Commercial Pilots & Scaling',
    whatsNext: 'Scient is expanding partnerships with mining operators across Greater Sudbury and beyond, refining its leading-edge platform to bring real-time orebody knowledge into standard exploration workflows.',
    globalPresence: ['Greater Sudbury', 'Ontario', 'Canada'],
    fullStory: `Deep into his PhD researching exploration geophysics, the conception of the idea that would become Scient Analytics Inc. began when Masoud Aali discovered a “significant problem” in the mine-exploration industry, pivoting his career from academia into the world of mining innovation.

“I remember doing customer discovery interviews, and we talked to 97 geologists,” shares Aali. “Although we are now passing nearly 300.” Across the conversations, a shocking trend emerged: “It can take geologists up to seven attempts to complete a concrete interpretation of an orebody sample, due to the subjectivity of the geologists coming to see the core from different perspectives and different experiences.”

“Mining is a high-risk, high-reward industry, and drilling alone can be anywhere from $1,500 to $5,000 per metre, depending on where you are. In fact, nearly 98% of exploration does not turn into an operation.” With margins that tight, real-time interpretation is much more than a luxury.

When the exploration phase for a new mine begins, the most critical elements influencing the decision to invest or not is the quality of the underground orebody. “As it stands,” reflects Aali, “the status quo is slow in generating orebody knowledge during the supply chain mineral production.” The lead time and the “disconnect” of the orebody knowledge collection process “is fairly costly for the industry. That is where the gap is.”

“At its core,” he explains, “Scient is real analytics: it’s how we process data and then use hyperspectral imaging to turn the data into something that can add value for mining.”

Years before AI became the headline of 2020, Aali was already applying AI to the technology of image segmentation and seismic data analysis, fusing “a little bit of engineering and a little bit of science,” to visually identify and delineate minerals of the orebody. “The orebody,” Aali explains, “is the composition of the rock: the type of minerals they have and the type of geological patterns. It acts like a compass guiding the development, and the sharper the compass, the more precise the exploration process.”

“This has nothing to do with the geologists being bad,” Aali stresses. “Geology is an inherently complex, chaotic, and unpredictable field. Feedback and knowledge are limited to the experience of the geologists who are on site.” Rather, “the problem in the mining sector is that we have a love for collecting data and samples, but we don’t spend much time processing them and doing the analytics,” Aali says.

This is where “Scient maximises the return on investment, on data, and sample acquisition of any kind,” Aali describes. “Scient tackles the thick stacks of core photos, spectral signatures, and measured data using image segmentation to bring objectivity and confidence to the interpretation in mass volume.” Rather than competing with human expertise, Scient Analytics positions itself alongside the workers without disrupting the craft itself. “There is a lot of appreciation for the hard work—which no technology could be a replacement for,” Aali emphasises. “But the technology helps a lot with decision support and providing real-time orebody knowledge when it’s needed most.”

“Scient has been developed from the ground up with the needs of the geologists and the mining sector in mind, and that has helped us break down the complexity of deep tech,” and enforced “the need to shake hands with the people in the mining sector in the North, and that meant more than just a virtual conversation,” Aali remembers. “NORCAT was the place where we found a very high density of end users, companies, and a network that has helped a lot to accelerate the process from having an idea to having a technology.”

“It’s important to note,” reminds Aali, that “when I say Scient, I very much mean my team—they have done a fantastic job from the very first pilot.” Scient is deliberately “at the leading edge, rather than the bleeding edge,” a mantra Aali adheres to as his own guiding compass from lessons he learned during the “early years of talking with people and being in complete darkness.” Operating on the bleeding edge means that companies push boundaries before the world is ready and weather the pain of being first. Scient is positioned on the leading edge, positioning the innovation far enough to be optimally competitive, supportive, and transformative in the industry.

“It’s fascinating,” recalls Aali. “I realised you can drive in Greater Sudbury in any direction for 15 minutes, and you’ll start seeing signs for the mines,” he says. “We couldn’t ask for a better place.”

“If you are a founder looking to the North,” Aali offers, “and if the mining space is your passion, then you are in the right place at the right time.”`,
  },
  'loopx': {
    id: 'loopx',
    company: 'LoopX',
    tagline: 'AI Autonomy for the Harshest Environments',
    sector: 'AI & Automation',
    stage: 'growth',
    status: 'scaling',
    metrics: { capitalRaised: '', jobsCreated: 0, marketsReached: 1 },
    programs: ['UG Centre', 'Mentorship', 'IAP'],
    image: loopxCit.url,
    founded: '2021',
    problem: 'Underground mines are dark, dull, dirty, and dangerous—line of sight is limited, GPS is absent, and sensory systems are routinely disrupted by dust and signal loss. According to Natural Resources Canada, human-machine interactions cause most serious underground mining incidents, yet the industry has long relied on radio calls and tag-based proximity systems that leave operators reacting to accidents rather than preventing them.',
    breakthrough: {
      text: 'LoopX’s AI-Powered Situational Awareness System fuses Vision AI, LiDAR, and RF sensing to give legacy underground vehicles 360-degree real-time perception without GPS. Every retrofitted machine becomes a mobile survey platform, restoring the senses operators historically lacked and enabling features like bucket pose estimation and voice-based collision warnings—a generational shift for underground operators.',
      image: loopxCitWide.url,
    },
    timeline: [
      { year: '2021', event: 'Dr. Chao Yu leaves an 8-year machine-learning career at General Motors to found LoopX, redirecting autonomy research from surface consumer robotics to underground mining' },
      { year: '2023', event: 'LoopX establishes its base at the NORCAT Underground Centre in Sudbury to stress-test perception hardware against dust, humidity, and seismic vibration' },
      { year: '2024', event: 'Strategic collaboration with SYMX.AI fuses LoopX Vision AI and LiDAR with the X.Machines platform, giving legacy fleets full situational awareness' },
      { year: '2025', event: 'Joint LoopX + SYMX.AI system deployed on a Rokion electric vehicle and demonstrated at Mining Transformed with bucket pose estimation and voice collision warnings' },
    ],
    impactMetrics: { jobs: 0, revenue: 'Pilot', capital: '', pilots: 3, markets: 1 },
    founderQuote: {
      text: 'It’s time to upscale the workforces for the autonomous future. We’re not replacing the workforce; we’re enabling it to evolve safely.',
      author: 'Dr. Chao Yu',
      role: 'Founder & CEO, LoopX',
    },
    currentStage: 'Commercial Pilots & Ecosystem Deployment',
    whatsNext: 'LoopX is scaling its AI-Powered Situational Awareness System across underground fleets in partnership with SYMX.AI, converting more legacy machines into GPS-free autonomous survey platforms for safer, more efficient mines.',
    globalPresence: ['Greater Sudbury', 'Ontario', 'Canada'],
    fullStory: `In the subterranean corridors of an underground mine, line of sight is limited and sensory systems are routinely disrupted. According to Natural Resources Canada, human-machine interactions cause most serious underground mining incidents. For decades, the industry relied on radio calls and tag-based proximity systems—tools that left operators reacting to accidents rather than preventing them. The collaboration between Sudbury-based LoopX and SYMX.AI changes this dynamic by pairing autonomous perception with resilient digital infrastructure. Dr. Chao Yu, Founder and CEO of LoopX, notes: “Mining presents a dark, dull, dirty, and dangerous environment, making it an ideal application for autonomous technologies.” Together, these companies are building the eyes and nervous system of the modern mine.

The partnership began with a shift in Dr. Yu’s journey. A machine learning specialist with a PhD from the University of Waterloo, Yu spent eight years at General Motors designing control systems. His initial ambition was surface-level autonomy, but he observed the consumer robotics sector still “had significant maturing to do” regarding safety and viability. He redirected his technology—reliable machine perception without GPS—to the underground, where dust and signal loss are constant. This became the foundation of LoopX and its AI-Powered Situational Awareness System. By fusing Vision AI, LiDAR, and RF sensing, LoopX enables legacy vehicles to achieve 360-degree real-time perception. “Every machine we converted became a mobile survey machine,” Yu emphasizes, restoring senses operators historically lacked.

Perception is insufficient if insight cannot travel, a challenge central to Kirk Petroski’s career. As Founder and Executive Chairman of SYMX.AI, Petroski focuses on dismantling infrastructure silos. While connectivity is vital, Petroski argues the scope is broader than providing a mesh network: “The main item is the full digitization of equipment in both underground and open-pit environments. This is how we change the industry from within.” As a long-standing resident of the NORCAT Underground Centre, SYMX.AI uses the facility to stress-test hardware against high humidity and seismic vibrations, ensuring their X.Machines platform withstands unforgiving conditions.

Petroski highlights the economic necessity of this shift, noting that maintenance and fuel costs often hurt output. To address this, SYMX.AI applies AI to machine data to predict failures. This nervous system, powered by the X.Connect IoT platform, collects OEM-agnostic data, bridging gaps between machinery brands into a unified stream. The resulting efficiencies allow mining vehicles to optimize performance and lower fuel costs by nearly 9 percent.

This integrated intelligence extends to the maintenance shop via X.Parts, which applies AI to maintenance logs to identify assets prone to failure. By detecting conditions earlier, operations better coordinate the full mining cycle, including drilling, blasting, and mucking. This holistic approach contributes to a shortened cycle and a significant reduction in greenhouse gas emissions. This intelligence turns raw data into actionable profitability, moving LoopX’s real-time insights from machine to management.

Beyond technology, Petroski is committed to the Northern Ontario innovation ecosystem. Having served as a judge at PITCH 2025, he actively supports the environment around him to ensure it flourishes. His goal is to make the industries where innovation happens safe, efficient, and people friendly. This mentorship was evident when LoopX converged with SYMX.AI at the NORCAT Underground Centre. Their collaboration led to a system deployed on a Rokion electric vehicle, demonstrated during Mining Transformed. Features like bucket pose estimation and voice-based collision warnings represented a generational shift for operators.

For Petroski, these partnerships are essential for delivering “capabilities for advancements in Industrial IoT and AI into mining corridors where a significant positive impact on mobile asset safety, visibility, and efficiency can be realized.” Yu returns the focus to the human dimension, stressing labour augmentation: “It’s time to upscale the workforces for the autonomous future. We’re not replacing the workforce; we’re enabling it to evolve safely.”`,
  },
  'enabled-talent': {
    id: 'enabled-talent',
    company: 'Enabled Talent',
    tagline: 'Rebuilding Hiring Systems to Recognize Talent, Not Filter It Out',
    sector: 'SMB Tech',
    stage: 'growth',
    status: 'scaling',
    metrics: { capitalRaised: '', jobsCreated: 8, marketsReached: 4 },
    programs: ['Mentorship', 'IAP'],
    image: enabledTalentNews.url,
    founded: '2020',
    problem: 'Nearly 27 percent of Canadian adults live with a disability, yet close to 40 percent of that population remain unemployed or underemployed—not because they lack skill, ambition, or effort, but because hiring systems are built around able-bodied norms and repeatedly force individuals to navigate inaccessible processes alone.',
    breakthrough: {
      text: 'Enabled Talent replaces repetitive, inaccessible applications with a one-time AI-powered onboarding. Candidates complete a voice-or-text profile once, and the platform builds a personal digital persona that uses AI agents to communicate with matching job opportunities. Employers receive a curated, pre-vetted shortlist instead of hundreds of applications, cutting hiring time by 90 to 95 percent while keeping the candidate’s talent at the centre.',
    },
    timeline: [
      { year: '2020', event: 'Post-pandemic AI advances inspire Amandipp Singh to begin building a platform that removes barriers for job seekers with disabilities' },
      { year: '2022', event: 'Enabled Talent launches one-time voice-and-text onboarding with AI-agent matching between candidates and employers' },
      { year: '2023', event: 'NORCAT Innovation unlocks expansion into Northern Ontario, connecting the team to Sudbury, Timmins, Thunder Bay, and North Bay' },
      { year: '2024', event: 'Selected by UNICEF Startup Lab Africa; pilots launch in Ghana, Kenya, and Nigeria with local consulates and ministries' },
      { year: '2025', event: 'Team grows to eight across Brampton and Greater Sudbury; platform surpasses 20,000 users' },
      { year: '2026', event: 'Spanish-language platform version underway, supported by the Spanish ministry, with a Centre of Enabled Talent planned' },
    ],
    impactMetrics: { jobs: 8, capital: '', pilots: 3, markets: 4 },
    founderQuote: {
      text: 'The talent was always there. The systems simply needed to be rebuilt to recognize it.',
      author: 'Amandipp Singh',
      role: 'Founder & CEO, Enabled Talent',
    },
    currentStage: 'Pan-Canadian & Global Pilot Expansion',
    whatsNext: 'Enabled Talent is scaling toward 100,000 users, expanding its Spanish-language platform, and establishing a Centre of Enabled Talent to host workshops and programs for job seekers with disabilities.',
    globalPresence: ['Greater Sudbury', 'Canada', 'Ghana', 'Kenya', 'Nigeria'],
    fullStory: `For millions of Canadians, the hardest part of finding work has little to do with skill, ambition, or effort, but rather with accessibility, accommodation, and support systems. According to the Canadian Survey on Disability, nearly 27 percent of adults in Canada, roughly eight million people, identify as having a disability. Yet close to 40 percent of this population remain unemployed or underemployed. For Amandipp Singh, the intersection between his own lived experience and that of countless other Canadians became undeniable.

“I have nearly a decade of experience in the education sector, working with governments, nonprofits, and educational institutions, building solutions to empower underprivileged communities for better integration into the workforce and education,” reflects Singh. “Which, on top of my own lived experience with partial blindness,” he adds, “gave me a fair idea of the pain points and the possible solutions.”

“I always use this example,” Singh says. “If even for a day you had to work with your eyes closed or be unable to speak, there is nothing that will suddenly replace your talent, skills, passion, or anything. Everything will remain as it is.” What shifts, he explains, is not the person, but the conditions of moving through systems designed for able-bodied people, without flexibility. “The job seeker’s experience becomes completely different. That’s the gap we’re solving for.”

Then, post-2020, a turning point came into view. “When the era of AI agents and technology became available,” Singh says, “I had a strong understanding of the pain points and the possible solutions, and we asked: what if we build a solution to minimize those barriers?” Singh recalls, “That vision and that desire led to the beginning of the journey of what would become Enabled Talent.”

Instead of forcing individuals with disabilities to repeatedly navigate inaccessible hiring systems, Enabled Talent streamlines that burden with AI. “For each candidate, it creates a personal digital persona,” Singh explains, “and that digital profile, using AI agents, will communicate with all the job opportunities on the platform, not the individual.”

Candidates complete a one-time onboarding process, using voice or text, and the platform matches them to roles based on skills, interests, and real-world fit. Employers receive a curated shortlist rather than hundreds of applications. It benefits employers as well, explains Singh. “Instead of getting hundreds of applications, which is where we are today,” he says, “you get a pre-vetted list of candidates that match, like a dating app.” The increase in efficiency is dramatic. “During this journey, you save 90 to 95 percent of the time,” he adds, “and the candidates will have the relevant necessary skills.”

“Let’s say there is a role for a barista at a coffee shop,” Singh offers as an example. “A person with a hearing impairment can apply. Someone with a speech impairment can still do it. But a person with a physical disability or who uses a wheelchair, it is not a practical job.” The platform’s recommendations are built on practical context, not assumptions, and address traditional blind spots in hiring practices. “I use the term ‘co-design,’ asking individuals with disabilities, ‘what would make your journey better?’” Singh says, noting that “people avoid change, and having people understand change takes time, trust, and transparency.”

“On the Canadian Survey of Disability,” he says, “Sudbury, Timmins, Thunder Bay, North Bay, those are the ones where there’s more need for such a solution,” transforming what began as a pan-Ontario initiative into a pan-Canadian journey. Expansion into Northern Ontario and access to the regional ecosystem were unlocked through the team at NORCAT Innovation. “Just one person opened the door, which led to a further chain effect,” Singh recalls. Proving his belief that “one door opens all the doors,” Enabled Talent was soon selected by UNICEF Startup Lab in Africa, launching pilot programs in Ghana, Kenya, and Nigeria in collaboration with local consulates and ministries. “We had a formal launch event with UNICEF,” Singh says. “It was more like the first step of a Canadian company going global.”

In the early days of Enabled Talent, Singh often reflected and joked that “people don’t trust you when you’re working alone in a start-up, so I said that we were a team of three people. Who were these people, you ask? Well, me, myself, and I.”

As of late 2025, Enabled Talent is a team of eight, with combined central office locations in Brampton and Greater Sudbury, and plans to establish a Centre of Enabled Talent to host workshops and programs for job seekers with disabilities.

Enabled Talent currently serves more than 20,000 users, with a goal of exceeding 100,000. A Spanish-language version of the platform is underway, supported by the Spanish ministry.

Singh measures success less by numbers than by outcomes. “When you help people,” he says, “it means you’re solving things for the government, and even when you solve ten of those, that means you have unlocked a larger talent pool.” The talent was always there. The systems simply needed to be rebuilt to recognize it.`,
  },
};
