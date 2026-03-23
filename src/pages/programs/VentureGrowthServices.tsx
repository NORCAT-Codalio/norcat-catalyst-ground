import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ServicesExplorer, AudienceTabs, type Audience } from '@/components/ServicesExplorer';
import { Link } from 'react-router-dom';
import lukeBegleyPhoto from '@/assets/testimonials/luke-begley.png';
import signatureLines from '@/assets/signature-lines.png';
import linesTeal from '@/assets/lines-teal.png';
import circuitiqTeam from '@/assets/circuitiq-team.png';
import { 
  ArrowRight, 
  Rocket, 
  Target, 
  Compass,
  Zap,
  MessageCircle,
  Clock,
  MapPin,
  Quote,
  BarChart3,
  Globe
} from 'lucide-react';

const allServices = [
  {
    type: 'Program',
    title: 'Venture Growth Services',
    applyBy: 'Rolling Intake',
    duration: 'Ongoing',
    location: 'Greater Sudbury (Virtual Available)',
    link: '/programs/venture-growth-services',
  },
  {
    type: 'Program',
    title: 'Mentorship Services',
    applyBy: 'Rolling Intake',
    duration: '12+ Month Journey',
    location: 'Northern Ontario',
    link: '/programs/mentorship-services',
  },
  {
    type: 'Program',
    title: 'Capital Navigation',
    applyBy: 'Rolling Intake',
    duration: 'Ongoing',
    location: 'Greater Sudbury',
    link: '/programs/capital-navigation',
  },
  {
    type: 'Funding',
    title: 'Sudbury Catalyst Fund',
    applyBy: 'Always Open',
    duration: '$5M Fund',
    location: 'Greater Sudbury',
    link: '/funding/sudbury-catalyst-fund',
  },
  {
    type: 'Funding',
    title: 'Innovation Acceleration Program',
    applyBy: 'Rolling Intake',
    duration: 'Up to $50K',
    location: 'Greater Sudbury',
    link: '/funding/innovation-acceleration-program',
  },
  {
    type: 'Funding',
    title: 'Regional AI Program',
    applyBy: 'Program Based',
    duration: 'Variable',
    location: 'Northern Ontario',
    link: '/funding/regional-ai-program',
  },
  {
    type: 'Facility',
    title: 'NORCAT Underground Centre',
    applyBy: 'Contact Us',
    duration: 'On-Demand',
    location: 'Onaping, ON',
    link: '/mining/norcat-underground',
  },
  {
    type: 'Facility',
    title: 'Labs & Facilities',
    applyBy: 'Contact Us',
    duration: 'Flexible Access',
    location: 'Greater Sudbury',
    link: '/mining/labs',
  },
  {
    type: 'Program',
    title: 'Critical Industrial Tech',
    applyBy: 'Rolling Intake',
    duration: 'Ongoing',
    location: 'Greater Sudbury',
    link: '/mining/critical-industrial-tech',
  },
];


const programStructure = [
  { phase: '01', title: 'Onboarding', description: 'Deep dive into your business, assign your advisor, and create a tailored growth plan.' },
  { phase: '02', title: 'Build & Validate', description: 'Work with your mentorship team on product-market fit and early traction.' },
  { phase: '03', title: 'Scale & Raise', description: 'Focus on growth metrics, team building, and fundraising preparation.' },
  { phase: '04', title: 'Ongoing Support', description: 'Continued access to network, resources, and advisor support as you scale.' }
];

const differentiators = [
  { icon: Compass, title: 'Hands-On, Not Hands-Off', description: 'We roll up our sleeves and work alongside you. This isn\'t passive mentorship—it\'s active partnership in your success.' },
  { icon: Target, title: 'Industry-Connected', description: 'Deep relationships with mining, industrial, and technology sectors mean real customer introductions, not just advice.' },
  { icon: Zap, title: 'Northern Advantage', description: 'Access to unique infrastructure like the NORCAT Underground Centre, embedded within one of Canada\'s most established mining ecosystems.' }
];

// Shared glass card style
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

