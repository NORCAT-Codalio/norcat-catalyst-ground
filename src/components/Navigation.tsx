import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Rocket, DollarSign, Mountain, Handshake, Globe, Lightbulb, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

// Menu structure
const programsMenu = {
  programs: {
    title: 'Programs',
    icon: Rocket,
    items: [
      { name: 'Venture Growth Services', href: '/programs/venture-growth-services' },
      { name: 'Mentorship Services', href: '/programs/mentorship-services' },
      { name: 'Capital Navigation', href: '/programs/capital-navigation' },
    ],
  },
  funding: {
    title: 'Funding & Capital',
    icon: DollarSign,
    items: [
      { name: 'Sudbury Catalyst Fund', href: '/funding/sudbury-catalyst-fund' },
      { name: 'Innovation Acceleration Program', href: '/funding/innovation-acceleration-program' },
      { name: 'Regional AI Program', href: '/funding/regional-ai-program' },
      { name: 'Investor Hub', href: '/funding/investor-hub' },
    ],
  },
  mining: {
    title: 'Mining & Tough Tech',
    icon: Mountain,
    items: [
      { name: 'NORCAT Underground Centre', href: '/mining/norcat-underground' },
      { name: 'Core5', href: '/mining/core5' },
      { name: 'Critical Industrial Technologies Initiative', href: '/mining/critical-industrial-tech' },
      { name: 'Labs', href: '/mining/labs' },
    ],
  },
  partners: {
    title: 'Partner Programs',
    icon: Handshake,
    items: [
      { name: 'Innovation Quarters', href: '/partners/innovation-quarters' },
      { name: 'MICA Network', href: '/partners/mica-network' },
      { name: 'MineConnect', href: '/partners/mineconnect' },
      { name: 'Rogers Cybersecure Catalyst', href: '/partners/rogers-cybersecure' },
    ],
  },
};

const ecosystemItems = [
  { name: 'Sudbury Innovation Ecosystem', href: '/ecosystem/sudbury' },
  { name: 'Impact', href: '/impact' },
];

const insightsItems = [
  { name: 'News', href: '/insights/news' },
  { name: 'Success Stories', href: '/insights/success-stories' },
  { name: 'Reports', href: '/insights/reports' },
];

