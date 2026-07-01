import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Pickaxe, Shield, Globe, Users, Zap, Radio, Wind, Bot, Battery } from 'lucide-react';
import { MineChamber } from './MineChamber';

const chambers = [
  {
    id: 'testing',
    title: 'Real-World Testing',
    description: 'Test your technology in actual mining conditions-not a simulation. Our 1.2km underground facility provides authentic operational environments.',
    icon: Pickaxe,
    color: '#14b8a6',
    position: { x: 50, y: 25 },
    details: {
      features: [
        'Full-scale underground testing environment',
        'Real rock formations and mining conditions',
        'Active water, power, and ventilation systems',
        '24/7 access for extended testing programs',
      ],
      stat: { value: '1.2km', label: 'Underground Facility' },
    },
  },
  {
    id: 'validation',
    title: 'Validation & Certification',
    description: 'Gain the validation you need to sell to major mining companies. Our facility is recognized by industry leaders worldwide.',
    icon: Shield,
    color: '#f59e0b',
    position: { x: 22, y: 40 },
    details: {
      features: [
        'Industry-recognized validation process',
        'Detailed performance documentation',
        'Third-party certification support',
        'Reference case development',
      ],
      stat: { value: '50+', label: 'Companies Validated' },
    },
  },
  {
    id: 'demonstration',
    title: 'Global Demonstration',
    description: "Host customers from around the world for live technology demonstrations. Show, don't just tell.",
    icon: Globe,
    color: '#8b5cf6',
    position: { x: 78, y: 40 },
    details: {
      features: [
        'Professional demonstration facilities',
        'Meeting rooms and presentation spaces',
        'Live underground tours for customers',
        'Video and documentation services',
      ],
      stat: { value: '15+', label: 'Countries Represented' },
    },
  },
  {
    id: 'partnerships',
    title: 'OEM Partnerships',
    description: 'Connect with original equipment manufacturers looking for innovative technology to integrate into their solutions.',
    icon: Users,
    color: '#ec4899',
    position: { x: 35, y: 60 },
    details: {
      features: [
        'Direct introductions to major OEMs',
        'Co-development opportunities',
        'Integration testing support',
        'Commercial partnership facilitation',
      ],
    },
  },
  {
    id: 'autonomous',
    title: 'Autonomous Systems',
    description: 'Test autonomous vehicles and AI-driven systems in real underground conditions with complex navigation challenges.',
    icon: Bot,
    color: '#06b6d4',
    position: { x: 65, y: 60 },
    details: {
      features: [
        'GPS-denied navigation testing',
        'Multi-vehicle coordination zones',
        'Obstacle detection courses',
        'Remote operation testing areas',
      ],
    },
  },
  {
    id: 'communications',
    title: 'Communications Testing',
    description: 'Validate underground communication systems including mesh networks, 5G, and positioning technologies.',
    icon: Radio,
    color: '#10b981',
    position: { x: 20, y: 75 },
    details: {
      features: [
        'RF propagation testing',
        'Network coverage mapping',
        'Interference testing zones',
        'Emergency communication testing',
      ],
    },
  },
  {
    id: 'ventilation',
    title: 'Ventilation & Air Quality',
    description: 'Test air quality sensors, ventilation systems, and environmental monitoring in varied underground conditions.',
    icon: Wind,
    color: '#64748b',
    position: { x: 50, y: 80 },
    details: {
      features: [
        'Variable airflow zones',
        'Dust and particulate testing',
        'Gas detection validation',
        'Climate monitoring systems',
      ],
    },
  },
  {
    id: 'electrification',
    title: 'Electrification',
    description: 'Test battery systems, charging infrastructure, and electric vehicle technology in underground environments.',
    icon: Battery,
    color: '#22c55e',
    position: { x: 80, y: 75 },
    details: {
      features: [
        'High-power charging stations',
        'Battery performance monitoring',
        'Thermal management testing',
        'Grid integration testing',
      ],
    },
  },
];

// Connection lines between chambers
const connections = [
  { from: 'testing', to: 'validation' },
  { from: 'testing', to: 'demonstration' },
  { from: 'validation', to: 'partnerships' },
  { from: 'demonstration', to: 'autonomous' },
  { from: 'partnerships', to: 'communications' },
  { from: 'autonomous', to: 'electrification' },
  { from: 'communications', to: 'ventilation' },
  { from: 'ventilation', to: 'electrification' },
  { from: 'partnerships', to: 'autonomous' },
];

export const MineMap = () => {
  const [activeChamber, setActiveChamber] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getChamberPos = (id: string) => {
    const chamber = chambers.find((c) => c.id === id);
    return chamber?.position || { x: 50, y: 50 };
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-950 overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0">
        {/* Rock texture */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="rock">
              <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="4" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#rock)" />
          </svg>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/50 via-transparent to-gray-950/50" />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-teal-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Mouse follow light */}
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(173 83% 44% / 0.1) 0%, transparent 70%)',
            x: mousePos.x - 192,
            y: mousePos.y - 192,
          }}
          transition={{ type: 'spring', damping: 30 }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center pt-24 pb-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Interactive Mine Map
          </span>
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Explore the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
            Underground Centre
          </span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Click on any chamber to discover our testing and validation capabilities
        </motion.p>
      </div>

      {/* Mine tunnel visualization */}
      <div className="relative w-full h-[70vh] max-w-6xl mx-auto px-4">
        {/* SVG Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {connections.map((conn, idx) => {
            const from = getChamberPos(conn.from);
            const to = getChamberPos(conn.to);
            return (
              <motion.line
                key={idx}
                x1={`${from.x}%`}
                y1={`${from.y}%`}
                x2={`${to.x}%`}
                y2={`${to.y}%`}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="8 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 1.5, delay: idx * 0.1 }}
              />
            );
          })}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(173 83% 44%)" stopOpacity="0.5" />
              <stop offset="50%" stopColor="hsl(173 83% 44%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(173 83% 44%)" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>

        {/* Chambers */}
        {chambers.map((chamber, idx) => (
          <MineChamber
            key={chamber.id}
            {...chamber}
            isActive={activeChamber === chamber.id}
            onActivate={() => setActiveChamber(chamber.id)}
            onClose={() => setActiveChamber(null)}
          />
        ))}

        {/* Central legend */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <div className="w-px h-4 bg-white/20" />
          <span className="text-sm text-teal-400">8 Testing Chambers</span>
        </motion.div>
      </div>
    </div>
  );
};
