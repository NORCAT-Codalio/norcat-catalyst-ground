import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroUnderground from '@/assets/hero-underground.jpg';
import undergroundWorkers from '@/assets/underground-workers.png';
import { 
  ArrowRight, 
  Mountain, 
  Zap, 
  Radio, 
  Bot, 
  Camera, 
  Wifi, 
  Shield, 
  Globe, 
  Users,
  Pickaxe,
  ChevronDown,
  Award,
  Target,
  Lightbulb
} from 'lucide-react';

const capabilities = [
  {
    icon: Bot,
    title: 'Autonomous Vehicles',
    description: 'Test self-driving mining vehicles in GPS-denied environments with real obstacles and complex navigation scenarios.',
  },
  {
    icon: Radio,
    title: '5G Underground',
    description: 'Validate next-generation communication systems including mesh networks, 5G, and positioning technologies.',
  },
  {
    icon: Camera,
    title: 'Film & Media',
    description: 'Produce stunning marketing videos and photography in an authentic underground mining environment.',
  },
  {
    icon: Wifi,
    title: 'IoT & Sensors',
    description: 'Deploy and test connected devices, environmental sensors, and monitoring systems in harsh conditions.',
  },
  {
    icon: Shield,
    title: 'Safety Systems',
    description: 'Validate emergency response equipment, proximity detection, and collision avoidance technologies.',
  },
  {
    icon: Zap,
    title: 'Electrification',
    description: 'Test battery systems, charging infrastructure, and electric vehicle technology underground.',
  },
];

const stats = [
  { value: '3', unit: 'km', label: 'Underground Tunnels' },
  { value: '300+', unit: '', label: 'Technology Tests' },
  { value: '50+', unit: '', label: 'Countries Reached' },
  { value: '15', unit: '+', label: 'Years Operating' },
];

const benefits = [
  {
    icon: Target,
    title: 'Real-World Validation',
    description: 'Get the proof points you need to sell to major mining companies worldwide.',
  },
  {
    icon: Globe,
    title: 'Global Credibility',
    description: 'Our validation is recognized by mining companies across 50+ countries.',
  },
  {
    icon: Users,
    title: 'Customer Access',
    description: 'Host live demonstrations for potential customers in an actual mining environment.',
  },
  {
    icon: Lightbulb,
    title: 'Expert Support',
    description: 'Work with our mining technology experts to optimize your testing program.',
  },
];

const NorcatUnderground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Simple adit entrance effect - vignette closes in as you scroll
  const vignetteOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0.1, 0.2], [1, 0]);

  return (
    <Layout>
      <div ref={containerRef} className="relative">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <motion.div 
            className="absolute inset-0"
            style={{ scale: heroScale }}
          >
            <img 
              src={heroUnderground} 
              alt="NORCAT Underground Centre" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/40 to-gray-950" />
          </motion.div>

          {/* Adit vignette effect - darkens edges like entering a tunnel */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            style={{ 
              opacity: vignetteOpacity,
              background: 'radial-gradient(ellipse 50% 50% at 50% 50%, transparent 0%, hsl(224 71% 4%) 100%)',
            }}
          />

          {/* Hero Content */}
          <motion.div 
            className="relative z-10 container mx-auto px-4 lg:px-8 text-center"
            style={{ opacity: heroOpacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8">
                <Mountain className="w-4 h-4" />
                The Global One-Stop Shop for the Future of Mining
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              NORCAT<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Underground Centre
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              The only place on Earth where you can test, validate, and demonstrate 
              your mining technology in a real underground environment.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button asChild className="btn-primary-lg group">
                <Link to="/apply">
                  Book a Tour
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div 
              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-sm">Enter the mine</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="relative py-24 bg-gray-950">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-2">
                    {stat.value}{stat.unit}
                  </div>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="relative py-24 bg-gray-900">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-6">
                <Pickaxe className="w-4 h-4" />
                What You Can Do Underground
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Unlimited <span className="text-gradient">Possibilities</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                From autonomous vehicles to 5G networks, test any technology in real mining conditions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  className="group rounded-2xl bg-gray-800/50 border border-white/5 p-8 hover:bg-gray-800 hover:border-teal-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-teal-500/20 flex items-center justify-center mb-6 group-hover:bg-teal-500/30 transition-colors">
                    <cap.icon className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-gray-400">
                    {cap.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Underground Section */}
        <section className="relative py-24 bg-gray-950">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-6">
                  <Award className="w-4 h-4" />
                  Why Choose NORCAT Underground Centre
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  The <span className="text-gradient">Credibility</span> You Need
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                  Mining companies need proof before they buy. Our underground facility gives you 
                  the real-world validation that opens doors to global markets.
                </p>

                <div className="space-y-6">
                  {benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-4 items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-teal-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                        <p className="text-gray-400">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={undergroundWorkers} 
                    alt="Underground testing facility" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Reach Section */}
        <section className="relative py-24 bg-gray-900">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div 
              className="relative rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 p-12 md:p-16 text-center overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent" />
              
              <div className="relative z-10">
                <Globe className="w-12 h-12 text-teal-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Trusted by <span className="text-gradient">50+ Countries</span>
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
                  From Australia to Sweden, mining companies around the world trust NORCAT Underground Centre 
                  for technology validation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="btn-primary-lg group">
                    <Link to="/apply">
                      Start Your Journey
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild className="btn-outline-dark">
                    <Link to="/insights/success-stories">
                      View Success Stories
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 bg-gray-950">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Go <span className="text-gradient">Underground?</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
                Book a tour and discover how we can accelerate your mining technology to market.
              </p>
              <Button asChild className="btn-primary-lg group">
                <Link to="/apply">
                  Book Your Tour Today
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NorcatUnderground;
