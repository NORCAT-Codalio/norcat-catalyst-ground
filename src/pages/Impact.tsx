import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, DollarSign, Building2, Briefcase, Globe } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { StatCounter } from '@/components/StatCounter';
import { Button } from '@/components/ui/button';

const impactStats = [
  { value: 150, suffix: '+', label: 'Startups Supported', description: 'Companies launched and scaled since inception' },
  { value: 75, prefix: '$', suffix: 'M+', label: 'Capital Raised', description: 'Total investment raised by portfolio companies' },
  { value: 2000, suffix: '+', label: 'Jobs Created', description: 'Direct employment across Northern Ontario' },
  { value: 5, prefix: '$', suffix: 'M', label: 'Catalyst Fund', description: 'Direct investment capital available' },
  { value: 25, prefix: '$', suffix: 'M+', label: 'Non-Dilutive Funding', description: 'Grants and programs secured' },
  { value: 50, suffix: '+', label: 'Mining Tech Companies', description: 'Startups focused on mining innovation' },
];

const yearlyGrowth = [
  { year: '2019', companies: 85, capital: 25, jobs: 800 },
  { year: '2020', companies: 100, capital: 35, jobs: 1100 },
  { year: '2021', companies: 120, capital: 50, jobs: 1500 },
  { year: '2022', companies: 135, capital: 62, jobs: 1800 },
  { year: '2023', companies: 150, capital: 75, jobs: 2000 },
];

const sectors = [
  { name: 'Mining Technology', percentage: 35, color: 'bg-primary' },
  { name: 'Cleantech & BEV', percentage: 20, color: 'bg-teal-400' },
  { name: 'Industrial IoT', percentage: 18, color: 'bg-teal-300' },
  { name: 'AI & Software', percentage: 15, color: 'bg-teal-200' },
  { name: 'Critical Minerals', percentage: 12, color: 'bg-teal-100' },
];

const successStories = [
  {
    company: 'MineTech Robotics',
    outcome: 'Series A Closed',
    amount: '$12M',
    description: 'Autonomous underground vehicles now deployed at 5 mining sites globally.',
  },
  {
    company: 'SubSurface AI',
    outcome: 'Acquisition',
    amount: '$45M',
    description: 'AI geological analysis platform acquired by major mining software company.',
  },
  {
    company: 'VentFlow Systems',
    outcome: 'Partnership',
    amount: 'Global OEM',
    description: 'Smart ventilation technology licensed by leading mining equipment manufacturer.',
  },
];

export default function Impact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Impact Dashboard
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="headline-xl mb-6">
                Measuring Our{' '}
                <span className="text-gradient-teal">Impact</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="body-lg max-w-2xl">
                Transparency and accountability matter. Here's a real-time view of the 
                outcomes we've helped create for founders, the ecosystem, and Northern Ontario.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Stats Grid */}
      <section className="section-padding-sm bg-secondary border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {impactStats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <StatCounter
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  label={stat.label}
                  description={stat.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Over Time */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="headline-lg mb-6">
                Growth <span className="text-gradient-teal">Trajectory</span>
              </h2>
              <p className="body-lg">
                Consistent year-over-year growth across all key metrics.
              </p>
            </div>
          </ScrollReveal>

          {/* Simple Bar Chart */}
          <ScrollReveal>
            <div className="bg-background rounded-2xl border border-border p-8">
              <div className="grid grid-cols-5 gap-4">
                {yearlyGrowth.map((year, index) => (
                  <div key={year.year} className="text-center">
                    <div className="relative h-48 bg-muted rounded-lg mb-4 flex items-end justify-center p-2">
                      <div
                        className="w-full bg-gradient-teal rounded transition-all duration-1000"
                        style={{
                          height: `${(year.capital / 80) * 100}%`,
                          animationDelay: `${index * 200}ms`,
                        }}
                      />
                    </div>
                    <div className="font-display font-bold text-2xl text-primary">
                      ${year.capital}M
                    </div>
                    <div className="text-sm text-muted-foreground">{year.year}</div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6 text-sm text-muted-foreground">
                Capital Raised by Portfolio Companies (in millions)
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sector Distribution */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="headline-lg mb-6">
                  Portfolio by <span className="text-gradient-teal">Sector</span>
                </h2>
                <p className="body-lg mb-8">
                  Our portfolio spans multiple high-growth sectors, with a strong emphasis 
                  on mining technology and industrial innovation.
                </p>
                <div className="space-y-4">
                  {sectors.map((sector) => (
                    <div key={sector.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{sector.name}</span>
                        <span className="text-muted-foreground">{sector.percentage}%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${sector.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${sector.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-background rounded-2xl border border-border text-center">
                  <Building2 className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-display font-bold text-primary mb-1">35%</div>
                  <div className="text-sm text-muted-foreground">Mining Focus</div>
                </div>
                <div className="p-6 bg-background rounded-2xl border border-border text-center">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-display font-bold text-primary mb-1">20+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
                <div className="p-6 bg-background rounded-2xl border border-border text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-display font-bold text-primary mb-1">85%</div>
                  <div className="text-sm text-muted-foreground">Survival Rate</div>
                </div>
                <div className="p-6 bg-background rounded-2xl border border-border text-center">
                  <Briefcase className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-display font-bold text-primary mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Exits This Year</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="headline-lg mb-6">
                Recent <span className="text-gradient-teal">Wins</span>
              </h2>
              <p className="body-lg">
                Celebrating the achievements of our portfolio companies.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <ScrollReveal key={story.company} delay={index * 100}>
                <div className="p-6 bg-slate-900 rounded-2xl text-center h-full">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-sm font-medium mb-4">
                    <TrendingUp className="h-4 w-4" />
                    {story.outcome}
                  </div>
                  <div className="text-4xl font-display font-bold text-slate-50 mb-2">
                    {story.amount}
                  </div>
                  <div className="font-semibold text-slate-200 mb-2">{story.company}</div>
                  <p className="text-sm text-slate-400">{story.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="headline-lg text-slate-50 mb-6">
              Be Part of Our Next Chapter
            </h2>
            <p className="body-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the founders who are building the future of mining and industrial 
              technology. Your success could be our next headline.
            </p>
            <Button asChild className="btn-hero">
              <Link to="/apply">
                Apply for Venture Growth Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
