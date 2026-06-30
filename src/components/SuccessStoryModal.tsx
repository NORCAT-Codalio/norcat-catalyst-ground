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
                    {story.impactMetrics.capital}
                  </div>
                  <p className="text-white/60 text-sm">Capital Raised</p>
                </div>

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
    tagline: 'Professional electrical circuit mapping system with 100% accuracy.',
    sector: 'Cleantech',
    stage: 'growth',
    status: 'scaling',
    metrics: { capitalRaised: '$4M', jobsCreated: 43, marketsReached: 2 },
    programs: ['SCF', 'Mentorship', 'VGS', 'IAP', 'RAI', 'UG Centre'],
    image: circuitiqTeam,
    founded: '2022',
    problem: 'Electricians and property managers had no reliable way to locate and map electrical circuits—leading to wasted time, safety hazards, and costly guesswork.',
    breakthrough: {
      text: 'CircuitIQ built the fastest, most accurate circuit mapping kit on the market, capable of locating circuits at any distance with 100% accuracy. The system digitally collects as-built property data, opening new possibilities in power management across all property types.',
    },
    timeline: [
      { year: '2022', event: 'Luke Begley introduced CircuitIQ at PITCH 2022, winning both Judge\'s Choice and People\'s Choice Awards' },
      { year: '2023', event: 'Relocated to Greater Sudbury and secured $2M in seed funding from local investors' },
      { year: '2024', event: 'Grew team from 7 to 26 employees, expanded product line' },
      { year: '2025', event: 'Secured funding from Sudbury Catalyst Fund, FedNor, NOHFC, and angel investors' },
      { year: '2026', event: 'Team of 43 staff, expanded HQ to Downtown Sudbury, mapped 400+ buildings across Canada and the USA' },
    ],
    impactMetrics: { jobs: 43, capital: '$4M', pilots: 3, markets: 2 },
    founderQuote: {
      text: "My first pitch with NORCAT Innovation was a night I'll never forget. Not only did I conquer my stage fright, but I also won! This unexpected victory caught the eye of a major investor—one who had never invested in a startup before. His investment of over $1 million, my largest yet, changed everything. Since that night in Sudbury, our company has taken off.",
      author: 'Luke Begley',
      role: 'Founder & CEO, CircuitIQ',
    },
    currentStage: 'Scaling Across North America',
    whatsNext: 'Planning expansion into underground and deep-tech space, championing optimization, innovation, and safety with smarter spaces.',
    globalPresence: ['Greater Sudbury', 'Canada', 'USA'],
    fullStory: 'Within two years of winning PITCH 2022, Luke relocated the company to Greater Sudbury, expanded the team by over 300%, and secured several investments and grants to further grow the company. CircuitIQ secured $2 million in seed funding from local investors and grew the team from 7 to 26 in just two years.\n\nBy 2026, Luke has grown CircuitIQ to a sizeable operation of 43 staff, expanded their headquarters to Downtown Sudbury, and secured significant funding totaling over $4 million through several recent provincial and local investment initiatives such as the Sudbury Catalyst Fund, FedNor, the Northern Ontario Heritage Fund Corporation (NOHFC) and local angel investors.\n\nMapping more than 400 buildings across Canada and the USA and planning to expand into the underground and deep-tech space, CircuitIQ champions optimization, innovation, and safety with smarter spaces.',
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
      text: 'SYMX.AI built an integrated suite of AI-powered software and hardware solutions—X.Machines for real-time asset performance management, X.Parts for predictive maintenance, and X.Connect for resilient IoT mesh Wi-Fi—delivering measurable results including a 9% reduction in fuel consumption, 14% decrease in maintenance costs, and 50% reduction in unscheduled downtime.',
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
      text: "NORCAT Innovation has enabled SYMX.AI to be a global leader and innovator in underground communications and real-time data gathering technologies. NORCAT's ability and influence has allowed our company to access funding, market exposure, and grow into a leading-edge technology provider. Demonstrating products in an operating mine setting is an opportunity few others in the world have—it has played a key role in the development and success SYMX.AI enjoys today.",
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
    problem: 'Critically ill patients in ICUs and emergency departments lacked continuous, non-invasive hemodynamic monitoring—forcing clinicians to rely on intermittent, invasive measurements for fluid resuscitation decisions.',
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
    problem: 'Underground mines lacked reliable, lightweight communication and proximity detection systems—leaving miners vulnerable to collisions and communication blackouts in harsh environments.',
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
    fullStory: "With 25 years of experience, Jannatec Technologies is leading the way as one of the preferred communication solution providers of total wireless networks to mines in Canada and throughout the world. Its Jannatec JET Lab and the Jannatec Edge of Technology house engineering staff, technologists, and technicians that are redefining communications in the mining industry.\n\nJannatec credits NORCAT's Underground Centre for allowing meaningful and practical testing and showcasing of its technology in an operating mine environment—a Centre situated in Sudbury that is unique to the global mining industry. Above ground at the NORCAT Centre, it's the cluster of informative individuals, mentors, and expertise under one roof that has supported Jannatec in their growth and development in new lines of products.\n\nIn late 2022, Jannatec underwent a significant leadership transition, appointing Rey Boucher as President to lead team development and commercial growth. During this period, the company pivotally rebranded its focus from communications company to a safety company and saw the launch of the JAWS 2 (Jannatec Advanced Warning System)—an advanced proximity detection platform.\n\nA major milestone occurred with the opening of a permanent office at the newly expanded NORCAT Underground Centre in Onaping Falls, placing Jannatec's engineering team directly within an active mining environment.\n\nThrough its association with MineConnect, located in NORCAT's Sudbury location, Jannatec has successfully expanded into the Nevada mining market.",
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
    problem: 'Long-term care homes in Canada had no reliable, modern way to fill nursing and PSW shifts—relying on cold calls at all hours, leading to chronic understaffing and burnout.',
    breakthrough: {
      text: 'Sheri Tomchick built StaffStat—a digital shift-filling platform that removes friction from frontline staffing. What started as a tool to get shifts to staff "stat" evolved into an intelligent workforce hub using AI to predict shift anomalies days or weeks in advance, measure staff engagement, and alert leaders when employees need more support.',
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
    fullStory: "Sheri's journey began with a dose of hard reality. After graduating from nursing and returning to Sudbury for her preceptorship, she quickly felt the cracks in the system. \"There was zero backup plan for nurses and PSWs in Sudbury,\" she says. \"I was ready to begin my career, but I just burned out really fast.\"\n\nThat fire began as a small staffing agency—Plan A. But Sheri hated cold-calling people, waking them up at all hours to fill shifts. She began developing what would become StaffStat—a digital shift-filling platform that would remove friction from frontline staffing.\n\nMentorship made the difference. \"Once I was paired with Mr. Peter Dal Bianco, things really changed for my company,\" Sheri says. The software evolved fast. What started as a shift-filling tool soon became an intelligent workforce hub.\n\nToday, StaffStat uses AI to predict shift anomalies days or weeks in advance. It measures staff engagement and alerts when employees are not engaged so leaders can act early.\n\nOn the ground, Mandy Gauthier is the human engine behind Plan A's national growth. \"I call Mandy the fairy godmother of long-term care,\" Sheri says. Their combined leadership has built a \"Small Giant\" in Canadian health tech.\n\n\"Nobody really understands all the magnificent things we're doing across Canada from Greater Sudbury… with an incredible team of 18,\" Sheri says proudly. Plan A now offers a full continuum of staffing services, from frontline recruitment to predictive scheduling to engagement analytics.\n\nPlan A and StaffStat now support over 900 nursing homes across Canada, with demand growing fast. \"There's nothing in the healthcare market that has as much impact on the front line as it does the bottom line as StaffStat.\"",
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
    problem: 'Underground mines relied on fragmented, analogue tools that offered limited visibility into air quality, environmental conditions, and worker safety—despite being one of the harshest environments on earth.',
    breakthrough: {
      text: "Maestro built a suite of digital airflow, gas, particulate, and environmental monitoring systems purpose-built for underground work. Unlike traditional analogue sensors that offer isolated readings, Maestro's IIoT ecosystem provides context, diagnostics, and connected understanding of underground conditions—enabling operators to anticipate problems instead of reacting to them.",
    },
    timeline: [
      { year: '2011', event: 'Founded by Michael Gribbons to bridge the digital gap in underground mining' },
      { year: '2014', event: 'Early concepts refined at the Tom Fortin Discovery Centre' },
      { year: '2016', event: 'One of the first companies to install technology at NORCAT Underground Centre' },
      { year: '2022', event: 'Implemented full digital network for inaugural Mining Transformed event in two weeks' },
      { year: '2025', event: 'Solutions deployed in mines around the world' },
      { year: '2026', event: '82% of workforce are newcomers to Canada building new lives in Sudbury' },
    ],
    impactMetrics: { jobs: 50, capital: 'Global', pilots: 6, markets: 10 },
    founderQuote: {
      text: "There was a significant gap between what mines had access to and what was possible. That's what we set out to solve. For decades, my father worked for mining companies with dangerous air quality and poor systems to measure the amounts of dangerous gasses he breathed in every day. These working conditions caused him severe lung damage. Maestro's core purpose was, and still is, to enhance lives by the pursuit of safety and productivity excellence.",
      author: 'Michael Gribbons',
      role: 'Founder, Maestro Digital Mine',
    },
    currentStage: 'Global Commercial Leader',
    whatsNext: "Maestro's solutions are used around the world, bringing clarity and confidence to underground environments. 82% of the workforce are newcomers to Canada—building new lives, securing permanent residency, and purchasing first homes.",
    globalPresence: ['Sudbury', 'Canada', 'Global'],
    fullStory: "Michael Gribbons carried a deeply personal understanding of what was at stake. \"For decades, my father worked for mining companies with dangerous air quality and poor systems to measure the amounts of dangerous and illness-causing gasses he breathed in every day,\" he says. \"These working conditions caused him severe lung damage and ultimately led to open-chest surgery.\"\n\nFrom the beginning, Michael envisioned a mine where workers, supervisors, and operators could finally know what was happening in the air around them and on the ground beneath them. A core principle drove development: safety and productivity are inseparable.\n\nMaestro's relationship with NORCAT became a turning point. Early support from Tom Fortin and the Tom Fortin Discovery Centre played a meaningful role by providing Maestro with the environment required to test, refine, and prove out initial concepts. Subsequently, Maestro was one of the first companies invited to install its technology at the NORCAT Underground Centre.\n\nThis foundation led directly into Maestro's role in the inaugural Mining Transformed event in 2022, where the company was asked to implement a full digital network throughout the underground mine. \"We accepted the challenge and the result—accomplished in two weeks with only two workers who had two hours of training—was a clear demonstration of what integrated IIoT can accomplish,\" says Michael.\n\nToday, Maestro Digital Mine's solutions are used around the world. Yet despite the company's growth and technical success, Michael has never measured progress solely through products. \"Today, around 82% of Maestro's workforce are newcomers to Canada,\" Michael explains. \"I've had the joy of watching them build new lives in Canada—securing permanent residency, purchasing their first home, getting married and having children. To me, that's the most meaningful measure of success.\"",
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
    problem: 'Local chambers of commerce and the small businesses they serve were stuck with outdated tools to deliver member value—paper coupons, PDF directories, and disconnected loyalty programs that no one actually used.',
    breakthrough: {
      text: 'Chamber Perks App gives chambers a modern, mobile-first platform that turns member benefits into a living, daily-use product—driving real foot traffic to local businesses and proving the value of chamber membership in a way members can see and measure.',
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
      text: "Karen Hastie wasn't built for retirement. She was built to build—and Chamber Perks App is proof that when local business gets the technology it deserves, entire main streets come back to life.",
      author: 'Karen Hastie',
      role: 'Founder & CEO, Chamber Perks App',
    },
    currentStage: 'Scaling Nationally',
    whatsNext: 'Expanding to more chambers across Canada and continuing to build features that turn chamber membership into measurable, daily value for local businesses.',
    globalPresence: ['Sudbury', 'Canada'],
    fullStory: "Karen Hastie wasn't built for retirement. After decades of championing small business, she saw a gap that no one else was fixing: chambers of commerce—the original local-business networks—were running on tools that hadn't kept up with how people actually live, shop, and connect.\n\nChamber Perks App is her answer. It gives chambers a modern, mobile-first way to deliver member benefits, drive foot traffic to local businesses, and make the value of membership tangible. Instead of paper coupons and PDFs no one opens, members get a daily-use app that puts their community in their pocket.\n\nThrough NORCAT Innovation's Venture Growth Services and mentorship programs, Karen has sharpened her go-to-market, expanded the platform, and onboarded chambers across the country—proving that when local business gets the technology it deserves, the whole community wins.",
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
    problem: 'Building software is an expensive process—80-90% of early-stage capital is spent on tech development that often gets revamped multiple times. Generative AI tools get founders 70% of the way (UI and prototype), but the final 30%—logic, security, backend architecture, integration—hits a wall, leaving non-technical founders stranded with code they can\'t scale and a product they can\'t launch.',
    breakthrough: {
      text: 'Codalio is a true MVP-building tool that converts natural language into functional, enterprise-grade applications. Powered by the open-source Rhino platform and a proprietary AI core engine trained on best software practices, it handles the heavy lifting of the backend, solves the 70% problem, and hands over full code ownership—reducing development cost and time-to-market by up to 80%.',
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
      text: "We're lying to founders about how easy it is to build software with AI. AI gets you 70% of the way there—the UI and the prototype. The final 30%—logic, security, backend, integration—is where founders get stranded. Codalio is the MVP builder that finishes the job and hands you full code ownership.",
      author: 'Ehsan Mirdamadi',
      role: 'Co-Founder & CEO, Codalio',
    },
    currentStage: 'Scaling',
    whatsNext: 'Scaling the Codalio platform nationally, expanding the Rhino open-source ecosystem, and deepening AI adoption support for Northern Ontario SMEs through the Regional AI Initiative.',
    globalPresence: ['Sudbury', 'Canada'],
    fullStory: "Ehsan Mirdamadi has spent more than two decades inside Canadian tech. A serial entrepreneur since 1999, he bootstrapped Canada's first and largest cloud computing company before exiting and turning his attention to a critical, frustrating gap in the country's innovation pipeline: the MVP gap.\n\nBuilding software is expensive. A staggering 80-90% of early-stage capital is burned on tech development that gets revamped multiple times. Generative AI was supposed to fix this—but Ehsan saw the catch immediately. \"We're lying to founders about how easy it is to build software with AI,\" he says. AI tools are incredible at getting you 70% of the way there—usually the UI and the prototype. The final 30%—the logic, security, backend architecture, and integration—hits a wall. Non-technical founders get stranded with code they can't scale and a product they can't launch.\n\nCodalio is his answer. A Sudbury-based, AI-powered SaaS startup, Codalio is built as a true MVP-building tool for non-technical founders. The platform converts natural language into functional applications, powered by the open-source Rhino platform—developed and owned by Codalio's founders—and a proprietary AI core engine trained on best software development practices and expert-designed infrastructure blueprints. The result: enterprise-grade full applications, not locked-in runtimes or limited code snippets. Codalio cuts development cost and time-to-market by up to 80%, and crucially, hands founders full code ownership.\n\nThe Sudbury Catalyst Fund invested $250,000 in Codalio to accelerate the platform. \"Their success reflects the innovation and entrepreneurial spirit thriving in our community,\" said Don Duval, CEO of NORCAT and co-managing partner of the SCF. \"Their decision to relocate to Sudbury reinforces this momentum.\" Codalio has co-hosted hands-on MVP workshops with NORCAT Innovation in Sudbury, teaching founders the frameworks, tools, and confidence to turn vision into reality—and is helping power FedNor's Regional AI Initiative, which is investing in AI adoption, integration, and commercialization across Northern Ontario SMEs.",
  },
};