const neumorphicBadgeStyle = {
  background: 'linear-gradient(145deg, hsla(168, 25%, 85%, 0.5) 0%, hsla(168, 20%, 80%, 0.25) 100%)',
  border: '1.5px solid hsla(168, 30%, 90%, 0.5)',
  color: 'hsl(168, 40%, 30%)',
  boxShadow: 'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 12px hsla(168, 20%, 30%, 0.12), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
};

const iconContainerStyle = {
  background: 'linear-gradient(145deg, hsla(220, 15%, 88%, 0.6) 0%, hsla(220, 15%, 82%, 0.3) 100%)',
  border: '1.5px solid hsla(220, 15%, 100%, 0.5)',
  boxShadow: 'inset 0 2px 4px 0 hsla(220, 15%, 100%, 0.4), inset 0 -2px 4px 0 hsla(220, 15%, 50%, 0.08), 0 4px 12px hsla(220, 15%, 30%, 0.12), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
};

const VentureGrowthServices = () => {
  const [activeAudience, setActiveAudience] = useState<Audience>('Startups');
  return (
    <Layout>
      <div style={{ background: 'hsl(220 15% 92%)' }} className="min-h-screen">

        {/* ───── HERO ───── */}
        <section className="relative pt-40 pb-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, hsla(220, 15%, 80%, 0.4) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, hsla(220, 15%, 85%, 0.3) 0%, transparent 70%)' }} />
            <img src={signatureLines} alt="" className="absolute top-0 right-0 w-[400px] opacity-[0.07]" style={{ filter: 'sepia(1) saturate(3) hue-rotate(120deg) brightness(0.8)' }} />
            <img src={linesTeal} alt="" aria-hidden="true" className="absolute top-0 right-0 opacity-[0.12] pointer-events-none" style={{ width: '60%' }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-6" style={neumorphicBadgeStyle}>
                  <Rocket className="w-3.5 h-3.5" />
                  Core Program
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-6" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500, color: 'hsl(220, 15%, 20%)' }}>
                  Venture Growth{' '}
                  <span className="block" style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>
                    Services
                  </span>
                </h1>
                <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-4" style={{ color: 'hsl(220, 20%, 10%)' }}>
                  The operating system for ambitious founders. We provide the hands-on support, 
                  education, network, and resources you need to build a category-defining company.
                </p>
                <p className="font-light leading-relaxed max-w-2xl mb-10" style={{ color: 'hsl(220, 15%, 40%)' }}>
                  We work alongside you to find customers, raise capital, build teams, and navigate the challenges of scaling.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]" style={{
                    background: 'linear-gradient(145deg, hsla(168, 25%, 85%, 0.5) 0%, hsla(168, 20%, 80%, 0.25) 100%)',
                    border: '1.5px solid hsla(168, 30%, 90%, 0.5)',
                    color: 'hsl(168, 40%, 25%)',
                    boxShadow: 'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 16px hsla(168, 20%, 30%, 0.15), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
                  }}>
                    Apply to Join
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/insights/success-stories" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]" style={{
                    background: 'linear-gradient(145deg, hsla(220, 15%, 88%, 0.4) 0%, hsla(220, 15%, 85%, 0.2) 100%)',
                    border: '1.5px solid hsla(220, 15%, 100%, 0.5)',
                    color: 'hsl(220, 15%, 30%)',
                    boxShadow: 'inset 0 2px 4px 0 hsla(220, 15%, 100%, 0.4), inset 0 -2px 4px 0 hsla(220, 15%, 50%, 0.08), 0 4px 12px hsla(220, 15%, 30%, 0.12), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
                  }}>
                    See Our Portfolio
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>


        {/* ───── SERVICES EXPLORER ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.08) 0%, transparent 60%)' }} />
          <img src={linesTeal} alt="" className="absolute bottom-0 right-0 w-[1000px] opacity-[0.15] pointer-events-none" style={{ transform: 'scaleY(-1)' }} />

          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
               <div className="mb-14">
                <span className="glass-frosted-btn-teal inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-5">
                  What's Included
                </span>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div>
                    <h2 className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-4" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500, color: 'hsl(220, 15%, 20%)' }}>
                      Everything you need to{' '}
                      <span className="text-4xl md:text-5xl" style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>
                        accelerate.
                      </span>
                    </h2>
                    <p className="font-light max-w-xl" style={{ color: 'hsl(220, 20%, 10%)' }}>
                      Comprehensive support designed to accelerate your path from early stage to scale.
                    </p>
                  </div>
                  <AudienceTabs active={activeAudience} onChange={setActiveAudience} />
                </div>
              </div>
            </ScrollReveal>

            <ServicesExplorer activeAudience={activeAudience} />
          </div>
        </section>

        {/* ───── HOW IT WORKS ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(220 10% 80% / 0.3) 0%, transparent 70%)' }} />
            <img src={signatureLines} alt="" className="absolute top-0 right-0 w-[400px] opacity-[0.07]" style={{ filter: 'sepia(1) saturate(3) hue-rotate(120deg) brightness(0.8)' }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-14">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-5" style={neumorphicBadgeStyle}>
                  <BarChart3 className="w-3.5 h-3.5" />
                  Your Journey
                </span>
                <h2 className="text-3xl md:text-4xl leading-[1.1] tracking-tight" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500, color: 'hsl(220, 15%, 20%)' }}>
                  How it{' '}
                  <span className="text-4xl md:text-5xl" style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>
                    works.
                  </span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programStructure.map((phase, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="rounded-[20px] p-7 h-full hover:scale-[1.03] transition-transform duration-300" style={glassCardStyle}>
                    <div className="text-4xl font-black mb-3" style={{ color: 'hsl(168, 100%, 35%)', opacity: 0.25 }}>{phase.phase}</div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'hsl(220, 15%, 20%)' }}>{phase.title}</h3>
                    <p className="text-sm font-light" style={{ color: 'hsl(220, 15%, 40%)' }}>{phase.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── TESTIMONIAL ───── */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img src={circuitiqTeam} alt="" aria-hidden="true" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'hsla(220, 25%, 8%, 0.8)' }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="liquid-glass-strong glass-shimmer rounded-3xl p-10 md:p-14 text-center">
                  <Quote className="w-10 h-10 mx-auto mb-8 opacity-30" style={{ color: 'hsl(168, 100%, 35%)' }} />
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/80 mb-10">
                    "The unwavering support we have received from the Sudbury Catalyst Fund and NORCAT has been instrumental in our decision to relocate our team to Sudbury."
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <img src={lukeBegleyPhoto} alt="Luke Begley" className="w-14 h-14 rounded-full object-cover" style={{ border: '1px solid hsl(168 100% 35% / 0.3)' }} />
                    <div className="text-left">
                      <p className="font-semibold text-white">Luke Begley</p>
                      <p className="text-white/35 text-sm font-light">CEO and Co-Founder of CircuitIQ</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ───── WHAT MAKES US DIFFERENT ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, hsla(220, 15%, 80%, 0.4) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, hsla(220, 15%, 85%, 0.3) 0%, transparent 70%)' }} />
            <img src={signatureLines} alt="" className="absolute top-0 right-0 w-[400px] opacity-[0.07]" style={{ filter: 'sepia(1) saturate(3) hue-rotate(120deg) brightness(0.8)' }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-6" style={neumorphicBadgeStyle}>
                    <Globe className="w-3.5 h-3.5" />
                    Why NORCAT
                  </span>
                  <h2 className="text-3xl md:text-4xl leading-[1.1] mb-6" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 500 }}>
                    What makes us{' '}
                    <span className="text-4xl md:text-5xl" style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>
                      different?
                    </span>
                  </h2>
                  <p className="font-light text-lg leading-relaxed mb-8" style={{ color: 'hsl(220, 15%, 40%)' }}>
                    There are a lot of accelerators and programs out there. Here's why founders choose to build with us.
                  </p>
                </div>
              </ScrollReveal>
              
              <div className="flex flex-col gap-5">
                {differentiators.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="rounded-[20px] p-7 hover:scale-[1.03] transition-transform duration-300" style={glassCardStyle}>
                      <div className="flex gap-4">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={iconContainerStyle}>
                          <item.icon className="w-6 h-6" style={{ color: 'hsl(168, 100%, 35%)' }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1" style={{ color: 'hsl(220, 15%, 20%)' }}>{item.title}</h3>
                          <p className="text-sm font-light" style={{ color: 'hsl(220, 15%, 40%)' }}>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───── EXPLORE OUR SERVICES ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.08) 0%, transparent 60%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.06) 0%, transparent 60%)' }} />
          <img src={linesTeal} alt="" className="absolute bottom-0 right-0 w-[1000px] opacity-[0.15] pointer-events-none" style={{ transform: 'scaleY(-1)' }} />

          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
                <div>
                  <span className="glass-frosted-btn-teal inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-5">
                    All Services
                  </span>
                  <h2 className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-2" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500, color: 'hsl(220, 15%, 20%)' }}>
                    Explore our{' '}
                    <span style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>
                      services.
                    </span>
                  </h2>
                  <p className="font-light max-w-xl" style={{ color: 'hsl(220, 20%, 10%)' }}>
                    From hands-on advisory to funding and world-class facilities — everything you need under one roof.
                  </p>
                </div>
                <Link to="/apply" className="inline-flex items-center gap-2 font-semibold group shrink-0 transition-colors" style={{ color: 'hsl(168, 100%, 28%)' }}>
                  Apply now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid lg:grid-cols-3 gap-8">
              {(['Program', 'Funding', 'Facility'] as const).map((type, colIdx) => {
                const typeServices = allServices.filter(s => s.type === type);
                const typeLabel = type === 'Program' ? 'Programs' : type === 'Funding' ? 'Funding' : 'Facilities';
                const typeIcon = type === 'Program' ? Rocket : type === 'Funding' ? DollarSign : Building2;
                const TypeIcon = typeIcon;
                return (
                  <ScrollReveal key={type} delay={colIdx * 0.1}>
                    <div className="h-full">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={iconContainerStyle}>
                          <TypeIcon className="w-5 h-5" style={{ color: 'hsl(168, 100%, 28%)' }} />
                        </div>
                        <h3 className="text-lg font-bold" style={{ color: 'hsl(220, 15%, 20%)' }}>{typeLabel}</h3>
                      </div>
                      <div className="flex flex-col gap-3">
                        {typeServices.map((service) => (
                          <Link key={service.title} to={service.link} className="group block">
                            <div 
                              className="rounded-[16px] p-5 hover:scale-[1.02] transition-all duration-300"
                              style={glassCardStyle}
                            >
                              <h4 className="font-bold text-base mb-2 group-hover:text-[hsl(168,100%,28%)] transition-colors" style={{ color: 'hsl(220, 15%, 20%)' }}>
                                {service.title}
                              </h4>
                              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-light mb-3" style={{ color: 'hsl(220, 15%, 40%)' }}>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" style={{ color: 'hsl(168, 100%, 35%)' }} />
                                  {service.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" style={{ color: 'hsl(168, 100%, 35%)' }} />
                                  {service.location}
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5 text-xs font-semibold group-hover:translate-x-1 transition-transform" style={{ color: 'hsl(168, 100%, 28%)' }}>
                                Learn more
                                <ArrowRight className="w-3.5 h-3.5" />
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───── FINAL CTA ───── */}
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
                Ready to{' '}
                <span style={{ color: 'hsla(0, 0%, 100%, 0.85)' }}>accelerate?</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10 text-white/60">
                Join the next cohort of ambitious founders building category-defining 
                companies. Applications are open.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/apply" 
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(145deg, hsla(0, 0%, 100%, 0.2) 0%, hsla(0, 0%, 100%, 0.1) 100%)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    color: 'white',
                    border: '0.5px solid hsla(0, 0%, 100%, 0.35)',
                    boxShadow: 'inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4), inset 0 -1px 0 0 hsla(0, 0%, 0%, 0.1), 0 4px 16px hsla(168, 100%, 20%, 0.3), 0 8px 32px hsla(168, 100%, 20%, 0.15)',
                  }}
                >
                  Apply Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a 
                  href="mailto:ventures@norcat.org" 
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(145deg, hsla(0, 0%, 100%, 0.08) 0%, hsla(0, 0%, 100%, 0.04) 100%)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    color: 'hsla(0, 0%, 100%, 0.8)',
                    border: '0.5px solid hsla(0, 0%, 100%, 0.2)',
                    boxShadow: 'inset 0 1px 0 0 hsla(0, 0%, 100%, 0.15), 0 4px 16px hsla(168, 100%, 20%, 0.2)',
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Book a Call
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default VentureGrowthServices;
