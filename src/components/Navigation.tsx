import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Rocket, DollarSign, Mountain, Handshake, Globe, Lightbulb, Calendar, LogIn, Phone } from 'lucide-react';
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
      { name: 'Home-2', href: '/home-2' },
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

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  
  // Check if we're on home page and should use light text
  const isHomePage = location.pathname === '/';
  const useLightText = false;

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
    }, 150);
  };

  const toggleMobileAccordion = (accordion: string) => {
    setMobileAccordion(mobileAccordion === accordion ? null : accordion);
  };

  // Blob liquid animation - expands from center like a droplet
  const blobVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      y: -20,
      borderRadius: '50%',
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      borderRadius: '1rem',
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
        mass: 0.8,
        staggerChildren: 0.03,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: -10,
      borderRadius: '50%',
      transition: {
        duration: 0.25,
        ease: [0.4, 0, 1, 1],
      },
    },
  };

  const smallBlobVariants = {
    hidden: {
      opacity: 0,
      scale: 0.2,
      y: -15,
      borderRadius: '50%',
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      borderRadius: '0.75rem',
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 22,
        mass: 0.6,
        staggerChildren: 0.02,
        delayChildren: 0.03,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.3,
      y: -10,
      borderRadius: '50%',
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1],
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
  };

  return (
    <>
      {/* Top info bar - visible only at top */}
      <div
        className={cn(
          'fixed top-0 left-0 right-0 z-[51] transition-all duration-300 bg-[#001a4d] border-b border-white/10 overflow-hidden',
          isScrolled ? 'max-h-0 opacity-0' : 'max-h-8 opacity-100'
        )}
      >
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between py-1 text-[11px] text-white/80">
          <a href="https://www.norcat.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Globe className="h-3 w-3" />
            norcat.org
          </a>
          <a href="tel:7055218324" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="h-3 w-3" />
            705-521-8324
          </a>
        </div>
      </div>

      <header
        className={cn(
          'fixed left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-xl border-b border-border/50',
          isScrolled
            ? 'top-0 shadow-lg py-3'
            : 'top-[34px] py-5'
        )}
      >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Menu">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/norcat-innovation-logo.png"
              alt="NORCAT Innovation"
              className="h-9 w-auto rounded-md"
            />
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
                  : useLightText 
                    ? 'text-white hover:text-white/80 hover:bg-white/10'
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
                  'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md',
                  activeDropdown === 'programs'
                    ? 'text-primary bg-secondary'
                    : useLightText 
                      ? 'text-white hover:text-white/80 hover:bg-white/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                Programs
                <ChevronDown className={cn('w-4 h-4 transition-transform duration-300', activeDropdown === 'programs' && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'programs' && (
                  <motion.div
                    variants={blobVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] p-6 shadow-2xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 50%, rgba(240,253,250,0.95) 100%)',
                      backdropFilter: 'blur(24px) saturate(200%)',
                      WebkitBackdropFilter: 'blur(24px) saturate(200%)',
                      border: '1px solid rgba(255,255,255,0.6)',
                      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.5) inset, 0 -10px 40px -10px rgba(20,184,166,0.1) inset',
                    }}
                  >
                    {/* Animated blob background elements */}
                    <motion.div 
                      className="absolute -top-32 -right-32 w-64 h-64 rounded-full pointer-events-none"
                      style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 70%)' }}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        x: [0, 10, 0],
                        y: [0, -10, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full pointer-events-none"
                      style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.1) 0%, transparent 70%)' }}
                      animate={{ 
                        scale: [1, 1.3, 1],
                        x: [0, -5, 0],
                        y: [0, 5, 0],
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                    <motion.div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
                      style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.05) 0%, transparent 60%)' }}
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    />

                    <div className="relative grid grid-cols-4 gap-6">
                      {Object.entries(programsMenu).map(([key, section], i) => (
                        <motion.div key={key} variants={columnVariants}>
                          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-primary/10">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                              <section.icon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-semibold text-sm text-foreground">{section.title}</span>
                          </div>
                          <ul className="space-y-0.5">
                            {section.items.map((item, idx) => (
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
                  'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md',
                  activeDropdown === 'ecosystem'
                    ? 'text-primary bg-secondary'
                    : useLightText 
                      ? 'text-white hover:text-white/80 hover:bg-white/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                Ecosystem
                <ChevronDown className={cn('w-4 h-4 transition-transform duration-300', activeDropdown === 'ecosystem' && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'ecosystem' && (
                  <motion.div
                    variants={smallBlobVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 mt-2 w-64 p-3 shadow-xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 50%, rgba(240,253,250,0.95) 100%)',
                      backdropFilter: 'blur(24px) saturate(200%)',
                      WebkitBackdropFilter: 'blur(24px) saturate(200%)',
                      border: '1px solid rgba(255,255,255,0.6)',
                      boxShadow: '0 20px 40px -12px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.5) inset',
                    }}
                  >
                    <motion.div 
                      className="absolute -top-16 -right-16 w-32 h-32 rounded-full pointer-events-none"
                      style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 70%)' }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <ul className="relative space-y-0.5">
                      {ecosystemItems.map((item, idx) => (
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
                  'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md',
                  activeDropdown === 'insights'
                    ? 'text-primary bg-secondary'
                    : useLightText 
                      ? 'text-white hover:text-white/80 hover:bg-white/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                Insights
                <ChevronDown className={cn('w-4 h-4 transition-transform duration-300', activeDropdown === 'insights' && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'insights' && (
                  <motion.div
                    variants={smallBlobVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 mt-2 w-56 p-3 shadow-xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 50%, rgba(240,253,250,0.95) 100%)',
                      backdropFilter: 'blur(24px) saturate(200%)',
                      WebkitBackdropFilter: 'blur(24px) saturate(200%)',
                      border: '1px solid rgba(255,255,255,0.6)',
                      boxShadow: '0 20px 40px -12px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.5) inset',
                    }}
                  >
                    <motion.div 
                      className="absolute -top-16 -right-16 w-32 h-32 rounded-full pointer-events-none"
                      style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 70%)' }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <ul className="relative space-y-0.5">
                      {insightsItems.map((item, idx) => (
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
                  : useLightText 
                    ? 'text-white hover:text-white/80 hover:bg-white/10'
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
                  : useLightText 
                    ? 'text-white hover:text-white/80 hover:bg-white/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
            >
              <LogIn className={cn("w-4 h-4 mr-1", useLightText && "text-white")} />
              Client Portal
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Validate Idea - Glass Button */}
            <Link
              to="/validate-idea"
              className="group relative flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl bg-white/40 backdrop-blur-[18px] border border-white/60 shadow-[0_2px_12px_-2px_hsl(var(--primary)/0.15)] text-primary transition-all duration-300 hover:bg-white/55 hover:shadow-[0_4px_18px_-2px_hsl(var(--primary)/0.25)] hover:border-white/80"
              style={{ borderTop: '1px solid hsla(0,0%,100%,0.7)' }}
            >
              <Lightbulb className="h-4 w-4 group-hover:animate-bounce" />
              Validate My Idea
            </Link>

            {/* Work With Us - Sage Green Glass Button */}
            <Link
              to="/apply"
              className="group relative flex items-center gap-2 text-sm font-bold px-6 py-2.5 rounded-xl border border-white/20 text-white transition-all duration-300 shadow-[0_4px_20px_-4px_hsla(168,100%,35%,0.4)] hover:shadow-[0_6px_28px_-4px_hsla(168,100%,35%,0.55)] hover:scale-[1.03]"
              style={{
                background: 'linear-gradient(135deg, #00b398 0%, #003da5 100%)',
              }}
            >
              Work With Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
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

                <div className="pt-4 border-t border-border mt-4 space-y-3">
                  <Button asChild variant="outline" className="w-full relative border-primary/50 text-primary hover:text-primary hover:bg-primary/5 overflow-hidden">
                    <Link to="/validate-idea">
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-pulse" />
                      <Lightbulb className="mr-2 h-4 w-4" />
                      <span className="relative">Validate My Idea</span>
                    </Link>
                  </Button>
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
    </>
  );
}
