import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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
  Play,
  Award,
  Target,
  Lightbulb
} from 'lucide-react';

const capabilities = [
  {
    icon: Bot,
    title: 'Autonomous Vehicles',
    description: 'Test self-driving mining vehicles in GPS-denied environments with real obstacles and complex navigation scenarios.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Radio,
    title: '5G Underground',
    description: 'Validate next-generation communication systems including mesh networks, 5G, and positioning technologies.',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Camera,
    title: 'Film & Media',
    description: 'Produce stunning marketing videos and photography in an authentic underground mining environment.',
    color: 'from-orange-500 to-red-600',
  },
  {
    icon: Wifi,
    title: 'IoT & Sensors',
    description: 'Deploy and test connected devices, environmental sensors, and monitoring systems in harsh conditions.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Shield,
    title: 'Safety Systems',
    description: 'Validate emergency response equipment, proximity detection, and collision avoidance technologies.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Zap,
    title: 'Electrification',
    description: 'Test battery systems, charging infrastructure, and electric vehicle technology underground.',
    color: 'from-teal-500 to-cyan-600',
  },
];

const stats = [
  { value: '1.2', unit: 'km', label: 'Underground Tunnels' },
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
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);
  const tunnelProgress = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.15, 0.3], ['100vh', '0vh']);

  return (
    <Layout>
      <div ref={containerRef} className="relative bg-gray-950 min-h-[600vh]">
        {/* Hero Section - Fixed */}
        <motion.section 
          ref={heroRef}
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="fixed inset-0 flex items-center justify-center overflow-hidden"
        >
          {/* Animated background layers */}
          <div className="absolute inset-0">
            {/* Deep space gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black" />
            
            {/* Rock texture overlay */}
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="noise">
                  <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" />
                  <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
              </svg>
            </div>

            {/* Animated orbs */}
            <motion.div 
              className="absolute w-[800px] h-[800px] rounded-full"
              style={{
                background: 'radial-gradient(circle, hsl(173 83% 44% / 0.15) 0%, transparent 70%)',
                top: '-20%',
                right: '-10%',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div 
              className="absolute w-[600px] h-[600px] rounded-full"
              style={{
                background: 'radial-gradient(circle, hsl(270 60% 50% / 0.1) 0%, transparent 70%)',
                bottom: '-20%',
                left: '-10%',
              }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Floating particles */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-teal-400/40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                }}
              />
            ))}

            {/* Laser grid effect */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(0deg, transparent 24%, hsl(173 83% 44% / 0.3) 25%, hsl(173 83% 44% / 0.3) 26%, transparent 27%, transparent 74%, hsl(173 83% 44% / 0.3) 75%, hsl(173 83% 44% / 0.3) 76%, transparent 77%), linear-gradient(90deg, transparent 24%, hsl(173 83% 44% / 0.3) 25%, hsl(173 83% 44% / 0.3) 26%, transparent 27%, transparent 74%, hsl(173 83% 44% / 0.3) 75%, hsl(173 83% 44% / 0.3) 76%, transparent 77%)',
                backgroundSize: '80px 80px',
              }} />
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-sm font-medium mb-8">
                <Mountain className="w-4 h-4" />
                World's Only Underground Innovation Centre
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 tracking-tighter"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="block">NORCAT</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-400">
                UNDERGROUND
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              The only place on Earth where you can test, validate, and demonstrate 
              your mining technology in a real underground environment.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button asChild className="btn-primary-lg group">
                <Link to="/apply">
                  Book a Tour
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" className="btn-outline-dark group">
                <Play className="w-4 h-4" />
                Watch Video
              </Button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div 
              className="flex flex-col items-center gap-2 text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="text-sm">Scroll to descend</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Tunnel Descent Animation */}
        <motion.div 
          className="fixed inset-0 pointer-events-none z-20"
          style={{ opacity: tunnelProgress }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Tunnel rings */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border-2 border-teal-500/30"
                style={{
                  width: `${(i + 1) * 15}%`,
                  height: `${(i + 1) * 20}%`,
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1 + i * 0.05, 0.2 + i * 0.05, 0.1 + i * 0.05],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
            
            {/* Depth indicator lights */}
            <div className="absolute inset-y-0 left-8 flex flex-col justify-center gap-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-amber-500"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    boxShadow: ['0 0 5px #f59e0b', '0 0 20px #f59e0b', '0 0 5px #f59e0b'],
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-y-0 right-8 flex flex-col justify-center gap-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-amber-500"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    boxShadow: ['0 0 5px #f59e0b', '0 0 20px #f59e0b', '0 0 5px #f59e0b'],
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.3 + 0.5,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Spacer for scroll */}
        <div className="h-[150vh]" />

        {/* Main Content - Revealed after descent */}
        <motion.div 
          className="relative z-30 bg-gray-950"
          style={{ y: contentY }}
        >
          {/* Stats Section */}
          <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent" />
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-2">
                      {stat.value}{stat.unit}
                    </div>
                    <p className="text-gray-400 text-lg">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Capabilities Section */}
          <section className="relative py-32">
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-6">
                  <Pickaxe className="w-4 h-4" />
                  What You Can Do Underground
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Unlimited <span className="text-gradient">Possibilities</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  From autonomous vehicles to 5G networks, test any technology in real mining conditions.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={i}
                    className="group relative rounded-3xl bg-gray-900/50 border border-white/10 p-8 hover:border-teal-500/50 transition-all duration-500 overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {/* Gradient glow on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Icon */}
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${cap.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <cap.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {cap.description}
                    </p>

                    {/* Animated corner accent */}
                    <motion.div
                      className={`absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-gradient-to-br ${cap.color} opacity-20 blur-2xl`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Underground Section */}
          <section className="relative py-32 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950" />
              <motion.div 
                className="absolute inset-0"
                style={{
                  backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(173 83% 44% / 0.1) 0%, transparent 50%)',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-6">
                    <Award className="w-4 h-4" />
                    Why Choose NORCAT Underground
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    The <span className="text-gradient">Credibility</span> You Need to Scale
                  </h2>
                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
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

                {/* Interactive 3D-like mine visualization */}
                <motion.div
                  className="relative aspect-square"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 overflow-hidden">
                    {/* Animated tunnel rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full border border-teal-500/30"
                          style={{
                            width: `${(i + 1) * 15}%`,
                            height: `${(i + 1) * 15}%`,
                          }}
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.2, 0.4, 0.2],
                          }}
                          transition={{
                            duration: 3,
                            delay: i * 0.3,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                      
                      {/* Central glow */}
                      <motion.div
                        className="absolute w-16 h-16 rounded-full bg-teal-500"
                        animate={{
                          scale: [1, 1.2, 1],
                          boxShadow: ['0 0 20px hsl(173 83% 44%)', '0 0 60px hsl(173 83% 44%)', '0 0 20px hsl(173 83% 44%)'],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>

                    {/* Mining icons floating */}
                    {[Bot, Radio, Camera, Wifi].map((Icon, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center"
                        style={{
                          top: `${20 + Math.sin(i * 1.5) * 30}%`,
                          left: `${20 + Math.cos(i * 1.5) * 30}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          delay: i * 0.5,
                          repeat: Infinity,
                        }}
                      >
                        <Icon className="w-6 h-6 text-teal-400" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Global Reach Section */}
          <section className="relative py-32">
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div 
                className="relative rounded-[3rem] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-white/10 p-12 md:p-20 overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-purple-500/10" />
                <motion.div
                  className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-teal-500/20 blur-3xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />

                <div className="relative z-10 text-center">
                  <Globe className="w-16 h-16 text-teal-400 mx-auto mb-8" />
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    Trusted by <span className="text-gradient">50+ Countries</span>
                  </h2>
                  <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                    From Australia to Sweden, mining companies around the world trust NORCAT Underground 
                    for technology validation. Join a global network of innovators.
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
          <section className="relative py-32 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950" />
              {/* Animated light beams */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'conic-gradient(from 0deg at 50% 100%, transparent 0deg, hsl(173 83% 44% / 0.1) 10deg, transparent 20deg)',
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Ready to Go <span className="text-gradient">Underground?</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                  Book a tour of our facility and discover how NORCAT Underground can 
                  accelerate your mining technology to market.
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
        </motion.div>
      </div>
    </Layout>
  );
};

export default NorcatUnderground;
