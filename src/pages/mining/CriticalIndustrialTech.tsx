import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Check, Cpu, Shield, Bot, Network, Blocks, Atom, ExternalLink, GraduationCap, Briefcase, FlaskConical, Target, DollarSign, Users, Building2, TrendingUp } from 'lucide-react';
import { useState } from 'react';

import citLogo from '@/assets/logos/cit-logo.png';
import ociLogo from '@/assets/logos/oci-logo.png';
import ontarioLogo from '@/assets/logos/ontario-logo.png';
import signatureLines from '@/assets/signature-lines.png';
import linesTeal from '@/assets/lines-teal.png';
import citHeroBg from '@/assets/cit-hero-bg.jpg';

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

const CriticalIndustrialTech = () => {
  const technologies = [
    { icon: Network, name: '5G & Advanced Networks' },
    { icon: Cpu, name: 'Artificial Intelligence' },
    { icon: Blocks, name: 'Blockchain' },
    { icon: Bot, name: 'Robotics' },
    { icon: Shield, name: 'Cybersecurity' },
    { icon: Atom, name: 'Quantum' },
  ];

  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);

  const programs = [
    {
      title: 'Development & Commercialization Program',
      description: 'New SME solutions can commercialize faster through exclusive, no-cost access to the NORCAT Underground Technology Development Site and up to $100k of support from OCI.',
      ideal: 'Accelerated Product Development',
      icon: FlaskConical,
      expandedDetails: {
        funding: 'Up to $100,000',
        benefits: [
          'No-cost access to NORCAT Underground Technology Development Site',
          'Real-world mining environment for testing and validation',
          'Expert mentorship from industry professionals',
          'Accelerated path from prototype to market-ready product'
        ],
        eligibility: 'Ontario-based SMEs developing new critical technology solutions for the mining sector',
        link: 'https://www.citinnovation.ca/program/development-and-commercialization-program/'
      }
    },
    {
      title: 'Technology Access Program',
      description: 'SMEs with an existing critical technology product or service can break into new markets faster through exclusive, no-cost access to our Technology Development Site.',
      ideal: 'Product Validation',
      icon: Target,
      expandedDetails: {
        funding: 'No-cost site access',
        benefits: [
          'Exclusive access to Technology Development Site facilities',
          'Opportunity to validate products in real mining conditions',
          'Connect with potential industry customers and partners',
          'Faster market penetration in the mining sector'
        ],
        eligibility: 'Ontario SMEs with existing critical technology products seeking market expansion',
        link: 'https://www.citinnovation.ca/program/technology-access-program/'
      }
    },
    {
      title: 'Talent Development Internships',
      description: 'Eligible SMEs can invest in the industrial workforce of tomorrow by hiring new talent for Critical Technology internships, with up to $20k in OCI support.',
      ideal: 'New Talent Hiring',
      icon: GraduationCap,
      expandedDetails: {
        funding: 'Up to $20,000 ($10k per 4-month unit)',
        benefits: [
          'Financial support for hiring critical technology interns',
          'Build your pipeline of future talent',
          'Contribute to workforce development in Ontario',
          'Flexible 4-month internship units'
        ],
        eligibility: 'Ontario SMEs looking to hire interns for critical technology roles',
        link: 'https://www.citinnovation.ca/program/talent-development-internships/'
      }
    },
    {
      title: 'Future Ready Program',
      description: 'Eligible SMEs can equip their employees for the challenges of today through upskilling initiatives with up to $10k of OCI support.',
      ideal: 'Talent Development',
      icon: Briefcase,
      expandedDetails: {
        funding: 'Up to $10,000',
        benefits: [
          'Support for employee upskilling initiatives',
          'Training in critical technology areas',
          'Enhance your team\'s competitive capabilities',
          'Prepare workforce for emerging industrial challenges'
        ],
        eligibility: 'Ontario SMEs seeking to upskill existing employees in critical technologies',
        link: 'https://www.citinnovation.ca/program/future-ready-program/'
      }
    },
  ];

  const stats = [
    { value: '$55.8M', label: 'Total Investment', icon: DollarSign },
    { value: '$21.7M', label: 'CIT Investment', icon: TrendingUp },
    { value: '185', label: 'Projects Supported', icon: Building2 },
    { value: '194+', label: 'Ontario Companies', icon: Users },
  ];

  return (
    <Layout>
      <div style={{ background: 'hsl(220 15% 92%)' }} className="min-h-screen">

        {/* ───── HERO ───── */}
        <section className="relative pt-40 pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <img src={citHeroBg} alt="" aria-hidden="true" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, hsla(220, 15%, 10%, 0.75) 0%, hsla(220, 15%, 10%, 0.5) 50%, transparent 100%)' }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-6" style={{ background: 'hsla(0, 0%, 100%, 0.15)', backdropFilter: 'blur(10px)', border: '1px solid hsla(0, 0%, 100%, 0.25)', color: 'hsl(0, 0%, 100%)' }}>
                  <Factory className="w-3.5 h-3.5" />
                  Ontario Centre of Innovation Program
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-6" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500, color: 'hsl(0, 0%, 100%)' }}>
                  Critical Industrial{' '}
                  <span className="block" style={{ color: 'hsl(168, 100%, 55%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>
                    Technologies
                  </span>
                </h1>
                <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-4" style={{ color: 'hsla(0, 0%, 100%, 0.9)' }}>
                  An Ontario Centre of Innovation program integrating critical technologies 
                  into the mining sector. NORCAT delivers this program as a Technology Development 
                  Site through the NORCAT Underground Centre.
                </p>
                <p className="font-light leading-relaxed max-w-2xl mb-10" style={{ color: 'hsla(0, 0%, 100%, 0.7)' }}>
                  Access real-world mining environments, funding support, and expert mentorship to validate and commercialize your critical technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://www.oc-innovation.ca/programs/cit/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]" style={{
                    background: 'linear-gradient(145deg, hsla(168, 25%, 85%, 0.5) 0%, hsla(168, 20%, 80%, 0.25) 100%)',
                    border: '1.5px solid hsla(168, 30%, 90%, 0.5)',
                    color: 'hsl(168, 40%, 25%)',
                    boxShadow: 'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 16px hsla(168, 20%, 30%, 0.15), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
                  }}>
                    Learn More at OCI
                    <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <Link to="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]" style={{
                    background: 'linear-gradient(145deg, hsla(220, 15%, 88%, 0.4) 0%, hsla(220, 15%, 85%, 0.2) 100%)',
                    border: '1.5px solid hsla(220, 15%, 100%, 0.5)',
                    color: 'hsl(220, 15%, 30%)',
                    boxShadow: 'inset 0 2px 4px 0 hsla(220, 15%, 100%, 0.4), inset 0 -2px 4px 0 hsla(220, 15%, 50%, 0.08), 0 4px 12px hsla(220, 15%, 30%, 0.12), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
                  }}>
                    Apply Through NORCAT
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ───── STATS STRIP ───── */}
        <div className="relative z-20 py-10" style={{ background: 'hsl(220 15% 92%)' }}>
          <div className="w-full px-6">
            <div className="flex flex-wrap justify-around gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4 px-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={iconContainerStyle}>
                    <stat.icon className="w-5 h-5" style={{ color: 'hsl(168, 100%, 35%)' }} />
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black" style={{ color: 'hsl(220, 15%, 20%)' }}>{stat.value}</div>
                    <p className="text-sm md:text-base font-light" style={{ color: 'hsl(220, 15%, 30%)' }}>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ───── ABOUT + LOGOS ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(220 10% 80% / 0.3) 0%, transparent 70%)' }} />
            <img src={signatureLines} alt="" className="absolute top-0 right-0 w-[400px] opacity-[0.07]" style={{ filter: 'sepia(1) saturate(3) hue-rotate(120deg) brightness(0.8)' }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-6" style={neumorphicBadgeStyle}>
                    <Building2 className="w-3.5 h-3.5" />
                    About the Initiative
                  </span>
                  <h2 className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-6" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500, color: 'hsl(220, 15%, 20%)' }}>
                    Converging industry with{' '}
                    <span style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>
                      innovation.
                    </span>
                  </h2>
                  <p className="text-lg font-light leading-relaxed mb-6" style={{ color: 'hsl(220, 20%, 10%)' }}>
                    The Critical Industrial Technologies initiative is an Ontario Centre of Innovation 
                    program that converges Ontario industry with innovative SMEs to amplify the 
                    province's critical technology capabilities across four key sectors: Mining, 
                    Advanced Manufacturing, Agri-Food, and Construction.
                  </p>
                  <p className="font-light leading-relaxed mb-6" style={{ color: 'hsl(220, 15%, 40%)' }}>
                    As a <strong style={{ color: 'hsl(220, 15%, 20%)', fontWeight: 600 }}>Technology Development Site (TDS)</strong>, the NORCAT Underground Centre 
                    provides SMEs with a real-world mining environment to validate and commercialize 
                    their critical technology solutions.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-6">
                  {/* Partner logos */}
                  <div className="rounded-[20px] p-8 flex items-center justify-center gap-8" style={glassCardStyle}>
                    <img src={citLogo} alt="Critical Industrial Technologies" className="h-16 object-contain" />
                    <img src={ociLogo} alt="Ontario Centre of Innovation" className="h-16 object-contain" />
                    <img src={ontarioLogo} alt="Government of Ontario" className="h-12 object-contain" />
                  </div>

                  {/* TDS Info */}
                  <div className="rounded-[20px] p-8" style={glassCardStyle}>
                    <h3 className="text-lg font-bold mb-5" style={{ color: 'hsl(220, 15%, 20%)' }}>NORCAT as a Technology Development Site</h3>
                    <ul className="space-y-3">
                      {[
                        'Real-world underground mining environment for testing',
                        'No-cost access for qualifying SMEs',
                        'Expert mentorship from mining industry professionals',
                        'Accelerated path to commercialization',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'hsl(168, 100%, 35%)' }} />
                          <span className="text-sm font-light" style={{ color: 'hsl(220, 15%, 30%)' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ───── CRITICAL TECHNOLOGY AREAS ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.08) 0%, transparent 60%)' }} />
          <img src={linesTeal} alt="" className="absolute bottom-0 right-0 w-[1000px] opacity-[0.15] pointer-events-none" style={{ transform: 'scaleY(-1)' }} />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <ScrollReveal>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-6" style={neumorphicBadgeStyle}>
                    <Cpu className="w-3.5 h-3.5" />
                    Focus Areas
                  </span>
                  <h2 className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-4" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500, color: 'hsl(220, 15%, 20%)' }}>
                    Critical technology{' '}
                    <span style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>
                      areas.
                    </span>
                  </h2>
                  <p className="font-light max-w-xl mb-8" style={{ color: 'hsl(220, 20%, 10%)' }}>
                    The initiative focuses on technologies essential to industrial competitiveness.
                  </p>
                </ScrollReveal>

                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, i) => (
                    <ScrollReveal key={i} delay={i * 0.05}>
                      <div className="rounded-[16px] p-5 flex items-center gap-4 hover:scale-[1.03] transition-transform duration-300" style={glassCardStyle}>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={iconContainerStyle}>
                          <tech.icon className="w-5 h-5" style={{ color: 'hsl(168, 100%, 28%)' }} />
                        </div>
                        <span className="font-semibold text-sm" style={{ color: 'hsl(220, 15%, 20%)' }}>{tech.name}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <ScrollReveal delay={0.2}>
                <div className="aspect-video rounded-[20px] overflow-hidden" style={{ boxShadow: '0 20px 60px hsla(220, 15%, 20%, 0.15)' }}>
                  <iframe
                    src="https://www.youtube.com/embed/J_Jx8ku0ayI"
                    title="Critical Industrial Technologies"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ───── PROGRAM STREAMS ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, hsla(220, 15%, 80%, 0.4) 0%, transparent 70%)' }} />
            <img src={signatureLines} alt="" className="absolute top-0 right-0 w-[400px] opacity-[0.07]" style={{ filter: 'sepia(1) saturate(3) hue-rotate(120deg) brightness(0.8)' }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-14">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-5" style={neumorphicBadgeStyle}>
                  <Target className="w-3.5 h-3.5" />
                  Program Streams
                </span>
                <h2 className="text-3xl md:text-4xl leading-[1.1] tracking-tight" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500, color: 'hsl(220, 15%, 20%)' }}>
                  Multiple pathways to{' '}
                  <span style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>
                    support.
                  </span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {programs.map((program, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div 
                    className="rounded-[20px] p-7 cursor-pointer hover:scale-[1.02] transition-all duration-300"
                    style={glassCardStyle}
                    onMouseEnter={() => setExpandedProgram(i)}
                    onMouseLeave={() => setExpandedProgram(null)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={iconContainerStyle}>
                        <program.icon className="w-6 h-6" style={{ color: 'hsl(168, 100%, 28%)' }} />
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3" style={{
                          background: 'hsl(168 100% 35% / 0.1)',
                          color: 'hsl(168, 100%, 28%)',
                          border: '0.5px solid hsl(168 100% 35% / 0.15)',
                        }}>
                          Ideal for: {program.ideal}
                        </span>
                        <h3 className="text-lg font-bold mb-2" style={{ color: 'hsl(220, 15%, 20%)' }}>{program.title}</h3>
                        <p className="text-sm font-light" style={{ color: 'hsl(220, 15%, 40%)' }}>{program.description}</p>
                      </div>
                    </div>
                    
                    {/* Expanded content */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedProgram === i ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                      <div className="pt-6 space-y-4" style={{ borderTop: '1px solid hsla(168, 25%, 80%, 0.3)' }}>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold" style={{ color: 'hsl(220, 15%, 20%)' }}>Funding:</span>
                          <span className="text-sm font-bold" style={{ color: 'hsl(168, 100%, 28%)' }}>{program.expandedDetails.funding}</span>
                        </div>
                        
                        <div>
                          <span className="text-sm font-semibold block mb-2" style={{ color: 'hsl(220, 15%, 20%)' }}>Key Benefits:</span>
                          <ul className="space-y-2">
                            {program.expandedDetails.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm font-light" style={{ color: 'hsl(220, 15%, 40%)' }}>
                                <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'hsl(168, 100%, 35%)' }} />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <span className="text-sm font-semibold" style={{ color: 'hsl(220, 15%, 20%)' }}>Eligibility: </span>
                          <span className="text-sm font-light" style={{ color: 'hsl(220, 15%, 40%)' }}>{program.expandedDetails.eligibility}</span>
                        </div>
                        
                        <a 
                          href={program.expandedDetails.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                          style={{ color: 'hsl(168, 100%, 28%)' }}
                        >
                          Learn more at OCI
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── MINIMUM ELIGIBILITY ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.06) 0%, transparent 60%)' }} />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-14">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-5" style={neumorphicBadgeStyle}>
                    <Check className="w-3.5 h-3.5" />
                    Requirements
                  </span>
                  <h2 className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-4" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500, color: 'hsl(220, 15%, 20%)' }}>
                    Minimum eligibility{' '}
                    <span style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>
                      criteria.
                    </span>
                  </h2>
                  <p className="font-light max-w-2xl mx-auto" style={{ color: 'hsl(220, 20%, 10%)' }}>
                    The Critical Industrial Technology programs are a good fit for companies that meet these minimum criteria:
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { title: 'Small-and-Medium Enterprise', desc: 'Less than 500 employees' },
                  { title: 'For-Profit Organization', desc: 'Registered as a for-profit entity' },
                  { title: 'Ontario Operations', desc: 'Registered operations in Ontario' },
                  { title: 'Critical Technology Focus', desc: 'Adoption of Critical Technologies as part of your roadmap' },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <div className="rounded-[20px] p-6 h-full flex items-start gap-4 hover:scale-[1.02] transition-transform duration-300" style={glassCardStyle}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={iconContainerStyle}>
                        <span className="font-bold text-sm" style={{ color: 'hsl(168, 100%, 28%)' }}>{i + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1" style={{ color: 'hsl(220, 15%, 20%)' }}>{item.title}</h3>
                        <p className="text-sm font-light" style={{ color: 'hsl(220, 15%, 40%)' }}>{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.3}>
                <p className="text-sm font-light text-center mt-8" style={{ color: 'hsl(220, 15%, 40%)' }}>
                  Please note that each program has their own set of eligibility criteria. For details on each program, please view the full set of eligibility criteria in the program guidelines.
                </p>
              </ScrollReveal>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-white mb-6" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>
                Ready to develop your{' '}
                <span style={{ color: 'hsla(0, 0%, 100%, 0.85)' }}>critical technology?</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10 text-white/60 font-light">
                Access the NORCAT Underground Centre as your Technology Development Site 
                and accelerate your path to commercialization in the mining sector.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://www.oc-innovation.ca/programs/cit/" 
                  target="_blank" 
                  rel="noopener noreferrer"
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
                  Visit OCI Program Page
                  <ExternalLink className="h-5 w-5" />
                </a>
                <Link 
                  to="/apply" 
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
                  Apply Through NORCAT
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default CriticalIndustrialTech;
