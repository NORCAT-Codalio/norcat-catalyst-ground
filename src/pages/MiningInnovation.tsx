import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Building2, CheckCircle2 } from 'lucide-react';
import { TunnelEntrance } from '@/components/mining/TunnelEntrance';
import { MineMap } from '@/components/mining/MineMap';
import { StatCounter } from '@/components/StatCounter';
import { Button } from '@/components/ui/button';

const stats = [
  { value: 1.2, suffix: 'km', label: 'Underground Facility' },
  { value: 50, suffix: '+', label: 'Companies Tested' },
  { value: 15, suffix: '+', label: 'Countries Represented' },
  { value: 100, suffix: '%', label: 'Operational Conditions' },
];

const globalBenefits = [
  'Direct introductions to mining company innovation teams',
  'Participation in international mining conferences',
  'Access to global OEM partnership opportunities',
  'Visibility to mining-focused investors worldwide',
];

const processSteps = [
  {
    step: '01',
    title: 'Apply',
    description: 'Submit your application describing your technology and testing needs.',
  },
  {
    step: '02',
    title: 'Assessment',
    description: 'Our team evaluates fit and develops a customized testing plan.',
  },
  {
    step: '03',
    title: 'Testing',
    description: 'Execute your testing program in real underground conditions.',
  },
  {
    step: '04',
    title: 'Validation',
    description: 'Receive documentation and support for commercialization.',
  },
];

export default function MiningInnovation() {
  const [showTunnel, setShowTunnel] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleTunnelComplete = useCallback(() => {
    setShowTunnel(false);
    setTimeout(() => setContentVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Tunnel entrance animation */}
      {showTunnel && <TunnelEntrance onComplete={handleTunnelComplete} />}

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Interactive Mine Map Section */}
        <MineMap />

        {/* Stats Section */}
        <section className="relative py-16 bg-gray-900 border-y border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <StatCounter end={stat.value} suffix={stat.suffix} label={stat.label} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How It{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
                  Works
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                From application to validation, here's how startups work with the Underground Centre.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Connection line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-teal-500/50 to-transparent" />
                  )}
                  
                  <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-500/20 border-2 border-teal-500/50">
                    <span className="text-2xl font-bold text-teal-400">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Gateway Section */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Your Gateway to{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
                    Global Mining
                  </span>
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  The NORCAT Underground Centre isn't just a testing facility—it's your entry point
                  to the global mining industry. Our connections span six continents and include the
                  world's largest mining companies.
                </p>
                <ul className="space-y-4 mb-8">
                  {globalBenefits.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-teal-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button asChild className="btn-primary-lg">
                  <Link to="/apply">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 lg:p-10 border border-white/10">
                  <Globe className="h-16 w-16 text-teal-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Global Reach</h3>
                  <p className="text-gray-300 mb-8">
                    Our portfolio companies have gone on to work with mining operations in Canada,
                    Australia, Chile, South Africa, and beyond.
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: '6', label: 'Continents' },
                      { value: '20+', label: 'Countries' },
                      { value: '50+', label: 'Partners' },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-3xl font-bold text-teal-400 mb-1">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 bg-gray-950 border-t border-white/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Building2 className="h-12 w-12 text-teal-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Test Underground?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                Join the companies that have validated their technology in the world's most
                comprehensive underground testing facility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-primary-lg">
                  <Link to="/apply">
                    Apply for Access
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="btn-outline-dark">
                  <Link to="/programs">Learn About Programs</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
