import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Play, Building2, User, Target, Lightbulb, Users, Calendar, DollarSign, Award, Rocket, MapPin } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import EcosystemDashboard from '@/components/dashboard/EcosystemDashboard';
import { StoryModal, storyData } from '@/components/StoryModal';

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

// Fictional startup data
const startupOverview = {
  name: 'RockPulse Analytics',
  logo: '/placeholder.svg',
  tagline: 'AI-powered predictive maintenance for underground mining equipment',
  founded: 2023,
  stage: 'Seed',
  location: 'Sudbury, ON',
  founder: {
    name: 'Dr. Elena Vasquez',
    title: 'CEO & Co-Founder',
    avatar: null,
    background: 'PhD in Mechanical Engineering from University of Toronto with 8 years at Vale as a Senior Mining Engineer. Published researcher in vibration analysis and predictive maintenance systems. Previously led a team of 12 engineers developing IoT sensor networks for underground operations.',
  },
  keyMetrics: {
    employees: 6,
    revenue: '$180K ARR',
    traction: '3 pilot programs',
    patents: '2 pending',
    funding: '$750K raised',
  },
  problem: [
    'Unplanned equipment failures cost mining operations an average of $2.5M per incident in downtime and repairs.',
    'Current maintenance schedules are reactive or calendar-based, missing 67% of early warning signs detectable through vibration and thermal analysis.',
  ],
  solution: [
    'Proprietary sensor array captures 50+ data points per second from critical equipment components, feeding into ML models trained on 10,000+ failure events.',
    'Currently in paid pilot with 3 mining operations (Glencore, KGHM, Agnico Eagle) with MVP deployed underground since Q3 2024.',
  ],
  mentorNeeds: [
    {
      area: 'Mining Procurement',
      description: 'Navigate enterprise sales cycles and vendor qualification processes with Tier 1 mining companies.',
    },
    {
      area: 'IP Strategy',
      description: 'Develop comprehensive patent portfolio and freedom-to-operate analysis for international markets.',
    },
    {
      area: 'B2B SaaS Pricing',
      description: 'Structure pricing models that capture value from prevented downtime while remaining competitive.',
    },
  ],
};

export default function Impact() {
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Greater Sudbury Innovation Ecosystem
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="headline-xl mb-6">
                Real-Time{' '}
                <span className="text-gradient-teal">Impact Dashboard</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="body-lg max-w-2xl mx-auto">
                Explore the growth, innovation, and economic impact of Greater Sudbury's 
                thriving startup ecosystem through interactive data visualization.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <EcosystemDashboard />
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
                Celebrating the achievements of our portfolio companies. Click to explore each story.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <ScrollReveal key={story.company} delay={index * 100}>
                <button 
                  onClick={() => setSelectedStory(story.company)}
                  className="w-full p-6 bg-slate-900 rounded-2xl text-center h-full group cursor-pointer transition-all duration-300 hover:bg-slate-800 hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-500/10 border border-transparent hover:border-teal-500/30"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-sm font-medium mb-4">
                    <TrendingUp className="h-4 w-4" />
                    {story.outcome}
                  </div>
                  <div className="text-4xl font-display font-bold text-slate-50 mb-2">
                    {story.amount}
                  </div>
                  <div className="font-semibold text-slate-200 mb-2">{story.company}</div>
                  <p className="text-sm text-slate-400 mb-4">{story.description}</p>
                  
                  {/* Play indicator */}
                  <div className="flex items-center justify-center gap-2 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
                      <Play className="h-4 w-4 fill-current" />
                    </div>
                    <span className="text-sm font-medium">View Story</span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story Modal */}
      <StoryModal 
        story={selectedStory ? storyData[selectedStory] : null}
        open={!!selectedStory}
        onClose={() => setSelectedStory(null)}
      />

      {/* Startup Overview Section */}
      <section className="section-padding bg-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-teal-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
                Portfolio Spotlight
              </span>
              <h2 className="headline-lg text-slate-50 mb-6">
                Startup <span className="text-gradient-teal">Overview</span>
              </h2>
              <p className="body-lg text-slate-300">
                Get an in-depth look at one of our portfolio companies seeking mentorship.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto">
            {/* Company Header */}
            <ScrollReveal delay={100}>
              <Card className="bg-slate-800/50 border-slate-700 mb-6">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shrink-0">
                      <Building2 className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-50">
                          {startupOverview.name}
                        </h3>
                        <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30">
                          {startupOverview.stage}
                        </Badge>
                      </div>
                      <p className="text-lg text-slate-300 mb-4">{startupOverview.tagline}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {startupOverview.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          Founded {startupOverview.founded}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Key Metrics */}
            <ScrollReveal delay={150}>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {[
                  { icon: Users, label: 'Team Size', value: startupOverview.keyMetrics.employees },
                  { icon: DollarSign, label: 'Revenue', value: startupOverview.keyMetrics.revenue },
                  { icon: Rocket, label: 'Traction', value: startupOverview.keyMetrics.traction },
                  { icon: Award, label: 'Patents', value: startupOverview.keyMetrics.patents },
                  { icon: TrendingUp, label: 'Funding', value: startupOverview.keyMetrics.funding },
                ].map((metric, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-4 text-center">
                      <metric.icon className="h-5 w-5 text-teal-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-slate-50">{metric.value}</div>
                      <div className="text-xs text-slate-400">{metric.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* The Problem */}
                <ScrollReveal delay={200}>
                  <Card className="bg-slate-800/50 border-slate-700 h-full">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-slate-50">
                        <Target className="h-5 w-5 text-red-400" />
                        The Problem
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-3">
                        {startupOverview.problem.map((point, index) => (
                          <li key={index} className="flex gap-3 text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                {/* The Solution */}
                <ScrollReveal delay={250}>
                  <Card className="bg-slate-800/50 border-slate-700 h-full">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-slate-50">
                        <Lightbulb className="h-5 w-5 text-teal-400" />
                        The Solution
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-3">
                        {startupOverview.solution.map((point, index) => (
                          <li key={index} className="flex gap-3 text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Founder Profile */}
                <ScrollReveal delay={300}>
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-slate-50">
                        <User className="h-5 w-5 text-purple-400" />
                        Founder Profile
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-start gap-4 mb-4">
                        <Avatar className="h-14 w-14 border-2 border-purple-500/30">
                          <AvatarImage src={startupOverview.founder.avatar || undefined} />
                          <AvatarFallback className="bg-purple-500/20 text-purple-300 text-lg">
                            {startupOverview.founder.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-slate-50">{startupOverview.founder.name}</div>
                          <div className="text-sm text-slate-400">{startupOverview.founder.title}</div>
                        </div>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {startupOverview.founder.background}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                {/* Mentor Needs */}
                <ScrollReveal delay={350}>
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-slate-50">
                        <Users className="h-5 w-5 text-amber-400" />
                        Mentor Needs
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        {startupOverview.mentorNeeds.map((need, index) => (
                          <div key={index} className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold shrink-0">
                              {index + 1}
                            </span>
                            <div>
                              <div className="font-medium text-slate-50">{need.area}</div>
                              <p className="text-sm text-slate-400">{need.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </div>

            {/* CTA for Mentors */}
            <ScrollReveal delay={400}>
              <div className="mt-8 text-center">
                <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                  <Link to="/programs/mentorship-services">
                    Become a Mentor
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="headline-lg mb-6">
              Be Part of Our Next Chapter
            </h2>
            <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
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