// Liquid blob SVG connector component
const LiquidConnector = ({ width = 100, isSmall = false }: { width?: number; isSmall?: boolean }) => {
  const height = isSmall ? 16 : 20;
  
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="absolute left-1/2 -translate-x-1/2 -top-[1px] z-10"
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      exit={{ scaleY: 0, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{ transformOrigin: 'top center' }}
    >
      <motion.path
        d={`M ${width * 0.3} 0 
            Q ${width * 0.1} ${height * 0.3}, ${width * 0.05} ${height * 0.7}
            Q 0 ${height}, ${width * 0.15} ${height}
            L ${width * 0.85} ${height}
            Q ${width} ${height}, ${width * 0.95} ${height * 0.7}
            Q ${width * 0.9} ${height * 0.3}, ${width * 0.7} 0
            Z`}
        fill="rgba(255,255,255,0.95)"
        initial={{ d: `M ${width * 0.4} 0 Q ${width * 0.5} 0, ${width * 0.5} 2 Q ${width * 0.5} 0, ${width * 0.6} 0 Z` }}
        animate={{ 
          d: `M ${width * 0.3} 0 
              Q ${width * 0.1} ${height * 0.3}, ${width * 0.05} ${height * 0.7}
              Q 0 ${height}, ${width * 0.15} ${height}
              L ${width * 0.85} ${height}
              Q ${width} ${height}, ${width * 0.95} ${height * 0.7}
              Q ${width * 0.9} ${height * 0.3}, ${width * 0.7} 0
              Z`
        }}
        transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
      />
    </motion.svg>
  );
};

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileAccordion(null);
  }, [location]);

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  const toggleMobileAccordion = (accordion: string) => {
    setMobileAccordion(mobileAccordion === accordion ? null : accordion);
  };

  // Liquid drip animation - starts narrow at top, expands as it "falls"
  const liquidDripVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0.1,
      scaleX: 0.3,
      y: -10,
      borderRadius: '50% 50% 20% 20%',
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      scaleX: 1,
      y: 0,
      borderRadius: '1.25rem',
      transition: {
        scaleY: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
        scaleX: { duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
        opacity: { duration: 0.2 },
        y: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
        borderRadius: { duration: 0.4, ease: "easeOut", delay: 0.1 },
        staggerChildren: 0.04,
        delayChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      scaleY: 0.2,
      scaleX: 0.5,
      y: -5,
      borderRadius: '50% 50% 30% 30%',
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1],
      },
    },
  };

  const smallLiquidVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0.1,
      scaleX: 0.4,
      y: -8,
      borderRadius: '50% 50% 25% 25%',
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      scaleX: 1,
      y: 0,
      borderRadius: '0.875rem',
      transition: {
        scaleY: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
        scaleX: { duration: 0.25, ease: [0.22, 1, 0.36, 1], delay: 0.03 },
        opacity: { duration: 0.15 },
        y: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
        borderRadius: { duration: 0.35, ease: "easeOut", delay: 0.08 },
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scaleY: 0.3,
      scaleX: 0.6,
      y: -4,
      borderRadius: '50% 50% 35% 35%',
      transition: {
        duration: 0.15,
        ease: [0.4, 0, 1, 1],
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 30,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
      },
    },
  };

  const glassStyle = {
    background: 'linear-gradient(165deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 40%, rgba(245,255,252,0.95) 100%)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    border: '1px solid rgba(255,255,255,0.7)',
    boxShadow: '0 25px 60px -15px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.4) inset',
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-teal flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-display font-bold text-xl">N</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight text-foreground">
                NORCAT
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
                Innovation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* About */}
            <Link
              to="/about"
              className={cn(
                'px-4 py-2 text-sm font-medium transition-colors rounded-md',
                location.pathname === '/about'
                  ? 'text-primary bg-secondary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
            >
              About
            </Link>

            {/* Programs Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('programs')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={cn(
                  'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all rounded-md relative z-20',
                  activeDropdown === 'programs'
                    ? 'text-primary bg-white/90 shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                Programs
                <ChevronDown className={cn('w-4 h-4 transition-transform duration-300', activeDropdown === 'programs' && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'programs' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0">
                    {/* Liquid connector blob */}
                    <LiquidConnector width={120} />
                    
                    <motion.div
                      variants={liquidDripVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="w-[800px] p-6 overflow-hidden origin-top"
                      style={glassStyle}
                    >
                      {/* Subtle animated highlights */}
                      <div className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none">
                        <motion.div 
                          className="absolute -top-20 -right-20 w-40 h-40 rounded-full"
                          style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)' }}
                          animate={{ 
                            scale: [1, 1.15, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div 
                          className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full"
                          style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)' }}
                          animate={{ 
                            scale: [1, 1.2, 1],
                          }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                      </div>

                      <div className="relative grid grid-cols-4 gap-6">
                        {Object.entries(programsMenu).map(([key, section]) => (
                          <motion.div key={key} variants={columnVariants}>
                            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-primary/10">
                              <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                                <section.icon className="w-4 h-4 text-primary" />
                              </div>
                              <span className="font-semibold text-sm text-foreground">{section.title}</span>
                            </div>
                            <ul className="space-y-0.5">
                              {section.items.map((item) => (
                                <motion.li key={item.name} variants={itemVariants}>
                                  <Link
                                    to={item.href}
                                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 hover:translate-x-1"
                                  >
                                    {item.name}
                                  </Link>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Ecosystem Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('ecosystem')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={cn(
                  'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all rounded-md relative z-20',
                  activeDropdown === 'ecosystem'
                    ? 'text-primary bg-white/90 shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                Ecosystem
                <ChevronDown className={cn('w-4 h-4 transition-transform duration-300', activeDropdown === 'ecosystem' && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'ecosystem' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0">
                    <LiquidConnector width={80} isSmall />
                    
                    <motion.div
                      variants={smallLiquidVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="w-64 p-3 overflow-hidden origin-top"
                      style={glassStyle}
                    >
                      <div className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none">
                        <motion.div 
                          className="absolute -top-12 -right-12 w-24 h-24 rounded-full"
                          style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)' }}
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>
                      <ul className="relative space-y-0.5">
                        {ecosystemItems.map((item) => (
                          <motion.li key={item.name} variants={itemVariants}>
                            <Link
                              to={item.href}
                              className="flex items-center gap-2 px-3 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                            >
                              <Globe className="w-4 h-4" />
                              {item.name}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Insights Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('insights')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={cn(
                  'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all rounded-md relative z-20',
                  activeDropdown === 'insights'
                    ? 'text-primary bg-white/90 shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                Insights
                <ChevronDown className={cn('w-4 h-4 transition-transform duration-300', activeDropdown === 'insights' && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'insights' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0">
                    <LiquidConnector width={70} isSmall />
                    
                    <motion.div
                      variants={smallLiquidVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="w-56 p-3 overflow-hidden origin-top"
                      style={glassStyle}
                    >
                      <div className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none">
                        <motion.div 
                          className="absolute -top-12 -right-12 w-24 h-24 rounded-full"
                          style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)' }}
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>
                      <ul className="relative space-y-0.5">
                        {insightsItems.map((item) => (
                          <motion.li key={item.name} variants={itemVariants}>
                            <Link
                              to={item.href}
                              className="flex items-center gap-2 px-3 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                            >
                              <Lightbulb className="w-4 h-4" />
                              {item.name}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Events */}
            <Link
              to="/events"
              className={cn(
                'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md',
                location.pathname === '/events'
                  ? 'text-primary bg-secondary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
            >
              Events
            </Link>

            {/* Client Portal */}
            <Link
              to="/portal/auth"
              className={cn(
                'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md',
                location.pathname.startsWith('/portal')
                  ? 'text-primary bg-secondary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
            >
              <LogIn className="w-4 h-4 mr-1" />
              Client Portal
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild variant="default" className="btn-primary text-sm px-6 py-2.5">
              <Link to="/apply">
                Work With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-lg overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 space-y-2">
                <Link
                  to="/about"
                  className="block px-4 py-3 text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  About
                </Link>

                {/* Mobile Programs Accordion */}
                <div>
                  <button
                    onClick={() => toggleMobileAccordion('mobile-programs')}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    Programs
                    <ChevronDown className={cn('w-5 h-5 transition-transform', mobileAccordion === 'mobile-programs' && 'rotate-180')} />
                  </button>
                  <AnimatePresence>
                    {mobileAccordion === 'mobile-programs' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 space-y-4">
                          {Object.entries(programsMenu).map(([key, section]) => (
                            <div key={key}>
                              <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                {section.title}
                              </p>
                              {section.items.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Ecosystem */}
                <div>
                  <button
                    onClick={() => toggleMobileAccordion('mobile-ecosystem')}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    Ecosystem
                    <ChevronDown className={cn('w-5 h-5 transition-transform', mobileAccordion === 'mobile-ecosystem' && 'rotate-180')} />
                  </button>
                  <AnimatePresence>
                    {mobileAccordion === 'mobile-ecosystem' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2">
                          {ecosystemItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Insights */}
                <div>
                  <button
                    onClick={() => toggleMobileAccordion('mobile-insights')}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    Insights
                    <ChevronDown className={cn('w-5 h-5 transition-transform', mobileAccordion === 'mobile-insights' && 'rotate-180')} />
                  </button>
                  <AnimatePresence>
                    {mobileAccordion === 'mobile-insights' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2">
                          {insightsItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/events"
                  className="block px-4 py-3 text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  Events
                </Link>

                <Link
                  to="/portal/auth"
                  className="block px-4 py-3 text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  Client Portal
                </Link>

                <div className="pt-4 border-t border-border mt-4">
                  <Button asChild variant="default" className="w-full btn-primary">
                    <Link to="/apply">
                      Work With Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
