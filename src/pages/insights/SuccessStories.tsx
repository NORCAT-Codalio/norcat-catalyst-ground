import { useState, useRef, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowRight, Sparkles, X, DollarSign, Users, Globe, TrendingUp, Building2, CheckCircle, MapPin, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import type { SuccessStory } from '@/components/SuccessStoryCard';
import { detailedStories } from '@/components/SuccessStoryModal';
import signatureLines from '@/assets/signature-lines.png';
import { NewsFeed } from '@/components/NewsFeed';
import successStoriesHeroBg from '@/assets/success-stories-hero-bg.png';
import circuitiqTeam from '@/assets/circuitiq-team.png';
import symxAiTeam from '@/assets/symx-ai-team.jpg';
import flosonicsFlopatch from '@/assets/flosonics-flopatch.jpg';
import jannatecProduct from '@/assets/jannatec-product.jpg';
import planaTeam from '@/assets/plana-team.jpg';
import maestroUnderground from '@/assets/maestro-underground.jpg';


// All stories data
const allStories: SuccessStory[] = [
  {
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
  },
  {
    id: 'symx-ai',
    company: 'SYMX.AI',
    tagline: 'Revolutionizing mining with AI, Industrial IoT, and predictive analytics.',
    sector: 'AI',
    stage: 'growth',
    status: 'commercial',
    metrics: { capitalRaised: '$2M+', jobsCreated: 25, marketsReached: 8 },
    programs: ['UG Centre', 'Mentorship', 'VGS', 'IAP'],
    image: symxAiTeam,
    founded: '2008',
  },
  {
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
  },
  {
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
  },
  {
    id: 'plana-staffstat',
    company: 'Plan A & StaffStat',
    tagline: 'People-first tech staffing strategy transforming senior care across Canada.',
    sector: 'Medtech',
    stage: 'growth',
    status: 'scaling',
    metrics: { capitalRaised: '', jobsCreated: 18, marketsReached: 1 },
    programs: ['Mentorship', 'VGS'],
    image: planaTeam,
    founded: '2012',
  },
  {
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
  },
];

// Filter options
const sectors = ['All', 'Mining Tech', 'AI', 'Cleantech', 'Medtech'];
const stages = ['All', 'Early', 'Growth', 'Scale', 'Exit'];

// Ecosystem stats
const ecosystemStats = [
  { value: '$180M+', label: 'Capital Raised' },
  { value: '450+', label: 'Jobs Created' },
  { value: '23', label: 'Countries Reached' },
  { value: '89%', label: 'Survival Rate' },
];

const SuccessStories = () => {
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedStage, setSelectedStage] = useState('All');
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  const filteredStories = allStories.filter((story) => {
    if (selectedSector !== 'All' && story.sector !== selectedSector) return false;
    if (selectedStage !== 'All' && story.stage !== selectedStage.toLowerCase()) return false;
    return true;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(220 30% 7%) 0%, hsl(215 28% 10%) 60%, hsl(220 25% 12%) 100%)' }}>
        {/* Background image */}
        <div className="absolute inset-0 flex items-center justify-end">
          <img src={successStoriesHeroBg} alt="" aria-hidden="true" className="h-full max-w-none object-contain object-right" />
        </div>

        {/* Signature lines */}
        <img
          src={signatureLines}
          alt=""
          aria-hidden="true"
          className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-80 pointer-events-none select-none mix-blend-overlay"
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-xs font-semibold tracking-[0.15em] uppercase text-white mb-8">
                <Sparkles className="w-3.5 h-3.5" />
                Portfolio Companies
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.25rem] leading-[1.08] tracking-tight text-white mb-8" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500 }}>
                Built in Sudbury.{' '}
                <span style={{ color: 'hsl(0, 0%, 100%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>Scaling Globally.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl leading-relaxed text-white max-w-2xl font-light">
                These are the founders proving that world-changing mining and industrial technology 
                can come from Northern Ontario. Real companies. Real impact. Real stories.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* Filter Bar */}
      <section className="sticky top-16 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="py-4 flex flex-wrap items-center gap-6">
            {/* Sector filter */}
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm font-medium">Sector:</span>
              <div className="flex gap-1">
                {sectors.map((sector) => (
                  <button
                    key={sector}
                    onClick={() => setSelectedSector(sector)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                      selectedSector === sector
                        ? "bg-gray-900 text-white"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    )}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>

            {/* Stage filter */}
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm font-medium">Stage:</span>
              <div className="flex gap-1">
                {stages.map((stage) => (
                  <button
                    key={stage}
                    onClick={() => setSelectedStage(stage)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                      selectedStage === stage
                        ? "bg-gray-900 text-white"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    )}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <div className="ml-auto text-sm text-gray-500">
              {filteredStories.length} {filteredStories.length === 1 ? 'company' : 'companies'}
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-28 relative" style={{ background: 'hsl(220 15% 92%)' }}>
        <div className="container mx-auto px-6">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story) => {
              const isExpanded = selectedStory === story.id;
              const details = detailedStories[story.id];

              return (
                <motion.div
                  key={story.id}
                  layout
                  transition={{ layout: { type: 'spring', stiffness: 350, damping: 30 } }}
                  className={`cursor-pointer ${isExpanded ? 'md:col-span-2 lg:col-span-3' : ''}`}
                  style={{ zIndex: isExpanded ? 10 : 1 }}
                  onClick={() => !isExpanded && setSelectedStory(story.id)}
                >
                  <motion.div
                    layout
                    className="rounded-[20px] overflow-hidden"
                    style={{
                      background: 'linear-gradient(165deg, hsla(168, 25%, 78%, 0.3) 0%, hsla(168, 20%, 75%, 0.18) 50%, hsla(168, 15%, 82%, 0.1) 100%)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      borderTop: '1px solid hsla(168, 30%, 90%, 0.5)',
                      borderLeft: '1px solid hsla(168, 25%, 85%, 0.35)',
                      borderRight: '0.5px solid hsla(168, 20%, 75%, 0.15)',
                      borderBottom: '0.5px solid hsla(168, 15%, 65%, 0.1)',
                      boxShadow: 'inset 0 1px 1px 0 hsla(168, 30%, 95%, 0.25), inset 0 0 20px 0 hsla(168, 25%, 85%, 0.08), 0 8px 32px hsla(168, 20%, 30%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.03)',
                    }}
                    animate={{
                      scale: selectedStory && !isExpanded ? 0.95 : 1,
                      opacity: selectedStory && !isExpanded ? 0.4 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  >
                    {/* ── Collapsed Card ── */}
                    {!isExpanded && (
                      <motion.div layout="position">
                        {/* Image */}
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img src={story.image} alt={story.company} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsla(220, 25%, 12%, 0.8) 0%, hsla(220, 25%, 12%, 0.2) 40%, transparent 100%)' }} />
                          {story.hasVideo && (
                            <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'hsla(0, 0%, 100%, 0.2)', backdropFilter: 'blur(8px)' }}>
                              <Play className="w-5 h-5 text-white fill-white" />
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: 'hsl(168, 100%, 28%)' }}>{story.sector}</span>
                          <h3 className="text-xl font-bold mt-2 mb-2" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Open Sans', sans-serif" }}>{story.company}</h3>
                          <p className="text-sm font-light line-clamp-2 mb-4" style={{ color: 'hsl(220, 15%, 40%)' }}>{story.tagline}</p>
                          <div className="flex items-center gap-4 text-sm">
                            {story.metrics.capitalRaised && (
                              <div className="flex items-center gap-1.5">
                                <DollarSign className="w-4 h-4" style={{ color: 'hsl(152, 69%, 40%)' }} />
                                <span className="font-medium" style={{ color: 'hsl(220, 15%, 20%)' }}>{story.metrics.capitalRaised}</span>
                              </div>
                            )}
                            {story.metrics.jobsCreated && (
                              <div className="flex items-center gap-1.5">
                                <Users className="w-4 h-4" style={{ color: 'hsl(217, 91%, 60%)' }} />
                                <span className="font-medium" style={{ color: 'hsl(220, 15%, 20%)' }}>{story.metrics.jobsCreated}</span>
                              </div>
                            )}
                            {story.metrics.marketsReached && (
                              <div className="flex items-center gap-1.5">
                                <Globe className="w-4 h-4" style={{ color: 'hsl(270, 50%, 60%)' }} />
                                <span className="font-medium" style={{ color: 'hsl(220, 15%, 20%)' }}>{story.metrics.marketsReached}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* ── Expanded Card ── */}
                    {isExpanded && details && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15, duration: 0.3 }}
                      >
                        {/* Hero banner */}
                        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                          <img src={story.image} alt={story.company} className="w-full h-full object-cover" />
                          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsla(220, 25%, 12%, 0.9) 0%, hsla(220, 25%, 12%, 0.4) 50%, transparent 100%)' }} />
                          
                          {/* Close button */}
                          <button
                            onClick={(e) => { e.stopPropagation(); setSelectedStory(null); }}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center z-20 transition-transform hover:scale-110"
                            style={{
                              background: 'hsla(0, 0%, 100%, 0.15)',
                              backdropFilter: 'blur(12px)',
                              border: '1px solid hsla(0, 0%, 100%, 0.25)',
                            }}
                          >
                            <X className="w-5 h-5 text-white" />
                          </button>
                          
                          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{
                              background: 'hsl(168 100% 35% / 0.2)',
                              color: 'hsl(168, 100%, 60%)',
                              border: '0.5px solid hsl(168 100% 50% / 0.3)',
                            }}>
                              {story.sector}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>{story.company}</h2>
                            <p className="text-lg text-white/80 font-light max-w-2xl">{story.tagline}</p>
                          </div>
                        </div>

                        {/* Content grid */}
                        <div className="p-8 md:p-12">
                          <div className="grid md:grid-cols-2 gap-12">
                            {/* Left column */}
                            <div>
                              {/* The Problem */}
                              <div className="mb-10">
                                <span className="text-xs font-bold tracking-[0.15em] uppercase mb-3 block" style={{ color: 'hsl(168, 100%, 28%)' }}>The Problem</span>
                                <p className="text-lg font-medium leading-relaxed" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Open Sans', sans-serif" }}>{details.problem}</p>
                              </div>

                              {/* The Breakthrough */}
                              <div className="mb-10">
                                <span className="text-xs font-bold tracking-[0.15em] uppercase mb-3 block" style={{ color: 'hsl(168, 100%, 28%)' }}>The Breakthrough</span>
                                <p className="text-lg font-medium leading-relaxed" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Open Sans', sans-serif" }}>{details.breakthrough.text}</p>
                              </div>

                              {/* Founder Quote */}
                              <div className="rounded-2xl p-6 mb-10" style={{
                                background: 'linear-gradient(145deg, hsla(168, 20%, 88%, 0.4) 0%, hsla(168, 15%, 85%, 0.2) 100%)',
                                border: '1px solid hsla(168, 25%, 85%, 0.3)',
                              }}>
                                <div className="text-4xl leading-none mb-3" style={{ color: 'hsl(168, 100%, 28%)' }}>"</div>
                                <blockquote className="text-sm italic leading-relaxed mb-4" style={{ color: 'hsl(220, 15%, 25%)' }}>
                                  {details.founderQuote.text}
                                </blockquote>
                                <div>
                                  <p className="text-sm font-semibold" style={{ color: 'hsl(220, 15%, 20%)' }}>{details.founderQuote.author}</p>
                                  <p className="text-xs" style={{ color: 'hsl(220, 15%, 50%)' }}>{details.founderQuote.role}</p>
                                </div>
                              </div>

                              {/* Full Story */}
                              {details.fullStory && (
                                <div className="mb-10">
                                  <span className="text-xs font-bold tracking-[0.15em] uppercase mb-3 block" style={{ color: 'hsl(168, 100%, 28%)' }}>The Full Story</span>
                                  {details.fullStory.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx} className="text-lg font-medium leading-relaxed mb-4 last:mb-0" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Open Sans', sans-serif" }}>
                                      {paragraph}
                                    </p>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Right column */}
                            <div>
                              {/* Impact Metrics */}
                              <div className="mb-10">
                                <span className="text-xs font-bold tracking-[0.15em] uppercase mb-4 block" style={{ color: 'hsl(168, 100%, 28%)' }}>Impact</span>
                                <div className="grid grid-cols-2 gap-4">
                                  {[
                                    { icon: Users, label: 'Jobs Created', value: details.impactMetrics.jobs, color: 'hsl(217, 91%, 60%)' },
                                    { icon: DollarSign, label: 'Capital Raised', value: details.impactMetrics.capital, color: 'hsl(45, 93%, 47%)' },
                                    { icon: Building2, label: 'Products', value: details.impactMetrics.pilots, color: 'hsl(270, 50%, 60%)' },
                                    { icon: Globe, label: 'Markets', value: details.impactMetrics.markets, color: 'hsl(168, 100%, 35%)' },
                                  ].map((metric) => (
                                    <div key={metric.label} className="rounded-xl p-4" style={{
                                      background: 'hsla(220, 15%, 88%, 0.5)',
                                      border: '0.5px solid hsla(220, 15%, 80%, 0.4)',
                                    }}>
                                      <metric.icon className="w-5 h-5 mb-2" style={{ color: metric.color }} />
                                      <div className="text-2xl font-black" style={{ color: 'hsl(220, 15%, 20%)' }}>{metric.value}</div>
                                      <p className="text-xs" style={{ color: 'hsl(220, 15%, 50%)' }}>{metric.label}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Timeline */}
                              <div className="mb-10">
                                <span className="text-xs font-bold tracking-[0.15em] uppercase mb-4 block" style={{ color: 'hsl(168, 100%, 28%)' }}>Journey</span>
                                <div className="relative pl-6">
                                  <div className="absolute left-[7px] top-2 bottom-2 w-0.5" style={{ background: 'hsl(168 100% 35% / 0.2)' }} />
                                  {details.timeline.map((item, idx) => (
                                    <div key={idx} className="relative flex items-start gap-4 mb-4 last:mb-0">
                                      <div className="absolute left-[-19px] top-1.5 w-3 h-3 rounded-full shrink-0" style={{
                                        background: 'hsl(168, 100%, 35%)',
                                        boxShadow: '0 0 8px hsl(168 100% 35% / 0.4)',
                                      }} />
                                      <div>
                                        <span className="text-xs font-bold" style={{ color: 'hsl(168, 100%, 28%)' }}>{item.year}</span>
                                        <p className="text-sm font-light" style={{ color: 'hsl(220, 15%, 30%)' }}>{item.event}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Where They Are Now */}
                              <div className="rounded-2xl p-6" style={{
                                background: 'linear-gradient(135deg, hsl(168 100% 28%) 0%, hsl(168 80% 22%) 100%)',
                              }}>
                                <span className="text-xs font-bold tracking-[0.15em] uppercase mb-2 block" style={{ color: 'hsla(0, 0%, 100%, 0.6)' }}>Where They Are Now</span>
                                <h3 className="text-xl font-bold text-white mb-2">{details.currentStage}</h3>
                                <p className="text-sm font-light text-white/80 mb-4">{details.whatsNext}</p>
                                {details.globalPresence && (
                                  <div className="flex flex-wrap gap-2">
                                    {details.globalPresence.map((loc) => (
                                      <span key={loc} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs text-white/90" style={{
                                        background: 'hsla(0, 0%, 100%, 0.15)',
                                        border: '0.5px solid hsla(0, 0%, 100%, 0.2)',
                                      }}>
                                        <MapPin className="w-3 h-3" />
                                        {loc}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Programs bar */}
                          <div className="mt-8 pt-6 flex flex-wrap items-center gap-3" style={{ borderTop: '1px solid hsla(168, 20%, 80%, 0.3)' }}>
                            <span className="text-xs font-medium" style={{ color: 'hsl(220, 15%, 50%)' }}>Supported by:</span>
                            {story.programs.map((prog) => (
                              <span key={prog} className="px-3 py-1 rounded-full text-xs font-medium" style={{
                                background: 'hsl(168 100% 35% / 0.08)',
                                color: 'hsl(168, 100%, 28%)',
                                border: '0.5px solid hsl(168 100% 35% / 0.15)',
                              }}>
                                {prog}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {filteredStories.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg font-light" style={{ color: 'hsl(220, 15%, 40%)' }}>No companies match your filters.</p>
              <Button 
                variant="ghost" 
                className="mt-4"
                style={{ color: 'hsl(168, 100%, 28%)' }}
                onClick={() => {
                  setSelectedSector('All');
                  setSelectedStage('All');
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 relative overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-6" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500, color: 'hsl(220, 15%, 20%)' }}>
                Your Company Could Be{' '}
                <span style={{ color: 'hsl(168, 100%, 28%)', fontWeight: 700 }}>Next</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: 'hsl(220, 15%, 40%)' }}>
                These aren't outliers. This is what happens when the right founders 
                meet the right ecosystem.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/apply" 
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(145deg, hsla(168, 30%, 85%, 0.5) 0%, hsla(168, 25%, 80%, 0.25) 100%)',
                    border: '1.5px solid hsla(168, 30%, 75%, 0.4)',
                    color: 'hsl(168, 50%, 22%)',
                    boxShadow: 'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 12px hsla(168, 20%, 30%, 0.12), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
                  }}
                >
                  Apply to NORCAT Innovation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/programs/venture-growth-services" 
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(145deg, hsla(220, 15%, 90%, 0.5) 0%, hsla(220, 15%, 85%, 0.25) 100%)',
                    border: '1.5px solid hsla(220, 15%, 80%, 0.4)',
                    color: 'hsl(220, 15%, 30%)',
                    boxShadow: 'inset 0 2px 4px 0 hsla(220, 15%, 95%, 0.4), inset 0 -2px 4px 0 hsla(220, 15%, 50%, 0.08), 0 4px 12px hsla(220, 15%, 30%, 0.08)',
                  }}
                >
                  Explore Programs
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SuccessStories;
