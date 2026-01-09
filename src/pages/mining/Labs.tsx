import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, Building2, Users, Briefcase, FlaskConical, MapPin, CheckCircle2 } from 'lucide-react';
import robotCharacter from '@/assets/robot-character.png';

const facilities = [
  {
    id: 'underground',
    icon: Mountain,
    name: 'NORCAT Underground Centre',
    location: 'Onaping, ON',
    description: 'The world\'s first underground centre for mining innovation. A fully operational underground mine environment for testing, validating, and demonstrating new technologies in real mining conditions.',
    features: [
      '1.5 km of underground development',
      'Active mining environment with real conditions',
      'Multiple test zones for different applications',
      'Connectivity infrastructure (WiFi, LTE)',
      'Compressed air, water, and ventilation',
      'Safe, controlled access for demonstrations'
    ],
    highlight: true
  },
  {
    id: 'surface',
    icon: Building2,
    name: 'NORCAT Surface Facility',
    location: 'NORCAT Underground Centre, Onaping',
    description: 'Purpose-built surface facility at the Underground Centre providing workspace, meeting rooms, and staging areas for companies conducting underground testing and demonstrations.',
    features: [
      'Meeting and presentation spaces',
      'Equipment staging areas',
      'Networking infrastructure',
      'On-site support services',
      'Visitor hosting capabilities',
      'Direct access to underground'
    ],
    highlight: false
  },
  {
    id: 'discovery-lab',
    icon: FlaskConical,
    name: 'Fortin Discovery Lab',
    location: 'NORCAT Innovation, Sudbury',
    description: 'A state-of-the-art prototyping and fabrication lab equipped with advanced tools for rapid prototyping, electronics development, and hardware innovation.',
    features: [
      '3D printing and additive manufacturing',
      'Electronics workbenches and tools',
      'Prototyping equipment',
      'Collaboration workspace',
      'Technical mentorship access',
      'Startup-friendly access model'
    ],
    highlight: true
  },
  {
    id: 'hotdesk',
    icon: Users,
    name: 'Hot Desk Space',
    location: 'NORCAT Innovation, Sudbury',
    description: 'Flexible coworking space perfect for early-stage founders and remote workers. Drop in when you need focused workspace with access to the innovation community.',
    features: [
      'Flexible day-use access',
      'High-speed internet',
      'Meeting room booking',
      'Coffee and amenities',
      'Networking opportunities',
      'Community events access'
    ],
    highlight: false
  },
  {
    id: 'offices',
    icon: Briefcase,
    name: 'Private Office Spaces',
    location: 'NORCAT Innovation, Sudbury',
    description: 'Dedicated private offices for growing teams who need their own space while staying connected to the innovation ecosystem and support services.',
    features: [
      'Private, lockable offices',
      'Various sizes available',
      '24/7 building access',
      'Shared amenities access',
      'Professional business address',
      'On-site programming and events'
    ],
    highlight: false
  }
];

const Labs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-50" />
        <div className="orb orb-teal w-96 h-96 -top-48 -right-48" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 badge-dark mb-8">
                <Building2 className="w-4 h-4" />
                Infrastructure & Facilities
              </div>
              <h1 className="headline-hero text-white mb-6">
                Labs, Offices & <span className="text-gradient">Innovation Spaces</span>
              </h1>
              <p className="body-xl text-white/70 max-w-2xl mb-10">
                From underground testing facilities to collaborative workspaces, 
                NORCAT provides the infrastructure startups need to develop, test, 
                and scale their innovations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 text-lg rounded-xl">
                  <Link to="/apply">
                    Access Our Facilities
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="btn-outline-lg">
                  <Link to="/mining/norcat-underground">
                    Explore Underground Centre
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Locations Overview */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="headline-lg mb-4">Two Locations, Endless Possibilities</h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Our facilities span across Northern Ontario, offering unique environments 
                for every stage of your innovation journey.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="card-modern p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="headline-sm">NORCAT Underground Centre</h3>
                </div>
                <p className="body-md text-muted-foreground mb-4">
                  Located in Onaping, approximately 40 minutes from Sudbury. Home to our 
                  underground testing facility and surface support infrastructure.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Best for:</strong> Technology testing, validation, demonstrations, 
                  and pilot projects in real mining conditions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="card-modern p-8 h-full relative overflow-visible">
                {/* Robot character sitting on top right */}
                <img 
                  src={robotCharacter} 
                  alt="Friendly robot mascot" 
                  className="absolute -top-16 -right-4 w-32 h-auto z-10 drop-shadow-lg"
                />
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="headline-sm">NORCAT Innovation</h3>
                </div>
                <p className="body-md text-muted-foreground mb-4">
                  Located in downtown Sudbury. Our innovation hub featuring the Fortin 
                  Discovery Lab, coworking spaces, and private offices.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Best for:</strong> Prototyping, day-to-day operations, team workspace, 
                  and community connection.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="headline-lg mb-4">Our Facilities</h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                World-class infrastructure designed to support technology companies 
                at every stage of development.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {facilities.map((facility, index) => (
              <ScrollReveal key={facility.id} delay={index * 0.1}>
                <div className={`card-modern overflow-hidden ${facility.highlight ? 'ring-2 ring-primary/20' : ''}`}>
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Icon & Title Section */}
                    <div className={`lg:col-span-2 p-8 ${facility.highlight ? 'bg-primary/5' : 'bg-secondary/30'}`}>
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${facility.highlight ? 'bg-primary/10' : 'bg-background'}`}>
                        <facility.icon className={`w-8 h-8 ${facility.highlight ? 'text-primary' : 'text-foreground'}`} />
                      </div>
                      <h3 className="headline-md mb-2">{facility.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4" />
                        {facility.location}
                      </div>
                      <p className="body-md text-muted-foreground">
                        {facility.description}
                      </p>
                    </div>

                    {/* Features Section */}
                    <div className="lg:col-span-3 p-8 bg-background">
                      <h4 className="font-semibold mb-4">What's Included</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {facility.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="headline-lg text-white mb-4">Ready to Build Something Great?</h2>
            <p className="body-lg text-white/70 max-w-2xl mx-auto mb-8">
              Whether you need to test underground, prototype in the lab, or find 
              your team's home base, we have the space for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="btn-primary-lg">
                <Link to="/apply">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <a href="mailto:info@norcat.org">
                  Contact Us
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Labs;
