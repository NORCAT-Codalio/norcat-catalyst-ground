import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Building2, GraduationCap, Landmark, Users, Pickaxe, DollarSign, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
type CategoryType = 'all' | 'startups' | 'support' | 'education' | 'research' | 'investors' | 'industry';
const categories = [{
  id: 'all' as const,
  label: 'All',
  icon: MapPin
}, {
  id: 'startups' as const,
  label: 'Startups',
  icon: Building2
}, {
  id: 'support' as const,
  label: 'Support Orgs',
  icon: Users
}, {
  id: 'education' as const,
  label: 'Education',
  icon: GraduationCap
}, {
  id: 'research' as const,
  label: 'Research',
  icon: Landmark
}, {
  id: 'investors' as const,
  label: 'Investors',
  icon: DollarSign
}, {
  id: 'industry' as const,
  label: 'Industry',
  icon: Pickaxe
}];
const ecosystemPartners = [
// Startups
{
  name: 'MineTech Robotics',
  category: 'startups',
  description: 'Autonomous mining vehicles',
  x: 25,
  y: 30
}, {
  name: 'SubSurface AI',
  category: 'startups',
  description: 'AI-powered geological analysis',
  x: 65,
  y: 25
}, {
  name: 'CriticalMin Solutions',
  category: 'startups',
  description: 'Critical minerals extraction',
  x: 45,
  y: 45
}, {
  name: 'VentFlow Systems',
  category: 'startups',
  description: 'Smart ventilation technology',
  x: 75,
  y: 55
}, {
  name: 'RockSense Analytics',
  category: 'startups',
  description: 'Underground sensor networks',
  x: 35,
  y: 65
},
// Support Organizations
{
  name: 'NORCAT Innovation',
  category: 'support',
  description: 'Regional Innovation Centre',
  x: 50,
  y: 35
}, {
  name: 'Sudbury Chamber',
  category: 'support',
  description: 'Business support & advocacy',
  x: 30,
  y: 50
}, {
  name: 'FedNor',
  category: 'support',
  description: 'Federal economic development',
  x: 70,
  y: 40
},
// Education
{
  name: 'Laurentian University',
  category: 'education',
  description: 'Research university',
  x: 40,
  y: 20
}, {
  name: 'Cambrian College',
  category: 'education',
  description: 'Technical training',
  x: 60,
  y: 70
}, {
  name: 'College Boreal',
  category: 'education',
  description: 'Francophone institution',
  x: 20,
  y: 45
},
// Research
{
  name: 'MIRARCO',
  category: 'research',
  description: 'Mining innovation research',
  x: 55,
  y: 60
}, {
  name: 'CEMI',
  category: 'research',
  description: 'Mining excellence centre',
  x: 80,
  y: 30
}, {
  name: 'SNOLAB',
  category: 'research',
  description: 'Underground physics lab',
  x: 25,
  y: 75
},
// Investors
{
  name: 'Sudbury Catalyst Fund',
  category: 'investors',
  description: '$5M startup fund',
  x: 50,
  y: 50
}, {
  name: 'Northern Ontario Angels',
  category: 'investors',
  description: 'Angel investor network',
  x: 70,
  y: 65
}, {
  name: 'McEwen Mining',
  category: 'investors',
  description: 'Strategic mining investor',
  x: 85,
  y: 45
},
// Industry
{
  name: 'Vale',
  category: 'industry',
  description: 'Global mining company',
  x: 15,
  y: 35
}, {
  name: 'Glencore',
  category: 'industry',
  description: 'Mining & commodities',
  x: 85,
  y: 70
}, {
  name: 'Epiroc',
  category: 'industry',
  description: 'Mining equipment OEM',
  x: 60,
  y: 15
}, {
  name: 'Sandvik',
  category: 'industry',
  description: 'Mining technology',
  x: 35,
  y: 80
}];
const categoryColors: Record<CategoryType, string> = {
  all: 'bg-slate-500',
  startups: 'bg-teal-500',
  support: 'bg-blue-500',
  education: 'bg-amber-500',
  research: 'bg-violet-500',
  investors: 'bg-emerald-500',
  industry: 'bg-orange-500'
};
export default function Ecosystem() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);
  const filteredPartners = activeCategory === 'all' ? ecosystemPartners : ecosystemPartners.filter(p => p.category === activeCategory);
  return <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Ecosystem Map
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="headline-xl mb-6">
                Sudbury's Innovation{' '}
                <span className="text-gradient-teal">Ecosystem</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="body-lg max-w-2xl">Explore the network of startups, support organizations, research institutions, investors, and industry partners that make Greater Sudbury a hub for innovation.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={cn('flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all', activeCategory === cat.id ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground')}>
                <cat.icon className="h-4 w-4" />
                {cat.label}
              </button>)}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative bg-slate-100 rounded-3xl overflow-hidden" style={{
          height: '600px'
        }}>
            {/* Map Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Center Label - Sudbury */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-2 mx-auto">
                <MapPin className="h-10 w-10 text-primary" />
              </div>
              <span className="font-display font-bold text-lg text-foreground">Greater Sudbury</span>
            </div>

            {/* Partner Dots */}
            {filteredPartners.map(partner => <div key={partner.name} className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer z-20" style={{
            left: `${partner.x}%`,
            top: `${partner.y}%`
          }} onMouseEnter={() => setHoveredPartner(partner.name)} onMouseLeave={() => setHoveredPartner(null)}>
                <div className={cn('w-4 h-4 rounded-full transition-all duration-300', categoryColors[partner.category as CategoryType], hoveredPartner === partner.name && 'scale-150 ring-4 ring-primary/30')} />
                {hoveredPartner === partner.name && <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-background shadow-lg rounded-lg p-4 min-w-[200px] z-30 animate-fade-in">
                    <div className="font-semibold text-foreground">{partner.name}</div>
                    <div className="text-sm text-muted-foreground">{partner.description}</div>
                    <div className="mt-2">
                      <span className={cn('inline-block px-2 py-1 rounded text-xs text-primary-foreground capitalize', categoryColors[partner.category as CategoryType])}>
                        {partner.category}
                      </span>
                    </div>
                  </div>}
              </div>)}

            {/* Legend */}
            <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-sm font-semibold mb-3">Legend</div>
              <div className="grid grid-cols-2 gap-2">
                {categories.filter(c => c.id !== 'all').map(cat => <div key={cat.id} className="flex items-center gap-2">
                    <div className={cn('w-3 h-3 rounded-full', categoryColors[cat.id])} />
                    <span className="text-xs text-muted-foreground">{cat.label}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners List */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="headline-lg text-center mb-12">
              Ecosystem <span className="text-gradient-teal">Directory</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPartners.map((partner, index) => <ScrollReveal key={partner.name} delay={index * 50}>
                <div className="p-4 bg-background rounded-xl border border-border hover:border-teal-200 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className={cn('w-3 h-3 rounded-full mt-1.5 flex-shrink-0', categoryColors[partner.category as CategoryType])} />
                    <div>
                      <div className="font-semibold">{partner.name}</div>
                      <div className="text-sm text-muted-foreground">{partner.description}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>)}
          </div>
        </div>
      </section>
    </Layout>;
}