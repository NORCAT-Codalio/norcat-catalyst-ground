import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, Building2, Users, Briefcase, FlaskConical, MapPin, CheckCircle2, Cpu, Cog, Printer, Radio, Wifi, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
            <div className="inline-flex items-center gap-2 badge-dark mb-8">
              <Building2 className="w-4 h-4" />
              Infrastructure & Facilities
            </div>
            <h1 className="headline-hero text-white mb-6 max-w-4xl">
              Labs, Offices & <span className="text-gradient">Innovation Spaces</span>
            </h1>
            <p className="body-xl text-white/70 max-w-2xl mb-10">
              From underground testing facilities to collaborative workspaces, 
              NORCAT provides the infrastructure startups need to develop, test, 
              and scale their innovations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="btn-primary-lg">
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
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Showcase Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-background overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                World-Class Innovation Infrastructure
              </span>
              <h2 className="headline-lg text-white mb-4">Experience Our Facilities</h2>
              <p className="body-lg text-white/60 max-w-2xl mx-auto">
                From 1.5km underground to cutting-edge fabrication labs—explore where innovation comes to life.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Underground Centre Visualization */}
            <ScrollReveal direction="left">
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-white/10 p-8 h-[400px] overflow-hidden group">
                {/* Underground tunnel background */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 via-gray-900/80 to-black/90" />
                
                {/* Animated tunnel lines */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                      style={{ 
                        top: `${20 + i * 15}%`, 
                        left: 0, 
                        right: 0 
                      }}
                      animate={{ 
                        opacity: [0.2, 0.6, 0.2],
                        scaleX: [0.8, 1, 0.8]
                      }}
                      transition={{ 
                        duration: 3 + i * 0.5, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </div>

                {/* Animated drones */}
                <motion.div
                  className="absolute w-8 h-8 text-primary"
                  animate={{
                    x: [0, 150, 100, 200, 50, 0],
                    y: [50, 80, 120, 60, 100, 50],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Radio className="w-full h-full drop-shadow-[0_0_10px_hsl(var(--primary))]" />
                </motion.div>

                <motion.div
                  className="absolute w-6 h-6 text-teal-400"
                  animate={{
                    x: [200, 50, 150, 20, 180, 200],
                    y: [100, 150, 80, 120, 180, 100],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Radio className="w-full h-full drop-shadow-[0_0_10px_theme(colors.teal.400)]" />
                </motion.div>

                {/* WiFi signal pulses */}
                <motion.div
                  className="absolute top-1/4 right-1/4"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.2, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Wifi className="w-6 h-6 text-primary/60" />
                </motion.div>

                {/* Content overlay */}
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Mountain className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Underground Centre</h3>
                      <p className="text-sm text-white/60">Onaping, ON</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm mb-4">
                    1.5km of underground development for real-world testing with active connectivity, drones, robotics, and autonomous systems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Autonomous Vehicles', 'Drones', 'IoT Sensors', 'LTE/WiFi'].map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Lab Space Visualization */}
            <ScrollReveal direction="right">
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-white/10 p-8 h-[400px] overflow-hidden group">
                {/* Lab background */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-gray-900/80 to-gray-900/90" />

                {/* Animated 3D printer */}
                <motion.div
                  className="absolute top-1/4 left-1/4"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="relative">
                    <Printer className="w-16 h-16 text-teal-400 drop-shadow-[0_0_15px_theme(colors.teal.400)]" />
                    {/* Printing animation */}
                    <motion.div
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-teal-400 to-primary rounded-full"
                      animate={{
                        opacity: [0, 1, 0],
                        scaleX: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity
                      }}
                    />
                  </div>
                </motion.div>

                {/* Animated CNC/Gear */}
                <motion.div
                  className="absolute top-1/3 right-1/4"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Cog className="w-14 h-14 text-primary/70" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 right-1/3"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Cog className="w-10 h-10 text-teal-500/70" />
                </motion.div>

                {/* Circuit/CPU */}
                <motion.div
                  className="absolute bottom-1/3 right-1/4"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [0.95, 1.05, 0.95]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Cpu className="w-12 h-12 text-primary drop-shadow-[0_0_10px_hsl(var(--primary))]" />
                </motion.div>

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary/40"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}

                {/* Content overlay */}
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
                      <FlaskConical className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Fortin Discovery Lab</h3>
                      <p className="text-sm text-white/60">Sudbury, ON</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm mb-4">
                    State-of-the-art prototyping with 3D printers, CNC machines, electronics workbenches, and expert technical support.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['3D Printing', 'CNC Machining', 'Electronics', 'Prototyping'].map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Interactive stats bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '1.5km', label: 'Underground Development', icon: Mountain },
              { value: '5+', label: '3D Printers', icon: Printer },
              { value: '24/7', label: 'Facility Access', icon: Zap },
              { value: '100+', label: 'Companies Hosted', icon: Users }
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center cursor-pointer"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  transition={{ duration: 0.2 }}
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/60">{stat.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
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
              <div className="card-modern p-8 h-full">
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
